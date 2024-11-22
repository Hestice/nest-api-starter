import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Paginated api')
@Controller('tea')
export class TeaController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns a paginated query limit: ${limit}, offset: ${offset}`;
  }
}
