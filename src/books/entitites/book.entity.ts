import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => Int, { nullable: true })
  categoryId?: number;

  @Field(() => Int, {nullable:true})
  publisherId?: number;
}
