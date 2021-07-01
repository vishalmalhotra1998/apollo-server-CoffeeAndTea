import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { CoffeeDataSource } from './dataSources';


class Server {
    constructor(config) {
        this.app = express();
        this.config = config;
    }

    bootStrap = () => {
        this.setUpRoutes();
    }

    run = () => {
        const { httpServer, config: { PORT: port } } = this;
        httpServer.listen(port,() => {
            console.log(`app is running on port ${port}`);
        });
    }

    apolloServerSetup = (schema) => {
        const { app } = this;
        this.server = new ApolloServer({
            ...schema,
            dataSources: () => ({
             coffeeDataSource: new CoffeeDataSource(), 
            })
        });
        this.server.applyMiddleware({ app });
        this.httpServer = createServer(app);
        this.run();

    }

    setUpRoutes = () => {
        const { app } = this;
        app.get('/health', (req, res) => {
            res.send('I am OK');
        });
    }
}

export default Server;