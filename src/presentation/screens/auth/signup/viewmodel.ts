import { inject, injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";

import { Inject } from "@infrastructure/ioc/types";

import { SignUpParamsDto } from "@data/dtos/sign-up.params.dto";

import { BaseViewMode } from "@presentation/screens/base/base.viewmodel";

import { fold } from "@domain/either/either";
import { SignUpEntity } from "@domain/entities/auth/sign-up.entity";
import { SignUpUseCase } from "@domain/usecases/auth/sign-up.use-case";
import { FailureMessageEntity } from "@domain/entities/failures/failure-message.entity";

@injectable()
export class SigUpViewModel extends BaseViewMode<
  SignUpEntity,
  FailureMessageEntity
> {

  @inject(Inject.SignUpTypes.SignUpUseCase)
  private readonly useCase!: SignUpUseCase;

  constructor() {
    super();

    makeObservable(this);
  }

  @observable
  public loading = false;

  @observable
  public success = {} as SignUpEntity;

  @observable
  public failure = {} as FailureMessageEntity;

  public async signUp(params: SignUpParamsDto): Promise<void> {
    this.setLoading(true);

    fold(
      await this.useCase.execute(params),
      (failure) => this.setFailure(failure.data),
      (success) => this.setSuccess(success.data)
    )
  }

  @action
  protected setLoading(loading: boolean): void {
    this.loading = loading;
  }

  @action
  protected setSuccess(success: SignUpEntity): void {
    this.success = success;
  }

  @action
  protected setFailure(failure: FailureMessageEntity): void {
    this.failure = failure;
  }
}
