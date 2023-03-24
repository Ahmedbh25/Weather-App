// When Login Button Clicked Verify if Your email && password is Match The Users Api List.
/*The List Of Users We Got From The API, will appear in the console When The Login Button 
    Is Clicked.
*/

const fetching_users = async () => {
    let users = [];
    await fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(res => {
            users = res.users;
        })
    return users;

};


form.addEventListener('submit', e => {
    e.preventDefault();
    const promiseUsers = fetching_users();
    promiseUsers.then(users => {
        console.log(users)
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password1').value;

        if (email.length === 0 && password.length === 0) {
            return document.querySelector('#Error').innerHTML = "Enter Your Email & Password ";
        } else {
            document.querySelector('#Error').innerHTML = "";

        }

        const find_user = users.filter((user) => user.email === email.trim() && user.password === password);
        //console.log(find_user);
        
        switch (find_user.length) {
            case 0:
                document.querySelector('#Error').innerHTML = "Your information is correct";
                document.querySelector('#Success').innerHTML = "";
                break;
            default:
                document.querySelector('#Error').innerHTML = "";
                document.querySelector('#Success').innerHTML = "Your information is correct";
        }

    })
})

