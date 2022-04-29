
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property, Thing } from '@datacentricdesign/types';
import { BucketService } from '../services/bucket.service';
import { ScriptService } from '../services/script.service';

declare let COBI: any;

@Component({
    selector: 'app-dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    private cobiThing: Thing;

    private speedProperty: Property;
    private userPowerProperty: Property;

    private speedValues: number[][] = [];
    private userPowerValues: number[][] = [];

    constructor(private route: ActivatedRoute,
        private scriptService: ScriptService,
        private bucketService: BucketService) {

    }

    async ngOnInit() {
        // look up the params
        this.route.queryParams
            .subscribe(params => {
                // Sometimes for simplicity you might decide to refresh
                // the whole page after an action you can use success/error
                // to keep the user informed via toast notification.
                if (params.success !== undefined) {
                    this.bucketService.toast(params.success, 'success')
                } else if (params.error !== undefined) {
                    this.bucketService.toast(params.error, 'danger')
                }
            }
            );

        this.cobiThing = await this.getOrInitialiseCobiThing();
        console.log(this.cobiThing)
        for (let i = 0; i < this.cobiThing.properties.length; i++) {
            switch (this.cobiThing.properties[i].type.id) {
                case 'SPEED':
                    this.speedProperty = this.cobiThing.properties[i];
                    break;
                case 'TORQUE':
                    this.userPowerProperty = this.cobiThing.properties[i];
            }
        }

        this.scriptService.load('cobi').then(() => {
            COBI.init('token')
            setInterval(this.sendDataToBucket.bind(this), 5000)

            const speedElem: HTMLElement = document.getElementById('speed');
            speedElem.innerHTML = '-'
            COBI.rideService.speed.subscribe((speed: number) => {
                speedElem.innerHTML = speed.toFixed(2);
                this.speedValues.push([Date.now(), speed]);
            });

            const userPowerElem: HTMLElement = document.getElementById('user-power');
            userPowerElem.innerHTML = '-'
            COBI.rideService.userPower.subscribe((userPower: number) => {
                userPowerElem.innerHTML = userPower.toFixed(2);
                this.userPowerValues.push([Date.now(), userPower]);
            })
        })
    }

    /**
     * Search for a Thing of type COBI and create it if necessary.
     * Check that the relevant properties are available in the Thing,
     * and create the properties when necessary.
     */
    async getOrInitialiseCobiThing(): Promise<Thing> {
        // Get the list of all things
        const things = await this.bucketService.find();
        // Search for a Thing of type COBI
        let cobiThing: Thing;
        for (let i = 0; i < things.length; i++) {
            if (things[i].type === 'COBI') {
                cobiThing = things[i];
            }
        }
        // If none found, create a Thing
        if (cobiThing === undefined) {
            const thingToCreate = {
                name: 'Cobi',
                description: 'Cobi Thing',
                type: 'COBI'
            }
            cobiThing = await this.bucketService.createThing(thingToCreate)
        }

        // If no attribute 'properties', init with empty array
        if (cobiThing.properties === undefined) {
            cobiThing.properties = []
        }

        // For all necessary property types
        const propertyIDs = ['SPEED', 'TORQUE']
        for (let i = 0; i < propertyIDs.length; i++) {
            // Look for them in the Thing
            let found = false;
            for (let j = 0; j < cobiThing.properties.length; j++) {
                if (cobiThing.properties[j].type.id === propertyIDs[i]) {
                    found = true;
                }
            }
            // Otherwise, create a new property for this type.
            if (!found) {
                cobiThing.properties.push(await this.bucketService.createProperty(cobiThing.id, { typeId: propertyIDs[i] }))
            }
        }
        // return the COBI Thing with the necessary properties.
        return Promise.resolve(cobiThing)
    }

    async sendDataToBucket() {
        if (this.speedValues.length > 0) {
            this.speedProperty.values = this.speedValues.slice()
            this.speedValues = [];
            this.bucketService.updatePropertyValues(this.cobiThing.id, this.speedProperty);
        }
        if (this.userPowerValues.length > 0) {
            this.userPowerProperty.values = this.userPowerValues.slice()
            this.userPowerValues = [];
            this.bucketService.updatePropertyValues(this.cobiThing.id, this.userPowerProperty);
        }
    }

}