import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Publisher {
    @Field(()=> Int)
    id: number;

    @Field()
    name: string;
}
