import { Student } from "src/app/pages/interfaces/student.interfa";

export class StudentModel {
  private _id: number;
  private _nombres: string;
  private _apellidos: string;
  private _asistencia: boolean;

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get nombres(): string {
    return this._nombres;
  }

  public set nombres(nombres: string) {
    this._nombres = nombres;
  }

  public get apellidos(): string {
    return this._apellidos;
  }

  public set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  public get asistencia(): boolean {
    return this._asistencia;
  }

  public set asistencia(asistencia: boolean) {
    this._asistencia = asistencia;
  }


  constructor(data: Student) {
    this._id = data.idAlumno;
    this._nombres = data.nombreAlumno;
    this._apellidos = data.apellidoAlumno;
    this._asistencia = true;
  }





}