import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();
  @Output() btnClick2 = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onClickBtn1() {
    this.btnClick.emit();
  }

  onClickBtn2(){
    this.btnClick2.emit();
  }

}
