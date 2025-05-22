type User = {
    name: string,
    surname: string,
    email: string,
    password: string,
};
const user: User = {
    name: "Vlad",
    surname: "Tsok",
    email: "wwwww@gm.com",
    password: "qwerty",
};
function createOrUpdateUser(initialValues: Partial<User>): User {
    return { ...user, ...initialValues };
}
createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
});
