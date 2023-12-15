import { Component,OnInit,OnDestroy,EventEmitter,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedLanguage: string = 'en'; 

  changeLanguage(){};
  constructor (){};
  ngOnInit () : void{
    console.log(" Oninit activated");
  }
  ngOnDestroy (){}


}
