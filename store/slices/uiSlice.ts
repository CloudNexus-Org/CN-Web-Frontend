import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMobileMenuOpen: boolean;
  activeDropdown: string | null;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  activeDropdown: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMobileMenuOpen = action.payload;
    },
    setActiveDropdown(state, action: PayloadAction<string | null>) {
      state.activeDropdown = action.payload;
    },
  },
});

export const { toggleMobileMenu, setMobileMenuOpen, setActiveDropdown } =
  uiSlice.actions;
export default uiSlice.reducer;
