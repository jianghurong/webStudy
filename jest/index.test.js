const sum = require('./index')
test('adds 1 + 2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3)
})
test('对象赋值', () => {
    const data = { one: 1 }
    data.two = 2
    expect(data).toEqual({
        one: 1,
        two: 2
    })
})
test('对象赋值1', () => {
    const data = { one: 1 }
    data.two = 2
    expect(data).toEqual({
        one: 1,
        two: 2
    })
})
test('to be null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeTruthy()
})