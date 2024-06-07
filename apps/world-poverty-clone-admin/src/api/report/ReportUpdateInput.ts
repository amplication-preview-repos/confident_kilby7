import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  description?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
