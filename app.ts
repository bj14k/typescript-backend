import * as express from 'express';
import * as bodyParser from 'body-parser';
import { loggerMiddleware } from './middleware/logger';
import { IController } from './models/controller.interface';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IController[], port: number = 3000) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(loggerMiddleware);
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach((controller: IController) => {
      this.app.use('/api', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
