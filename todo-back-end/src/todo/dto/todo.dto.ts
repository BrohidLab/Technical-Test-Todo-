import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TodoStatus } from '../entities/todo.entity';

export class CreateTodoDto {
  @IsString()
  title: string;
}

export class UpdateTodoDto {
  @IsEnum(TodoStatus)
  status: TodoStatus;

  @IsOptional()
  @IsString()
  problem_desc?: string;
}
