import { emit } from '../'
import Data from '../Data'

test('Calls functions', () => {
  const fn1 = jest.fn()
  const fn2 = jest.fn()
  const data: Data<[number, number]> = new Set([fn1, fn2])
  emit(data, 1, 2)
  expect(fn1).toBeCalledTimes(1)
  expect(fn2).toBeCalledTimes(1)
  expect(fn1).toBeCalledWith(1, 2)
  expect(fn2).toBeCalledWith(1, 2)
})
