'use strict'

const { spawn } = require('child-process-promise')
const exitHook = require('exit-hook')

function cleanSpawn(...args) {
  const p = spawn(...args)
  exitHook(() => {
    p.childProcess.kill()
  })
  return p
}

module.exports = cleanSpawn
