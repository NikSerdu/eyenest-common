import { Global, Module } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { TypedEventEmitter } from './emitter.service'

@Global()
@Module({
	providers: [
		{
			provide: TypedEventEmitter,
			inject: ['RMQ_CLIENT'],
			useFactory: (client: ClientProxy) => {
				return new TypedEventEmitter(client)
			},
		},
	],
	exports: [TypedEventEmitter],
})
export class EventEmitterModule {}
