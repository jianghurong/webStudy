/*
 * @Author: Richard Chiang
 * @Date: 2021-03-31 10:49:58
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-31 15:44:44
 * @Email: 19875991227@163.com
 * @Description: 
 */
function insertElementToBody(element) {
    document.body.appendChild(element)
}

function createElement(tag, text) {
    let ele = document.createElement(tag)
    ele.innerText = text
    ele = ele
    return ele
}

let ele = createElement('p', 'I hava a pen, I have a app')
insertElementToBody(ele)
