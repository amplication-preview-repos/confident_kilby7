import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PovertyDataResolverBase } from "./base/povertyData.resolver.base";
import { PovertyData } from "./base/PovertyData";
import { PovertyDataService } from "./povertyData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PovertyData)
export class PovertyDataResolver extends PovertyDataResolverBase {
  constructor(
    protected readonly service: PovertyDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
