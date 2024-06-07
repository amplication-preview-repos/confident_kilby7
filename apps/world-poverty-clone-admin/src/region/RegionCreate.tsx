import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PovertyDataTitle } from "../povertyData/PovertyDataTitle";

export const RegionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="povertyDataItems"
          reference="PovertyData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PovertyDataTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
