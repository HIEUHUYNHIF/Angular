import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  //constructor{} and ngOnIt{}
  constructor() { 

  }
  ngOnInit(): void {
  }

//property
images = [
  { path:'day1' ,  src:'assets/images/day1/day1.png'},
  { path:'day2' ,  src:'assets/images/day2/day2.png'},
  { path:'day3' ,  src:'assets/images/day3/day3.png'},
  { path:'day4' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day5' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day6' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day7' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day8' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day9' ,  src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day10' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day11' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day12' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day13' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day14' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day15' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day16' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day17' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day18' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day19' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day20' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day21' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day22' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day23' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day24' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day25' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day26' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day27' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day28' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day29' , src:'assets/images/day1/Nike Zoom KD 12.png'},
  { path:'day30' , src:'assets/images/day1/Nike Zoom KD 12.png'},
];
// method
scrollView(target:any):void{
  setTimeout(() => {
    target.scrollIntoView({behavior:"smooth"});
  }, 100);
}
//slideShow
imageLength:number = this.images.length;
imageCurrent:number = 0;
intervalImg:any;
  //changeSlide
enableImg():void{
    let img = document.getElementsByClassName("image")[this.imageCurrent-1];
    img.className = img.className.replace("image-disable-left" , "image-enable");
    if(this.imageCurrent < 4){
      let dot = document.getElementsByClassName("dot")[this.imageCurrent - 1];
      dot.className = dot.className.replace("dotDisable","dotEnable");
    }
    else if(this.imageCurrent == 4){
      let dot = document.getElementsByClassName("dot");
      dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
      dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
      dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
      dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
      dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotHiddenR","dotSR");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

    }
    else if(this.imageCurrent == 5){
      let dot = document.getElementsByClassName("dot");
      dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
      dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
      dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
      dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
      dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
      dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotHiddenR","dotSR");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

    }
    else if(this.imageCurrent > 5 && this.imageCurrent < (this.imageLength - 1)){
      let dot = document.getElementsByClassName("dot");
      dot[this.imageCurrent - 6].className = dot[this.imageCurrent - 6].className.replace("dotSL","dotHiddenL");
      dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
      dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
      dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
      dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
      dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
      dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotHiddenR","dotSR");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

    }
    else if(this.imageCurrent == (this.imageLength - 1)){
      let dot = document.getElementsByClassName("dot");
      dot[this.imageCurrent - 6].className = dot[this.imageCurrent - 6].className.replace("dotSL","dotHiddenL");
      dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
      dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
      dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
      dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
      dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

    }
    else{
      let dot = document.getElementsByClassName("dot");
      dot[this.imageCurrent - 6].className = dot[this.imageCurrent - 6].className.replace("dotSL","dotHiddenL");
      dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
      dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
      dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
      dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
      dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

    }

}
disableImg():void{
      if(this.imageCurrent > 0){
        let img = document.getElementsByClassName("image")[this.imageCurrent-1];
          img.className = img.className.replace("image-enable" , "image-disable-right");
        let dot = document.getElementsByClassName("dot")[this.imageCurrent-1];
          dot.className = dot.className.replace("dotEnable","dotDisable");
        if(this.imageCurrent == this.imageLength)
        {
          this.imageCurrent = 0;
          setTimeout(() => {
            for (let index = 0; index < this.imageLength; index++) {
              this.setDot();
              let img = document.getElementsByClassName("image")[index];
              img.className = img.className.replace("image-disable-right", "image-disable-left");
            }
          }, 260);
        }
      }
}

setDot():void{
  if(this.imageLength <= 5)
  {
    for (let index = 0; index < this.imageLength; index++) {
      let dot = document.getElementsByClassName("dot")[index];
      switch(index){
        case 0: dot.className = "dot dotDisable dotLL" ;
          break;
        case 1: dot.className = "dot dotDisable dotL";
          break;
        case 2: dot.className = "dot dotDisable dotLR";
          break;
        case 3: dot.className = "dot dotDisable dotLR1";
          break;
        case 4: dot.className = "dot dotDisable dotLR2";
      }
    }
  }
  else{
    for (let index = 0; index < this.imageLength; index++) {
      let dot = document.getElementsByClassName("dot")[index];
    switch(index){
      case 0: dot.className = "dot dotDisable dotLL";
        break;
      case 1: dot.className = "dot dotDisable dotL";
        break;
      case 2: dot.className = "dot dotDisable dotLR";
        break;
      case 3: dot.className = "dot dotDisable dotMR";
        break;
      case 4: dot.className = "dot dotDisable dotSR";
      break;
      default: dot.className = "dot dotDisable dotHiddenR";
    }
    }
  }
}

changeSlide():void{
  this.disableImg();
  this.imageCurrent++;
  if(this.imageCurrent != 1)
  {
    setTimeout(() => {
      this.enableImg();
    }, 300);
  }
  else
  {
    setTimeout(() => {
      this.enableImg();
    }, 500);
  }

}
autoChangeslide():void{
    this.intervalImg = setInterval(() => {
      this.changeSlide();
    }, 5000);
}
stopChangeslide():void{
  clearInterval(this.intervalImg);
}

  //click next and prevous
clickNext():void{
  this.stopChangeslide();
  if(this.imageCurrent < this.imageLength)
  {
    if(this.imageCurrent > 0)
    {
    let img = document.getElementsByClassName("image")[this.imageCurrent-1];
        img.className = img.className.replace("image-enable" , "image-disable-right");
    let dot = document.getElementsByClassName("dot")[this.imageCurrent-1];
        dot.className = dot.className.replace("dotEnable","dotDisable");
    }
    this.imageCurrent++ ;
    let img = document.getElementsByClassName("image")[this.imageCurrent-1];
        img.className = img.className.replace("image-disable-left" , "image-enable");
    
        if(this.imageCurrent < 4){
          let dot = document.getElementsByClassName("dot")[this.imageCurrent - 1];
          dot.className = dot.className.replace("dotDisable","dotEnable");
        }
        else if(this.imageCurrent == 4){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotHiddenR","dotSR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else if(this.imageCurrent == 5){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
          dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotHiddenR","dotSR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else if(this.imageCurrent > 5 && this.imageCurrent < (this.imageLength - 1)){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 6].className = dot[this.imageCurrent - 6].className.replace("dotSL","dotHiddenL");
          dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
          dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotHiddenR","dotSR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else if(this.imageCurrent == (this.imageLength - 1)){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 6].className = dot[this.imageCurrent - 6].className.replace("dotSL","dotHiddenL");
          dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
          dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotSR","dotMR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else{
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 6].className = dot[this.imageCurrent - 6].className.replace("dotSL","dotHiddenL");
          dot[this.imageCurrent - 5].className = dot[this.imageCurrent - 5].className.replace("dotML","dotSL");
          dot[this.imageCurrent - 4].className = dot[this.imageCurrent - 4].className.replace("dotLL","dotML");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotL","dotLL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotLR","dotL");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotMR","dotLR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
  }
  setTimeout(() => {
    this.autoChangeslide();
  }, 100);
}
clickPrev():void{
  this.stopChangeslide();
  if(this.imageCurrent > 1)
  {
    if(this.imageCurrent > 0)
    {
    let img = document.getElementsByClassName("image")[this.imageCurrent - 1];
        img.className = img.className.replace("image-enable" , "image-disable-left");
    let dot = document.getElementsByClassName("dot")[this.imageCurrent - 1];
        dot.className = dot.className.replace("dotEnable","dotDisable");
    }
    this.imageCurrent-- ;
    let img = document.getElementsByClassName("image")[this.imageCurrent - 1];
        img.className = img.className.replace("image-disable-right" , "image-enable");

        if(this.imageCurrent > (this.imageLength - 3)){
          let dot = document.getElementsByClassName("dot")[this.imageCurrent - 1];
          dot.className = dot.className.replace("dotDisable","dotEnable");
        }
        else if(this.imageCurrent == (this.imageLength - 3)){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotHiddenL","dotSL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotSL","dotML");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotML","dotLL");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotLL","dotL");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotL","dotLR");
          dot[this.imageCurrent + 2].className = dot[this.imageCurrent + 2].className.replace("dotLR","dotMR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else if(this.imageCurrent == (this.imageLength - 4)){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotHiddenL","dotSL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotSL","dotML");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotML","dotLL");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotLL","dotL");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotL","dotLR");
          dot[this.imageCurrent + 2].className = dot[this.imageCurrent + 2].className.replace("dotLR","dotMR");
          dot[this.imageCurrent + 3].className = dot[this.imageCurrent + 3].className.replace("dotMR","dotSR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else if(this.imageCurrent > 2 && this.imageCurrent < (this.imageLength - 4)){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 3].className = dot[this.imageCurrent - 3].className.replace("dotHiddenL","dotSL");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotSL","dotML");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotML","dotLL");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotLL","dotL");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotL","dotLR");
          dot[this.imageCurrent + 2].className = dot[this.imageCurrent + 2].className.replace("dotLR","dotMR");
          dot[this.imageCurrent + 3].className = dot[this.imageCurrent + 3].className.replace("dotMR","dotSR");
          dot[this.imageCurrent + 4].className = dot[this.imageCurrent + 4].className.replace("dotSR","dotHiddenR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else if(this.imageCurrent == 2){
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 2].className = dot[this.imageCurrent - 2].className.replace("dotSL","dotML");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotML","dotLL");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotLL","dotL");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotL","dotLR");
          dot[this.imageCurrent + 2].className = dot[this.imageCurrent + 2].className.replace("dotLR","dotMR");
          dot[this.imageCurrent + 3].className = dot[this.imageCurrent + 3].className.replace("dotMR","dotSR");
          dot[this.imageCurrent + 4].className = dot[this.imageCurrent + 4].className.replace("dotSR","dotHiddenR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
        else{
          
          let dot = document.getElementsByClassName("dot");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotML","dotLL");
          dot[this.imageCurrent    ].className = dot[this.imageCurrent    ].className.replace("dotLL","dotL");
          dot[this.imageCurrent + 1].className = dot[this.imageCurrent + 1].className.replace("dotL","dotLR");
          dot[this.imageCurrent + 2].className = dot[this.imageCurrent + 2].className.replace("dotLR","dotMR");
          dot[this.imageCurrent + 3].className = dot[this.imageCurrent + 3].className.replace("dotMR","dotSR");
          dot[this.imageCurrent + 4].className = dot[this.imageCurrent + 4].className.replace("dotSR","dotHiddenR");
          dot[this.imageCurrent - 1].className = dot[this.imageCurrent - 1].className.replace("dotDisable","dotEnable");

        }
  }
  setTimeout(() => {
    this.autoChangeslide();
  }, 100);
}
//
}