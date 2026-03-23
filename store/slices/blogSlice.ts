import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts, BlogPost, createPost, updatePost, deletePost } from "@/services/blogService";

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("blog/fetchPosts", async () => {
  return await getPosts();
});

export const addPost = createAsyncThunk("blog/addPost", async (post: BlogPost) => {
  return await createPost(post);
});

export const editPost = createAsyncThunk(
  "blog/editPost",
  async ({ id, data }: { id: number; data: BlogPost }) => {
    return await updatePost(id, data);
  }
);

export const removePost = createAsyncThunk("blog/removePost", async (id: number) => {
  await deletePost(id);
  return id;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((p) => p.id !== action.payload);
      });
  },
});

export default blogSlice.reducer;
