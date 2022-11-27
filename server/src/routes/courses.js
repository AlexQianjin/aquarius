const express = require('express');
const router = express.Router();

const coursesController = require('../controllers/courses');

/* GET courses listing. */
router.get('/', (req, res) => coursesController.getCourse(req, res));
router.get('/monthly', (req, res) => coursesController.getMonthlyCourses(req, res));

module.exports = router;