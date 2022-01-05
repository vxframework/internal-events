import { OnceOptions, OnOptions } from 'eventemitter2';

export type InternalEventOptions = OnOptions | true;

export type InternalEventMetadata = {
  event: string;
  method: string;
  options?: InternalEventOptions;
};

export type InternalEventOnceOptions = OnceOptions | true;

export type InternalEventOnceMetadata = {
  event: string;
  method: string;
  options?: InternalEventOptions;
};
