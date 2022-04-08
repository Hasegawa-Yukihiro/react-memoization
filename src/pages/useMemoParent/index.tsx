import React, { useEffect, useMemo, useState } from "react";

export const UseMemoParent: React.FC = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  };

  const doubledCount = useMemo(() => double(count2), [count2]);

  useEffect(() => {
    console.log("🟢 useMemoでメモ化してるよ 🟢");
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      <p>
        Counter: {count2}, {doubledCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </div>
  );
};
