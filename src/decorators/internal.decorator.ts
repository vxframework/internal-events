import { InternalEventMetadata, InternalEventOptions } from '../types';
import { Reflector } from '@vxf/core';
import { INTERNAL_EVENT_KEY } from '../const';

export const InternalEvent =
  (event: string, options?: InternalEventOptions): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<InternalEventMetadata>(target, INTERNAL_EVENT_KEY, {
      method,
      options,
      event,
    });
  };
