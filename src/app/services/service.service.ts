import { Injectable } from '@angular/core';
import { Person } from '../models/person-model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private person1: Person = {
    id: 1,
    name: 'Saroj Swain',
    company: 'Capgemini',
    salary: 30000,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book `
  };

  private person2: Person = {
    id: 2,
    name: 'Nagarajan Sathyaselan',
    company: 'Capgemini',
    salary: 80000,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book `
  };
  private person3: Person = {
    id: 3,
    name: 'Nijanthan S',
    company: 'Capgemini',
    salary: 20000,
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book `
  };

  constructor( private storage: Storage ) { }

  addItem() {
     this.storage.set('1', this.person1)
         .then(() => {
           console.log();
          }).catch((error) => {
           console.log(error);
          });
     this.storage.set('2', this.person2)
         .then(() => {
           console.log();
          }).catch((error) => {
           console.log(error);
          });
     this.storage.set('3', this.person3)
         .then(() => {
           console.log();
          }).catch((error) => {
           console.log(error);
          });
  }

  getItem(id: string) {
     return this.storage.get(id);
  }

}
