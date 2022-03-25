//let selected;
function decideRoi(sel) {
    var rate = document.getElementById("ltype").value;
    document.getElementById("roi").value = rate;
    //selected = sel.options[sel.selectedIndex].text;  

}

function validateLoanTime() {
    var rate = document.getElementById("ltype").value;
    var duration = document.getElementById("duration").value;
    if (rate = 7 && duration > 25) {

        alert("Tenure should be less than 300 months");
        return false;
    } else if (rate = 9 && duration > 84) {
        alert("Tenure should be less than 84 months");
        return false;
        
    }else if(rate = 12 && duration > 60){
        alert("Tenure should be less than 60 months");
        return false;
    }
    
    calculateEMI()
    
    return true;
}

function calculateEMI() {
    var lamount = document.getElementById("amount").value;
    var rate = document.getElementById("ltype").value; //annual rate
    var mrate = rate / 1200; // monthly interest
    var duration = document.getElementById("duration").value; //in months
    var temp = (1 + mrate) ** duration;
    var emi = (lamount * mrate) * (temp / (temp - 1)); //formula for EMI
    document.getElementById("emi").value = emi
}

function calculateMaturity() {
    var lamount = document.getElementById("pamount").value;
    var duration = document.getElementById("pduration").value; //in months
    var rate = document.getElementById("proi").value; //annual rate
    var maturity = (lamount * rate * duration) / 100;
    document.getElementById("maturamt").value = maturity

}

function setROI() {
    var ptime = document.getElementById("pduration").value;
    if (ptime >= 0 && ptime < 2) {
        document.getElementById("proi").value = 5;
    } else if (ptime >= 2 && ptime < 5) {
        document.getElementById("proi").value = 6;
    } else {
        document.getElementById("proi").value = 7;
    }
}