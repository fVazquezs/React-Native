import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default ({ navigation }) => {

    const blogId = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find(post => post.id === blogId)

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => editBlogPost(blogId, title, content, () => navigation.pop())}
        />
    )
}