import './index.css'




import {getUsers} from './api/usersApi.js'

getUsers().then(result=>{
    let usersBody = '';

    result.forEach(user=>{
        usersBody += `<tr>
        <td><a href='#' data-id= '${user.id}' class='deleteUser'>Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.LastName}</td>
        <td>${user.age}</td>
        </tr>
        `
    });
    global.document.getElementById('users').innerHTML = usersBody;
});




