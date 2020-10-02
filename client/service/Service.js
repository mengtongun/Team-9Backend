import axios from "axios";

const url = "http://localhost:5000/store/category";

class Service{
    getCategory(category_name){         //Pass the collection name in the parameter to fetch all the store
        return axios.get(`${url}/${category_name}`);
    
    }
    searchStore(text){
        
    }
};
export default Service;