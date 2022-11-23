import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/core/service/teacher.service';
import { Teacher } from '../interfaces/teacher.interface';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  teachers: Teacher[] = [];
  teacher: Teacher | undefined;
  teacherForm: FormGroup;

  constructor(private teacherService: TeacherService, private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      nombreProfesor: ['', [Validators.required]],
      apellidoProfesor: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      genero: ['masculino', [Validators.required]],
      correoPersonal: ['', [Validators.required, Validators.email]],
      celularPersonal: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
      activo: ['true', [Validators.required]],
      dniProfesor: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
    this.listAllTeachers()
  }

  save() {
    if (this.teacherForm.invalid) return;

    if (!this.teacher?.idProfesor) {
      console.log('GUARDAR');
      this.teacherService.saveTeacher(this.teacherForm.value).subscribe(response => this.teachers.push(response));
    } else {
      console.log('ACTUALIZAR');
      const teacher: Teacher = { ...this.teacherForm.value, idProfesor: this.teacher.idProfesor }
      this.teacherService.saveTeacher(teacher).subscribe(response => console.log(response));
    }

    this.teacherForm.reset({
      genero: 'masculino',
      activo: 'true'
    });

    this.teacher = undefined;

  }

  listAllTeachers(): void {
    this.teacherService
      .listTeachers()
      .subscribe(data => this.teachers = data);
  }

  edit(teacher: Teacher) {
    console.log(teacher);
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
