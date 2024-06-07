import { PovertyDataCreateNestedManyWithoutRegionsInput } from "./PovertyDataCreateNestedManyWithoutRegionsInput";

export type RegionCreateInput = {
  country?: string | null;
  name?: string | null;
  povertyDataItems?: PovertyDataCreateNestedManyWithoutRegionsInput;
};
