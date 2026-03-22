function getDayOfWeek(intDayValue) {
    const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    return fullDayNames[intDayValue];
}

function getMonthName(intMonthValue) {
    const fullMonthNames = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    return fullMonthNames[intMonthValue];
}


function time_now() {
    const now = new Date();
    const dayOfWeek = getDayOfWeek(now.getDay());
    const monthName = getMonthName(now.getMonth());
    const hour = (now.getHours() < 12) ? now.getHours() : now.getHours() - 12;
    const minutes = now.getMinutes();
    const meridiem = (now.getHours() < 12) ? "AM" : "PM";

    const topMessage = "Today is " + monthName + " " +
        now.getDate() + ", " + now.getFullYear() + ", " +
        dayOfWeek + "\n";
    const botMessage = "The current time is " + hour + ":" + minutes + " " + meridiem;

    alert(topMessage + botMessage);
}
