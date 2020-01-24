import { Router, Response, Request, NextFunction } from 'express';

export interface IController {
    path: string;
    router: Router;
    intializeRoutes: () => void;
    get?: (req: Request, res: Response, next: NextFunction) => void;
    post?: (req: Request, res: Response, next: NextFunction) => void;
    put?: (req: Request, res: Response, next: NextFunction) => void;
    delete?: (req: Request, res: Response, next: NextFunction) => void;
}
