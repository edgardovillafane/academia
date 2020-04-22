const express = require('express');
const router = express.Router();

const students = require('../controllers/student.controller');

router.get('/', students.getAllStudents);
router.post('/', students.createStudent);
router.get('/:id', students.getStudent);
router.put('/:id', students.editStudent);
router.delete('/:id', students.editStudent);

module.exports = router;