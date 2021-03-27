import { postsRepositories } from '../repositories/posts';

export const postsService = {
  async getPosts() {
    try{
      let queryResult = await postsRepositories.getAllPosts();
      return queryResult;
    }catch(error){
      throw { status: 500, message: error};
    }
  },
};
