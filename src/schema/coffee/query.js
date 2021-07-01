export const CoffeQueries = {
    getAllCoffeeList: async (parent, args, context) => {
        const { dataSources : { coffeeDataSource } } = context;
        const response = await coffeeDataSource.list(args)
        console.log({ response })
        return response.data;
    }
}