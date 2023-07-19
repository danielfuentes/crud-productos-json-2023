const express = require('express');
const router = express.Router();
const path = require('path');
const controllersAdmin = require(path.resolve(__dirname,'../controllers/controllersAdmin'));

router.get('/administrar', controllersAdmin.index);
router.get('/administrar/create', controllersAdmin.create);
router.post('/administrar/create', controllersAdmin.save);
//router.get('/administrar/detail/:id', controllersAdmin.show);
//router.get('/administrar/edit/:id', controllersAdmin.edit);
//router.put('/administrar/edit/:id', controllersAdmin.update);
//router.get('/administrar/delete/:id', controllersAdmin.destroy);

module.exports = router;