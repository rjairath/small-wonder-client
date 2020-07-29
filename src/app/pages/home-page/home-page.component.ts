import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  images = [];

  constructor() {}

  ngOnInit() {
    this.images = [944, 1011, 984].map(
      (n) => `https://picsum.photos/id/${n}/1400/500`
    );
  }
}
