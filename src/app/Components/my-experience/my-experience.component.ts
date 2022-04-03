import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.scss']
})
export class MyExperienceComponent implements OnInit {

  constructor() { }

  //decidio
  fontenddec = ['Javascript','Lightening Components']
  backenddec = ['C#','REST API','.NET','.NET Core'];
  techdec = ['Jira', 'GIT','Microservices', 'Salesforce'];


  //betSDE1
  backendbet = ['C#','REST API','.NET','.NET Core'];
  frontenbet = ['Angular','Typescript','Javascript', 'Knockout Js'];
  dbbet = ['MSSQL', 'T-SQL', 'Elasticsearch'];
  techbet = ['GIT','Azure Devops','Docker', 'RabbitMQ', 'Microservices'];

  //grad
  backendGrad = ['C#','REST API','.NET','.NET Core'];
  frontenGrad = ['Angular','Typescript'];
  dbGrad = ['T-SQL']


  ngOnInit(): void {
  }


}
