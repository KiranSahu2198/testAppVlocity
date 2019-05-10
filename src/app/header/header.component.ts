import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  people:any;
  name:string;
  //filteredItems:any;
  //items:any;
  constructor(private persions: ServiceService) { }

  ngOnInit() {
    this.persions.getData()
      .subscribe(res => {
        this.people = res["People"];
        console.log(this.people);
      });
  }

  /* assignCopy(){
    this.filteredItems = Object.assign([], this.items);
 }
 filterItem(value){
    if(!value){
        this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.items).filter(
       item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 } */
 //this.assignCopy();//when you fetch collection from server.

}
