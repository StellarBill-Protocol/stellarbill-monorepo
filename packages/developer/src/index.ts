export const STELLARBILL_VERSION = "0.1.0";

export type Invoice = {
  id: string;
  amount: number;
  currency: string;
  recipient: string;
  createdAt: string;
};
