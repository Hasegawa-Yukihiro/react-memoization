import React, { useEffect, useState } from "react";

const Child: React.FC<{ count: number }> = (props) => {
  console.log("Childeレンダリング");

  return <p>Childコンポーネント：{props.count}</p>;
};

export const NotMemo: React.FC = (props) => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parentレンダリング");

  useEffect(() => {
    console.log("🔴 React.memoでメモ化してないよ 🔴");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>React.memoでメモ化していないページ</h2>
      <button
        type="button"
        onClick={() => {
          setParentCount(parentCount + 1);
        }}
      >
        Parent count up
      </button>
      <button
        type="button"
        onClick={() => {
          setChildCount(childCount + 1);
        }}
      >
        Child count up
      </button>
      <p>Parentコンポーネント：{parentCount}</p>
      <Child count={childCount} />
      <div>{props.children}</div>
    </div>
  );
};
