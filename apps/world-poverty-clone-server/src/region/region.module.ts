import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RegionModuleBase } from "./base/region.module.base";
import { RegionService } from "./region.service";
import { RegionController } from "./region.controller";
import { RegionResolver } from "./region.resolver";

@Module({
  imports: [RegionModuleBase, forwardRef(() => AuthModule)],
  controllers: [RegionController],
  providers: [RegionService, RegionResolver],
  exports: [RegionService],
})
export class RegionModule {}
