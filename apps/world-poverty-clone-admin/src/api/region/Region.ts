import { PovertyData } from "../povertyData/PovertyData";

export type Region = {
  country: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  povertyDataItems?: Array<PovertyData>;
  updatedAt: Date;
};
