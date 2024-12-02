import { Component } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  constructor (public serve:ServiceService){}
  
}
