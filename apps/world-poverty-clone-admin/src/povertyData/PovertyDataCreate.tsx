import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RegionTitle } from "../region/RegionTitle";

export const PovertyDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="population" source="population" />
        <NumberInput label="povertyRate" source="povertyRate" />
        <ReferenceInput source="region.id" reference="Region" label="Region">
          <SelectInput optionText={RegionTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
