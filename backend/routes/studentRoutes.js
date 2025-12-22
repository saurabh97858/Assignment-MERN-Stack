const express = require('express');
const router = express.Router();
const {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentProfile,
} = require('../controllers/studentController');
const { protect, admin } = require('../middleware/authMiddleware');

// Student profile route (for students to view their own)
router.get('/profile', protect, getStudentProfile);

// Admin routes
router.route('/').get(protect, admin, getStudents).post(protect, admin, createStudent);
router
    .route('/:id')
    .put(protect, admin, updateStudent)
    .delete(protect, admin, deleteStudent);

module.exports = router;
