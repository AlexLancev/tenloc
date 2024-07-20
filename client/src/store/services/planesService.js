import axios from "axios";

const getPlanes = async () => {
    const planes = await axios.get('/api/tours');
    return planes.data;
}

const getBlog = async () => {
    const planes = await axios.get('/api/blog');
    return planes.data;
}

const getPlane = async (id) => {
    const planes = await axios.get(`/api/tours/${id}`);
    return planes.data;
}

const getBlogArticle = async (id) => {
    const planes = await axios.get(`/api/blog/${id}`);
    return planes.data;
}

const planesService = {
    getPlanes,
    getBlog,
    getPlane,
    getBlogArticle
}

export default planesService;