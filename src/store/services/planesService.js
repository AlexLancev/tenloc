import axios from "axios";
const database_uri = process.env.REACT_APP_API_KEY;

const getPlanes = async () => {
    const planes = await axios.get(`${database_uri}/api/tours`);
    return planes.data;
}

const getBlog = async () => {
    const planes = await axios.get(`${database_uri}/api/blog`);
    return planes.data;
}

const getPlane = async (id) => {
    const planes = await axios.get(`${database_uri}/api/tours/${id}`);
    return planes.data;
}

const getBlogArticle = async (id) => {
    const planes = await axios.get(`${database_uri}/api/blog/${id}`);
    return planes.data;
}

const planesService = {
    getPlanes,
    getBlog,
    getPlane,
    getBlogArticle
}

export default planesService;