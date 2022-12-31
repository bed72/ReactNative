import { AxiosInstance } from "axios";

export abstract class HttpClient {
  abstract config(): AxiosInstance;
}

