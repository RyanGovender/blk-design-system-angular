import { AfterViewInit, Component, OnInit } from "@angular/core";
declare var anime: any;

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    // const textWrapper = document.querySelector('.summary');
    // textWrapper.innerHTML =
    // textWrapper.textContent.replace(/\s/g,"");

    anime
      .timeline({ loop: false })
      .add({
        targets: ".summary",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".summary",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }
}
