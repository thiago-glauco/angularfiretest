import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})

export class CompanyEditComponent implements OnInit {
  company$: Observable<any>;
  companyValues: Observable<any>;

  constructor(
      private companyService: CompanyService
    ) { 
      
    }

  saveCompany( company ) {
    this.companyService.saveCompany( company );
  }

  editCompany( company ) {
    this.companyService.editCompany( company );
  }  

  removeCompany( company ) {
    this.companyService.removeCompany( company );
  }  

  ngOnInit() {
    this.company$ = this.companyService.getCompany();
    console.log(this.company$);
  }

}