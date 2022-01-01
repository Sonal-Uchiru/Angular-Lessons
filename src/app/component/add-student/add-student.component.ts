import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {FormControl, NgForm} from "@angular/forms";
import {Student} from "../../model/student.model";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers:[StudentService]
})
export class AddStudentComponent implements OnInit {
  studentService: StudentService;
  studentName = new FormControl('');
  studentAge = new FormControl(0)
  studentGender = new FormControl('')

  mainImage:String =  'https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png'

  studentsArray: any = []
  constructor(studentService: StudentService) {
    this.studentService = studentService
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      result => {
        this.studentsArray = result
      },
      error => {
        console.log(error)
      }
    )
  }

  AddStudent(){

    let newStudent = {
      name : this.studentName.value,
      gender : this.studentGender.value,
      age : this.studentAge.value
    }

    console.log(newStudent)

  this.studentService.postStudent(newStudent).subscribe(
    result => {
      alert("Student added")
    },
    error => {
      console.log(error)
    }
  )
  }

}
