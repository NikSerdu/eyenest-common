import { Events } from '../enums'

export interface RmqEventMap {
	[Events.CAMERA_START_RECORDING]: { cameraId: string }
	[Events.CAMERA_STOP_RECORDING]: { cameraId: string }

	[Events.CAMERA_JOIN]: { cameraId: string }
	[Events.CAMERA_LEAVE]: { cameraId: string }

	[Events.MOTION_DETECTED]: { cameraId: string; timestamp: number }
	[Events.MOTION_ON]: { cameraId: string }
	[Events.MOTION_OFF]: { cameraId: string }

	[Events.CAMERA_DELETE]: { cameraId: string }
	[Events.LOCATION_DELETE]: { locationId: string; cameraIds: string[] }
}
