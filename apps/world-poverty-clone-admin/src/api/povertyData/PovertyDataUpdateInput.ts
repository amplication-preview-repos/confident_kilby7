import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type PovertyDataUpdateInput = {
  population?: number | null;
  povertyRate?: number | null;
  region?: RegionWhereUniqueInput | null;
  year?: number | null;
};
