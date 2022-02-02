function fetchData(callback) {
    callback('peanut butter')
}

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter')
        }, 1 * 1000)
    })
}
function fetchDataPromiseReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error')
        }, 1 * 1000)
    })
}

module.exports = {
    fetchData,
    fetchDataPromise,
    fetchDataPromiseReject
}
