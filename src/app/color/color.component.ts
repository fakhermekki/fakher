import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  Color = 'red';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(inputColor: any){
    this.Color = inputColor.value;
    inputColor.value ='';    
  }


  processReq(message: any){
    alert (message);
  }

}
