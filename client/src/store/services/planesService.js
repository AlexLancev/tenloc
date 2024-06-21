import axios from "axios";

const getPlanes = async () => {
    const planes = await axios.get('/api/tours');
    return planes.data;
}

const getPlane = async (id) => {
    const planes = await axios.get(`/api/tours/${id}`);
    return planes.data;
}

const planesService = {
    getPlanes,
    getPlane
}

export default planesService;