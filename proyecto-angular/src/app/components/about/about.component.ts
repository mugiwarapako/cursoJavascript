import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email:string;

  constructor() {
    this.title = "Francisco Diaz";
    this.subtitle = "Desarrillador web y formador";
    this.email = "pakodiazcastillo@gmail.com";
  }

  ngOnInit() {
  }

}
