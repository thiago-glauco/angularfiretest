import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
export class CompanyService {
  company$: AngularFireObject<any>;
  companies$: AngularFireList<any>;

  constructor( private db: AngularFireDatabase ) { 
    this.company$ = db.object('company');
    this.companies$ = db.list('companies');
  }

  saveCompany( company ) {
    this.company$.set(company);
  }

  editCompany( company ) {
    this.company$.update(company);
  }

  removeCompany( company ) {
    this.company$.remove();
  }

  getCompany(): Observable<any> {
    return this.company$.valueChanges();
  }

  getCompanies(): Observable<any> {
    return this.companies$.valueChanges( );
  }


}