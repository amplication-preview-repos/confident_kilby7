import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RegionWhereUniqueInput } from "../region/RegionWhereUniqueInput";

export type PovertyDataWhereInput = {
  id?: StringFilter;
  population?: IntNullableFilter;
  povertyRate?: FloatNullableFilter;
  region?: RegionWhereUniqueInput;
  year?: IntNullableFilter;
};
