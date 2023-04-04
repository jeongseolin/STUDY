import API from "./api";

function transformUser(user) { // 정보 변환
// user.email -> email
// user.name.first, user.name.last -> name - `${user.name.first} ${user.name.last}`
// user.picture.large -> pictureUrl
// user.login.username -> username
// user.location.country, user.location.state, user.location.city -> location - `${user.location.country}, ${user.location.state}, ${user.location.city}`
// user.dob.age -> age
    const email = user.email;
    const { first, last } = user.name;
    const name = `${first} ${last}`;
    const pictureUrl = user.picture.large;
    const username = user.login.username;
    const { country, state, city } = user.location;
    const location = `${country}, ${state}, ${city}`;
    const age = user.dob.age;

    return { email, name, pictureUrl, username, location, age };

}

function filterByAge(user) {
    return user.age >= 40; // 40세 이상만 불러오기
}

const requestUsers = () => {
  return API.fetchUsers().then((users) => {
    // 유저 정보를 변화하고, 필터링하는 코드를 작성해보세요.
    return users
        .map(transformUser)
        .filter(filterByAge);
  });
};

export default requestUsers;
