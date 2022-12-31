import { RawAxiosRequestHeaders } from "axios";

import { Either } from "@domain/either/either";

import { Path } from "@domain/constants/path.const";
import { HttpMethod } from "@domain/constants/method";

import { ResponseEntity } from "@domain/entities/response.entity";
import { FailureMessageEntity } from "@domain/entities/failures/failure-message.entity";

export type HttpExecute<BODY> = {
  url: Path;
  body?: BODY;
  method?: HttpMethod;
  headers?: RawAxiosRequestHeaders;
};

export abstract class HttpUseCase {
  abstract execute<SUCCESS, BODY>({
    url,
    headers,
    body = {} as BODY,
    method = HttpMethod.GET,
  }: HttpExecute<BODY>): Promise<
    Either<ResponseEntity<FailureMessageEntity>, ResponseEntity<SUCCESS>>
  >;
}
