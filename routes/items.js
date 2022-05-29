const {
  getItem,
  getItems,
  addItem,
  deleteItem,
  updateItem,
} = require('../controllers/items');

const Item = {
  id: {
    type: 'string',
  },
  name: {
    type: 'string',
  },
};

// Options for get all items
const getItemOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: Item,
        },
      },
    },
  },
  handler: getItems,
};

// Options for get single item
const getItemOpt = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: Item,
      },
    },
    params: {
      id: {
        type: 'string',
      },
    },
  },
  handler: getItem,
};

// Options for post single item
const postItemOpt = {
  schema: {
    response: {
      201: {
        type: 'object',
        properties: Item,
      },
    },
    body: {
      type: 'object',
      required: ['name'],
      name: {
        type: 'string',
      },
    },
  },
  handler: addItem,
};

// Options for delete single item
const deleteItemOpt = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
        },
      },
    },
    params: {
      id: {
        type: 'string',
      },
    },
  },
  handler: deleteItem,
};

// Options for update single item
const updateItemOpt = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: Item,
      },
    },
    params: {
      id: {
        type: 'string',
      },
    },
    body: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
      },
    },
  },
  handler: updateItem,
};

function itemRoutes(fastify, options, done) {
  // get all item
  fastify.get('/items', getItemOpts);

  // get single item
  fastify.get('/items/:id', getItemOpt);

  // post item
  fastify.post('/items', postItemOpt);

  // delete item
  fastify.delete('/items/:id', deleteItemOpt);

  // update item
  fastify.patch('/items/:id', updateItemOpt);

  done();
}

module.exports = itemRoutes;
