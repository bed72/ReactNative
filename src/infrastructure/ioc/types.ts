export namespace Inject {
  export interface Bind {
    bind(): void;
  }

  export const HttpTypes = {
    HttpClient: Symbol.for("HttpClient"),
    HttpUseCase: Symbol.for("HttpUseCase"),
  };

  export const SignUpTypes = {
    SignUpClient: Symbol.for("SignUpClient"),
    SignUpUseCase: Symbol.for("SignUpUseCase"),
    SignUpViewModel: Symbol.for("SignUpViewModel")
  };
}
