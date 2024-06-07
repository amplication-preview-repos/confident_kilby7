import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reports?: ReportCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
