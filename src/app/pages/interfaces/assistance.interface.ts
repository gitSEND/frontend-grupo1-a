export interface Assistance {
  idAsistencia: number;
  fecha: Date;
  listAsistenciaDetalle: ListAsistenciaDetalle[];
}

export interface ListAsistenciaDetalle {
  idAsistenciaDetalle: IDAsistenciaDetalle;
  presente: boolean;
}

export interface IDAsistenciaDetalle {
  idAlumno: number;
  idProfesor: number;
  idCurso: number;
  idAsistencia: number;
}