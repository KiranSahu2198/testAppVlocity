import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  people:any;

  constructor(private persions: ServiceService) { }

  ngOnInit() {
    this.persions.getData()
      .subscribe(res => {
        this.people = res["People"];
        console.log(res);
      });
  }

}
