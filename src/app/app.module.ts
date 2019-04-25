import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase Imports
import { AngularFireModule,  } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//Material Design and Flex-Layout Imports:
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatCardModule} from '@angular/material/card';


//Routing
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CompanyService } from './company/company.service';

import { CompanyEditComponent } from './company/company-edit/company-edit.component';


const firebaseConfig = {
  apiKey: "AIzaSyCRYRB51xapHQAdN2FwkDZAZBbeYVx7MIc",
  authDomain: "angularfiretest-dccb1.firebaseapp.com",
  databaseURL: "https://angularfiretest-dccb1.firebaseio.com",
  projectId: "angularfiretest-dccb1",
  storageBucket: "angularfiretest-dccb1.appspot.com",
  messagingSenderId: "1091953475288"
};

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule
    ],
  declarations: [AppComponent, HelloComponent, CompanyEditComponent],
  bootstrap: [AppComponent],
  providers: [CompanyService]
})
export class AppModule { }
