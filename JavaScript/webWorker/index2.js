if (window.Worker) {
   const sharedWorker = new SharedWorker('./shared.worker.js')
    const sharedWorkerDiv = document.querySelector('div#sharedWorker')

   sharedWorker.port.onmessage = (e) => {
    sharedWorkerDiv.textContent = e.data
   }
}