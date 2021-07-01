import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as Coffee from './coffee';

const makeTypeArray = fileLoader(path.join(__dirname, './**/*.graphql'))
const typeDefs = mergeTypes(makeTypeArray, { all: true });
const { CoffeQueries } = Coffee;
export default {
    resolvers: {
        Query: {
            ...CoffeQueries,
        }
    },
    typeDefs,
}