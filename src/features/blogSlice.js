import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from './api'
import storage from 'redux-persist/lib/storage'


  
const initialState = {
    blogg: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    makecomment: false,
    message: '',
    isLiked: false,
    isDeleted: false,
    commentz: [],
    aPost: [],
    mypost: [],
    viewPosts: [],
}

export const createPost = createAsyncThunk('/post/create', async ({data, navigate, toast}, thunkAPI) => {
    try {
     return await api.createPost({data, navigate, toast})
 
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const getPost = createAsyncThunk('/post/get', async (_, thunkAPI) => {
    try {
     
     return  await  api.getPost()
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const viewAllPosts = createAsyncThunk('/post/view', async (_, thunkAPI) => {
    try {
     
     return  await  api.viewAllPost()
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const getPostsOfPerson = createAsyncThunk('/post/getAPost', async (id, thunkAPI) => {
    try {
     
     return  await  api.getPostOfPerson(id)
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const myPosts = createAsyncThunk('/post/getmyPost', async (_, thunkAPI) => {
    try {
     
     return  await  api.getMyPost()
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const getComment = createAsyncThunk('/post/getcomment', async (id, thunkAPI) => {
    try {
     
     return  await  api.getComment(id)
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const updatePost = createAsyncThunk('/post/update', async ({id, data, navigate, toast}, thunkAPI) => {
    try {
     return await api.updatePost({id, data, navigate, toast})
 
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const deletePost = createAsyncThunk('/post/delete', async ({postId}, thunkAPI) => {
    try {
     return await api.deletePost({postId })
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const likePost = createAsyncThunk('/post/like', async ({postId}, thunkAPI) => {
    try {
     return await api.likePost({postId})
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})

export const postComment = createAsyncThunk('/post/createcomment', async ({comments, id}, thunkAPI) => {
    try {
        console.log(comments)
     return await api.postComment({comments, id})
 
    } catch (error) {
        const message = error.response || error.response.data
        return thunkAPI.rejectWithValue(message)
    }
})


export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.updated = false
        },
        resetPost: () => {
          storage.removeItem('persist:root')
        }
    },

    extraReducers: (builder) => {
        builder
       .addCase(createPost.pending, (state, action) => {
           state.isLoading = true
       })
       .addCase(createPost.fulfilled, (state, action) => {
           state.isLoading = false
           state.isSuccess = true
           console.log(action)
       })
       .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
           state.isError = true
           state.message = action.payload
       })
       .addCase(getPost.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isDeleted = false
        state.isLiked = false
        console.log(action)
        state.blogg = action.payload.allPost
        
    })
    .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true
        state.message = action.payload
    })
    .addCase(viewAllPosts.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(viewAllPosts.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action)
        state.viewPosts = action.payload.allPost
        
    })
    .addCase(viewAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true
        state.message = action.payload
    })
    .addCase(getComment.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(getComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.makecomment = false
        console.log(action)
        state.commentz = action.payload.allPost
        
    })
    .addCase(getComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true
        state.message = action.payload
    })
    .addCase(getPostsOfPerson.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(getPostsOfPerson.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action)
        state.aPost = action.payload.allPost
        
    })
    .addCase(getPostsOfPerson.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true
        state.message = action.payload
    })
    .addCase(myPosts.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(myPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(action)
        state.mypost = action.payload.allPost
        
    })
    .addCase(myPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true
        state.message = action.payload
    })
    .addCase(updatePost.pending, (state, action) => {
        state.isLoading = true
    })
    .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.updated = true
        console.log({actionz : action})
        state.blogg = state.blogg.map((item) =>  item._id === action.payload._id ? action.payload.updatedPost : item)
    })
    .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(deletePost.pending, (state, action) => {
        state.isDeleted = true
    })
    .addCase(deletePost.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isDeleted = true
        console.log(action)
        state.blogg = state.blogg.filter((item) =>  item._id !== action.payload._id )
        //return all post whose _id is not equal to id     
    })
    .addCase(deletePost.rejected, (state, action) => {
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
    })
    .addCase(likePost.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(likePost.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLiked = true
        console.log(action)
    })
    .addCase(likePost.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
    })
    .addCase(postComment.pending, (state, action) => {
        state.isLoading = false
    })
    .addCase(postComment.fulfilled, (state, action) => {
        state.makecomment = true
       console.log(action)
    })
    .addCase(postComment.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
    })


    }
})

export const { reset, resetPost } = blogSlice.actions
export default blogSlice.reducer
