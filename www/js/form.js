$(function(){
    "use scrict";
    var dtToday = new Date();
    var dtFuture = new Date();
    dtFuture.setDate(dtFuture.getDate() + 7);
    
    var hour = dtToday.getHours();
    var mins = dtToday.getMinutes();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    
    var monthFuture = dtFuture.getMonth() + 1;
    var dayFuture = dtFuture.getDate();
    var yearFuture = dtFuture.getFullYear();
    
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    if(hour < 10)
        hour = '0' + hour.toString();
    if(mins < 10)
        mins = '0' + mins.toString();
    
    var defaultTime = (hour + ":" + mins);
    
    if(monthFuture < 10)
        monthFuture = '0' + monthFuture.toString();
    if(dayFuture < 10)
        dayFuture = '0' + dayFuture.toString(); 
    
    var maxDate = yearFuture + '-' + monthFuture + '-' + dayFuture;
    var minDate = year + '-' + month + '-' + day;

    $('#txt_date').attr('max', maxDate);
    $('#txt_date').attr('min', minDate);
    
    $('#txt_date').val(minDate);
    $('#txt_time').val(defaultTime);
});