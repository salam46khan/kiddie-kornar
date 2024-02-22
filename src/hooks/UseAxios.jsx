import axios from "axios";

const axiosURL = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxios = () => {
    return axiosURL
};

export default UseAxios;