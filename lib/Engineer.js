// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor (github) {
        this.github = github;
    }
    getGitHub() {
        return this.github;

    }
    getRole() {
        return "Engineer";

    }
}
module.exports = Engineer;