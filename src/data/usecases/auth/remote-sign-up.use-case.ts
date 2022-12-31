import { inject, injectable } from "inversify";

import { Inject } from "@infrastructure/ioc/types";

import { SignUpParamsDto } from "@data/dtos/sign-up.params.dto";

import { Either } from "@domain/either/either";

import { Path } from "@domain/constants/path.const";
import { HttpMethod } from "@domain/constants/method";

import { HttpUseCase } from "@domain/usecases/http/http.use-case";
import { SignUpUseCase } from "@domain/usecases/auth/sign-up.use-case";

import { ResponseEntity } from "@domain/entities/response.entity";
import { SignUpEntity } from "@domain/entities/auth/sign-up.entity";
import { FailureMessageEntity } from "@domain/entities/failures/failure-message.entity";

@injectable()
export class RemoteSignUpUseCase implements SignUpUseCase {

  @inject(Inject.HttpTypes.HttpUseCase)
  private readonly useCase!: HttpUseCase;

  public async execute(
    body: SignUpParamsDto,
  ): Promise<
    Either<ResponseEntity<FailureMessageEntity>, ResponseEntity<SignUpEntity>>
  > {
    return await this.useCase.execute<SignUpEntity, SignUpParamsDto>({
      url: Path.SIGN_UP,
      body,
      method: HttpMethod.POST,
    });
  }
}
