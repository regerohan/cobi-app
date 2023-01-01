"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, scriptService, bucketService) {
        this.route = route;
        this.scriptService = scriptService;
        this.bucketService = bucketService;
        this.bellRingingValues = [];
        this.ridingDurationValues = [];
        this.averageSpeedValues = [];
        this.speedValues = [];
        this.userPowerValues = [];
        this.stateValues = [];
        this.cadenceValues = [];
        this.heartRateValues = [];
        this.ambientLightValues = [];
        this.mobileLatitudeValues = [];
        this.mobileLongitudeValues = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, i;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // look up the params
                        this.route.queryParams
                            .subscribe(function (params) {
                            // Sometimes for simplicity you might decide to refresh
                            // the whole page after an action you can use success/error
                            // to keep the user informed via toast notification.
                            if (params.success !== undefined) {
                                _this.bucketService.toast(params.success, 'success');
                            }
                            else if (params.error !== undefined) {
                                _this.bucketService.toast(params.error, 'danger');
                            }
                        });
                        _a = this;
                        return [4 /*yield*/, this.getOrInitialiseCobiThing()];
                    case 1:
                        _a.cobiThing = _b.sent();
                        console.log(this.cobiThing);
                        for (i = 0; i < this.cobiThing.properties.length; i++) {
                            switch (this.cobiThing.properties[i].type.id) {
                                case 'Riding_Duration':
                                    this.ridingDurationProperty = this.cobiThing.properties[i];
                                    break;
                                case 'SPEED':
                                    this.speedProperty = this.cobiThing.properties[i];
                                    break;
                                case 'TORQUE':
                                    this.userPowerProperty = this.cobiThing.properties[i];
                                    break;
                                case 'STATE':
                                    this.stateProperty = this.cobiThing.properties[i];
                                    break;
                                case 'CADENCE':
                                    this.cadenceProperty = this.cobiThing.properties[i];
                                    break;
                                case 'average_speed':
                                    this.averageSpeedProperty = this.cobiThing.properties[i];
                                    break;
                                case 'HEART_RATE':
                                    this.heartRateProperty = this.cobiThing.properties[i];
                                    break;
                                case 'bell_ringing':
                                    this.bellRingingProperty = this.cobiThing.properties[i];
                                    break;
                                case 'ambient_light':
                                    this.ambientLightProperty = this.cobiThing.properties[i];
                                    break;
                                case 'mobile_location':
                                    this.mobileLatitudeProperty = this.cobiThing.properties[i];
                                    break;
                            }
                            ;
                        }
                        ;
                        this.scriptService.load('cobi').then(function () {
                            COBI.init('token');
                            setInterval(_this.sendDataToBucket.bind(_this), 5000);
                            var durationElem = document.getElementById('duration');
                            durationElem.innerHTML = '-';
                            COBI.tourService.ridingDuration.subscribe(function (duration) {
                                durationElem.innerHTML = duration.toFixed(2);
                                _this.ridingDurationValues.push([Date.now(), duration]);
                            });
                            var averageSpeedElem = document.getElementById('averageSpeed');
                            averageSpeedElem.innerHTML = '-';
                            COBI.tourService.averageSpeed.subscribe(function (average_speed) {
                                averageSpeedElem.innerHTML = average_speed.toFixed(2);
                                _this.averageSpeedValues.push([Date.now(), average_speed]);
                            });
                            var speedElem = document.getElementById('speed');
                            speedElem.innerHTML = '-';
                            COBI.rideService.speed.subscribe(function (speed) {
                                speedElem.innerHTML = speed.toFixed(2);
                                _this.speedValues.push([Date.now(), speed]);
                            });
                            var userPowerElem = document.getElementById('user-power');
                            userPowerElem.innerHTML = '-';
                            COBI.rideService.userPower.subscribe(function (userPower) {
                                userPowerElem.innerHTML = userPower.toFixed(2);
                                _this.userPowerValues.push([Date.now(), userPower]);
                            });
                            // use thumb controller (press SELECT once) to log events
                            var stateElem = document.getElementById('state');
                            stateElem.innerHTML = '-';
                            var originalBackgroundColor = stateElem.style.backgroundColor;
                            COBI.hub.externalInterfaceAction.subscribe(function (action) {
                                if (action = 'SELECT') {
                                    _this.stateValues.push([Date.now(), 1]);
                                    stateElem.innerHTML = action;
                                    stateElem.style.backgroundColor = 'red';
                                    stateElem.innerHTML = 'pressed';
                                    setTimeout(function () {
                                        stateElem.innerHTML = '-';
                                        stateElem.style.backgroundColor = originalBackgroundColor;
                                    }, 300);
                                }
                                ;
                            });
                            var bellRingingElem = document.getElementById('bell-ringing');
                            bellRingingElem.innerHTML = '-';
                            COBI.hub.bellRinging.subscribe(function (bellRinging) {
                                if (bellRinging = 'SELECT') { //not sure what does bellRinging return
                                    _this.bellRingingValues.push([Date.now(), 1]);
                                    bellRingingElem.innerHTML = 'pressed';
                                    bellRingingElem.style.backgroundColor = 'red';
                                    setTimeout(function () {
                                        bellRingingElem.innerHTML = '-';
                                        bellRingingElem.style.backgroundColor = originalBackgroundColor;
                                    }, 300);
                                }
                                ;
                                //    bellRingingElem.innerHTML = bellRinging.toFixed(2);
                                //    this.bellRingingValues.push([Date.now(), bellRinging]);
                            });
                            var cadenceElem = document.getElementById('cadence');
                            cadenceElem.innerHTML = '-';
                            COBI.rideService.cadence.subscribe(function (cadence) {
                                cadenceElem.innerHTML = cadence.toFixed(2);
                                _this.cadenceValues.push([Date.now(), cadence]);
                            });
                            var heartRateElem = document.getElementById('heart-rate');
                            heartRateElem.innerHTML = '-';
                            COBI.rideService.heartRate.subscribe(function (heartRate) {
                                heartRateElem.innerHTML = heartRate.toFixed(2);
                                _this.heartRateValues.push([Date.now(), heartRate, 0]);
                            });
                            var ambientLightElem = document.getElementById('ambient-light');
                            ambientLightElem.innerHTML = '-';
                            COBI.hub.ambientLightState.subscribe(function (ambientLight) {
                                ambientLightElem.innerHTML = ambientLight.toFixed(2);
                                _this.ambientLightValues.push([Date.now(), ambientLight]);
                            });
                            var mobileLatitudeElem = document.getElementById('mobile-latitude');
                            mobileLatitudeElem.innerHTML = '-';
                            COBI.mobile.location.subscribe(function (value) {
                                var mobileLatitude = value.coordinate.latitude;
                                mobileLatitudeElem.innerHTML = mobileLatitude.toFixed(8);
                                _this.mobileLatitudeValues.push([Date.now(), mobileLatitude]);
                            });
                            var mobileLongitudeElem = document.getElementById('mobile-longitude');
                            mobileLongitudeElem.innerHTML = '-';
                            COBI.mobile.location.subscribe(function (value) {
                                var mobileLongitude = value.coordinate.longitude;
                                mobileLongitudeElem.innerHTML = mobileLongitude.toFixed(8);
                                _this.mobileLongitudeValues.push([Date.now(), mobileLongitude]);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * Search for a Thing of type COBI and create it if necessary.
     * Check that the relevant properties are available in the Thing,
     * and create the properties when necessary.
     */
    DashboardComponent.prototype.getOrInitialiseCobiThing = function () {
        return __awaiter(this, void 0, Promise, function () {
            var things, cobiThing, i, thingToCreate, propertyIDs, i, found, j, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.bucketService.find()];
                    case 1:
                        things = _c.sent();
                        for (i = 0; i < things.length; i++) {
                            if (things[i].type === 'COBI') {
                                cobiThing = things[i];
                            }
                        }
                        if (!(cobiThing === undefined)) return [3 /*break*/, 3];
                        thingToCreate = {
                            name: 'Cobi',
                            description: 'Cobi Thing',
                            type: 'COBI'
                        };
                        return [4 /*yield*/, this.bucketService.createThing(thingToCreate)];
                    case 2:
                        cobiThing = _c.sent();
                        _c.label = 3;
                    case 3:
                        // If no attribute 'properties', init with empty array
                        if (cobiThing.properties === undefined) {
                            cobiThing.properties = [];
                        }
                        propertyIDs = ['SPEED', 'TORQUE', 'STATE', 'CADENCE', 'HEART_RATE'];
                        i = 0;
                        _c.label = 4;
                    case 4:
                        if (!(i < propertyIDs.length)) return [3 /*break*/, 7];
                        found = false;
                        for (j = 0; j < cobiThing.properties.length; j++) {
                            if (cobiThing.properties[j].type.id === propertyIDs[i]) {
                                found = true;
                            }
                        }
                        if (!!found) return [3 /*break*/, 6];
                        _b = (_a = cobiThing.properties).push;
                        return [4 /*yield*/, this.bucketService.createProperty(cobiThing.id, { typeId: propertyIDs[i] })];
                    case 5:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 4];
                    case 7: 
                    // return the COBI Thing with the necessary properties.
                    return [2 /*return*/, Promise.resolve(cobiThing)];
                }
            });
        });
    };
    DashboardComponent.prototype.sendDataToBucket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.speedValues.length > 0) {
                    this.speedProperty.values = this.speedValues.slice();
                    this.speedValues = [];
                    this.bucketService.updatePropertyValues(this.cobiThing.id, this.speedProperty);
                }
                if (this.userPowerValues.length > 0) {
                    this.userPowerProperty.values = this.userPowerValues.slice();
                    this.userPowerValues = [];
                    this.bucketService.updatePropertyValues(this.cobiThing.id, this.userPowerProperty);
                }
                if (this.stateValues.length > 0) {
                    this.stateProperty.values = this.stateValues.slice();
                    this.stateValues = [];
                    this.bucketService.updatePropertyValues(this.cobiThing.id, this.stateProperty);
                }
                if (this.cadenceValues.length > 0) {
                    this.cadenceProperty.values = this.cadenceValues.slice();
                    this.cadenceValues = [];
                    this.bucketService.updatePropertyValues(this.cobiThing.id, this.cadenceProperty);
                }
                if (this.heartRateValues.length > 0) {
                    this.heartRateProperty.values = this.heartRateValues.slice();
                    this.heartRateValues = [];
                    this.bucketService.updatePropertyValues(this.cobiThing.id, this.heartRateProperty);
                }
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard-cmp',
            moduleId: module.id,
            templateUrl: 'dashboard.component.html'
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
