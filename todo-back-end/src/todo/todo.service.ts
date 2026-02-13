import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import OpenAI from 'openai';

@Injectable()
export class TodoService {
    private openai: OpenAI; 
    constructor(
        @InjectRepository(Todo)
        private todoRepo: Repository<Todo>,
        
    ) {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAPI_API_KEY,
        });
    }

    findAll(search?: string) {
        if (search) {
            return this.todoRepo.find({ where: { title: Like(`%${search}%`) } });
        }
        return this.todoRepo.find();
    }

    create(dto: CreateTodoDto) {
        const todo = this.todoRepo.create(dto);
        return this.todoRepo.save(todo);
    }

    async update(id: number, dto: UpdateTodoDto) {
        await this.todoRepo.update(id, dto);
        return this.todoRepo.findOne({ where: { id } });
    }

    async getAiRecomendation(problem_desc: string) {
        if(!problem_desc) return { recomendation: '' }

        const completion = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant for giving todo problem recommendations.',
                },
                {
                    role: 'user',
                    content: `Berikan rekomendasi solusi untuk masalah berikut:\n${problem_desc}`,
                },
            ],
            max_tokens: 300,
        });

        return {
            recommendation: completion.choices[0].message.content,
        };
  
    }
}
