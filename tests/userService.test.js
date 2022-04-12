const { findUser, updateUsername, deleteUserValue } = require('../services/userService');

users = [ 
    { id: 'test-id-1', name: 'test-name-1'},
    { id: 'test-id-2', name: 'test-name-2'},
    { id: 'test-id-3', name: 'test-name-3'},
    { id: 'test-id-4', name: 'test-name-4'},
    { id: 'test-id-5', name: 'test-name-5'}];
updatedValue = { id: 'test-id-5', name: 'updated-test-name'};
wrongUpdatedValue = { id: 'test-id-6', name: 'updated-test-name'};
testId = 'test-id-3';

test('find username by id', () => { 
    const name = findUser(testId, users);
    expect(name).toEqual('test-name-3');
});

test('update correctly a username', () => {
    const status = updateUsername(updatedValue, users);
    expect(status).toEqual(true);
});

test('doesnt update any value in case of not found id', () => {
    const status = updateUsername(wrongUpdatedValue, users);
    expect(status).not.toBe(true);
});

test('deletes correctly user by id', () => {
    const array = deleteUserValue(testId, users);
    expect(array).not.toBe(users);
});