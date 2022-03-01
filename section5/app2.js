class person {
    constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
}


greeting() {
    return`hello there ${this.firstName} ${this.lastName}`
}

claculateAge() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}
}

const mary = new person('Mary', 'Wiliams', '11-13-1980')

console.log(mary)


// 
// POSLEDNJA 
// LEKCIJA
// 

class person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    greeting () {
        `hello there ${this.firstName} ${this.lastName}`
    }
}

class customer extends person {
    constructor(firstName,lastName, phone, membership) {
        super(firstName, lastName)

        this.phone = phone 
        this.membership = membership
    }
}

const john = new customer('john', 'doe', '555-555-5555', 'standard')