/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParameters } from "../../interface/queryInterface";
import { Review } from "../Review/review.model";
import { TCourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async (courseData: TCourse) => {
  const result = await Course.create(courseData);

  return result;
};

const getAllCoursesFromDB = async (queryParameters: TQueryParameters) => {
  try {
    const {
      page = "1",
      limit = "10",
      sortBy,
      sortOrder,
      minPrice,
      maxPrice,
      tags,
      startDate,
      endDate,
      language,
      provider,
      durationInWeeks,
      level,
    } = queryParameters;

    const query: any = {};

    if (minPrice && maxPrice) {
      query.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
    }

    if (tags) {
      query.tags = { $elemMatch: { name: tags } };
    }

    if (startDate && endDate) {
      query.startDate = { $gte: startDate, $lte: endDate };
    }

    if (language) {
      query.language = language;
    }

    if (provider) {
      query.provider = provider;
    }

    if (durationInWeeks) {
      query.durationInWeeks = parseInt(durationInWeeks);
    }

    if (level) {
      query["details.level"] = level;
    }

    const result = await Course.find(query)
      .sort({ [sortBy || "createdAt"]: sortOrder === "desc" ? -1 : 1 })
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit));

    const meta = {
      page: parseFloat(page),
      limit: parseFloat(limit),
      total: result.length,
    };

    return { result, meta };
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

const getSingleCourseFromDB = async (id: string) => {
  const course = await Course.findById(id);

  const reviews = await Review.findOne({ courseId: id });
  const result = { course, reviews };

  return result;
};

const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
  const result = await Course.findOneAndUpdate(
    { _id: id },
    { $set: payload },
    { new: true, runValidators: true }
  );
  return result;
};

const getBestCourseFromDB = async () => {
  const findBestCourse = await Review.aggregate([
    {
      $group: {
        _id: "$courseId",
        averageRating: { $avg: "$rating" },
        totalReviews: { $sum: 1 },
      },
    },
    {
      $sort: { averageRating: -1 },
    },
    {
      $limit: 1,
    },
  ]);

  if (findBestCourse.length === 0) {
    throw new Error("No reviews found");
  }

  const bestCourseId = findBestCourse[0]._id;

  const bestCourse = await Course.findById(bestCourseId);
  const result = {
    course: bestCourse,
    averageRating: findBestCourse[0].averageRating,
    totalReviews: findBestCourse[0].totalReviews,
  };
  return result;
};

export const courseServices = {
  createCourseIntoDB,
  getSingleCourseFromDB,
  getAllCoursesFromDB,
  updateCourseIntoDB,
  getBestCourseFromDB,
};
