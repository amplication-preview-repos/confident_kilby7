import { User } from "../user/User";

export type Report = {
  createdAt: Date;
  description: string | null;
  id: string;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
