interface TDetails {
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

export interface TCourse {
  _id: string; // MongoDB Object ID
  title: string;
  instructor: string;
  categoryId: string; // Reference to the category collection
  price: number;
  tags: {
    name: string;
    isDeleted: boolean;
  }[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: TDetails;
}
