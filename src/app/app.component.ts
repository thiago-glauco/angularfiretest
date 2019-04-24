import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  itemRef: AngularFireObject<any>;
  items: Observable<any[]>;
  constructor(private fb: AngularFireDatabase) {
    this.itemRef = fb.object('connected');
    console.log(this.itemRef)
    this.items = this.itemRef.valueChanges();
  }
}
