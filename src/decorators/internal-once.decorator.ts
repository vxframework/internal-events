import { InternalEventOnceMetadata, InternalEventOnceOptions } from '../types';
import { Reflector } from '@vxf/core';
import { INTERNAL_EVENT_ONCE_KEY } from '../const';

export const InternalEventOnce =
  (event: string, options?: InternalEventOnceOptions): MethodDecorator =>
  (target, method: string): void => {
    Reflector.extend<InternalEventOnceMetadata>(
      target,
      INTERNAL_EVENT_ONCE_KEY,
      { method, options, event },
    );
  };
