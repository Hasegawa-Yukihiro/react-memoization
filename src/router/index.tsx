import React from "react";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { Home } from "../pages/home";
import { Memo } from "../pages/memo";
import { NotMemo } from "../pages/notMemo";
import { NotUseCallback } from "../pages/notUseCallback";
import { NotUseMemo } from "../pages/notUseMemo";
import { UseCallbackParent } from "../pages/useCallbackParent";
import { UseMemo } from "../pages/useMemo";
import { usePageRoute } from "./hooks";

const Router = () => {
  const { history } = usePageRoute();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/memo" element={<Memo />} />
        <Route path="/notMemo" element={<NotMemo />} />
        <Route path="/useCallback" element={<UseCallbackParent />} />
        <Route path="/notUseCallback" element={<NotUseCallback />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/notUseMemo" element={<NotUseMemo />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HistoryRouter>
  );
};

export { Router };
