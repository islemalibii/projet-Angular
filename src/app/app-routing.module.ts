import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from "./Home/display.component";
import { TableComponent } from "./table/table.component";
import { DeliveryComponent } from "./delivery/delivery.component";
import { FactureComponent } from "./facture/facture.component";

const routes: Routes = [
  {path: 'delivery', component:DeliveryComponent},
  {path: 'table', component:TableComponent},
  {path: '', component:DisplayComponent},
  {path: 'display', component:DisplayComponent},
  {path: 'facture', component:FactureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
