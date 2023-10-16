import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {AnteProyecto} from '../models';
import {AnteProyectoRepository} from '../repositories';

export class AnteProyectoController {
  constructor(
    @repository(AnteProyectoRepository)
    public anteProyectoRepository : AnteProyectoRepository,
  ) {}

  @post('/ante-proyectos')
  @response(200, {
    description: 'AnteProyecto model instance',
    content: {'application/json': {schema: getModelSchemaRef(AnteProyecto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AnteProyecto, {
            title: 'NewAnteProyecto',
            exclude: ['id'],
          }),
        },
      },
    })
    anteProyecto: Omit<AnteProyecto, 'id'>,
  ): Promise<AnteProyecto> {
    return this.anteProyectoRepository.create(anteProyecto);
  }

  @get('/ante-proyectos/count')
  @response(200, {
    description: 'AnteProyecto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AnteProyecto) where?: Where<AnteProyecto>,
  ): Promise<Count> {
    return this.anteProyectoRepository.count(where);
  }

  @get('/ante-proyectos')
  @response(200, {
    description: 'Array of AnteProyecto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AnteProyecto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AnteProyecto) filter?: Filter<AnteProyecto>,
  ): Promise<AnteProyecto[]> {
    return this.anteProyectoRepository.find(filter);
  }

  @patch('/ante-proyectos')
  @response(200, {
    description: 'AnteProyecto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AnteProyecto, {partial: true}),
        },
      },
    })
    anteProyecto: AnteProyecto,
    @param.where(AnteProyecto) where?: Where<AnteProyecto>,
  ): Promise<Count> {
    return this.anteProyectoRepository.updateAll(anteProyecto, where);
  }

  @get('/ante-proyectos/{id}')
  @response(200, {
    description: 'AnteProyecto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AnteProyecto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AnteProyecto, {exclude: 'where'}) filter?: FilterExcludingWhere<AnteProyecto>
  ): Promise<AnteProyecto> {
    return this.anteProyectoRepository.findById(id, filter);
  }

  @patch('/ante-proyectos/{id}')
  @response(204, {
    description: 'AnteProyecto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AnteProyecto, {partial: true}),
        },
      },
    })
    anteProyecto: AnteProyecto,
  ): Promise<void> {
    await this.anteProyectoRepository.updateById(id, anteProyecto);
  }

  @put('/ante-proyectos/{id}')
  @response(204, {
    description: 'AnteProyecto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() anteProyecto: AnteProyecto,
  ): Promise<void> {
    await this.anteProyectoRepository.replaceById(id, anteProyecto);
  }

  @del('/ante-proyectos/{id}')
  @response(204, {
    description: 'AnteProyecto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.anteProyectoRepository.deleteById(id);
  }
}
