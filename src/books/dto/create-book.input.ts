import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';
@InputType()
export class CreateBookInput {
  @IsNotEmpty()
  @Field()
  author: string;

  @IsNotEmpty()
  @Length(3)
  @Field()
  title: string;
}
