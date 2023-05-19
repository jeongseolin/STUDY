import { configureStore, createSlice } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useBoundingRect } from "./hooks";
import { getDiff, getLine, getPointFromEvent, isTwoDotsSame } from "./utils";

const initialState = {
  dots: [],
  lines: [],
  meta: {
    size: 4,
    color: "black",
    // background를 추가하세요.
    background: "#fff",
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addDot: (state, action) => {
      state.dots.push({ ...state.meta, ...action.payload });
    },

    addLine: (state, action) => {
      state.lines.push({ ...state.meta, ...action.payload });
    },

    setColor: (state, action) => {
      state.meta.color = action.payload;
    },

    setSize: (state, action) => {
      state.meta.size = action.payload;
    },

    setBackground: (state, action) => {
      state.meta.background = action.payload;
    },

    // resetBoard 액션을 추가하세요.
    // state 자체를 수정하려면 redux toolkit의 동작방식때문에 state = intialState로 할 수 없다.
    resetBoard: () => initialState,
  },
});

const reducer = boardSlice.reducer;
const actions = boardSlice.actions;

const store = configureStore({
  reducer,
});

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>그-으림판</h3>
        <SVGBoard />
      </div>
    </Provider>
  );
}

function SVGBoard() {
  const dispatch = useDispatch();
  const dots = useSelector((state) => state.dots);
  const lines = useSelector((state) => state.lines);
  const meta = useSelector((state) => state.meta);
  const prevMousePositionRef = useRef(null);

  const { register, rect } = useBoundingRect();

  const handleMouseDown = (e) => {
    prevMousePositionRef.current = getPointFromEvent(e);
  };

  const handleMouseUp = (e) => {
    const curDiff = getDiff(getPointFromEvent(e), rect);
    const prevDiff = getDiff(prevMousePositionRef.current, rect);

    if (isTwoDotsSame(curDiff, prevDiff)) {
      return dispatch(actions.addDot(curDiff));
    }

    dispatch(actions.addLine(getLine(curDiff, prevDiff)));
  };

  const handleColorChange = (e) => dispatch(actions.setColor(e.target.value));
  const handleSizeChange = (e) =>
    dispatch(actions.setSize(Number(e.target.value)));
  const handleBackgroundChange = (e) =>
    dispatch(actions.setBackground(e.target.value));

  const handleResetBoard = () => {
    dispatch(actions.resetBoard());
  };

  return (
    <Container>
      <DrawingPad
        id="drawing_pad"
        xmlns="http://www.w3.org/2000/svg"
        {...register()}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          // meta.background를 적용하세요.
          background: meta.background,
        }}
      >
        {React.Children.toArray(
          dots.map((dot) => (
            <circle cx={dot.x} cy={dot.y} r={dot.size} fill={dot.color} />
          ))
        )}

        {React.Children.toArray(
          lines.map((line) => (
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={line.color}
              strokeWidth={line.size}
            />
          ))
        )}
      </DrawingPad>

      <Controller>
        <label htmlFor="color">
          <LabelText>Color</LabelText>
          <select
            id="color"
            name="color"
            onChange={handleColorChange}
            value={meta.color}
          >
            <option id="black" value="black">
              Black
            </option>
            <option id="red" value="red">
              Red
            </option>
            <option id="blue" value="blue">
              Blue
            </option>
            <option id="green" value="green">
              Green
            </option>
          </select>
        </label>

        <label htmlFor="size">
          <LabelText>Size</LabelText>
          <select
            id="size"
            name="size"
            onChange={handleSizeChange}
            value={meta.size}
          >
            <option id="4" value={4}>
              4
            </option>
            <option id="8" value={8}>
              8
            </option>
            <option id="12" value={12}>
              12
            </option>
            <option id="16" value={16}>
              16
            </option>
          </select>
        </label>

        <label htmlFor="background">
          <LabelText>Background</LabelText>
          <select
            id="background"
            name="background"
            value={meta.background}
            onChange={handleBackgroundChange}
          >
            <option id="back-white" value="#fff">
              White
            </option>
            <option id="back-green" value="#d3f9d8">
              Green
            </option>
            <option id="back-yellow" value="#fff3bf">
              Yellow
            </option>
            <option id="back-pink" value="#ffdeeb">
              Pink
            </option>
          </select>
        </label>

        <button id="reset" onClick={handleResetBoard}>
          초기화
        </button>
      </Controller>
    </Container>
  );
}

const Container = styled.div`
  background: #e9ecef;
  width: 500px;
  height: 500px;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const DrawingPad = styled.svg`
  background: #fff9db;
  flex: 1;
`;

const Controller = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 12px;
  }
`;

const LabelText = styled.span`
  font-size: 12px;
  margin-right: 8px;
`;
