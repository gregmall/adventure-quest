export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 200,
        completed: {}

    };
}

export function getUser() {
    return JSON.parse(localStorage.getItem('USER'));
}

export function setUser(user) {
    const stringUser = JSON.stringify(user);
    return localStorage.setItem('USER', stringUser);
}
