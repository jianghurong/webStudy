onmessage = (e) => {
    console.log('sub收到消息')
    postMessage(`subworker收到消息 ${e.data}`)
}