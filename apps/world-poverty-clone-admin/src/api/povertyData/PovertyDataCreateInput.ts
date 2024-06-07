import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type PovertyDataCreateInput = {
  population?: number | null;
  povertyRate?: number | null;
  region?: RegionWhereUniqueInput | null;
  year?: number | null;
};
