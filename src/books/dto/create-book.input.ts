import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  author: string;

  @Field()
  title: string;
}
