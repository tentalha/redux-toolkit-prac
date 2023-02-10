import axios from "axios";
import { url } from "./CONSTANTS";


export const get_all_rockets = async () => {
    const response = await axios.get(url);
    // console.log(response)
    return response;
}