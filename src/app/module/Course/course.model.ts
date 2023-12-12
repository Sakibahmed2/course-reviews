import { Schema, model } from "mongoose";
import { TCourse } from "./course.interface";
import moment, { Moment } from "moment";

const courseSchema = new Schema<TCourse>({
  title: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: { type: Number, required: true },
  tags: [
    {
      name: { type: String, required: true },
      isDeleted: { type: Boolean, default: false },
    },
  ],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  language: { type: String, required: true },
  provider: { type: String, required: true },
  durationInWeeks: { type: Number },
  details: {
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    description: { type: String, required: true },
  },
});

courseSchema.pre("save", function (next) {
  const startMoment: Moment = moment(this.startDate);
  const endMoment: Moment = moment(this.endDate);
  this.durationInWeeks = Math.ceil(endMoment.diff(startMoment, "weeks", true));
  next();
});

export const Course = model<TCourse>("Course", courseSchema);
