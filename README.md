# Team_Profile_Generator

Classes
The project must have the these classes: Employee, Manager, Engineer, Intern. The tests for these classes in the tests directory must all pass.

The first class is an Employee parent class with the following properties and methods:

name
id
email
getName()
getId()
getEmail()
getRole() // Returns 'Employee'
The other three classes will extend Employee.

User input
The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.

Roster output
The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

Name

Role

ID

Role-specific property (School, link to GitHub profile, or office number)