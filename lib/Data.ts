import Listener from './Listener.js'

export type Data<T extends unknown[]> = Set<Listener<T>>

export default Data
