import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PovertyDataModuleBase } from "./base/povertyData.module.base";
import { PovertyDataService } from "./povertyData.service";
import { PovertyDataController } from "./povertyData.controller";
import { PovertyDataResolver } from "./povertyData.resolver";

@Module({
  imports: [PovertyDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [PovertyDataController],
  providers: [PovertyDataService, PovertyDataResolver],
  exports: [PovertyDataService],
})
export class PovertyDataModule {}
