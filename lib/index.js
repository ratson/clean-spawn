'use strict'

const { spawn } = require('child-process-promise')
const onExit = require('signal-exit')

function cleanSpawn(...args) {
  const p = spawn(...args)
  onExit(() => {
    p.childProcess.kill()
  })
  return p
}

module.exports = cleanSpawn
