const { readFileSyncLog, readFileLog } = require('./utils')

readFileSyncLog('./szamarmese.txt', { encoding: 'utf-8' })
readFileLog('./szamarmese.txt', { encoding: 'utf-8' })
