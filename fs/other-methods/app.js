const {
  unlinkWrapper,
  renameWrapper,
  copyFileWrapper,
  statWrapper,
  chmodWrapper
} = require('./utils')

// unlinkWrapper({ path: './szamarmese.txt' })

// renameWrapper({
//   oldPath: './poets.txt',
//   newPath: './POETS.txt'
// })

// copyFileWrapper({
//   src: './halaltanc-ballada.txt',
//   dest: './books/halaltanc-ballada.txt'
// })

// statWrapper({
//   path: './halaltanc-ballada.txt',
//   callback (err, stats) {
//     if (err) throw err
//     console.log(stats)
//   }
// })

chmodWrapper({
  path: './halaltanc-ballada.txt',
  mode: 744
})
