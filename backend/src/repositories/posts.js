import { db } from '../data/connection';

export const postsRepositories = {
  async getAllPosts() {
    const query = 'SELECT * FROM posts_table;'
    const values = 'post_id';
    try {
      let data = await db.query(query, values);
      //Query results: for some reason this is not working on my pc
      console.log('query result are: ' + data.results)
      return data.results;

      // let responseObject = {response: 'myResponse'}
      // return responseObject

    } catch (error) {
      throw { status: 500, message: 'Database error on query' };
    }
  }

};
