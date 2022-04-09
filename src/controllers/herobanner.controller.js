import HeroBanner from '../models/herobanner.model';

export const getAllHeroBanner = async (req, res) => {
  try {
    const herobanner = await HeroBanner.find({});
    res.status(200).json(herobanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getOneHeroBanner = async (req, res) => {
  try {
    const herobanner = await HeroBanner.findById(req.params.id);
    res.status(200).json(herobanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createHeroBanner = async (req, res) => {
  try {
    const herobanner = await HeroBanner.create(req.body);
    res.status(201).json(herobanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateHeroBanner = async (req, res) => {
  try {
    const herobanner = await HeroBanner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(herobanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteHeroBanner = async (req, res) => {
  try {
    const herobanner = await HeroBanner.findByIdAndDelete(req.params.id);
    res.status(200).json(herobanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}