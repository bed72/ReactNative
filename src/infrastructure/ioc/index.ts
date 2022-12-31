import { Container } from "inversify";

import { Inject } from "./types";

import { HttpIoC } from "./http/http.ioc";
import { SignUpIoC } from "./auth/signup.ioc";

export class IoC implements Inject.Bind {
  private readonly _container = new Container();

  constructor() {
    this.bind();
  }

  get container() {
    return this._container;
  }

  public bind(): void {
    const http = new HttpIoC(this._container);
    const signUp = new SignUpIoC(this._container);
  }
}
