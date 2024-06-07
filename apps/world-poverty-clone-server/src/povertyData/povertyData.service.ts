import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PovertyDataServiceBase } from "./base/povertyData.service.base";

@Injectable()
export class PovertyDataService extends PovertyDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
