function moreThan5(num) {
  return num > 5;
}

function topScore(num1, num2) {
  return num1 > num2;
}

function isInDanger(grade) {
  return grade >= 60 && grade <= 71;
}

function isCoasting(grade) {
  return grade >= 72 && grade <=83;
}

function isSucceeding(grade) {
  return grade >=84 && grade <=92;
}

function isFailing(grade) {
  return grade < 60;
}

function isAcing(grade) {
  return grade > 92;
}

function isStudent(str) {
  return str === 'student';
}

function isTeacher(str) {
  return str === 'teacher';
}

function isAdmin() {
  
}

function isElementary(str) {
  return str === 'elementary';
}

function notAnElementarySchoolAdministrator(str1, str2) {
  return str1 !== 'elementary' || str2 !== 'admin';
}

function isMiddleSchoolTeacher(str, num) {
  return str === 'teacher' && num >= 6 && num <= 8;
}

function differentPeople() {

}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}