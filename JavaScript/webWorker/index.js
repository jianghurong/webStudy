if (window.Worker) {
    const myWorker = new Worker('./index.worker.js')
    const sharedWorker = new SharedWorker('./shared.worker.js')
    sharedWorker.port.start()
    const first = document.querySelector('input#first')
    const second = document.querySelector('input#second')
    const subWorker = document.querySelector('div#subWorker')
    const sharedFirst = document.querySelector('input#sharedFisrt')
    const sharedSecond = document.querySelector('input#sharedSecond')
    const sharedWorkerDiv = document.querySelector('div#sharedWorker')

    // 向worker发送消息
    first.onchange = () => {
        myWorker.postMessage([first.value, second.value])
        console.log('message posted to worker')
    }

    second.onchange = () => {
        myWorker.postMessage([first.value, second.value])
        console.log('message posted to worker')
    }

    // 像sharedWorker发消息
    sharedFirst.onchange = () => {
        sharedWorker.port.postMessage([sharedFirst.value, sharedSecond.value])
    }
    sharedSecond.onchange = () => {
        sharedWorker.port.postMessage([sharedFirst.value, sharedSecond.value])
        console.log('message posted to worker')
    }

    sharedWorker.port.onmessage = (e) => {
        sharedWorkerDiv.textContent = e.data
    }

    myWorker.onmessage = (e) => {
        console.log('message received from worker')
        const result = document.querySelector('div#result')
        result.textContent = e.data
        if (e.data === 'result: 15') {
            alert('触发特定规则，worker结束')
            myWorker.terminate()
        }
        if (e.data?.includes('subworker')) {
            subWorker.textContent = e.data
        }
    }
    myWorker.onerror = (e) => {
        console.log('myWorker error')
        console.log(e)
        e.preventDefault()
    }
}