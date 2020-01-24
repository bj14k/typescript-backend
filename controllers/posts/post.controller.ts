import * as express from 'express';
import { Request, Response } from 'express';

import { IController } from '../../models/controller.interface';

export class PostsController implements IController {
  public path = '/posts';
  public router = express.Router();

  public posts: any[] = [
    {
      author: 'Marcin',
      content: 'Dolor sit amet',
      title: 'Lorem Ipsum',
    },
  ];

  constructor() {
    this.intializeRoutes();
  }

  public get(req: Request, res: Response): void {
    res.send(this.posts);
  }

  public post(req: Request, res: Response): void {
    const newPost: any = req.body;
    this.posts.push(newPost);
    res.send(newPost);
  }

  public intializeRoutes() {
    this.router.get(this.path, this.get);
    this.router.post(this.path, this.post);
  }
}
