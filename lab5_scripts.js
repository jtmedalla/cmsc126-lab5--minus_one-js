//date and time code

function getDayOfWeek(intDayValue) {
  const fullDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return fullDayNames[intDayValue];
}

function getMonthName(intMonthValue) {
  const fullMonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return fullMonthNames[intMonthValue];
}

function time_now() {
  const now = new Date();
  const dayOfWeek = getDayOfWeek(now.getDay());
  const monthName = getMonthName(now.getMonth());
  const hour = now.getHours() < 12 ? now.getHours() : now.getHours() - 12;
  const minutes = now.getMinutes();
  const meridiem = now.getHours() < 12 ? "AM" : "PM";

  const topMessage =
    "Today is " +
    monthName +
    " " +
    now.getDate() +
    ", " +
    now.getFullYear() +
    ", " +
    dayOfWeek +
    "\n";
  const botMessage =
    "The current time is " + hour + ":" + minutes + " " + meridiem;

  alert(topMessage + botMessage);
}

//form code

const students = [];

function add_student(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;
  const studentID = getStudentID();
  const student = {
    name: name,
    age: age,
    email: email,
    course: course,
    studentID: studentID,
  };
  students.push(student);
  alert("Student added: " + name + ", ID: " + studentID);
  document.getElementById("studentForm").reset();
}

function getStudentID() {
  const random = Math.floor(Math.random() * 90000) + 10000;
  const studentID = "2024" + random.toString();
  for (let i = 0; i < students.length; i++) {
    if (students[i].studentID === studentID) {
      return getStudentID();
    }
  }
  return studentID;
}

function validateForm() {}
