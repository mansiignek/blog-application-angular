import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isShow=false;
  constructor(router:Router){
  
  }
  menuClick(isShow:boolean){
    this.isShow=isShow;
  }
}
