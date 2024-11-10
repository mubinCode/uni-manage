import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/createStudent', StudentController.createStudent);
router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getStudentById);

export const StudentRoutes = router;
