import StoreItems from "../models/StoreItems.js";

export const getItems = async (req, res) => {
  try {
    const item = await StoreItems.find();
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await StoreItems.findById(id);
    if (item) {
      return res.json(item);
    }

    res.status(404).json({ message: "item not found! Use Valid ID" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createItem = async (req, res) => {
  const item = new StoreItems(req.body);
  await item.save();
  res.status(201).json(item);
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const item = await StoreItems.findByIdAndUpdate(id, req.body);
  res.status(201).json(item);
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await StoreItems.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Item removed!");
    }

    throw new Error("Item not found! Use Valid ID");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
