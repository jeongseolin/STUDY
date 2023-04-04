import { COFFEE_PER_BREW, BEANS_PER_BREW } from './constants'; //변하지 않는 값들(대문자로 작성)
import { createAction, update, initializeState } from './store'; //상태를 관리하는 function들
import * as API from './api'; // API 이름으로 불러온다.

function CoffeeMaker(initialBeans, maxMachine, onUpdate) {
  // 초기 상태
  let state = initializeState(initialBeans, maxMachine);

  const closure = { // 후에 closure를 리턴하기 위해서
    grindBean,
    brewPowder,
    prepareMachine,
    getCoffee,
    getState,
    addBean,
  };

  function handleUpdate(action, data) {
    // (초기값, {'grindBean', payload}); 
    state = update(state, createAction(action, data)); // state(저장소)를 계속 업데이트를 해주는 것
    onUpdate(closure);
    return closure;
  }

  function grindBean() {
    // grindBean 액션을 호출합니다.
    handleUpdate('grindBean');

    // grindBean API를 기다리고 closure를 반환합니다.
    return API.grindBean.then(() => closure);  
    }

  function brewPowder() {
    // beanPowder가 BEANS_PER_BREW보다 부족할 경우, "커피 가루가 부족합니다."라는 에러 메시지와 함께 promise를 reject 합니다.
    if (state.beanPowder < BEANS_PER_BREW) {
        return Promise.reject(new Error(`커피 가루가 부족합니다.`));
    }
    // brewPowder 액션을 호출합니다.
    handleUpdate('brewPowder');

    // brewPowder API를 기다리고 closure를 반환합니다.
    return API.brewPowder().then(() => closure);
    
  }

  function prepareMachine() {
    if (state.currentMachine <= 0) {
      // currentMachine이 0이하 일 경우 "남은 머신이 없습니다." 라는 에러 메시지와 함께 promise를 reject 합니다.
      return Promise.reject(new Error('남은 머신이 없습니다.'));
    }

    if (state.beans < BEANS_PER_BREW) {
      // beans가 BEANS_PER_BREW미만일 경우 "커피 원두가 부족합니다." 라는 에러 메시지를 반환합니다.
      // 위의 예시를 참고하여 작성해보세요.
      return Promise.reject(new Error('커피 원두가 부족합니다.'));
      
    }

    // prepareMachine 액션에 대하여 상태를 업데이트합니다.
    handleUpdate('prepareMachine');

    // prepareMachine API를 기다리고 closure를 반환합니다.
    return API.prepareMachine().then(() => closure);
  }

  function getCoffee() {
    // getCoffee 액션을 호출합니다.
    handleUpdate('getCoffee');

    // COFFEE_PER_BREW를 리턴합니다.
    return COFFEE_PER_BREW;
  }

  function getState() {
    return state;
  }

  function addBean(amount) {
    handleUpdate('addBeans', amount);
  }

  return closure;
}

export default CoffeeMaker;
