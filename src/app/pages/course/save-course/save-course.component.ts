import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-save-course',
  templateUrl: './save-course.component.html',
  styleUrls: ['./save-course.component.css']
})
export class SaveCourseComponent implements OnInit {

  courseId!: number;
  course: Course | undefined;
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService, private router: Router, private route: ActivatedRoute) {
    this.courseForm = this.fb.group({
      nombreCurso: ['', [Validators.required]],
      activo: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ idCurso }) => {
      if (idCurso) {
        this.courseService.findCourse(idCurso).subscribe(course => this.edit(course))
      }
    })
  }

  save() {
    if (this.courseForm.invalid) return;


    if (!this.course?.idCurso) {
      this.courseService.saveCourse(this.courseForm.value).subscribe(() => this.messageSuccess());

    } else {
      const course: Course = { ...this.courseForm.value, idCurso: this.course.idCurso }
      this.courseService.saveCourse(course).subscribe(() => this.messageSuccess());
    }
  }

  messageSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO CURSO',
      text: `Su operación se relaizó con éxito`,
      backdrop: false
    })

    this.router.navigate(["/curso/listar"]);
  }

  edit(course: Course) {
    console.log('curso', course);

    this.course = course;
    this.courseForm.setValue({
      nombreCurso: course.nombreCurso,
      activo: course.activo,
    });
  }

}

