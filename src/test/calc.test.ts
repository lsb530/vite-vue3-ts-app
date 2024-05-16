import useAdd from './calc'

const { addOne } = useAdd()

console.log(addOne(3))

// Test1
test('3을 더한 경우', () => {
  expect(addOne(1)).toBe(2)
  expect(addOne(7)).toBe(8)
})
