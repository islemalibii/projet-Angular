import { Component, OnInit} from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit{

  constructor (public serve:ServiceService){}

  ngOnInit(){
    this.serve.disactivate = false;
    this.serve.getData().subscribe(data => {this.serve.tfood = data;});
  }

}
