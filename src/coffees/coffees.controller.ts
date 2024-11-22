import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CoffeesService } from './coffees.service';

@ApiTags('Basic REST api actions')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get('flavors') //means coffees/flavors
  findAll() {
    // return 'hello coffee';
    return this.coffeesService.findAll;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //this means coffees/{id}
    // return `coffee with #${id} coffee`; //can use template literal
    return this.coffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.GONE) //can be used to customize http status
  create(@Body() body) {
    // return body; //handle payload body
    return this.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `This action updates ${id} into ${body}`;
    return this.coffeesService.udpate(id, body);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() body) {
    return `This action replaces ${id} into ${body}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `removes #${id} coffee`;
    return this.coffeesService.remove(id);
  }
}
