import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Teacher } from '../../interfaces/teacher.interface';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {

  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.listAllTeachers()
  }

  edit(teacherId: number) {
    this.router.navigate(["/profesor/actualizar/" + teacherId]);
  }

  listAllTeachers(): void {
    this.teacherService
      .listTeachers()
      .subscribe(data => this.teachers = data);
  }

  delete(teacherId: number) {
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
        this.teacherService.deleteTeacher(teacherId).subscribe(() => {
          this.messageSuccess();
          this.listAllTeachers();
        })
      }
    })
  }

  messageSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO PROFESOR',
      text: `Su operación se relaizó con éxito`,
      backdrop: false
    })
  }
}
