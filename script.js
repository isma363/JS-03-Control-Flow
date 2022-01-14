//Exercise 1 part1


function bussinesHours(){
    var dayNumber=prompt("What day is today? (1-7)");
    var hourNumber= parseInt(prompt("What time is it? "));
    if(hourNumber>=9 && hourNumber<=18){
        alert (true);
    }else if(hourNumber>0&&hourNumber<24){
        alert (false);}
    else{
        alert("Number Invalid")
    }
    }
//bussinesHours();

//Exercise 1 part2


function getDayNumber(){
    var janFirstDayNumber=parseInt(prompt("What day of the week did January 1 fall on? (0-6)"))
    var yearDayNumber=parseInt(prompt("what day do you want to meet?"));
    var day=yearDayNumber%7;
    console.log("day: "+day)
    var dayMeet=(janFirstDayNumber+yearDayNumber)%7;
    console.log("dayMeet: "+dayMeet)
    alert("Youre day "+yearDayNumber+" fall in "+dayMeet);
}
//getDayNumber();



