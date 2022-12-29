module.exports = getDate;

function getDate() {
    var today = new Date();
    var currentDay = today.getDay();
    // var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }

    var day = today.toLocaleDateString('en-Us', options);
     
    return day;
}