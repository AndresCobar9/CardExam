import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/UsersService';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
  
})
export class CardsComponent implements OnInit {

  constructor(private usera: UsersService){}
  UserT:any;

  ngOnInit(): void {
    this.UserT={}
    this.usera.getUsers().subscribe(
      (res: any) => { this.UserT = res},
      (error) => {
        
      }
    )
    
  }

}
