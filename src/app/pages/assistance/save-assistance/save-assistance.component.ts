import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../course/course.service';
import { Course } from '../../interfaces/course.interface';
import { Teacher } from '../../interfaces/teacher.interface';
import { StudentService } from '../../student/student.service';
import { TeacherService } from '../../teacher/teacher.service';
import { StudentModel } from './model/student.model';

@Component({
  selector: 'app-save-assistance',
  templateUrl: './save-assistance.component.html',
  styleUrls: ['./save-assistance.component.css']
})
export class SaveAssistanceComponent implements OnInit {

  teachers: Teacher[] = [];
  courses: Course[] = [];
  students: StudentModel[] = []

  assistanceForm: FormGroup;

  constructor(private courseServ: CourseService, private teacherServ: TeacherService, private studentServ: StudentService, private fb: FormBuilder) {
    this.assistanceForm = this.fb.group({
      teacherSelected: ['', Validators.required],
      courseSelected: ['', Validators.required],
      dateSelected: ['', Validators.required],
      assistances: this.fb.array([])
    })
  }

  get assistancesArr() {
    return this.assistanceForm.get('assistances') as FormArray;
  }

  ngOnInit(): void {
    this.studentServ.listStudents().subscribe(response => {
      this.students = response.map(x => new StudentModel(x));
      console.log(this.students);
      this.students.forEach(obj => this.assistancesArr.push(this.fb.control(obj)));

    })
    this.teacherServ.listTeachers().subscribe(res => this.teachers = res);
    this.courseServ.listCourses().subscribe(res => this.courses = res);

    this.assistanceForm.valueChanges.subscribe(console.log);

  }

  save() {
    console.log('formulario', this.assistanceForm);
  }




}
