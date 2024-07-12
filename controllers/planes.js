const { Tours, Blog } = require("../modles/planes");

/**
 * @param {*} req 
 * @param {*} res 
 */
const getPlanes = async (req, res) => {
  try {
    const planes = await Tours.find();

    res.status(200).json(planes);
  } catch (error) {
    console.error("Error fetching tours:", error);
    res.status(500).json({ message: "Не удалось получить список экскурсий, повторите попытку позднее" });
  }
};

/**
 * @param {*} req 
 * @param {*} res 
 */
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find();

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Не удалось получить список блогов, повторите попытку позднее" });
  }
};

/**
 * @param {*} req 
 * @param {*} res 
 */
const getPlane = async (req, res) => {
  try {
    const plane = await Tours.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (error) {
    console.error("Error fetching tour:", error);
    res.status(404).json({ message: "Тур не найден" });
  }
};


/**
 * @param {*} req 
 * @param {*} res 
 */
const getBlogArticle = async (req, res) => {
  try {
    const plane = await Blog.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch (error) {
    console.error("Error fetching tour:", error);
    res.status(404).json({ message: "Тур не найден" });
  }
};

module.exports = {
  getPlanes,
  getPlane,
  getBlog,
  getBlogArticle
};
