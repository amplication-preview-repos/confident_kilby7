import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RegionList } from "./region/RegionList";
import { RegionCreate } from "./region/RegionCreate";
import { RegionEdit } from "./region/RegionEdit";
import { RegionShow } from "./region/RegionShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { PovertyDataList } from "./povertyData/PovertyDataList";
import { PovertyDataCreate } from "./povertyData/PovertyDataCreate";
import { PovertyDataEdit } from "./povertyData/PovertyDataEdit";
import { PovertyDataShow } from "./povertyData/PovertyDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WorldPovertyClone"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Region"
          list={RegionList}
          edit={RegionEdit}
          create={RegionCreate}
          show={RegionShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="PovertyData"
          list={PovertyDataList}
          edit={PovertyDataEdit}
          create={PovertyDataCreate}
          show={PovertyDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
