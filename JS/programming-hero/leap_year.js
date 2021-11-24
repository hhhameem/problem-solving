//write a code to check if a year is leap year or not 


function checkLeapYear(year){
    if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)){
        console.log(`${year} is a Leap Year`)
    }
    else{
        console.log(`${year} is Not a Leap Year`)
    }
}

checkLeapYear(1900)
checkLeapYear(2000)
checkLeapYear(2400)
checkLeapYear(2024)
checkLeapYear(2018)