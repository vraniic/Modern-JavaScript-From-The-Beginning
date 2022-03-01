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