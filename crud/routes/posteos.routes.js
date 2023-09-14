const { Router } = require('express');
const { getPosteos, formCreatePosteo, createPosteo, formEditPosteo, editPosteo, deletePosteo } = require('../src/controllers/posteos.controllers');

const router = Router();

router.get('/', getPosteos);
router.get('/new', formCreatePosteo);
router.get('/edit/:id', formEditPosteo);
router.get('/delete/:id', deletePosteo);

router.post('/', createPosteo);
router.post('/edit', editPosteo)

module.exports = router;