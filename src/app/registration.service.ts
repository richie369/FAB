import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registration: AngularFirestoreCollection<any>
  constructor(private afs: AngularFirestore) { 
    this.registration = afs.collection<any>('registrations');
  }

  addItem(item: any) {
   return this.registration.add(item);
  }
}
