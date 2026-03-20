import { DynamicModule, Module } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

import { TypedEventEmitter } from './emitter.service'

@Module({})
export class EventEmitterModule {
	static register(rmqToken: string): DynamicModule {
		return {
			module: EventEmitterModule,
			providers: [
				{
					provide: TypedEventEmitter,
					inject: [rmqToken],
					useFactory: (client: ClientProxy) => new TypedEventEmitter(client),
				},
			],
			exports: [TypedEventEmitter],
		}
	}
}
