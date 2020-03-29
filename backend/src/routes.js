const express = require('express');

const OngController = require('../src/controlleres/OngController');
const IncidentController = require('../src/controlleres/IncidentController');
const ProfileController = require('../src/controlleres/ProfileController');
const SessionController = require('../src/controlleres/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

//LISTAGEM DE ONGS
routes.get('/ongs', OngController.index); 
//CADASTRO
routes.post('/ongs',OngController.create);

routes.get("/profile", ProfileController.index);

//LISTAGEM DE INCIDENTES
routes.get('/incidents', IncidentController.index);
//CADASTROS
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;