import axios from "axios";

const url = "http://localhost:5000/store/category";
// const urlSearch = ""

class Service{
    getCategory(category_name){         //Pass the collection name in the parameter to fetch all the store
        return axios.get(`${url}/${category_name}`);
    
    }
    searchStore(category_name,store_name){
        return axios.get(`${url}/${category_name}/search/${store_name}`)
    }
};
export default Service;