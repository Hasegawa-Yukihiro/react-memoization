import React, { memo, useEffect, useState } from "react";

const Child: React.FC<{ count: number; onClick: () => void }> = memo(
  (props) => {
    console.log("Childeレンダリング");

    return (
      <React.Fragment>
        <p>Childコンポーネント：{props.count}</p>
        <button onClick={props.onClick}>コールバック</button>
      </React.Fragment>
    );
  }
);

export const NotUseCallback: React.FC = (props) => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parentレンダリング");

  const handleClick = () => {
    console.log("click");
  };

  useEffect(() => {
    console.log("🔴 useCallbackでメモ化してないよ 🔴");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>useCallbackでメモ化していないページ</h2>
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
      <Child count={childCount} onClick={handleClick} />
      <div>{props.children}</div>
    </div>
  );
};
