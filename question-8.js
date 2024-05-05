// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserData= () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};

getUserData()
.then(response => response.json())
.then(data => {
    const newUsers = data.map(user => user.name);
    console.log(newUsers);
})
