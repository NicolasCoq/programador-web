var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
/* Listar */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.render('admin/novedades', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});




/* para borrar */
router.get('/eliminar/:id', async (req, res, next) => {
  const id = req.params.id;

  //console.log(id)

  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')

});

//muestra el dise;o del formulario "agregar"
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});


//captura datos del formulario "agregar" y los inserta en la tabla
router.post('/agregar', async (req, res, next) => {
  try {

    var img_id = '';

    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;

      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.dato1 != "" && req.body.dato2 != "" && req.body.dato3 != "" && req.body.dato4 != "" && req.body.precio != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });

      console.log(req.body)

      res.redirect('/admin/novedades')

    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar la novedad'
    })
  }
})

//formulario de modificar + datos datos cargados de la novedad elegida por id
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;

  console.log(id)

  var novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
})

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;

    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      dato1: req.body.dato1,
      dato2: req.body.dato2,
      dato3: req.body.dato3,
      dato4: req.body.dato4,
      precio: req.body.precio,
      img_id
    }
    console.log(obj)
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/modificar',

      error: true,
      message: 'No se modificó la novedad'
    })
  }
})

module.exports = router;