import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (categoryData: TCategory) => {
  const result = await Category.create(categoryData);
  return result;
};

export const categoryServices = {
  createCategory,
};
