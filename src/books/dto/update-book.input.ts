import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsOptional,
  Length,
  IsNotEmpty,
  IsPositive,
  IsInt,
} from 'class-validator';
@InputType()
export class UpdateBookInput {
  @IsOptional()
  @IsNotEmpty()
  @Length(3)
  @Field({ nullable: true })
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  @Field({ nullable: true })
  author?: string;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field(() => Int)
  id: number;
}
