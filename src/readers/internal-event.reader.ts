import { IMetadataReader, Inject, Injectable, Reflector } from '@vxf/core';
import { EventEmitterService } from '../lib';
import { InternalEventMetadata, InternalEventOnceMetadata } from '../types';
import { INTERNAL_EVENT_KEY, INTERNAL_EVENT_ONCE_KEY } from '../const';

@Injectable()
export class InternalEventReader implements IMetadataReader {
  @Inject(EventEmitterService)
  private ee: EventEmitterService;

  public read(target: unknown): void {
    const once =
      Reflector.get<InternalEventOnceMetadata[]>(
        target,
        INTERNAL_EVENT_ONCE_KEY,
      ) || [];

    once.forEach(({ method, options, event }) => {
      this.ee.once(event, target[method].bind(target), options);
    });

    const events =
      Reflector.get<InternalEventMetadata[]>(target, INTERNAL_EVENT_KEY) || [];

    events.forEach(({ method, options, event }) => {
      this.ee.on(event, target[method].bind(target), options);
    });
  }
}
