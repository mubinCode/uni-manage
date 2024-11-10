import { StudentModel } from '../student.model';
import { Student } from './student.interface';
const createStudent = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};
const getStudentById = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentService = {
  createStudent,
  getAllStudents,
  getStudentById,
};
