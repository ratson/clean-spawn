import test from 'ava'

import spawn from '../lib'

test(async t => {
  const result = await spawn('node', ['--version'])
  t.is(result.code, 0)
  t.truthy(result.childProcess)
})
