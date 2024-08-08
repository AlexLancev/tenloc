import axios from 'axios';

const database_uri = process.env.REACT_APP_API_KEY;

const getTours = async () => {
  const tours = await axios.get(`${database_uri}/api/tours`);
  return tours.data;
};

const getBlog = async () => {
  const blog = await axios.get(`${database_uri}/api/blog`);
  return blog.data;
};

const getTourId = async (id) => {
  const tourId = await axios.get(`${database_uri}/api/tours/${id}`);
  return tourId.data;
};

const getBlogId = async (id) => {
  const blogId = await axios.get(`${database_uri}/api/blog/${id}`);
  return blogId.data;
};

const service = {
  getTours,
  getBlog,
  getTourId,
  getBlogId,
};

export default service;
