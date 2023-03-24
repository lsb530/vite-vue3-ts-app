import { defineStore } from 'pinia'
export interface BrowserStateInterface {
  showFlag: boolean
}

export const useBrowser = defineStore('browser', {
  state: (): BrowserStateInterface => ({
    showFlag: true,
  }),
  actions: {
    setShowFlag(flag: boolean) {
      this.showFlag = flag
    },
  },
  getters: {
    isShow: (state: BrowserStateInterface) => () => {
      return state.showFlag
    },
  },
})
