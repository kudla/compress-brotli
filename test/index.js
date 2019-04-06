'use strict'

const test = require('ava')
const createCompress = require('..')

;[
  ['null', null],
  ['undefined', undefined],
  ['empty string', ''],
  ['empty object', {}],
  ['empty array', []]
].forEach(([name, value]) => {
  test(`handle ${name}`, async t => {
    const { compress, decompress } = createCompress()
    const compressedData = await compress(value)
    const decompressedData = await decompress(compressedData)
    t.deepEqual(decompressedData, value)
  })
})
