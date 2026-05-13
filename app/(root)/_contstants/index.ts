import { ElementType } from "react";

export interface ProductCardData {
  id: string;
  name: string;
  desc: string;
  type: "ui" | "dark" | "gradient" | "light";
  icon: ElementType;
  brandColor?: string;
  border?: string;
}

export const PRODUCT_CARDS: ProductCardData[] = [];
