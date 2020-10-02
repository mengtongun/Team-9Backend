import axios from "axios";

const url = "http://localhost:5000/store/category";
// const urlSearch = ""

class Service{
    getCategory(category_name){         //Pass the collection name in the parameter to fetch all the store in the category
        return axios.get(`${url}/${category_name}`);
    
    }
    searchStore(category_name,text_search){      //pass category name and pass the text_search #recommend Watcher
        return axios.get(`${url}/${category_name}/search/${text_search}`)
    }
};
export default Service;