const Plane = require("../modles/planes");

/**
 * Получить все самолеты
 * @param {*} req 
 * @param {*} res 
 */
const getPlanes = async (req, res) => {
  try {
    // Получаем все самолеты из Монго
    const planes = await Plane.find();

    res.status(200).json(planes);
  } catch {
    res.status(500).json({ message: "Не удалось получить список самолетов, повторите попытку познее" });
  }
};

/**
 * Получить самолет по id
 * @param {*} req 
 * @param {*} res 
 */
const getPlane = async (req, res) => {
  try {
    // Получаем самолет из Монго
    const plane = await Plane.find({ _id: req.params.id });

    res.status(200).json(plane);
  } catch {
    res.status(404).json({
      message: "Самолёт не найден"
    })
  }
};

module.exports = {
  getPlanes,
  getPlane
};