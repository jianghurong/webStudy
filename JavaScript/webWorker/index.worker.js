const subWorker = new Worker('./sub.worker.js')

onmessage = (e) => {
    console.log('message received from main script')
    const workerResult = `result: ${e.data[0] * e.data[1]}`
    console.log('posting message back to main script')
    postMessage(workerResult)
    subWorker.postMessage(workerResult)
}

subWorker.onmessage = (e) => {
    postMessage(e.data)
}