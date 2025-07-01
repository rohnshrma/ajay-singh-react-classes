import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  tasks: [],
  filter: "all",
  status: "idle",
  error: null,
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  try {
    const response = await axios.get(
      "https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json"
    );
    const data = response.data;

    var final_data = data
      ? Object.keys(data).map((key) => {
          return { ...data[key], id: key };
        })
      : [];

    console.log("final data", final_data);

    return final_data;
  } catch (err) {
    throw new Error(err.message);
  }
});

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await axios.post(
    "https://keeper-app-1199-default-rtdb.firebaseio.com/tasks.json",
    task
  );

  return { ...task, id: response.data.name };
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    await axios.delete(
      `https://keeper-app-1199-default-rtdb.firebaseio.com/tasks/${taskId}.json`
    );

    return taskId;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => (state.status = "loading"))
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => (state.status = "failed"))
      .addCase(addTask.fulfilled, (state, action) =>
        state.tasks.unshift(action.payload)
      )
      .addCase(
        deleteTask.fulfilled,
        (state, action) =>
          (state.tasks = state.tasks.filter(
            (task) => task.id !== action.payload
          ))
      );
  },
});

export const { setFilter } = taskSlice.actions;

export const selectFilteredTasks = (state) => {
  state.tasks.filter === "all"
    ? state.tasks.tasks
    : state.tasks.tasks.filter((task) => task.status === state.tasks.filter);
};

export default taskSlice.reducer;
