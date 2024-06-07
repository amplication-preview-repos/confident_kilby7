import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  description?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
