import { emit } from '../index.js'
import Data from '../Data.js'
import { spy } from 'sinon'
import { equal, deepEqual } from 'assert/strict'

it('Calls functions', () => {
  const fn1 = spy()
  const fn2 = spy()
  const data: Data<[number, number]> = new Set([fn1, fn2])
  emit(data, 1, 2)

  equal(fn1.callCount, 1)
  equal(fn2.callCount, 1)
  deepEqual(fn1.getCall(0).args, [1, 2])
  deepEqual(fn2.getCall(0).args, [1, 2])
})
