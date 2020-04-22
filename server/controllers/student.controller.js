const Student = require('../models/students');

const studentCtrl = {};

studentCtrl.getAllStudents = async (req, res, next) => {
    const students = await Student.find();
    res.json(students);
};

studentCtrl.createStudent = async (req, res, next) => {
    const student = new Student({
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone

    });
    await student.save();
    res.json({status: 'Student created'});
};

studentCtrl.getStudent = async (req, res, next) => {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json(student);
};

studentCtrl.editStudent = async (req, res, next) => {
    const { id } = req.params;
    const student = {
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone
    };
    await Student.findByIdAndUpdate(id, {$set: student}, {new: true});
    res.json({status: 'Student Updated'});
};

studentCtrl.deleteStudent = async (req, res, next) => {
    await Student.findByIdAndRemove(req.params.id);
    res.json({status: 'Student Deleted'});
};

module.exports = studentCtrl;