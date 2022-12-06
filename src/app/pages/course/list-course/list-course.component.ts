import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  courses: Course[] = []

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.listAllCourses()
  }

  edit(idAlumno: number) {
    this.router.navigate(["/curso/actualizar/" + idAlumno]);
  }

  listAllCourses(): void {
    this.courseService
      .listCourses()
      .subscribe(data => this.courses = data);
  }

  delete(courseId: number) {
    Swal.fire({
      title: 'Estás seguro?',
      text: "No podrás revertir la operación",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, quiero eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.courseService.deleteCourse(courseId).subscribe(() => {
          this.messageSuccess();
          this.listAllCourses();
        })
      }
    })
  }

  messageSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO CURSO',
      text: `Su operación se relaizó con éxito`,
      backdrop: false
    })
  }

}
