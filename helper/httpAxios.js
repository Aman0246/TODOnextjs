import axios from "axios";
axios.defaults.baseURL = process.env.AXIOS_URL;


export async function addTask(tasks){
    try {
        await axios.post('/api/tasks/',{tasks}).then((result)=>{
            return result;
        })
        
    } catch (error) {
        return error.response.data
        ;
    }
}