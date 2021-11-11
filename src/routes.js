const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.send({ message: 'API Started, ok!' }));

module.exports = routes;
