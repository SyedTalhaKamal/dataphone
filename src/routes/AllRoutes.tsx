import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Overview from "../screens/Overview";

const AllRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
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
};

export default AllRoutes;