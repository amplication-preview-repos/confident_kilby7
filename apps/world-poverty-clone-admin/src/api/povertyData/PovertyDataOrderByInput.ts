import { SortOrder } from "../../util/SortOrder";

export type PovertyDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  population?: SortOrder;
  povertyRate?: SortOrder;
  regionId?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
