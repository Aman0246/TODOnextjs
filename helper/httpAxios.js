import axios from "axios";
axios.defaults.baseURL = process.env.AXIOS_URL;

export async function addTask(tasks) {
  try {
    await axios.post("/api/tasks/", { tasks }).then((result) => {
      return result;
    });
  } catch (error) {
    return error.response.data;
  }
}
export async function signup(obj) {
  try {
    const response = await axios.post("/api/users/", obj);

    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
