import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  constructor(private router: Router, private service: ServiceService) {
    this.service.addItem();
  }

  ngOnInit() {

  }

  onClickPerson(data: string) {
    console.log(data);
    this.router.navigate([`person-deatils/${data}`]);
  }

}
