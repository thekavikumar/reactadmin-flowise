import React from "react";
import { Admin, Resource } from "react-admin";
import { Flowise } from "flowise-local";

export const App = () => (
  <Admin>
    <Resource name="home" list={<>hello there</>} />
    <Resource name="flowise" list={<Flowise />} />
  </Admin>
);
