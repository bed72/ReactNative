import { injectable } from 'inversify';
import axios, { AxiosInstance } from 'axios';

import { Path } from '@domain/constants/path.const';

import { HttpClient } from '@data/clients/http.client';

@injectable()
export class HttpAdapter implements HttpClient {
  public config = (): AxiosInstance =>
    axios.create({
      timeout: 2000,
      responseType: 'json',
      baseURL: Path.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
}
