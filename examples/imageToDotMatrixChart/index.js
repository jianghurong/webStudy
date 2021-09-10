// 转换为点阵图
function toDotMatrixMap(image) {
    for (let i = 0; i < image.height; i = i + 8) {
        for (let j = 0; j < image.width; j = j + 8) {
            let isCovered = isCover(image.data, image.width, i, j)
            if (isCovered) {
                image.data = drawPoints(image.data, image.width, i, j)
            } else {
                image.data = drawPoints(image.data, image.width, i, j, true)
            }
        }
    }
    return image
}

// 判断像素点是否空白或者被覆盖
function isCover(imageData, width, x, y) {
    let covered = 0
    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            let idx = i * 4 * width + 4 * j
            if (imageData[idx] < 192 || imageData[idx + 1] < 192 || imageData[idx + 2] < 192) {
                covered++
            }
            if (covered > 45) return true
        }
    }
    return false
}

// 填充
function drawPoints(imageData, width, x, y, clear = false) {
    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            let idx = i * 4 * width + 4 * j
            if (i >= x + 2 && i < x + 6 && j >= y + 2 && j < y + 6 && !clear) {
                imageData[idx] = 168
                imageData[idx + 1] = 168
                imageData[idx + 2] = 168
                imageData[idx + 3] = 192
            } else {
                imageData[idx] = 255
                imageData[idx + 1] = 255
                imageData[idx + 2] = 255
                imageData[idx + 3] = 0
            }
        }
    }
    return imageData
}

// 界面初始化
function init() {
    let canvas = document.getElementById('dotMatrixMap')
    let ctx = canvas.getContext('2d')
    let image = new Image()
    image = document.getElementById('cool')
    image.crossOrigin = '*'
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height) // canvas.width/height - 被剪切的图像宽度/高度
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        imageData = toDotMatrixMap(imageData)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.putImageData(imageData, 0, 0)
    }
}

init()