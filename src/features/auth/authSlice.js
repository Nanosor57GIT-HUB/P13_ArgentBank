import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage 
// Obtenir l'utilisateur de localStorage
const user = JSON.parse(localStorage.getItem("user"));

//initialization of default settings 
// initialisation des paramètres par défaut
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  firstName: "",
  lastName: "",
};

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
   return  await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// profile user
export const profile = createAsyncThunk(
  "auth/profile",
  async (profileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;
      return await authService.profile(profileData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//profile update
export const profileUpdate = createAsyncThunk(
  "auth/profileUpdate",
  async (profileUpdateData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.body.token;
      return await authService.profileUpdate(profileUpdateData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
   authService.logout();
});



// Creating a Reducer function with a single function 
// création d'une fonction Reducer avec une seule fonction
export const authSlice = createSlice({
  name: "auth",
  initialState,
  // Create action and response
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.firstName = "";
      state.lastName = "";
    },
    editUserName: (state) => {
      state.isEditUser = true;
    },
    cancelUserName: (state) => {
      state.isEditUser = false;
    },
  },
  // Response to reducers on createAsyncThunk
  // réponse aux réducteurs sur createAsyncThunk
  extraReducers: (builder) => {
    // Builder of the statuses on the request
    // construction des status sur la requete
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(profile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.isError = false;
        state.message = "";
      })
      .addCase(profile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(profileUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(profileUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.isError = false;
        state.message = "";
      })
      .addCase(profileUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const {
  reset,
  editUserName,
  cancelUserName,
} = authSlice.actions;
export default authSlice.reducer;
