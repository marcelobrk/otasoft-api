import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateFlightInput } from '../../graphql/input/flight/create-flight.input';
import { UpdateFlightInput } from '../../graphql/input/flight/update-flight.input';
import { GqlFlightModel } from '../../graphql/models/flight/gql-flight.model';
import { GqlTextResponseModel } from '../../graphql/models/gql-text-response.model';
import { CreateFlightDto, UpdateFlightDto } from '../../rest/dto/flight';
import { RestFlightModel } from '../../rest/models/flight/rest-flight.model';
import { RestTextResponseModel } from '../../rest/models/rest-text-response.model';

@Injectable()
export class FlightService {
  constructor(
    @Inject('CATALOG_MICROSERVICE')
    private readonly catalogClient: ClientProxy,
  ) {}

  async getSingleFlight(id: number): Promise<RestFlightModel | GqlFlightModel> {
    return this.catalogClient
      .send({ role: 'flight', cmd: 'getSingle' }, id)
      .toPromise();
  }

  async getAllFlights(): Promise<RestFlightModel[] | GqlFlightModel[]> {
    return this.catalogClient
      .send({ role: 'flight', cmd: 'getAll' }, null)
      .toPromise();
  }

  async createFlight(
    createFlightDto: CreateFlightDto | CreateFlightInput,
  ): Promise<RestFlightModel | GqlFlightModel> {
    return this.catalogClient
      .send({ role: 'flight', cmd: 'create' }, createFlightDto)
      .toPromise();
  }

  async updateFlight(
    id: number,
    updateFlightDto: UpdateFlightDto | UpdateFlightInput,
  ): Promise<RestFlightModel | GqlFlightModel> {
    const updateFlightObject = { id, updateFlightDto };
    return this.catalogClient
      .send({ role: 'flight', cmd: 'update' }, updateFlightObject)
      .toPromise();
  }

  async deleteFlight(
    id: number,
  ): Promise<RestTextResponseModel | GqlTextResponseModel> {
    return this.catalogClient
      .send({ role: 'flight', cmd: 'delete' }, id)
      .toPromise();
  }
}
