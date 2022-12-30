import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.css']
})
export class MyAppComponent implements OnInit {

  ngOnInit() {
    console.debug("Init MyApp Component.");
  }
}
