import { SortOrder } from "../../util/SortOrder";

export type RegionOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
