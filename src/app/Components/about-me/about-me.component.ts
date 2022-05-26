import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import net from 'vanta/dist/vanta.net.min.js'
declare var anime: any;
@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('vanta', { static: true }) vantaEl: ElementRef; 
  effect : any;

  ngAfterViewInit(): void {
    // const textWrapper = document.querySelector('.summary');
    // textWrapper.innerHTML =
    // textWrapper.textContent.replace(/\s/g,"");

    net({
      el: this.vantaEl.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })

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
