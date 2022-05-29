const items = require('../Items');
const { v4: uuidv4 } = require('uuid');

const getItems = (req, res) => {
  console.log(items);
  res.send(items);
};

const getItem = (req, res) => {
  const id = req.params.id;
  const item = items.find((item) => item.id === id);
  res.send(item);
};

const addItem = (req, res) => {
  const { name } = req.body;
  const item = {
    id: uuidv4(),
    name,
  };

  items.push(item);
  res.status(201).send(item);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex((item) => item.id === id);
  if(itemIndex === -1) {
    return res.status(404).send('Item not found');
  }
  items.splice(itemIndex, 1);
  res.send({
    message: `Item with id ${id} has been deleted`,
  });
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const itemIndex = items.findIndex((item) => item.id === id);
  if(itemIndex === -1) {
    return res.status(404).send('Item not found');
  }
  items[itemIndex].name = name;
  res.send(items[itemIndex]);
}

module.exports = {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem
};
