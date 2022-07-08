import { memo, useCallback, useEffect, useMemo, useState } from "react";

export const MemoMap: React.FC = memo((props) => {
  const [count, setCount] = useState(0);
  const items = useMemo(() => [{ id: 1 }, { id: 2 }], []);

  const test2ButtonClick = useCallback((id: number) => {
    console.log("click" + id);
  }, []);

  console.log("memoMapのレンダリング");

  useEffect(() => {
    console.log("🔴 map使用時のメモ化 🔴");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>map使用時のメモ化</h2>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count up
      </button>
      <Test1 items={items} onClick={test2ButtonClick} />
    </div>
  );
});

const Test1: React.FC<{
  items: { id: number }[];
  onClick: (id: number) => void;
}> = memo((props) => {
  console.log("test1");
  return (
    <div>
      {props.items.map((item, i) => (
        <Test2 key={i} item={item} onClick={props.onClick} />
      ))}
    </div>
  );
});

const Test2: React.FC<{ item: { id: number }; onClick: (id: number) => void }> =
  memo((props) => {
    console.log("test2 +" + props.item.id);
    return (
      <div>
        test：{props.item.id}
        <button onClick={() => props.onClick(props.item.id)}>
          テスト{props.item.id}発火
        </button>
      </div>
    );
  });
