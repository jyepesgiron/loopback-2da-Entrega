import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class AnteProyecto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @property({
    type: 'string',
    required: true,
  })
  ID_Estudiante: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AnteProyecto>) {
    super(data);
  }
}

export interface AnteProyectoRelations {
  // describe navigational properties here
}

export type AnteProyectoWithRelations = AnteProyecto & AnteProyectoRelations;
