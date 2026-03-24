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
  const minutes = (now.getMinutes() < 10) ? "0" + now.getMinutes() : now.getMinutes();
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
  const errors = validateForm(name, age, email);

  if(errors.length > 0) {
    alert("Form submission failed:\n" + errors.join("\n"));
    return;
  }
  
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

function validateForm(name, age, email) {
  let errors = [];

  if (name.length <= 5) {
    errors.push("Name must be more than 5 characters.");
  }
  if (!name.includes(" ")) {
    errors.push("Name must contain a space.");
  }
  if (isNaN(age)) {
    errors.push("Age must be a number.");
  }
  if (age < 19 || age > 98) {
    errors.push("Age must be between > 18 and  < 99.");
  }
  if (!email.endsWith("@up.edu.ph")) {
    errors.push("Email must end with @up.edu.ph.");
  }
  return errors;
}


// search student

function getCourseName(course) {
  const courseNames = {
    FoodAppr: "BS in Food Appreciation",
    AppliedPoet: "BS in Applied Poetry of the Future",
    CompRepair: "BS in Computer Repair Shop",
    VideoGame: "BS in Video Gaming",
    InsDown: "BS in Installing and Downloading",
  };

  return courseNames[course];
}

function find_student(event){
  // prevent page refresh
  if (event) event.preventDefault();

  const searchID = document.getElementById("searchStd").value;
  const outputDisplay = document.getElementById("searchOutput");
  const foundStudent = students.find(s => s.studentID === searchID);

  if (foundStudent){

    const fullCourseName = getCourseName(foundStudent.course);

    outputDisplay.innerHTML = `
    <strong>Student Found:</strong><br>
    ID: ${foundStudent.studentID}<br>
    Name: ${foundStudent.name}<br>
    Age: ${foundStudent.age}<br>
    Email: ${foundStudent.email}<br>
    Course: ${fullCourseName}
    `;
  }
  else {
    outputDisplay.innerHTML = "Student record does not exist";
  }
}

// display all button
function display_all(event) {
  // prevent page refresh
  if (event) event.preventDefault();

  let output = "";

  for (let i = 0; i < students.length; i++) {
    const fullCourseName = getCourseName(students[i].course);

    output += `
      <strong>Entry number ${i + 1}:</strong><br>
      ID: ${students[i].studentID}<br>
      Name: ${students[i].name}<br>
      Age: ${students[i].age}<br>
      Email: ${students[i].email}<br>
      Course: ${fullCourseName}<br><br>
      `;
  }

  document.getElementById("searchOutput").innerHTML = output;
}
