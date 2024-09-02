import { Mutation, Resolver } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { Property } from '../../libs/dto/property/property';

@Resolver()
export class PropertyResolver {
	constructor(private readonly propertyService: PropertyService) {}

	@Mutation(() => Property)
	public async createProperty(): Promise<Property> {
		return await this.propertyService.createProperty();
	}
}
