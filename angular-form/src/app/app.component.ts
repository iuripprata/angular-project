import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/public_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items$ = this.firestore.collection('items').valueChanges();

  constructor(private firestore: AngularFirestore) {}
}