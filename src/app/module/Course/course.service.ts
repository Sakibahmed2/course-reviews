import { TCourse } from "./course.interface";
import { Course } from "./course.model";

const createCourse = async (courseData: TCourse) => {
  const result = await Course.create(courseData);

  return result;
};

const getSingleCourse = async (id: string) => {
  const result = await Course.findById(id);
  return result;
};

export const courseServices = {
  createCourse,
  getSingleCourse,
};
