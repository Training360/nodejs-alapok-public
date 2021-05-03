const generateId = (data) => {
  const sortedData = data.sort((a, b) => a.id > b.id)
  return sortedData[sortedData.length - 1].id + 1
}

const findById = (data, id) =>
  data.find(item => item.id === id)

const add = (data, payload) =>
  [...data, { id: generateId(data), ...payload }]

const edit = (data, id, payload) =>
  data.map(item => item.id === id ? { ...item, ...payload } : item)

const remove = (data, id) =>
  data.filter(item => item.id !== id)

module.exports = Object.freeze({
  generateId,
  findById,
  add,
  edit,
  remove
})
