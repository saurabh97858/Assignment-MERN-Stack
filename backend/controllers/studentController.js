const Student = require('../models/Student');
const fs = require('fs');
const path = require('path');

const logError = (error) => {
    const logPath = path.join(__dirname, '../backend_debug.log');
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${error.message}\nSTACK: ${error.stack}\n\n`;
    fs.appendFileSync(logPath, logMessage);
};

const logInfo = (message) => {
    const logPath = path.join(__dirname, '../backend_debug.log');
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logPath, `[${timestamp}] INFO: ${message}\n\n`);
};

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
const getStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get student profile (for the student dashboard)
// @route   GET /api/students/profile
// @access  Private/Student
const getStudentProfile = async (req, res) => {
    try {
        // Find student by email of the logged in user
        const student = await Student.findOne({ email: req.user.email });
        if (student) {
            res.json(student);
        } else {
            // If no student record check if we should create one or just return basic info
            res.status(404).json({ message: 'Student profile not found. Please contact admin.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a student
// @route   POST /api/students
// @access  Private/Admin
const createStudent = async (req, res) => {
    const { name, email, course, enrollmentDate } = req.body;

    try {
        const student = new Student({
            name,
            email,
            course,
            enrollmentDate: enrollmentDate || undefined,
        });

        logInfo(`Creating student: ${JSON.stringify(req.body)}`);

        const createdStudent = await student.save();
        logInfo(`Student created successfully: ${createdStudent._id}`);
        res.status(201).json(createdStudent);
    } catch (error) {
        logError(error);
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Private/Admin
const updateStudent = async (req, res) => {
    const { name, email, course, enrollmentDate } = req.body;

    try {
        const student = await Student.findById(req.params.id);

        if (student) {
            student.name = name || student.name;
            student.email = email || student.email;
            student.course = course || student.course;
            student.enrollmentDate = enrollmentDate || student.enrollmentDate;

            const updatedStudent = await student.save();
            res.json(updatedStudent);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private/Admin
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (student) {
            await student.deleteOne();
            res.json({ message: 'Student removed' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    getStudentProfile,
    createStudent,
    updateStudent,
    deleteStudent,
};
