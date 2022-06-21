import { memo, useEffect, useState } from "react";

export const NotMemoObject: React.FC = memo((props) => {
  const [count, setCount] = useState(0);
  const object = {};

  console.log("NotMemoObjectのレンダリング");

  useEffect(() => {
    console.log("🔴 Objectをメモ化してないよ 🔴");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Objectをメモ化していないページ</h2>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count up
      </button>
      <Test object={object} />
    </div>
  );
});

const Test: React.FC<{ object: Object }> = memo((props) => {
  console.log(props.object);
  return <div>test</div>;
});
