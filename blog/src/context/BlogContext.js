import createDataContext from "./createDataContext"
import jsonServer from "../api/jsonServer"

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map(post => {
                return post.id === action.payload.id ?
                    action.payload : blogPost
            })
        case 'get_blogpost':
            return action.payload
        default:
            return state
    }
}

const getBlogPosts = dispatch => async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({ type: 'get_blogpost', payload: response.data })
}

const addBlogPost = (dispatch) => async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })
    // dispatch({ type: 'add_blogpost', payload: { title, content } })
    callback()
}

const deleteBlogPost = dispatch => async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id })
}

const editBlogPost = dispatch => async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    callback()
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);