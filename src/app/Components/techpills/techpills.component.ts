import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techpills',
  templateUrl: './techpills.component.html',
  styleUrls: ['./techpills.component.scss']
})
export class TechpillsComponent implements OnInit {

  @Input() techArray : string[];
  @Input() type : String;

  colorType: string;

  constructor() { }

  ngOnInit(): void {
    this.colorType = this.getType();
  }

  getType() : string{
    switch(this.type){
      case 'backend':
        return 'primary';
      case 'frontend':
        return 'info';
      case 'db':
        return 'success';
      case 'tech':
        return 'danger'
        default:
        return 'primary';
    }
  }

}
