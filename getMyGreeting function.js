alert( getGreeting("Nwokah Overcomer") );

function getGreeting(name) {
    let now = new Date();
    if (now.getHours() < 12) {
        return "Good Morning, " + name;
    } else if (now.getHours() < 16) {
        return "Good Afternoon, " + name;
    } else {
        return "Good Evening, " + name;
    }
}


