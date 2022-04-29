import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyAppComponent implements OnInit {

  ngOnInit() {
    console.debug("Init MyApp Component.");
  }
}
