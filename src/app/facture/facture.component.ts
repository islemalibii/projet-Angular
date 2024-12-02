import { Component, OnInit} from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit{
  show: boolean = false;

  ngOnInit(): void {
    this.serve.disactivate = true;
  }

  showme()
  {
    this.show = true;
  }
  constructor (public serve:ServiceService){}

  rem(n:number)
  {
    this.serve.s -= this.serve.torder[n].price;
    this.serve.s = +this.serve.s.toFixed(2);
    this.serve.torder.splice(n,1);
  }
  


}
