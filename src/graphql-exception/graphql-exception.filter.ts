import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { GraphQLError } from 'graphql';
//import { GqlArgumentsHost } from '@nestjs/graphql';

@Catch()
export class GraphqlExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    if(exception instanceof HttpException){
      //const gqlHost = GqlArgumentsHost.create(host);
      const response = exception.getResponse() as {message: string | string[]} | string;
      const status = exception.getStatus();

      let message: string

      if(typeof response === 'string'){
        message = response
      }else if(Array.isArray(response.message)){
        message = response.message[0]
      }else{
        message = response.message
      }
      throw new GraphQLError(message,{
        extensions: {code: errorStatusCode(status)}
      })
    }
  }
}

function errorStatusCode(status: number): string {
  switch (status) {
    case 404:
      return "NOT_FOUND";
    case 400:
      return "BAD_REQUEST";
    case 403:
      return "FORBIDDEN";
    case 401:
      return "UNAUTHORIZED";
    default:
      return "INTERNAL_SERVER_ERROR";
  }
}

