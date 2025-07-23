import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// define the admin
interface AdminAuth {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
  token: string;
  baseResetURL: string;
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

// sign up an admin
export const signUp = createAsyncThunk(
  "adminAuth/registerAdmin",
  async (adminData: Partial<AdminAuth>, thunkAPI) => {
    try {
      const response = await fetch("api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "signUp",
          adminData,
        }),
      });
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (![200, 201].includes(response.status)) {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// login an admin
export const login = createAsyncThunk(
  "adminAuth/login",
  async (adminData: Partial<AdminAuth>, thunkAPI) => {
    try {
      const response = await fetch("api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          type: "login",
          adminData,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status !== 200 && response.status !== 201) {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// forgot password
export const forgotPassword = createAsyncThunk(
  "adminAuth/forgotPassword",
  async (adminData: Partial<AdminAuth>, thunkAPI) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          type: "forgotPassword",
          adminData,
        }),
      });

      const data = await response.json();

      console.log(data);
      if (![200, 201].includes(response.status)) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// reset password
export const resetPassword = createAsyncThunk(
  "adminAuth/resetPassword",
  async (adminData: Partial<AdminAuth>, thunkAPI) => {
    try {
      const response = await fetch(`/api/auth?token=${adminData.token}`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          type: "resetPassword",
          adminData,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (![200, 201].includes(response.status)) {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// otp verification
export const otpVerification = createAsyncThunk(
  "adminAuth/otpVerification",
  async (adminData: Partial<AdminAuth>, thunkAPI) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          type: "otpVerification",
          adminData,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.status !== 200 && response.status !== 201) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// resend otp
export const resendOtp = createAsyncThunk(
  "adminAuth/resendOtp",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          type: "resentOtp",
        }),
      });

      const data = await response.json();
      if (response.status !== 200 && response.status !== 201) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sign up an admin
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // login an admin
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // forgot password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // reset password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // otp verification
      .addCase(otpVerification.pending, (state) => {
        state.loading = true;
      })
      .addCase(otpVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(otpVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // resend otp
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.adminAuth = action.payload as unknown as AdminAuth[];
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default adminAuthSlice.reducer;
