import { get } from 'env-var'

const Config = {
  logLevel: get('LOGLEVEL').default('info').asEnum([
    'info',
    'fatal',
    'error',
    'warn',
    'debug',
    'trace',
  ]),
  simulation: get('SIMULATION').default('false').asBool(),
  yellow: get('YELLOW').required().asBool(),
  cameras_number: get('CAMERAS_NUMBER').default(4).asInt(),

  network: {
    host_address: get('HOST_ADDRESS').required().asString(),
    vision: {
      address: get('VISION_ADDRESS').default('224.5.23.2').asString(),
      port: get('VISION_PORT').default('10006').asIntPositive(),
    },
    grSim: {
      address: get('GRSIM_ADDRESS').default('0.0.0.0').asString(),
      control: get('CONTROL_PORT').default('20011').asIntPositive(),
      status: {
        blue: get('BLUE_TEAM_STATUS_PORT').default('30011').asIntPositive(),
        yellow: get('YELLOW_TEAM_STATUS_PORT').default('30012').asIntPositive(),
      },
    },
    ws: {
      port: get('WS_PORT').default('7882').asPortNumber(),
    },
  },
  gameController: {
    address: get('GAME_CONTROLLER_ADDRESS').default('224.5.23.1').asString(),
    port: get('GAME_CONTROLLER_PORT').default('10003').asIntPositive(),
  },
}

export default Config
