import { Component, } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-navbar-order',
  templateUrl: './navbar-order.component.html',
  styleUrls: ['./navbar-order.component.scss']
})
export class NavbarOrderComponent {
  constructor ( public serve: ServiceService){}
}
