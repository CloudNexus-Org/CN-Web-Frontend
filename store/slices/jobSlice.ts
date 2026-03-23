import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs, Job, createJob, updateJob, deleteJob } from "@/services/jobService";

interface JobState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  return await getJobs();
});

export const addJob = createAsyncThunk("jobs/addJob", async (job: Job) => {
  return await createJob(job);
});

export const editJob = createAsyncThunk(
  "jobs/editJob",
  async ({ id, data }: { id: number; data: Job }) => {
    return await updateJob(id, data);
  }
);

export const removeJob = createAsyncThunk("jobs/removeJob", async (id: number) => {
  await deleteJob(id);
  return id;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch jobs";
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(editJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex((j) => j.id === action.payload.id);
        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((j) => j.id !== action.payload);
      });
  },
});

export default jobSlice.reducer;
