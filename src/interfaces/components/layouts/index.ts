import { type ReactElement } from 'react';

export interface ShopLayoutProps {
  children: ReactElement
  title: string
  pageDescription: string
  imageFullUrl?: string
}
