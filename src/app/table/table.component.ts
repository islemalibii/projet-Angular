import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  show!:boolean;
  constructor (public serve:ServiceService){}

  ngOnInit(){
    this.serve.disactivate = true;
  }

  showme(){
    this.show = true;
  }

}
