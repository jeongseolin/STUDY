import { BEANS_PER_BREW, COFFEE_PER_BREW } from './constants';

const initialState = {
  beans: 0,
  beanPowder: 0,
  coffee: 0,
  currentMachine: 0,
};

export const createAction = (type, payload) => ({ type, payload });

const updateState = (state, diffState) => ({ ...state, ...diffState });

export function update(state, action) {
  switch (action.type) {
    // prepareMachine 액션에 대해 새로운 상태를 반환합니다.
    case 'prepareMachine': {
      return updateState(state, {
        currentMachine: state.currentMachine - 1,
      });
    }
    // grindBean, addBeans, brewPowder, getCoffee 액션에 대한 행위를 위의 예시를 참고하여 작성해보세요.
    case 'grindBean': {
      if (state.beans < BEANS_PER_BREW) {
        state.currentMachine += 1;
        return updateState(state, state);
      }

      return updateState(state, {
        beans: state.beans - BEANS_PER_BREW,
        beanPowder: state.beanPowder + BEANS_PER_BREW,
      });
    }

    case 'addBeans': {
      return updateState(state, {
        beans: state.beans + action.payload,
      });
    }

    case 'brewPowder': {
      return updateState(state, {
        coffee: state.coffee + COFFEE_PER_BREW,
        beanPowder: state.beanPowder - BEANS_PER_BREW,
      });
    }

    case 'getCoffee': {
      return updateState(state, {
        currentMachine: state.currentMachine + 1,
      });
    }

    default:
      return state;
  }
}

export function initializeState(initialBeans, maxMachine) {
  return {
    ...initialState,
    beans: initialBeans,
    currentMachine: maxMachine,
  };
}