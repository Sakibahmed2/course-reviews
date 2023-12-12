import { Review } from "../Review/review.model";
import { TCourse } from "./course.interface";
import { Course } from "./course.model";

const createCourse = async (courseData: TCourse) => {
  const result = await Course.create(courseData);

  return result;
};

const getSingleCourse = async (id: string) => {
  const course = await Course.findById(id);

  const review = await Review.findOne({ courseId: id });
  const result = { course, review };

  return result;
};

export const courseServices = {
  createCourse,
  getSingleCourse,
};
