import React, { useState } from 'react';
import './register-form.css';

const InputStatus = {
  NORMAL: 'normal',
  ERROR: 'error',
  SUCCESS: 'success',
};

function RegisterForm() {
  // 에러 메시지 상태를 정의하고, 상태 관리를 하는 코드를 작성하세요.
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [nameInputStatus, setNameInputStatus] = useState(InputStatus.NORMAL);
  const [ageInputStatus, setAgeInputStatus] = useState(InputStatus.NORMAL);

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeAge = e => {
    setAge(e.target.value);
  };

  const validateName = name => {
    if (name.length < 1 || name.length > 10) {
      // error
      setNameInputStatus(InputStatus.ERROR);
      return;
    }
    setNameInputStatus(InputStatus.SUCCESS);
  };

  const validateAge = age => {
    const numberAge = Number(age);
    if (!(numberAge >= 1 && numberAge <= 100)) {
      // error
      setAgeInputStatus(InputStatus.ERROR);
      return;
    }
    setAgeInputStatus(InputStatus.SUCCESS);
  };

  const submitForm = () => {
    console.log('Submit form!');
    // validate
    validateName(name);
    validateAge(age);
  };

  const getInputStatusStyle = (status) => {
      if (status === InputStatus.ERROR) {
          return 'input-invalid';
      } else if (status === InputStatus.SUCCESS) {
          return 'input-valid';
      }
      return '';
  }

  const getInputStatusTextStyle = (status) => {
      if (status === InputStatus.ERROR) {
          return "text-error";
      } 
      return '';
  }

  const resetForm = () => {
      setName('');
      setAge('');
  }

  return (
    <form className="form-container">
      <fieldset className="form-fieldset">
        <label className={'form-label ' + getInputStatusTextStyle(nameInputStatus)} htmlFor="name">이름</label>
        <input
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          id="name"
          placeholder="이름을 입력해 주세요."
          className={'form-input ' + getInputStatusStyle(nameInputStatus)}
        />
        <div className="form-error text-error">
        { nameInputStatus === InputStatus.ERROR &&
            '이름은 1글자 이상, 10글자 이하여야 합니다.' }
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <label 
          className={"form-label " + getInputStatusTextStyle(ageInputStatus)}
          htmlFor="age">나이</label>
        <input
          className={"form-input " + getInputStatusStyle(ageInputStatus)}
          value={age}
          onChange={handleChangeAge}
          type="number"
          name="age"
          id="age"
          placeholder="나이를 입력해 주세요."
        />
        <div className="form-error text-error">
        { ageInputStatus === InputStatus.ERROR &&
            '나이는 1부터 100 사이여야 합니다.' }
        </div>
      </fieldset>

      <div className="button-container">
        <button 
          className="form-button reset-button"
          onClick={resetForm} type="reset">
          초기화
        </button>
        <button 
          className="form-button submit-button"
          onClick={submitForm} type="button">
          제출
        </button>
      </div>
      <pre className="debug">
        <code>
          {JSON.stringify(
            {
              name,
              age,
              nameInputStatus,
              ageInputStatus,
            },
            null,
            2
          )}
        </code>
      </pre>
    </form>
  );
}

export default RegisterForm;
