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
  company$: AngularFireObject<any>;

  constructor(
      private companyService: CompanyService
    ) { 
      this.company$ = this.companyService.company$;
    }

  saveCompany( company ) {
    this.companyService.saveCompany( company );
  } 

  ngOnInit() {
  }

}