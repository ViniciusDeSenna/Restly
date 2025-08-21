import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { RestlyResponseOk } from './responses/success/restly-response-ok';

export type RestlyResponse<T> =
 | RestlyResponseOk<T>

export class Restly {
  private client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config);
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, data, config);
  }
}