const findUser = (id, users) => {
    let name; 
    console.log(users);
    users.forEach((value) => {
        if(value.id === id) name = value.name;
    })
    return name;
};

const updateUsername = (values, users) => {
    let status = false;
    for(let i = 0; i < users.length; i++) {
        if(users[i].id === values.id) {
            users[i].name = values.name;
            status = true;
        }
    }
    return status;
};

const deleteUserValue = (id, users) => {
    return users.filter((user) => user.id !== id);
}

module.exports = {
    findUser,
    deleteUserValue,
    updateUsername
}

