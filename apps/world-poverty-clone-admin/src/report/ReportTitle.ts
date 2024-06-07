import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "title";

export const ReportTitle = (record: TReport): string => {
  return record.title?.toString() || String(record.id);
};
