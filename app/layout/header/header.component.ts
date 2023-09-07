import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDrawerOpen=false;
  @Output() menuClickEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private route:Router){}

  logOut(){
    
      localStorage.removeItem('token')
      this.route.navigate(['/dashBoard'],{replaceUrl:true});
    
  }
  menuClick(){  
    this.isDrawerOpen=!this.isDrawerOpen;
    this.menuClickEvent.emit(this.isDrawerOpen);  
  }

}
