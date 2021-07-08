import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from './response';

export interface ResponseData<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ResponseData<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseData<T>> {
        const res = context.switchToHttp().getResponse();
        const statusCode = res?.statusCode;
        return next.handle().pipe(
            map(
                (data) =>
                    new Response({
                        data: data,
                        message: 'Success',
                        statusCode: statusCode,
                    }),
            ),
        );
    }
}
