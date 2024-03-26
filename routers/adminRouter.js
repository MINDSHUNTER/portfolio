const adminRouter = require('express').Router()
const adminController = require('../controllers/adminController');
const authguard = require('../services/authguard');

adminRouter.get('/login', adminController.displayLogin);
adminRouter.post('/login', adminController.validLogin);

adminRouter.get('/dashboard', authguard, adminController.displayDashboard)



module.exports =  adminRouter