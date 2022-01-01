import {Injectable} from '@angular/core';
import {Student} from "../model/student.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  newStudent: Student = {
    name: "",
    age: 0,
    gender: ""
  }

  constructor(private http: HttpClient) {

  }

  postStudent(student: Student ) {
    return this.http.post(environment.apiBaseUrl + 'student/add', student);
  }

  getStudents(){
    return this.http.get(environment.apiBaseUrl + 'student/getStudents')
  }
}
