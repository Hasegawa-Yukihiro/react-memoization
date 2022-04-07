import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Home } from "../pages/home";
import { MemoParent } from "../pages/memoParent";
import { usePageRoute } from "./hooks";

const Router = () => {
  const { history } = usePageRoute();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/memo-parent" element={<MemoParent />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HistoryRouter>
  );
};

export { Router };
