import { Nutrients } from "@/interfaces/client";

export interface RecipeDetailProps {
  title: string;
  image: string;
  ingredients: string[];
  nutrients: Nutrients[],
  portions: number;
  tags: string[];
}
