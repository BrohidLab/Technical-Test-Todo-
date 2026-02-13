import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { AiRecommendationDto } from './dto/ai-recomendation.dto';
import { UserIdGuard } from '../common/guards/user-id.guard';

@Controller('api/todo')
@UseGuards(UserIdGuard)
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    findAll(@Query('search') search?: string) {
        return this.todoService.findAll(search);
    }

    @Post()
    create(@Body() dto: CreateTodoDto) {
        return this.todoService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
        return this.todoService.update(+id, dto);
    }

    @Post(':id/ai-recommendation')
    async getAiRecommendation(
        @Param('id') id: string,
        @Body() dto: AiRecommendationDto,
    ) {
        return this.todoService.getAiRecomendation(dto.problem_desc);
    }
}

