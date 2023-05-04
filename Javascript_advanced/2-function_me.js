function welcomeMessage(fullName){
        return function(){
        alert("Welcome " + fullName);
        }
}
var guillaume = welcomeMessage("guillaume");
var alex = welcomeMessage("alex");
var fred = welcomeMessage("fred");
