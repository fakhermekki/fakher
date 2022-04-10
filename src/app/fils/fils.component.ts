import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty: any;

  @Output() sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('voici le variable color de mon pére', this.filsProperty);
  }

  sendEvent (){
    this.sendRequestToData.emit(
      `event de fils vers pére`
    );
  }

}
