import { useEffect } from 'react'
import Data from './Data.js'
import Listener from './Listener.js'

/**
 * React hook for calling a function when an emitter emits
 */
const useEmitHandler = <T extends unknown[]>(emitter: Data<T>, listener: Listener<T>): void => {
  useEffect(() => {
    emitter.add(listener)
    return () => {
      emitter.delete(listener)
    }
  })
}

export default useEmitHandler
