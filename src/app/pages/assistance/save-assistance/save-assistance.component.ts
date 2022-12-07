import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CourseService } from '../../course/course.service';
import {
  Assistance,
  IDAsistenciaDetalle,
  ListAsistenciaDetalle
} from '../../interfaces/assistance.interface';
import { Course } from '../../interfaces/course.interface';
import { Student } from '../../interfaces/student.interfa';
import { Teacher } from '../../interfaces/teacher.interface';
import { StudentService } from '../../student/student.service';
import { TeacherService } from '../../teacher/teacher.service';
import { AssistanceService } from '../assistance.service';

@Component({
  selector: 'app-save-assistance',
  templateUrl: './save-assistance.component.html',
  styleUrls: ['./save-assistance.component.css'],
})
export class SaveAssistanceComponent implements OnInit {
  teachers: Teacher[] = [];
  courses: Course[] = [];

  assistanceForm: FormGroup;

  constructor(
    private assistanceServ: AssistanceService,
    private courseServ: CourseService,
    private teacherServ: TeacherService,
    private studentServ: StudentService,
    private fb: FormBuilder
  ) {
    this.assistanceForm = this.fb.group({
      teacherSelected: ['', Validators.required],
      courseSelected: ['', Validators.required],
      dateSelected: ['', Validators.required],
      assistances: this.fb.array([]),
    });
  }

  get assistancesArr(): FormArray {
    return this.assistanceForm.get('assistances') as FormArray;
  }

  asistanceGroup(student: Student): FormGroup {
    return this.fb.group({
      alumnoId: { value: student.idAlumno, disabled: true },
      nombres: { value: student.nombreAlumno, disabled: true },
      apellidos: { value: student.apellidoAlumno, disabled: true },
      asistencia: [true],
    });
  }

  ngOnInit(): void {
    this.studentServ
      .listStudents()
      .subscribe((response) =>
        response.forEach((data) =>
          this.assistancesArr.push(this.asistanceGroup(data))
        )
      );
    this.teacherServ.listTeachers().subscribe((res) => (this.teachers = res));
    this.courseServ.listCourses().subscribe((res) => (this.courses = res));
  }

  save() {
    if (this.assistanceForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'MÓDULO ASISTENCIA',
        text: `Los datos del formulario están incompletos!`,
        backdrop: false
      })

      return;
    };

    const arreglo = this.assistanceForm.controls['assistances'].getRawValue() as Array<any>;
    const idProfesor = this.assistanceForm.get('teacherSelected')?.getRawValue();
    const idCurso = this.assistanceForm.get('courseSelected')?.getRawValue();
    const fecha = this.assistanceForm.get('dateSelected')?.getRawValue();

    const listAsistenciaDetalle: ListAsistenciaDetalle[] = [];

    arreglo.forEach((value) => {
      const idAsistenciaDetalle: IDAsistenciaDetalle = {
        idCurso,
        idProfesor,
        idAlumno: value.alumnoId,
      };
      listAsistenciaDetalle.push({ idAsistenciaDetalle, presente: value.asistencia });
      console.log('listAsistenciaDetalle', listAsistenciaDetalle);
    });

    const body: Assistance = { fecha: fecha, listAsistenciaDetalle: listAsistenciaDetalle };

    this.assistanceServ.save(body).subscribe(res => this.messageSuccess(res.idAsistencia));
  }

  messageSuccess(registro?: number) {
    Swal.fire({
      icon: 'success',
      title: 'MÓDULO ASISTENCIA',
      text: `Su operación se relaizó con éxito, su número de registro es: ${registro}`,
      backdrop: false
    })
  }
}
