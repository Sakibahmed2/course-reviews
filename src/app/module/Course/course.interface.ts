import { Types } from "mongoose";

interface TDetails {
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

export interface TCourse {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId; // Reference to the category collection
  price: number;
  tags: {
    name: string;
    isDeleted: boolean;
  }[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks?: number;
  details: TDetails;
}
