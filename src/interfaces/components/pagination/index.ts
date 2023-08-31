import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  setCurrentPag: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setItems: Dispatch<SetStateAction<any[] | undefined>>;
  getNewItemsPage: (index: number) => any[];
}
