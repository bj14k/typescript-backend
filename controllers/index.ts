import { IController } from '../models/controller.interface';

import { PostsController } from './posts/post.controller';

// tslint:disable-next-line: variable-name
export const Controllers: IController[] = [
    new PostsController(),
];
