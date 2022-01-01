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
  constructor(studentService: StudentService) {
    this.studentService = studentService
  }

  ngOnInit(): void {
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
