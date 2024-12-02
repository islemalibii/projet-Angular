import { Injectable } from '@angular/core';
import { table } from "../table";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private dataUrl = './assets/db.json';

  constructor(private http: HttpClient){}

  getData(): Observable<any[]>{
    return this.http.get<any[]>(this.dataUrl);
  }

  disactivate: boolean = true;
  n=0;
  user !: string;
  s : number = 0;

  ttable: table[] = [];
  tfood : any[] = [];
  torder: any [] = [];

  
  tt: table = {
    name: '',
    mail: '',
    phone: '',
    date: '',
    time: '',
    nbp : 0
  };

  add_table()
  {
    if (this.n==0)
    {
      this.ttable.push({...this.tt});
      this.tt={name: '', mail: '', phone: '',date: '', time: '', nbp: 0};
    }
    this.n=1;
  }

  add_food(n:number){
    this.tfood[n].user = this.user;
    this.torder.push(this.tfood[n]);
    this.s += this.tfood[n].price;
  }
}
