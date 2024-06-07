import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PovertyDataTitle } from "../povertyData/PovertyDataTitle";

export const RegionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
