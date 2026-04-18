import { Tenant } from './tenant';

export interface Rental {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  address?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  landlordEmail?: string;
  validationToken?: string;
  tokenExpiresAt?: Date | string;
  validatedAt?: Date | string;
  tenant?: Tenant | null;
};
