import { TCourse } from "./course.interface";
import { Course } from "./course.model";

const createCourse = async (courseData: TCourse) => {
  const result = await Course.create(courseData);

  return result;
};

export const courseServices = {
  createCourse,
};
