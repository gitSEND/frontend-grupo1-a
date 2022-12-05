import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Teacher } from '../../interfaces/teacher.interface';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-save-teacher',
  templateUrl: './save-teacher.component.html',
  styleUrls: ['./save-teacher.component.css']
})
export class SaveTeacherComponent implements OnInit {
  teacherId!: number;
  teacher!: Teacher;
  teachers: Teacher[] = [];
  teacherForm: FormGroup;

  constructor(private teacherService: TeacherService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.teacherForm = this.fb.group({
      nombreProfesor: ['', [Validators.required]],
      apellidoProfesor: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      correoPersonal: ['', [Validators.required, Validators.email]],
      celularPersonal: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      activo: ['', [Validators.required]],
      dniProfesor: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ idProfesor }) => {
      if (idProfesor) {
        this.teacherService.findTeacher(idProfesor).subscribe(profesor => this.edit(profesor))
      }
    })
  }

  save() {
    if (this.teacherForm.invalid) return;


    if (!this.teacher?.idProfesor) {
      this.teacherService.saveTeacher(this.teacherForm.value).subscribe(() => this.messageSuccess());

    } else {
      const teacher: Teacher = { ...this.teacherForm.value, idAlumno: this.teacher.idProfesor }
      this.teacherService.saveTeacher(teacher).subscribe(() => this.messageSuccess());
    }
  }

  messageSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO PROFESOR',
      text: `Su operación se relaizó con éxito`,
      backdrop: false
    })

    this.router.navigate(["/profesor/listar"]);
  }


  edit(teacher: Teacher) {
    this.teacher = teacher;
    this.teacherForm.setValue({
      nombreProfesor: teacher.nombreProfesor,
      apellidoProfesor: teacher.apellidoProfesor,
      fechaIngreso: new Date(teacher.fechaIngreso).toLocaleDateString('fr-CA'),
      genero: teacher.genero,
      correoPersonal: teacher.correoPersonal,
      celularPersonal: teacher.celularPersonal,
      activo: teacher.activo,
      dniProfesor: teacher.dniProfesor,
    });
  }
}
