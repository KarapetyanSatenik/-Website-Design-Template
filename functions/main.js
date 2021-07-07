const btn = document.querySelector('.btn-for-click')
btn.addEventListener('click', () => {
    window.history.pushState('', '', window.location + '/hello')
})

class User {
    constructor(name) {
        this.name = name;
    }
}

class User {
    constructor(name) {
        this.name = name;

    }
}
class Person extends User {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
let p1 = new Person('Sat', 22)
console.log(p1);