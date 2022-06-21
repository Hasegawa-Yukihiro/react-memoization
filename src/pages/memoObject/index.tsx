import { memo, useEffect, useMemo, useState } from "react";

export const MemoObject: React.FC = memo((props) => {
  const [count, setCount] = useState(0);
  const object = useMemo(() => ({}), []);

  console.log("MemoObjectのレンダリング");

  useEffect(() => {
    console.log("🟢 Objectをメモ化してるよ 🟢");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Objectをメモ化しているページ</h2>
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
