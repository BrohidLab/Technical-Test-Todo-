import { IsNotEmpty, IsString } from 'class-validator';

export class AiRecommendationDto {
  @IsString()
  @IsNotEmpty()
  problem_desc: string;
}
