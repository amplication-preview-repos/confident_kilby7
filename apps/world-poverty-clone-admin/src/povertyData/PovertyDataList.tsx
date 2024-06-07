import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REGION_TITLE_FIELD } from "../region/RegionTitle";

export const PovertyDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PovertyDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="population" source="population" />
        <TextField label="povertyRate" source="povertyRate" />
        <ReferenceField label="Region" source="region.id" reference="Region">
          <TextField source={REGION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
      </Datagrid>
    </List>
  );
};
