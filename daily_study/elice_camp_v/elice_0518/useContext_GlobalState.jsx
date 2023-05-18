import React, { useContext, createContext, useState } from "react";
import Counter from "./Counter";

const GlobalStateContext = createContext(null);

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("Use Context inside Provider");
  }
  return context;
};

export default function GlobalState() {
  const values = useGlobalState();
  return (
    /* Provider 컴포넌트를 추가해주세요, */
    <GlobalStateContext.Provider value={values}>
      <StateWrapper>
        <StateWrapper>
          <StateWrapper>
            <Counter />
          </StateWrapper>
        </StateWrapper>
      </StateWrapper>
    </GlobalStateContext.Provider>
  );
}

function StateWrapper({ children }) {
  return (
    <div className="wrapper" style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
}

function useGlobalState() {
  const [count, setCount] = useState(0);

  return { count, setCount };
}