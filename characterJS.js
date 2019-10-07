$(document).ready(function () {
    intialValues();
    $("#rolldie").click(rollstats);
    checkUpdate()
});


function checkUpdate(){

}

function intialValues(){
    var level = document.getElementById("lvl");
    level.defaultValue = 1;
    var experience = document.getElementById("exp");
    experience.defaultValue = 0;
}

function rollstats() {
    var stats = document.getElementsByClassName("stats");

    for (let i = 0; i < 6; i++) {
        var die1 = Math.floor((Math.random() * 6) + 1);
        var die2 = Math.floor((Math.random() * 6) + 1);
        var die3 = Math.floor((Math.random() * 6) + 1);
        var die4 = Math.floor((Math.random() * 6) + 1);

        var fourDices = [die1, die2, die3, die4];
        fourDices.sort();
        var result = fourDices[fourDices.length-1] + fourDices[fourDices.length-2] + fourDices[fourDices.length-3];
        console.log(result);
        stats[i].defaultValue = result;
    }
}