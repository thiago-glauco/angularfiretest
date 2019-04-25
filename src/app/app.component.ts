import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  itemRef: AngularFireObject<any>;
  items: Observable<any[]>;
  item: Boolean;
  constructor(private fb: AngularFireDatabase) { //fb is an angular firebase service
    this.itemRef = fb.object('connected'); //fb.object returns an AngularFireObject that refers to the database
    console.log(this.itemRef) 
    this.items = this.itemRef.valueChanges(); //valueChanges return a promise with the values.
    this.items
    .pipe(
      take( 2 )
    )
    .subscribe(
      (next) => {console.log('next =>', next); this.item = Boolean(next)},
      (error) => {console.log('errors =>', error)},
      ( ) => {console.log('completed')}
    )
  }
}
