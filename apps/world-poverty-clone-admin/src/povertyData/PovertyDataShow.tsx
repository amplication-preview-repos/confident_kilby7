import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { REGION_TITLE_FIELD } from "../region/RegionTitle";

export const PovertyDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="population" source="population" />
        <TextField label="povertyRate" source="povertyRate" />
        <ReferenceField label="Region" source="region.id" reference="Region">
          <TextField source={REGION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
