export interface RestlyResponseOk<T> {
  status: "success";
  statusCode: 200;
  data: T;
}