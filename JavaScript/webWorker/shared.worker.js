const ports = []

onconnect = (e) => {
    console.log(e, 'shared')
    const port = e.ports[0]
    ports.push(port)

    port.onmessage = (e) => {
        console.log(e,'****port onmessage***')
        const workerResult = `result: ${e.data[0] * e.data[1]}`
        ports.forEach(element => {
            element.postMessage(workerResult)
        });
    }
}