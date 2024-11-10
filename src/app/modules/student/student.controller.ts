import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentService.createStudent(student);

    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Get all Students!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getStudentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await StudentService.getStudentById(id);
    res.status(200).json({
      success: true,
      message: 'Get Student By Id!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getStudentById,
};
