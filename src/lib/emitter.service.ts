import { Injectable } from '@vxf/core';
import { EventEmitter2 } from 'eventemitter2';

@Injectable()
export class EventEmitterService extends EventEmitter2 {
  constructor() {
    super({ maxListeners: Number.MAX_SAFE_INTEGER });
  }
}
