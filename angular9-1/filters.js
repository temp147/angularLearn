/**
 * Created by root on 7/25/15.
 */

angular.module("exampleApp.Filters",[]).filter("dayName",function(){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    return function(input){
        return angular.isNumber(input)? dayNames[input%7]:input;
    };
});