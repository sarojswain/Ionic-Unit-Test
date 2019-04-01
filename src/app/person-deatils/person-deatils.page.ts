import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Person } from '../models/person-model';

@Component({
  selector: 'app-person-deatils',
  templateUrl: './person-deatils.page.html',
  styleUrls: ['./person-deatils.page.scss'],
})
export class PersonDeatilsPage implements OnInit {

  id;
  personObj: Person;
  constructor( private route: ActivatedRoute, private service: ServiceService ) { }

  ngOnInit() {
    this.route.params
        .subscribe((params: Params) => {
           this.id = params['id'];
        });

    console.log(this.id);
   
    this.service.getItem(this.id)   
          .then(res => {
            this.personObj = res
            console.log(this.personObj); 
          });
        
  }

}
