import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() photo: any;
  @Input() title:any;
  @Input() first:any;
  @Input() last:any;
  @Input() city:any;
  @Input() state:any;
  @Input() country:any;
  @Input() email:any;
  @Input() age:any;

  constructor() { }

  ngOnInit(): void {
  }

}
