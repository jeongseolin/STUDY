// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const buttonSubmit = document.getElementById('buttonSubmit');

buttonSubmit.addEventListener('click', getEmail);

// 바뀔 일이 없는 애들은 바깥에 선언.
const selectbox = document.getElementById('selectEmployeeCode');
const emailContainer = document.getElementById('employeeEmail');

function getEmail(e) {
  e.preventDefault();

  // 바뀔 수 있는 애
  const selectedEmployee = selectbox.value;

  fetch('employees.json')
    .then(res => res.json())
    .then(data => {
      // { Employees: [{ }, { }, { }] }
      data['Employees'].find(user => {
        if (user.employeeCode === selectedEmployee) {
          emailContainer.innerHTML = user.emailAddress;
        }
      });
    });
}