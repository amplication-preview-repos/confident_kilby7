import { PovertyDataWhereInput } from "./PovertyDataWhereInput";
import { PovertyDataOrderByInput } from "./PovertyDataOrderByInput";

export type PovertyDataFindManyArgs = {
  where?: PovertyDataWhereInput;
  orderBy?: Array<PovertyDataOrderByInput>;
  skip?: number;
  take?: number;
};
