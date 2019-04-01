import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonDeatilsPage } from './person-deatils.page';

const routes: Routes = [
  {
    path: '',
    component: PersonDeatilsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonDeatilsPage]
})
export class PersonDeatilsPageModule {}
