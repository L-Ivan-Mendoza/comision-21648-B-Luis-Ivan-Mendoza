const { Router } = require('express');
const { getPosteos, FormCreatePosteo, createPosteo } = require('../src/controllers/posteos.controllers');

const router = Router();

router.get('/', getPosteos);
router.get('/new', FormCreatePosteo);
router.post('/', createPosteo);

module.exports = router;