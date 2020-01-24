import App from './app';
import { Controllers } from './controllers';

const app = new App(Controllers, 3000);

app.listen();
