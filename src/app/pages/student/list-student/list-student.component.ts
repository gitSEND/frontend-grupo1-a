import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Student } from '../../interfaces/student.interfa';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.listAllStudents()
  }

  edit(idAlumno: number) {
    this.router.navigate(["/alumno/actualizar/" + idAlumno]);
  }

  listAllStudents(): void {
    this.studentService
      .listStudents()
      .subscribe(data => this.students = data);
  }

  delete(studentId: number) {
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
        this.studentService.deleteStudent(studentId).subscribe(() => {
          this.messageSuccess();
          this.listAllStudents();
        })
      }
    })
  }

  messageSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO ALUMNO',
      text: `Su operación se relaizó con éxito`,
      backdrop: false
    })
  }
}
