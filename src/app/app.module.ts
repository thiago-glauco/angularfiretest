import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule,  } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


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
    ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
