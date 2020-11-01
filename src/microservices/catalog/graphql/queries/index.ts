import { ActivityQueryResolver } from './activity/activity-query.resolver';
import { CarsQueryResolver } from './cars/cars-query.resolver';
import { FlightQueryResolver } from './flight/flight-query.resolver';
import { HotelQueryResolver } from './hotel/hotel-query.resolver';

export const CatalogQueries = [
    ActivityQueryResolver,
    CarsQueryResolver,
    FlightQueryResolver,
    HotelQueryResolver
]