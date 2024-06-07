import { Region } from "../region/Region";

export type PovertyData = {
  createdAt: Date;
  id: string;
  population: number | null;
  povertyRate: number | null;
  region?: Region | null;
  updatedAt: Date;
  year: number | null;
};
