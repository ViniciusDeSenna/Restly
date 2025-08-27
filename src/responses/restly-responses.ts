export interface RestlyResponseContinue {
  status: "continue";
  statusCode: 100;
}

export interface RestlyResponseSwitchingProtocols {
  status: "switching-protocols";
  statusCode: 101;
}

export interface RestlyResponseOk<T> {
  status: "success";
  statusCode: 200;
  data: T;
}