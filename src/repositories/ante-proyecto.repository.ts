import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataBaseDataSource} from '../datasources';
import {AnteProyecto, AnteProyectoRelations} from '../models';

export class AnteProyectoRepository extends DefaultCrudRepository<
  AnteProyecto,
  typeof AnteProyecto.prototype.id,
  AnteProyectoRelations
> {
  constructor(
    @inject('datasources.DataBase') dataSource: DataBaseDataSource,
  ) {
    super(AnteProyecto, dataSource);
  }
}
