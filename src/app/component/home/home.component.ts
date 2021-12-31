import {newArray} from '@angular/compiler/src/util';
import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // attributes
  title: string = "My Home"
  number: number = 0
  StudentName: String;
  checked:boolean
  private routeSub: Subscription;

  // object similar to JSON object
  newObject = {
    firstName: "Sonal",
    lastName: "Jayawardana",
    userProfile : "https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png"
  }
  newObject1 = {
    firstName: "Sonal",
    lastName: "Jayawardana",
    userProfile : "https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png"
  }
  newObject2 = {
    firstName: "Sonal",
    lastName: "Jayawardana",
    userProfile : "https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png"
  }

  newStudentArray = [{
    firstName: "Sonal0",
    lastName: "Jayawardana0",
    userProfile : "https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png"
  },{
    firstName: "Sonal1",
    lastName: "Jayawardana1",
    userProfile : "https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png"
  },{
    firstName: "Sonal2",
    lastName: "Jayawardana2",
    userProfile : "https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png"
  }]
  // array
  newArray = ["Apple", "Orange", "Pineapple", "Mango"]

  // newArray = false
  StudentAge:String;
  StudentGender:String;

  constructor(private route: ActivatedRoute,private  router:Router) {
    this.StudentName = "Animal"
    this.checked = true
    this.StudentAge = ""
    this.StudentGender = ""
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    });



  }

  ngOnInit(): void {

  }
  // unsubscribing the router
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  toggleIncrement() {
    this.number += 1
    this.checked = false

    let newStudent = {
      StudentName: this.StudentName,
      StudentAge : this.StudentAge,
      StudentGender: this.StudentGender
    }
    console.log(newStudent)


  }


  toggleDecrement() {
    // this.number -= 1
    // this.checked = true
    this.router.navigate([`/Home/${this.title}`]).then(r => {});
  }
}
