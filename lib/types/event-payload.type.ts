import { RmqEventMap } from '../interfaces/rmq-events-map.interface'

export type EventPayload<K extends keyof RmqEventMap> = RmqEventMap[K]
