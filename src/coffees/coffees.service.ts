import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Barako',
      brand: 'Tabitha Coffees',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      // throw new HttpException(
      //   `Coffee with ${id} not found`,
      //   HttpStatus.NOT_FOUND,
      // );
      throw new NotFoundException(`Coffee with id# ${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updatedCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      const index = this.coffees.findIndex((item) => item.id === +id);
      this.coffees[index] = {
        ...existingCoffee,
        ...updatedCoffeeDto,
      };
      return this.coffees[index];
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
