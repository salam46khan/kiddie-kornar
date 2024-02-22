import axios from "axios";

const axiosURL = axios.create({
    baseURL: 'https://kiddie-korner-server.vercel.app'
})
const UseAxios = () => {
    return axiosURL
};

export default UseAxios;