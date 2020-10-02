import axios from "axios";

const url = "http://localhost:5000/store/category";

class Service{
    getCategory(category_name){
        return axios.get(`${url}/${category_name}`);
    
    }
};
export default Service;