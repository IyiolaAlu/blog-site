import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    fullname: JSON.parse(localStorage.getItem("user"))?.fullname || "Guest",
    token: "",
    todo: [],
  },

  reducers: {
    updateName: (state, actions) => {
      state.fullname = actions.payload;
    },

    // storeTodo:(state, actions)=>{
    //     state.todo.push(actions.payload)
    // },

    // deleteTodo:(state, actions)=>{
    //     state.todo = state.todo.filter((item) => item !== actions.payload)
    //     // state.todo.splice(actions.payload,1)
    //     // console.log(state.todo)
    // }
  },
});

export default appSlice.reducer;
export const { updateName } = appSlice.actions;
