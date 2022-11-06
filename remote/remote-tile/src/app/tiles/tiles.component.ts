import {Component, Input, Output, OnInit, ViewChild, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
 // @Input() title='?';
  title:string='title';
//  @Input() id!:string;
//  @Output() selected_color = new EventEmitter<string>();
  @ViewChild('colorInput') colorInput:ElementRef|null=null ;
  selectedColor='';
  colorId:string='colorid';

  constructor() { }
  fetchValue()
  {
    if (this.colorInput)
    {
      let color=this.colorInput.nativeElement.value;
      console.log('color value:' + color);
      console.dir(this.colorInput);
 //     this.selected_color.emit(color);
    }

  }

  ngOnInit(): void {

  }


}
