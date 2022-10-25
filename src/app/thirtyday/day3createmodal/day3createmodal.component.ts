import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3createmodal',
  templateUrl: './day3createmodal.component.html',
  styleUrls: ['./day3createmodal.component.scss']
})
export class Day3createmodalComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
openModal():void{
  let a = document.getElementsByClassName('modal')[0];
  let b = document.getElementsByClassName('background')[0];

  a.className = a.className.replace(" disable"," enable");  
  b.className = b.className.replace("background","background bgDisable");
}
closeModal():void{
  let a = document.getElementsByClassName('modal')[0];
  let b = document.getElementsByClassName('background')[0];

  a.className = a.className.replace(" enable"," disable");  
  b.className = b.className.replace("background bgDisable","background");
}
}
