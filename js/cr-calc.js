$(function spinnerSetUp() {
  // Spinner set up
        // Set all gear to:
        $(".crSpinner").spinner({min:0,max:500}).val(0);
        $(".crSpinner").width(50);
        $(".crSpinner").height(22);  
		$(".crSpinner").on("spinstop", function(){boxCalc()});
		
		$(".gearSpinner").spinner({min:0,max:500}).val(0);
        $(".gearSpinner").width(50);
        $(".gearSpinner").height(22);  
		$(".gearSpinner").on("spinstop", function(){setGear()});
        
        // All gear slot spinners:
        $(".crSpinnerCalc").spinner({min:0,max:500}).val(0);
        $(".crSpinnerCalc").width(50);
        $(".crSpinnerCalc").height(22);
        $(".crSpinnerCalc").on("spinstop", function(){calcCR()});
});

function setGear() {
	gear = document.getElementById("allGear").value;
	document.getElementById("weapon").value=gear;
	document.getElementById("head").value=gear;
	document.getElementById("neck").value=gear;
	document.getElementById("back").value=gear;
	document.getElementById("chest").value=gear;
	document.getElementById("legs").value=gear;
	document.getElementById("ring1").value=gear;
	document.getElementById("trinket").value=gear;
	document.getElementById("face").value=gear;
	document.getElementById("shoulders").value=gear;
	document.getElementById("hands").value=gear;
	document.getElementById("waist").value=gear;
	document.getElementById("feet").value=gear;
	document.getElementById("ring2").value=gear;
	calcCR();
};

function calcCR() {
	wpl=document.getElementById('weapon').value;
	wp=wpl*0.115;
	hel=document.getElementById('head').value;
	he=hel*0.1265;
	nkl=document.getElementById('neck').value;
	nk=nkl*0.0575;
	bkl=document.getElementById('back').value;
	bk=bkl*0.092;
	chl=document.getElementById('chest').value;
	ch=chl*0.138;
	lgl=document.getElementById('legs').value;
	lg=lgl*0.138;
	r1l=document.getElementById('ring1').value;
	r1=r1l*0.046;
	r2l=document.getElementById('ring2').value;
	r2=r2l*0.046;
	fal=document.getElementById('face').value;
	fa=fal*0.0345;
	shl=document.getElementById('shoulders').value;
	sh=shl*0.115;
	hal=document.getElementById('hands').value;
	ha=hal*0.069;
	wal=document.getElementById('waist').value;
	wa=wal*0.0805
	fel=document.getElementById('feet').value;
	fe=fel*0.069;
	trl=document.getElementById('trinket').value;
	tr=trl*0.023;
	
	finalcal=(wp+he+nk+bk+ch+lg+r1+r2+fa+sh+ha+wa+fe+tr);
	//finalcal=((Math.floor(wp)+Math.floor(he)+Math.floor(nk)+Math.floor(bk)+Math.floor(ch)+Math.floor(lg)+Math.floor(r1)+Math.floor(r2)+Math.floor(fa)+Math.floor(sh)+Math.floor(ha)+Math.floor(wa)+Math.floor(fe)+Math.floor(tr)))/14;
	document.getElementById('cr-result').value=Math.floor(finalcal*100)/100;
	//boxcalc = Math.floor(.88404*finalcal);
    //document.getElementById('greenBox').value=boxcalc;
    //document.getElementById('blueBox').value=boxcalc+1;
    //document.getElementById('purpleBox').value=boxcalc+2;
};


  function boxCalc(overallCR) {
    overallCR=document.getElementById('unattunedCR').value;
    avgIL=Math.floor(overallCR/1.15);
    document.getElementById('greenBox').value=avgIL+2;
    document.getElementById('blueBox').value=avgIL+3;
    document.getElementById('purpleBox').value=avgIL+4;
    document.getElementById('timeCapsule').value=avgIL+5;
};



     
        
        
        
        // Unattuned Gear Box Calculation:
        /*$("#crButton").button();
        document.getElementById("crButton").onclick = function(){
            overallCR=document.getElementById('unattunedCR').value;
            boxCalc(overallCR);
        };*/