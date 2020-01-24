import { agent as request } from 'supertest';

import App from '../../app';
import { PostsController } from './post.controller';

describe('Post controller TEST', () => {
  const postController = new PostsController();
  const app = new App([postController]);

  const req = request(app.getServer());

  it('should return a data when calling method GET', async done => {
    const response = await req.get('/api/posts');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
    done();
  });
});
