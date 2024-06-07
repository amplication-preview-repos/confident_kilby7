import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PovertyDataListRelationFilter } from "../povertyData/PovertyDataListRelationFilter";

export type RegionWhereInput = {
  country?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  povertyDataItems?: PovertyDataListRelationFilter;
};
