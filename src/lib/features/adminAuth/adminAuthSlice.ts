import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// define the admin
interface AdminAuth {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
}

export interface AdminAuthSliceState {
  adminAuth: AdminAuth[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: AdminAuthSliceState = {
  adminAuth: [],
  loading: false,
  success: false,
  error: null,
};

// Register admin asyncthunk
export const registerAdmin = createAsyncThunk(
  "admin/registerAdmin",
  async () => {
    console.log("thunk integrated");
  }
);

export const adminAuthSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // register an admin
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adminAuthSlice.reducer;
