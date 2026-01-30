import { Routes, Route } from "react-router-dom";

import React from "react";
import { AddOne } from "../pages/AddOne";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addone" element={<AddOne />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
