import { PovertyData as TPovertyData } from "../api/povertyData/PovertyData";

export const POVERTYDATA_TITLE_FIELD = "id";

export const PovertyDataTitle = (record: TPovertyData): string => {
  return record.id?.toString() || String(record.id);
};
