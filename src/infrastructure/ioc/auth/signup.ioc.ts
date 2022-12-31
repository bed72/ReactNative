import { Container } from "inversify";

import { Inject } from "../types";

import { SignUpUseCase } from "@domain/usecases/auth/sign-up.use-case";

import { AuthSigUpViewModel } from "@presentation/screens/auth/signup/viewmodel";

import { RemoteSignUpUseCase } from "@data/usecases/auth/remote-sign-up.use-case";

export class SignUpIoC implements Inject.Bind {
  constructor(private readonly _container: Container) {
    this.bind();
  }

  public bind(): void {
    this._container
      .bind<SignUpUseCase>(Inject.SignUpTypes.SignUpUseCase)
      .to(RemoteSignUpUseCase);

    this._container
      .bind<AuthSigUpViewModel>(Inject.SignUpTypes.SignUpViewModel)
      .to(AuthSigUpViewModel);
  }
}
