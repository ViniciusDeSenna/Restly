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

export interface RestlyResponseCreated<T> {
  status: "created";
  statusCode: 201;
  data: T;
}

export interface RestlyResponseAccepted {
  status: "accepted";
  statusCode: 202;
}

export interface RestlyResponseNoContent {
  status: "no-content";
  statusCode: 204;
}

export interface RestlyResponseMovedPermanently {
  status: "moved-permanently";
  statusCode: 301;
  location: string;
}

export interface RestlyResponseFound {
  status: "found";
  statusCode: 302;
  location: string;
}

export interface RestlyResponseNotModified {
  status: "not-modified";
  statusCode: 304;
}

export interface RestlyResponseBadRequest {
  status: "bad-request";
  statusCode: 400;
  error: string;
}

export interface RestlyResponseUnauthorized {
  status: "unauthorized";
  statusCode: 401;
  error: string;
}

export interface RestlyResponseForbidden {
  status: "forbidden";
  statusCode: 403;
  error: string;
}

export interface RestlyResponseNotFound {
  status: "not-found";
  statusCode: 404;
  error: string;
}

export interface RestlyResponseConflict {
  status: "conflict";
  statusCode: 409;
  error: string;
}

export interface RestlyResponseUnprocessableEntity {
  status: "unprocessable-entity";
  statusCode: 422;
  error: string;
}

export interface RestlyResponseInternalServerError {
  status: "internal-server-error";
  statusCode: 500;
  error: string;
}

export interface RestlyResponseNotImplemented {
  status: "not-implemented";
  statusCode: 501;
  error: string;
}

export interface RestlyResponseBadGateway {
  status: "bad-gateway";
  statusCode: 502;
  error: string;
}

export interface RestlyResponseServiceUnavailable {
  status: "service-unavailable";
  statusCode: 503;
  error: string;
}

export type RestlyResponse<T = unknown> =
  | RestlyResponseContinue
  | RestlyResponseSwitchingProtocols
  | RestlyResponseOk<T>
  | RestlyResponseCreated<T>
  | RestlyResponseAccepted
  | RestlyResponseNoContent
  | RestlyResponseMovedPermanently
  | RestlyResponseFound
  | RestlyResponseNotModified
  | RestlyResponseBadRequest
  | RestlyResponseUnauthorized
  | RestlyResponseForbidden
  | RestlyResponseNotFound
  | RestlyResponseConflict
  | RestlyResponseUnprocessableEntity
  | RestlyResponseInternalServerError
  | RestlyResponseNotImplemented
  | RestlyResponseBadGateway
  | RestlyResponseServiceUnavailable;