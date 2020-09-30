window.onload =  setup();

var pointA = 1;
var pointB = 1;
var totalVotes = pointA + pointB;

function addleft(){
    pointA += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' '+ pointB);
}
function addright(){
    pointB += 1;
    totalVotes += 1;
    updatePoints();
    console.log(pointA + ' '+ pointB);
}

function updatePoints(){
    var percentA = (pointA / totalVotes) * 100;
    var percentB = (pointB / totalVotes) * 100;
    var size = percentA + "% " + percentB + "%";

    document.getElementById("size-one").innerHTML = Math.round(percentA) + '%';
    document.getElementById("size-two").innerHTML = Math.round(percentB) + '%';
    document.getElementById("voting-box").style.gridTemplateColumns=  percentA + "% " + percentB + "%";

    document.getElementById("total-votes").innerHTML = "Total Votes Casted: " + totalVotes;
    document.getElementById("total-left").innerHTML = "Spring: " + pointA;
    document.getElementById("total-right").innerHTML = "Fall: " + pointB;
    document.getElementById("host-name").innerHTML = "Hosted by: pragyakar";
}

function setup() {
    pointA = 1;
    pointB = 1;
    totalVotes = pointA + pointB;

    document.getElementById("Spring").innerHTML = "Spring";
    document.getElementById("Fall").innerHTML = "Fall";

    updatePoints();
}