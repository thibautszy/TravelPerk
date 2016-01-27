
var inputs = document.getElementsByClassName('checkbox'),
	tripNumber  = document.getElementById('tripNumber');
	hotelNumber = document.getElementById('hotelNumber');
	carNumber = document.getElementById('carNumber');
	totalTripsNumber = document.getElementById('totalTripsNumber');
	totalCostValue = document.getElementById('totalCostValue');
	totalSaveValue = document.getElementById('totalSaveValue');
	moneySaveValue = document.getElementById('moneySaveValue');
	moneyRepaidValue = document.getElementById('moneyRepaidValue');

 for (var i=0; i < inputs.length; i++) {
		inputs[i].onchange = function() {
			var add = this.value * (this.checked ? 1 : -1);
			tripNumber.innerHTML = parseFloat(tripNumber.innerHTML) + add;
			if(tripNumber<0) tripNumber=0;
            hotelNumber.innerHTML = parseFloat(hotelNumber.innerHTML) + add;
			if(hotelNumber<0) hotelNumber=0;
			carNumber.innerHTML = parseFloat(carNumber.innerHTML) + add;
			if(carNumber<0) carNumber=0;
			
			totalTripsNumber.innerHTML = parseFloat(totalTripsNumber.innerHTML) + add;
			if(totalTripsNumber<0) totalTripsNumber=0;
            totalCostValue.innerHTML = parseFloat(totalCostValue.innerHTML) + add;
			if(totalCostValue<0) totalCostValue=0;
			totalSaveValue.innerHTML = parseFloat(totalSaveValue.innerHTML) + add;
			if(totalSaveValue<0) totalSaveValue=0;
			
			moneySaveValue.innerHTML = parseFloat(moneySaveValue.innerHTML) + add;
			if(moneySaveValue<0) moneySaveValue=0;
            moneyRepaidValue.innerHTML = parseFloat(moneyRepaidValue.innerHTML) + add;
			if(moneyRepaidValue<0) moneyRepaidValue=0;
        }
    }

function displayITDetails() {
	$('.sub-departments').show();
    var checkboxvar = document.getElementById('it-value');
	var sd = document.getElementById('sdvalue');
    var sd1 = document.getElementById('sd1value');
	var sd2 = document.getElementById('sd2value');
	var sd3 = document.getElementById('sd3value');
    if (!checkboxvar.checked) {
	    sd1.innerHTML = "subdep1";
		sd2.innerHTML = "subdep2";
		sd3.innerHTML = "subdep3";
		console.log(labelvar);
    }
    else {
		sd.innerHTML = "IT"
        sd1.innerHTML = "Frontend";
		sd2.innerHTML = "Backend";
		sd3.innerHTML = "Analytics";
	}
}

function displaySalesDetails() {
	$('.sub-departments').show();
    var checkboxvar = document.getElementById('sales-value');
	var sd = document.getElementById('sdvalue');
    var sd1 = document.getElementById('sd1value');
	var sd2 = document.getElementById('sd2value');
	var sd3 = document.getElementById('sd3value');
    if (!checkboxvar.checked) {
	    sd1.innerHTML = "subdep1";
		sd2.innerHTML = "subdep2";
		sd3.innerHTML = "subdep3";
    }
    else {
		sd.innerHTML = "Sales"
        sd1.innerHTML = "Accounting";
		sd2.innerHTML = "Logistic";
		sd3.innerHTML = "Export";
	}
}

function displayHRDetails() {
	$('.sub-departments').show();
    var checkboxvar = document.getElementById('hr-value');
	var sd = document.getElementById('sdvalue');
    var sd1 = document.getElementById('sd1value');
	var sd2 = document.getElementById('sd2value');
	var sd3 = document.getElementById('sd3value');
    if (!checkboxvar.checked) {
	    sd1.innerHTML = "subdep1";
		sd2.innerHTML = "subdep2";
		sd3.innerHTML = "subdep3";
		console.log(labelvar);
    }
    else {
		sd.innerHTML = "HR"
        sd1.innerHTML = "Management";
		sd2.innerHTML = "Recruiting";
		sd3.innerHTML = "Team building";
	}
}

function displayMarketingDetails() {
	$('.sub-departments').show();
    var checkboxvar = document.getElementById('marketing-value');
    var sd1 = document.getElementById('sd1value');
	var sd2 = document.getElementById('sd2value');
	var sd3 = document.getElementById('sd3value');
    if (!checkboxvar.checked) {
	    sd1.innerHTML = "subdep1";
		sd2.innerHTML = "subdep2";
		sd3.innerHTML = "subdep3";
		console.log(labelvar);
    }
    else {
		var sd = document.getElementById('sdvalue');
		sd.innerHTML = "Marketing"
        sd1.innerHTML = "Statistics";
		sd2.innerHTML = "Strategy";
		sd3.innerHTML = "Partnerships";
	}
}
	
function displaysd1Details() {
	$('.employees').show();
    var checkboxvar = document.getElementById('sd1-value');
    var e1 = document.getElementById('e1value');
	var e2 = document.getElementById('e2value');
	var e3 = document.getElementById('e3value');
	var e4 = document.getElementById('e4value');
    if (!checkboxvar.checked) {
	    e1.innerHTML = "employee1";
		e2.innerHTML = "employee2";
		e3.innerHTML = "employee3";
		e4.innerHTML = "employee4";
    }
    else {
        e1.innerHTML = "Sergio Myler";
		e2.innerHTML = "Jan Toro";
		e3.innerHTML = "Javier Haywayrd";
		e4.innerHTML = "Ron Meir";
	}
}

function displaysd2Details() {
	$('.employees').show();
    var checkboxvar = document.getElementById('sd2-value');
    var e1 = document.getElementById('e1value');
	var e2 = document.getElementById('e2value');
	var e3 = document.getElementById('e3value');
	var e4 = document.getElementById('e4value');
    if (!checkboxvar.checked) {
	    e1.innerHTML = "employee1";
		e2.innerHTML = "employee2";
		e3.innerHTML = "employee3";
		e4.innerHTML = "employee4";
    }
    else {
        e1.innerHTML = "Sergio Toro";
		e2.innerHTML = "Jan Myler";
		e3.innerHTML = "Javier Meir";
		e4.innerHTML = "Ron Haywayrd";
	}
}

function displaysd3Details() {
	$('.employees').show();
    var checkboxvar = document.getElementById('sd3-value');
    var e1 = document.getElementById('e1value');
	var e2 = document.getElementById('e2value');
	var e3 = document.getElementById('e3value');
	var e4 = document.getElementById('e4value');
    if (!checkboxvar.checked) {
	    e1.innerHTML = "employee1";
		e2.innerHTML = "employee2";
		e3.innerHTML = "employee3";
		e4.innerHTML = "employee4";
    }
    else {
        e1.innerHTML = "Javier Myler";
		e2.innerHTML = "Ron Toro";
		e3.innerHTML = "Sergio Haywayrd";
		e4.innerHTML = "Jan Meir";
	}
}	