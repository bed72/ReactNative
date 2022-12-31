import { inject, injectable } from 'inversify';
import { AxiosError, AxiosInstance } from 'axios';

import { Inject } from '@infrastructure/ioc/types';

import { HttpClient } from '@data/clients/http.client';
import { Either, Right, Left } from '@domain/either/either';
import { ResponseEntity } from '@domain/entities/response.entity';
import { HttpUseCase, HttpExecute } from '@domain/usecases/http/http.use-case';
import { FailureMessageEntity } from '@domain/entities/failures/failure-message.entity';

@injectable()
export class RemoteHttpUseCase implements HttpUseCase {
  
  @inject(Inject.HttpTypes.HttpClient)
  private readonly client!: HttpClient;

  public async execute<SUCCESS, BODY>({
    url,
    body,
    method,
    headers,
  }: HttpExecute<BODY>): Promise<
    Either<ResponseEntity<FailureMessageEntity>, ResponseEntity<SUCCESS>>
  > {
    try {
      const { data, status } = await this.instace.request({
        url,
        method,
        headers,
        data: body,
      });

      return Right({ status, data } as ResponseEntity<SUCCESS>);
    } catch (error) {
      const failure = error as AxiosError<FailureMessageEntity>;

      return Left(
        {
          status: failure.response?.status,
          data: {
            message: failure.response?.data?.message,
          } as FailureMessageEntity
        } as ResponseEntity<FailureMessageEntity>
      );
    }
  }

  private get instace(): AxiosInstance {
    return this.client.config();
  }
}
