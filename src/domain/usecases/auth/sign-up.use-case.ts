import { Either } from '@domain/either/either';
import { ResponseEntity } from '@domain/entities/response.entity';
import { SignUpEntity, SignUpParamEntity } from '@domain/entities/auth/sign-up.entity';
import { FailureMessageEntity } from '@domain/entities/failures/failure-message.entity';

export abstract class SignUpUseCase {
  abstract execute(
    body: SignUpParamEntity,
  ): Promise<
    Either<ResponseEntity<FailureMessageEntity>, ResponseEntity<SignUpEntity>>
  >;
}
