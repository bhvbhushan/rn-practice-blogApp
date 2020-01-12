import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'delBlogPost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'editBlogPost':
      return state.map(blogPost => {
        blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'getBlogPosts':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogPosts');

    dispatch({ type: 'getBlogPosts', payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('blogPosts', { title, content });
    callback();
  };
};

const delBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch({ type: 'delBlogPost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`blogPosts/${id}`, { title, content });
    dispatch({ type: 'editBlog', payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, delBlogPost, editBlogPost, getBlogPost },
  []
);
