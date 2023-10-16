import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataBaseDataSource} from '../datasources';
import {Item, ItemRelations} from '../models';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id,
  ItemRelations
> {
  constructor(
    @inject('datasources.DataBase') dataSource: DataBaseDataSource,
  ) {
    super(Item, dataSource);
  }
}
 