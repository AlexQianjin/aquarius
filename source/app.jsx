"use strict";
import React from "react";
import { render } from "react-dom";
import Router from "react-router";
import Routes from "./routes.jsx";
render(
    Routes,
    document.getElementById('container')
);