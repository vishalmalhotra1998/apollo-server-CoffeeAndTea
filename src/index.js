import config from './configuration/config';
import Server from './Server';
import schema from './schema';

const server = new Server(config);

server.bootStrap();
server.apolloServerSetup(schema);
