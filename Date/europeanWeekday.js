function getEuropeanWeekDay(date){
    let dayNames = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    if(date.getDay() == 6){
        return("SU");
    }
    return(dayNames[date.getDay() + 1]);
    
    }

alert(getWeekDay(new Date(2012, 0, 3)));
