const logger = (url, method) => {
    const data = `Date: ${new Intl.DateTimeFormat('hu-HU').format(Date.now())} Url: ${url} Method: ${method}`
    console.log(data);
}
    

module.exports = logger