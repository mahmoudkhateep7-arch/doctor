import { configureStore, createSlice } from '@reduxjs/toolkit'

const slice1 = createSlice({
  name: "slice1",
  initialState: {
    menu: false,
    pagesDropDown: false,
    servicesDropdown: false,
    blogDrpDown: false


  }
  , reducers: {
    toggleMenu: (state, action) => {
      state.menu = action.payload
    },
    togglePageDropDown: (state, actoin) => {
      state.pagesDropDown = actoin.payload
    },
    toggleservicesDropdown: (state, action) => {
      state.servicesDropdown = action.payload
    },
    toggleBlogDropDown: (state, action) => {
      state.blogDrpDown = action.payload
    },
    togglePageDropDownSmall: (state) => {
      state.pagesDropDown = !state.pagesDropDown
      state.blogDrpDown = false
      state.servicesDropdown = false
    },
    toggleservicesDropdownSmall: (state) => {
      state.servicesDropdown = !state.servicesDropdown
      state.pagesDropDown = false
      state.blogDrpDown = false

    },
    toggleBlogDropDownSmall: (state) => {
      state.blogDrpDown = !state.blogDrpDown
      state.servicesDropdown = false
      state.pagesDropDown = false
    }

  }
})

export const { toggleBlogDropDownSmall, toggleservicesDropdownSmall, togglePageDropDownSmall, toggleMenu, togglePageDropDown, toggleservicesDropdown, toggleBlogDropDown } = slice1.actions
export const store = configureStore({
  reducer: {
    slice1: slice1.reducer
  }
})




export type AppDispatcher = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>