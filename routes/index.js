import { Router } from 'express';
var router = Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', async (req, res, next) => {
  try {
    const docs = await global.db.findAll();
    res.render('index', {title: 'Lista de Clientes', docs})
  } catch (err) {
    next(err);
  }
})


export default router;
