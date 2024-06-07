import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PovertyDataService } from "./povertyData.service";
import { PovertyDataControllerBase } from "./base/povertyData.controller.base";

@swagger.ApiTags("povertyData")
@common.Controller("povertyData")
export class PovertyDataController extends PovertyDataControllerBase {
  constructor(
    protected readonly service: PovertyDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
