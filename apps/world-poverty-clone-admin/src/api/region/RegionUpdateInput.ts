import { PovertyDataUpdateManyWithoutRegionsInput } from "./PovertyDataUpdateManyWithoutRegionsInput";

export type RegionUpdateInput = {
  country?: string | null;
  name?: string | null;
  povertyDataItems?: PovertyDataUpdateManyWithoutRegionsInput;
};
