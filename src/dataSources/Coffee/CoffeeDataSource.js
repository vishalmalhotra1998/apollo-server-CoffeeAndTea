import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../../configuration/config';

class CoffeeDataSource extends RESTDataSource {
    
    constructor(){
    super();
    this.baseURL = `${config.URL}/coffee`;
    }
    
    list = (query = {} ) => {
     const { options = {} } = query;
     return this.get('/', {
         ...options
     })
    }
}

export default CoffeeDataSource;