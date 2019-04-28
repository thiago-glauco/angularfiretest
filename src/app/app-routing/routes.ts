import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {CompanyListComponent } from '../company/company-list/company-list.component';
import {CompanyEditComponent } from '../company/company-edit/company-edit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'company-list'},
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-edit', component: CompanyEditComponent },
  { path: 'company-edit/:id', component: CompanyEditComponent },
]