import Data from './Data.js'
import Listener from './Listener.js'

/**
 * Listens for one emit and resolves the emitted params
 * @returns A promise that resolves the array of parameters. The promise will never reject
 */
const toPromise = async <T extends unknown[]>(emitter: Data<T>): Promise<T> => await new Promise(resolve => {
  const listener: Listener<T> = (...params) => {
    resolve(params)
    emitter.delete(listener)
  }
  emitter.add(listener)
})

export default toPromise
