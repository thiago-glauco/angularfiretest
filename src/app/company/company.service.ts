import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
export class CompanyService {
  company$: AngularFireObject<any>;

  constructor( private db: AngularFireDatabase ) { 
    this.company$ = db.object('company');
  }

  saveCompany( company ) {
    this.company$.set(company);
  }
  getCompany(): Observable<any> {
    return this.company$.valueChanges();
  }


}