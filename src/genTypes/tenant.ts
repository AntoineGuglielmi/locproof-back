import { Rental } from './rental';

export interface Tenant {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  firstname?: string;
  lastname?: string;
  email?: string;
  slug?: string;
  emailVerified?: boolean;
  emailVerificationToken?: string;
  rentals?: Rental[] | null;
};
