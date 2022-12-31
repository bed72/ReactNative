
import { Container } from "inversify";

import { Inject } from "../types";

import { HttpUseCase } from "@domain/usecases/http/http.use-case";

import { HttpAdapter } from "@infrastructure/adapters/http/http.adapter";

import { HttpClient } from "@data/clients/http.client";
import { RemoteHttpUseCase } from "@data/usecases/http/remote-http.use-case";

export class HttpIoC implements Inject.Bind {
  constructor(private readonly _container: Container) {
    this.bind();
  }

  public bind(): void {
    this._container
      .bind<HttpClient>(Inject.HttpTypes.HttpClient)
      .to(HttpAdapter);

      this._container
      .bind<HttpUseCase>(Inject.HttpTypes.HttpUseCase)
      .to(RemoteHttpUseCase);
  }
}
