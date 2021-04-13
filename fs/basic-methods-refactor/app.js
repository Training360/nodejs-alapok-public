const { writeFile, appendFile } = require('fs')
const { fileHandlerWrapper } = require('./utils')

fileHandlerWrapper({
  method: writeFile,
  path: './szamarmese.txt',
  data: 'SZAMÁRMESE'
})

fileHandlerWrapper({
  method: appendFile,
  path: './poets.txt',
  data: 'Romhányi a Rímhányó'
})
