import Data from '../Data.js'
import toPromise from '../toPromise.js'
import { equal, deepEqual } from 'assert/strict'
import emit from '../emit.js'

it('resolves once emit', async () => {
  const emitter: Data<[number, number]> = new Set()
  const promise = toPromise(emitter)
  equal(emitter.size, 1)
  emit(emitter, 3, 5)
  deepEqual(await promise, [3, 5])
})
