import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Student } from '../../interfaces/student.interfa';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrls: ['./save-student.component.css']
})
export class SaveStudentComponent implements OnInit {

  studentId!: number;
  student!: Student;
  studentForm: FormGroup;

  constructor(private studentService: StudentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.studentForm = this.fb.group({
      nombreAlumno: ['', [Validators.required]],
      apellidoAlumno: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      correoPersonal: ['', [Validators.required, Validators.email]],
      celularPersonal: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      activo: ['', [Validators.required]],
      dniAlumno: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ idAlumno }) => {
      if (idAlumno) {
        this.studentService.findStudent(idAlumno).subscribe(alumno => this.edit(alumno))
      }
    })
  }

  save() {
    if (this.studentForm.invalid) return;


    if (!this.student?.idAlumno) {
      this.studentService.saveStudent(this.studentForm.value).subscribe(() => this.messageSuccess());
    } else {
      const student: Student = { ...this.studentForm.value, idAlumno: this.student.idAlumno }
      this.studentService.saveStudent(student).subscribe(() => this.messageSuccess());
    }
  }

  messageSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO ALUMNO',
      text: `Su operación se relaizó con éxito`,
      backdrop: false
    })
    this.router.navigate(["/alumno/listar"]);
  }

  edit(student: Student) {
    this.student = student;
    this.studentForm.setValue({
      nombreAlumno: student.nombreAlumno,
      apellidoAlumno: student.apellidoAlumno,
      fechaIngreso: new Date(student.fechaIngreso).toLocaleDateString('fr-CA'),
      genero: student.genero,
      correoPersonal: student.correoPersonal,
      celularPersonal: student.celularPersonal,
      activo: student.activo,
      dniAlumno: student.dniAlumno,
    });
  }

}
