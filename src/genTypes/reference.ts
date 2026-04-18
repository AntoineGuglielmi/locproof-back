import { Rental } from './rental';

export interface Reference {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  rental?: Rental | null;
  paidOnTime?: boolean;
  wellMaintained?: boolean;
  communication?: boolean;
  recommended?: boolean;
  comment?: string;
};
