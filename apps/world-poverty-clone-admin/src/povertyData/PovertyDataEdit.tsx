import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RegionTitle } from "../region/RegionTitle";

export const PovertyDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="population" source="population" />
        <NumberInput label="povertyRate" source="povertyRate" />
        <ReferenceInput source="region.id" reference="Region" label="Region">
          <SelectInput optionText={RegionTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
