import { postsService } from '../services';

export const postsController = {
  async get(req, res) {
    let data;
    try{
      data = await postsService.getPosts();
    }catch (error) {
      throw { status: 500, message: error};
    }

    res.status(200).json(data);
  },
};