import { useMemo, useState } from "react";

export const usePrettyPrintedState = () => {
  const [value, setValue] = useState();
  const resultValue = useMemo(() => {
    return (
      <>
        {value && (
          <pre>
            Value:
            <br />
            {JSON.stringify(value, null, 2)}
          </pre>
        )}
      </>
    );
  }, [value]);

  return [resultValue, setValue];
}
