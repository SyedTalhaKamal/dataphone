import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

/*============ Pages  ===============*/
import Overview from "../screens/Overview";

/*============ Pages  ===============*/

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
        {/*======================== Pages  ===========================*/}
      </Routes>
    </>
  );
}

export default AllRoutes;
