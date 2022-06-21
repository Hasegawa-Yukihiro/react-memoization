import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => navigate("memo")}>React.memo あり</button>
      <button onClick={() => navigate("notMemo")}>React.memo なし</button>
      <button onClick={() => navigate("useCallback")}>useCallback あり</button>
      <button onClick={() => navigate("notUseCallback")}>
        useCallback なし
      </button>
      <button onClick={() => navigate("useMemo")}>useMemo あり</button>
      <button onClick={() => navigate("notUseMemo")}>useMemo なし</button>
      <button onClick={() => navigate("memoObject")}>
        Objectのメモ化 あり
      </button>
      <button onClick={() => navigate("notMemoObject")}>
        Objectのメモ化 なし
      </button>
    </div>
  );
};

export { Home };
