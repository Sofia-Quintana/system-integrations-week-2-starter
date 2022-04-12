const findUser = (id, users) => {
    const name = users.map( (user) => {
        if(user.id === id) {
            name = user.name;
        }
    })    
    return name;
};

const updateUsername = (values, users) => {
    const status = users.map((user) => {
        if(user.name === values.actual) {
            user.name = values.newValue
            return true;
        }
    });
    return status;
};

