import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-curriculum-section",
  templateUrl: "./home-curriculum-section.component.html",
  styleUrls: ["./home-curriculum-section.component.scss"],
})
export class HomeCurriculumSectionComponent implements OnInit {
  @Input() titleIntro = "";
  @Input() title = "";
  @Input() displayList = [];
  @Input() type = "curriculum";

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    infinite: false,
  };

  constructor() {}

  ngOnInit() {}

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
