/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Region } from "./Region";
import { RegionCountArgs } from "./RegionCountArgs";
import { RegionFindManyArgs } from "./RegionFindManyArgs";
import { RegionFindUniqueArgs } from "./RegionFindUniqueArgs";
import { CreateRegionArgs } from "./CreateRegionArgs";
import { UpdateRegionArgs } from "./UpdateRegionArgs";
import { DeleteRegionArgs } from "./DeleteRegionArgs";
import { PovertyDataFindManyArgs } from "../../povertyData/base/PovertyDataFindManyArgs";
import { PovertyData } from "../../povertyData/base/PovertyData";
import { RegionService } from "../region.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Region)
export class RegionResolverBase {
  constructor(
    protected readonly service: RegionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "read",
    possession: "any",
  })
  async _regionsMeta(
    @graphql.Args() args: RegionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Region])
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "read",
    possession: "any",
  })
  async regions(@graphql.Args() args: RegionFindManyArgs): Promise<Region[]> {
    return this.service.regions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Region, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "read",
    possession: "own",
  })
  async region(
    @graphql.Args() args: RegionFindUniqueArgs
  ): Promise<Region | null> {
    const result = await this.service.region(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Region)
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "create",
    possession: "any",
  })
  async createRegion(@graphql.Args() args: CreateRegionArgs): Promise<Region> {
    return await this.service.createRegion({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Region)
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "update",
    possession: "any",
  })
  async updateRegion(
    @graphql.Args() args: UpdateRegionArgs
  ): Promise<Region | null> {
    try {
      return await this.service.updateRegion({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Region)
  @nestAccessControl.UseRoles({
    resource: "Region",
    action: "delete",
    possession: "any",
  })
  async deleteRegion(
    @graphql.Args() args: DeleteRegionArgs
  ): Promise<Region | null> {
    try {
      return await this.service.deleteRegion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PovertyData], { name: "povertyDataItems" })
  @nestAccessControl.UseRoles({
    resource: "PovertyData",
    action: "read",
    possession: "any",
  })
  async findPovertyDataItems(
    @graphql.Parent() parent: Region,
    @graphql.Args() args: PovertyDataFindManyArgs
  ): Promise<PovertyData[]> {
    const results = await this.service.findPovertyDataItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
