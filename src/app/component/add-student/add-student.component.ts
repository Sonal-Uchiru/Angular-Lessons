import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {FormControl, NgForm} from "@angular/forms";
import {Student} from "../../model/student.model";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [StudentService]
})
export class AddStudentComponent implements OnInit {
  studentService: StudentService;
  studentName = new FormControl('');
  studentAge = new FormControl(0)
  studentGender = new FormControl('')

  mainImage: String = 'https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png'

  studentsArray: any = []
  originalStudentArray: any = []
  selectedStudentID: String = ""
  searchResult: String = "";

  constructor(studentService: StudentService) {
    this.studentService = studentService
  }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.studentService.getStudents().subscribe({
      next:value=>
    {
      this.studentsArray = value
      this.originalStudentArray = value
    }
  ,
    error:error => {
      console.log(error)
    }
  } )
  }

  AddStudent() {

    let newStudent = {
      name: this.studentName.value,
      gender: this.studentGender.value,
      age: this.studentAge.value
    }

    console.log(newStudent)

    this.studentService.postStudent(newStudent).subscribe({
      next: value => {
        alert("student added")
        this.getStudents()
      },
      error: error => {
        console.log(error)
      }
    })
  }

  selectStudent(index: Number) {
    // @ts-ignore
    let selectedStudent = this.studentsArray[index]
    // console.log(selectedStudent)
    this.studentName.setValue(selectedStudent.name)
    this.studentAge.setValue(selectedStudent.age)
    this.studentGender.setValue(selectedStudent.gender)
    this.selectedStudentID = selectedStudent._id

  }

  updateStudent() {

    let updatedStudent = {
      _id: this.selectedStudentID,
      name: this.studentName.value,
      gender: this.studentGender.value,
      age: this.studentAge.value
    }
    this.studentService.updateStudent(updatedStudent).subscribe({
      next: value => {
        alert("student updated")
        this.getStudents()

      },
      error: error => {
        console.log(error)
      }
    })
  }

  deleteStudent(id: String) {
    this.studentService.deleteStudent(id).subscribe({
      next:value =>
    {
      alert("student deleted")
      this.getStudents()
    }
  ,
    error:error => {
      console.log(error)
    },
      complete: () => {}
  })
  }

  searchStudent() {

    this.studentsArray = this.originalStudentArray.filter((content: any) => {
      let loweredSearch = content.name.toLowerCase();
      return loweredSearch.includes(this.searchResult.toLowerCase())
    })

  }

  checkChange() {
    this.studentsArray = this.originalStudentArray.filter((content: any) => {
      let loweredSearch = content.name.toLowerCase();
      return loweredSearch.includes(this.searchResult.toLowerCase())
    })
  }
}
