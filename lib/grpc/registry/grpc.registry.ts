import { PROTO_PATHS } from '@eyenest/contracts'

export const GRPC_CLIENTS = {
	AUTH_PACKAGE: {
		package: 'auth.v1',
		protoPath: PROTO_PATHS.AUTH,
		env: 'AUTH_GRPC_URL',
	},
	CAMERA_PACKAGE: {
		package: 'camera.v1',
		protoPath: PROTO_PATHS.CAMERA,
		env: 'CAMERA_GRPC_URL',
	},
} as const
