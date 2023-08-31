import { ReactNode } from "react";

export interface ParamsProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}

export interface LayoutProps {
  children: ReactNode;
}
