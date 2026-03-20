import { Module } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { TypedEventEmitter } from './emitter.service'

@Module({
	providers: [
		{
			provide: TypedEventEmitter,
			inject: ['RMQ_SERVICE'],
			useFactory: (client: ClientProxy) => {
				return new TypedEventEmitter(client)
			},
		},
	],
	exports: [TypedEventEmitter],
})
export class EventEmitterModule {}
