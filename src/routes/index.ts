import bodyParser from "body-parser";
import { routes } from './settingsRouter';

const settings = routes;

export = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(settings)
}

