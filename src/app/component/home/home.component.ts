import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "My Home"
  number: number = 0
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleIncrement() {
    // @ts-ignore
    this.number += 1
  }


  toggleDecrement() {
    this.number -= 1
  }
}
