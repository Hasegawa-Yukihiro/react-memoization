import React, { memo, useCallback, useEffect, useState } from "react";

const Child: React.FC<{
  count: number;
  disabled: boolean;
  onClick: () => void;
}> = memo((props) => {
  console.log("Childeレンダリング");

  return (
    <React.Fragment>
      <p>Childコンポーネント：{props.count}</p>
      <button onClick={props.onClick}>コールバック</button>
    </React.Fragment>
  );
});

const isDisabled = (childCount: number) => {
  return childCount === 1;
};

export const PropsCallback: React.FC = (props) => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("Parentレンダリング");

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  useEffect(() => {
    console.log("🟢 メモ化してるよ 🟢");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>propsにコールバック関数を渡してもメモ化されるか確認するページ</h2>
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
      <Child
        count={childCount}
        disabled={isDisabled(childCount)}
        onClick={handleClick}
      />
    </div>
  );
};
