import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import DailyCourses from './components/DailyCourses';
import MonthlyCourses from './components/MonthlyCourses';
import NoMatch from './components/NoMatch';

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DailyCourses />} />
        <Route path="/monthly" element={<MonthlyCourses />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default RouteConfig;
