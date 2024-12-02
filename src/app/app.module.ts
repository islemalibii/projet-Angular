import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { StatsComponent } from './stats/stats.component';
import { MenuComponent } from './menu/menu.component';
import { ChefsComponent } from './chefs/chefs.component';
import { DisplayComponent } from './Home/display.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarOrderComponent } from './navbar-order/navbar-order.component';
import { TableComponent } from './table/table.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FactureComponent } from './facture/facture.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    StatsComponent,
    MenuComponent,
    ChefsComponent,
    DisplayComponent,
    ContactComponent,
    NavbarOrderComponent,
    TableComponent,
    DeliveryComponent,
    FactureComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
