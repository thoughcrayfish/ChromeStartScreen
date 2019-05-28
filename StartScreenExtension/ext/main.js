var userName = localStorage.getItem('receivedName');
var date;
var time;

function openSettings() 
{
    document.getElementById("settings").classList.toggle("settings-open");
}
document.getElementById("settings-button").addEventListener('click', openSettings)

function saveName()
{
    localStorage.setItem('receivedName', userName);
}

function changeName()
{
    userName = document.getElementById("name-input").value;
    saveName();
    getGreeting();
}
if (userName == null) 
{
    userName = "friend";
}

document.getElementById("name-form").addEventListener('submit', function(e)
{
    e.preventDefault()
    changeName();
});

function getGreeting() 
{
    getTimeTest();
    document.getElementById("greeting").innerHTML  = `Hello, ${userName}.` + "\n" +  time;
}
 
getGreeting();

// function getTime()
// {
//     var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
//     usaTime = new Date(usaTime);
//     console.log('USA time: '+usaTime.toLocaleString())
//     time = usaTime;
//     // document.getElementById("time").value = time.toString();
//     // document.getElementById("greeting").innerHTML = document.getElementById("greeting").innerHTML.toString  + time.toString();
// }

function getTimeTest()
{
    var testTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    testTime = new Date(testTime);
    time = formatDate(testTime);
}

function formatDate(date) 
{
    var monthNames =
    [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var monthNumbers =
    [
      "1", "2", "3",
      "4", "5", "6", "7",
      "8", "9", "10",
      "11", "12"
    ];
    
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + '.' + monthNumbers[monthIndex] + '.' + year;
}