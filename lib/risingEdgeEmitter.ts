import Data from './Data'
import emit from './emit'

const risingEdgeEmitter = (emitter: Data<[boolean]>): Data<[]> => {
  const risingEdgeEmitter: Data<[]> = new Set()
  emitter.add(turnedOn => {
    if (turnedOn) emit(risingEdgeEmitter)
  })
  return risingEdgeEmitter
}

export default risingEdgeEmitter
