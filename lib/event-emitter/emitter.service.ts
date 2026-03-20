import { ClientProxy } from '@nestjs/microservices'
import { RmqEventMap } from '../interfaces'

export class TypedEventEmitter {
	constructor(private readonly client: ClientProxy) {}

	emit<K extends keyof RmqEventMap>(pattern: K, payload: RmqEventMap[K]) {
		return this.client.emit(pattern, payload)
	}
}
