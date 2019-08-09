import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import {animate, transition, state, trigger, style} from '@angular/animations';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('hover', [
      state('open', style({
        backgroundColor: 'lightgray'
      })),
      state('closed', style({
        backgroundColor: 'lightblue'
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
    ]),
  ]
})
export class ProfileComponent implements OnInit {
  hover = false;
  constructor() { }
  @HostListener('mouseenter') onMouseEnter(){
    this.hover = true;
    console.log('hello');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hover= false;
    console.log('goodbye');
  }


  ngOnInit() {
  }

}