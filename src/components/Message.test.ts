import { mount } from '@vue/test-utils'
// @ts-ignore
import MessageComponent from './Message.vue'

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world',
    },
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
