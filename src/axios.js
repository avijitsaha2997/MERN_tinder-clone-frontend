import axios from "axios"

const instance = axios.create({
    baseURL: "https://tinder-clone-backend-yovx.onrender.com/"
});

export default instance;