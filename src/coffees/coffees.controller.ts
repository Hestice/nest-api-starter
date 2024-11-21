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

@ApiTags('Basic REST api actions')
@Controller('coffees')
export class CoffeesController {
  @Get('flavors') //means coffees/flavors
  findAll() {
    return 'hello coffee';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //this means coffees/{id}
    return `coffee with #${id} coffee`; //can use template literal
  }

  @Post()
  @HttpCode(HttpStatus.GONE) //can be used to customize http status
  create(@Body() body) {
    return body; //handle payload body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates ${id} into ${body}`;
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() body) {
    return `This action replaces ${id} into ${body}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `removes #${id} coffee`;
  }
}
