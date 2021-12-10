import { makeAutoObservable } from "mobx"

export function AppStore() {
  return makeAutoObservable({
    searchQuery: "",
    scrollPositionY: 0,
    handleSearchQueryChange(value: string) {
      this.searchQuery = value
    },
    handleScrollPositionChange(value: number) {
      this.scrollPositionY = value
    },
  })
}
