function getWeekDay(date){
    let dayNames = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return(dayNames[date.getDay()]);
    
    }

alert(getWeekDay(new Date(2012, 0, 3)));
