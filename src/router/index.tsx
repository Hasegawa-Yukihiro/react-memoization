import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Home } from "../pages/home";
import { MemoParent } from "../pages/memoParent";
import { NotMemoParent } from "../pages/notMemoParent";
import { NotUseCallbackParent } from "../pages/notUseCallbackParent";
import { UseCallbackParent } from "../pages/useCallbackParent";
import { usePageRoute } from "./hooks";

const Router = () => {
  const { history } = usePageRoute();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/memo-parent" element={<MemoParent />} />
        <Route path="/not-memo-parent" element={<NotMemoParent />} />
        <Route path="/useCallback-parent" element={<UseCallbackParent />} />
        <Route
          path="/not-useCallback-parent"
          element={<NotUseCallbackParent />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </HistoryRouter>
  );
};

export { Router };
