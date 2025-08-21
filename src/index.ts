import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export type RestlyResponse<T> =
 | { status: 'success'; statusCode: 200; data: T }
 | { status: 'success'; statusCode: 200; data: T }
 | {}
 | {}

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