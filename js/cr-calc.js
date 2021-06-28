document.getElementById("allGear").onchange = function() {setGear()};
document.getElementById("Weapon").onchange = function() {calcCR()};
document.getElementById("Helmet").onchange = function() {calcCR()};
document.getElementById("Neck").onchange = function() {calcCR()};
document.getElementById("Back").onchange = function() {calcCR()};
document.getElementById("Chest").onchange = function() {calcCR()};
document.getElementById("Legs").onchange = function() {calcCR()};
document.getElementById("First Ring").onchange = function() {calcCR()};
document.getElementById("Trinket").onchange = function() {calcCR()};
document.getElementById("Face").onchange = function() {calcCR()};
document.getElementById("Shoulders").onchange = function() {calcCR()};
document.getElementById("Hands").onchange = function() {calcCR()};
document.getElementById("Waist").onchange = function() {calcCR()};
document.getElementById("Feet").onchange = function() {calcCR()};
document.getElementById("Second Ring").onchange = function() {calcCR()};
document.getElementById("vendorLevel").onchange = function() {vendorCalc()};
document.getElementById("overallCR").onchange = function() {boxCalc()};

function setGear() {
	gear = document.getElementById("allGear").value;
	document.getElementById("Weapon").value=gear;
	document.getElementById("Helmet").value=gear;
	document.getElementById("Neck").value=gear;
	document.getElementById("Back").value=gear;
	document.getElementById("Chest").value=gear;
	document.getElementById("Legs").value=gear;
	document.getElementById("First Ring").value=gear;
	document.getElementById("Trinket").value=gear;
	document.getElementById("Face").value=gear;
	document.getElementById("Shoulders").value=gear;
	document.getElementById("Hands").value=gear;
	document.getElementById("Waist").value=gear;
	document.getElementById("Feet").value=gear;
	document.getElementById("Second Ring").value=gear;
	calcCR();
};

function calcCR() {
	wpl=document.getElementById('Weapon').value;
	wp=wpl*0.115;
	hel=document.getElementById('Helmet').value;
	he=hel*0.1265;
	nkl=document.getElementById('Neck').value;
	nk=nkl*0.0575;
	bkl=document.getElementById('Back').value;
	bk=bkl*0.092;
	chl=document.getElementById('Chest').value;
	ch=chl*0.138;
	lgl=document.getElementById('Legs').value;
	lg=lgl*0.138;
	r1l=document.getElementById('First Ring').value;
	r1=r1l*0.046;
	r2l=document.getElementById('Second Ring').value;
	r2=r2l*0.046;
	fal=document.getElementById('Face').value;
	fa=fal*0.0345;
	shl=document.getElementById('Shoulders').value;
	sh=shl*0.115;
	hal=document.getElementById('Hands').value;
	ha=hal*0.069;
	wal=document.getElementById('Waist').value;
	wa=wal*0.0805
	fel=document.getElementById('Feet').value;
	fe=fel*0.069;
	trl=document.getElementById('Trinket').value;
	tr=trl*0.023;
	
	finalcal=(wp+he+nk+bk+ch+lg+r1+r2+fa+sh+ha+wa+fe+tr);
	//finalcal=((Math.floor(wp)+Math.floor(he)+Math.floor(nk)+Math.floor(bk)+Math.floor(ch)+Math.floor(lg)+Math.floor(r1)+Math.floor(r2)+Math.floor(fa)+Math.floor(sh)+Math.floor(ha)+Math.floor(wa)+Math.floor(fe)+Math.floor(tr)))/14;
	document.getElementById('equippedCR').value=Math.floor(finalcal*100)/100;

	vendorCR=document.getElementById('vendorLevel').value;
	if (vendorCR) {
		vendorCalc();
	};
	//boxcalc = Math.floor(.88404*finalcal);
    //document.getElementById('greenBox').value=boxcalc;
    //document.getElementById('blueBox').value=boxcalc+1;
    //document.getElementById('purpleBox').value=boxcalc+2;
};


function vendorCalc(overallCR) {
  overallCR=document.getElementById('equippedCR').value;
  vendorCR=document.getElementById('vendorLevel').value;
  wpl=document.getElementById('Weapon').value;
  wpi=(vendorCR-wpl)*0.115/20;
  hel=document.getElementById('Helmet').value;
  hei=(vendorCR-hel)*0.1265/16;
  nkl=document.getElementById('Neck').value;
  nki=(vendorCR-nkl)*0.0575/8;
  bkl=document.getElementById('Back').value;
  bki=(vendorCR-bkl)*0.092/12;
  chl=document.getElementById('Chest').value;
  chi=(vendorCR-chl)*0.138/18;
  lgl=document.getElementById('Legs').value;
  lgi=(vendorCR-lgl)*0.138/18;
  r1l=document.getElementById('First Ring').value;
  r1i=(vendorCR-r1l)*0.046/6;
  r2l=document.getElementById('Second Ring').value;
  r2i=(vendorCR-r2l)*0.046/6;
  fal=document.getElementById('Face').value;
  fai=(vendorCR-fal)*0.0345/4;
  shl=document.getElementById('Shoulders').value;
  shi=(vendorCR-shl)*0.115/14;
  hal=document.getElementById('Hands').value;
  hai=(vendorCR-hal)*0.069/8;
  wal=document.getElementById('Waist').value;
  wai=(vendorCR-wal)*0.0805/10;
  fel=document.getElementById('Feet').value;
  fei=(vendorCR-fel)*0.069/8;
  trl=document.getElementById('Trinket').value;
  tri=(vendorCR-trl)*0.023/8;

  maxthing = Math.max(wpi,hei,nki,bki,chi,lgi,r1i,r2i,fai,shi,hai,wai,fei,tri)

  switch (maxthing) {
	  case wpi:
		  slot = "Weapon"
		  break;
	  case hei:
		  slot = "Helmet"
		  break;
	  case nki:
		  slot = "Neck"
		  break;
	  case bki:
		  slot = "Back"
		  break;
	  case chi:
		  slot = "Chest"
		  break;
	  case lgi:
		  slot = "Legs"
		  break;
	  case r1i:
		  slot = "First Ring"
		  break;
	  case r2i:
		  slot = "Second Ring"
		  break;
	  case fai:
		  slot = "Face"
		  break;
	  case shi:
		  slot = "Shoulders"
		  break;
	  case hai:
		  slot = "Hands"
		  break;
	  case wai:
		  slot = "Waist"
		  break;
	  case fei:
		  slot = "Feet"
		  break;
	  case tri:
		  slot = "Trinket"
		  break;
  }

  document.getElementById('purchase').value=slot;
};


function boxCalc(overallCR) {
	overallCR=document.getElementById('overallCR').value;
	avgIL=Math.floor(overallCR/1.15);
	document.getElementById('greenBox').value=avgIL+2;
	document.getElementById('blueBox').value=avgIL+3;
	document.getElementById('purpleBox').value=avgIL+4;
	document.getElementById('timeCapsule').value=avgIL+5;
};

/*
const thresholdAutocomplete = document.querySelector('#threshold');
const data = ['One', 'Two', 'Three', 'Four', 'Five'];
const dataFilter = (value) =&gt; {
	return data.filter((item) =&gt; {
		return item.toLowerCase().startsWith(value.toLowerCase());
	});
};

new mdb.Autocomplete(thresholdAutocomplete, {
filter: dataFilter,
threshold: 3
});

function charLookup() {
	const thresholdAutocomplete = document.querySelector('#threshold');

    $("#charName").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "https://web.archive.org/web/20180207070255/http://census.daybreakgames.com/s:farm3rb0b/json/get/dcuo:v1/character",
                dataType: "jsonp",
                data: {
                    name: request.term,
                        'c:show': "name,character_id,combat_rating,world_id",
                        'c:limit': 5,
                        'c:case': 'false',
                        'c:exactMatchFirst': 'true',
                        'c:join': "world^inject_at:world,characters_item^list:1^inject_at:gear^show:item_id'equipment_slot_id(item^inject_at:item^show:name.en'item_level)",
                },
                success: function (data) {
                    response($.map(data.character_list, function (item) {
                        return {
                            label: item.name + item.world.name,
                            desc: item,
                            value: item.name,
                            gear: item.gear,
                        }
                    }))
                }
            });
        },
        minLength: 3,
        select: function (event, ui) {
            //display paperdoll image in id=crCharImage
            //$("#crCharImage").error(function() {$("#crCharImage").attr( "src", "https://web.archive.org/web/20180207070255/http://files.enjin.com/450575/file_storage/scripts/crScripts/images/placeholder_large.png");}).attr("src", "https://web.archive.org/web/20180207070255/http://census.daybreakgames.com/files/dcuo/images/character/paperdoll/" + ui.item.desc.character_id);
            $(".crCharImage").html('<img onerror="this.src=\'http://files.enjin.com/450575/file_storage/scripts/crScripts/images/placeholder_large.png\';" src="https://web.archive.org/web/20180207070255/http://census.daybreakgames.com/files/dcuo/images/character/paperdoll/' + ui.item.desc.character_id + '">');
            
            //equipment_slot_id=0 is head, so lets find that
            var posHead = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('0');
            if (typeof(ui.item.gear[posHead])=="undefined" || typeof(ui.item.gear[posHead].item)=="undefined") {document.getElementById('headLevel').value = 0;}
            else {document.getElementById('headLevel').value = ui.item.gear[posHead].item.item_level;}
                    
            //equipment_slot_id=1 is neck, so lets find that
            var posNeck = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('1');
            if (typeof(ui.item.gear[posNeck])=="undefined" || typeof(ui.item.gear[posNeck].item)=="undefined") {document.getElementById('neckLevel').value = 0;}
            else {document.getElementById('neckLevel').value = ui.item.gear[posNeck].item.item_level;}
            
            //equipment_slot_id=3 is shoulders, so lets find that
            var posShoulders = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('3');
            if (typeof(ui.item.gear[posShoulders])=="undefined" || typeof(ui.item.gear[posShoulders].item)=="undefined") {document.getElementById('shouldersLevel').value = 0;}
            else {document.getElementById('shouldersLevel').value = ui.item.gear[posShoulders].item.item_level;}
            
            //equipment_slot_id=4 is back, so lets find that
            var posBack = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('4');
            if (typeof(ui.item.gear[posBack])=="undefined" || typeof(ui.item.gear[posBack].item)=="undefined") {document.getElementById('backLevel').value = 0;}
            else {document.getElementById('backLevel').value = ui.item.gear[posBack].item.item_level;}
            
            //equipment_slot_id=5 is hands, so lets find that
            var posHands = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('5');
            if (typeof(ui.item.gear[posHands])=="undefined" || typeof(ui.item.gear[posHands].item)=="undefined") {document.getElementById('handsLevel').value = 0;}
            else {document.getElementById('handsLevel').value = ui.item.gear[posHands].item.item_level;}
            
            //equipment_slot_id=6 is waist, so lets find that
            var posWaist = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('6');
            if (typeof(ui.item.gear[posWaist])=="undefined" || typeof(ui.item.gear[posWaist].item)=="undefined") {document.getElementById('waistLevel').value = 0;}
            else {document.getElementById('waistLevel').value = ui.item.gear[posWaist].item.item_level;}
            
            //equipment_slot_id=7 is feet, so lets find that
            var posFeet = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('7');
            if (typeof(ui.item.gear[posFeet])=="undefined" || typeof(ui.item.gear[posFeet].item)=="undefined") {document.getElementById('feetLevel').value = 0;}
            else {document.getElementById('feetLevel').value = ui.item.gear[posFeet].item.item_level;}
                                    
            //equipment_slot_id=9 is face, so lets find that
            var posFace = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('9');
            if (typeof(ui.item.gear[posFace])=="undefined" || typeof(ui.item.gear[posFace].item)=="undefined") {document.getElementById('faceLevel').value = 0;}
            else {document.getElementById('faceLevel').value = ui.item.gear[posFace].item.item_level;}
            
            //equipment_slot_id=10 is chest, so lets find that
            var posChest = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('10');
            if (typeof(ui.item.gear[posChest])=="undefined" || typeof(ui.item.gear[posChest].item)=="undefined") {document.getElementById('chestLevel').value = 0;}
            else {document.getElementById('chestLevel').value = ui.item.gear[posChest].item.item_level;}
                        
            //equipment_slot_id=11 is legs, so lets find that
            var posLegs = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('11');
            if (typeof(ui.item.gear[posLegs])=="undefined" || typeof(ui.item.gear[posLegs].item)=="undefined") {document.getElementById('legsLevel').value = 0;}
            else {document.getElementById('legsLevel').value = ui.item.gear[posLegs].item.item_level;}
            
            //equipment_slot_id=12 is ring1, so lets find that
            var posRing1 = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('12');
            if (typeof(ui.item.gear[posRing1])=="undefined" || typeof(ui.item.gear[posRing1].item)=="undefined") {document.getElementById('ring1Level').value = 0;}
            else {document.getElementById('ring1Level').value = ui.item.gear[posRing1].item.item_level;}
            
            //equipment_slot_id=13 is ring2, so lets find that
            var posRing2 = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('13');
            if (typeof(ui.item.gear[posRing2])=="undefined" || typeof(ui.item.gear[posRing2].item)=="undefined") {document.getElementById('ring2Level').value = 0;}
            else {document.getElementById('ring2Level').value = ui.item.gear[posRing2].item.item_level;}
            
            //equipment_slot_id=14 is soder, so lets find that
            //var posSoder = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('14');
            //if (typeof(ui.item.gear[posSoder])=="undefined" || typeof(ui.item.gear[posSoder].item)=="undefined") {document.getElementById('soderLevel').value = 0;}
            //else {document.getElementById('soderLevel').value = ui.item.gear[posSoder].item.item_level;}
                        
            //equipment_slot_id=15 is trinket, so lets find that
            var posTrinket = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('15');
            if (typeof(ui.item.gear[posTrinket])=="undefined" || typeof(ui.item.gear[posTrinket].item)=="undefined") {var numTrinket = 0;}
            else {var numTrinket = ui.item.gear[posTrinket].item.item_level;}
            
            //equipment_slot_id=17 is weapon, so lets find that
            var posWeapon = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('17');
            if (typeof(ui.item.gear[posWeapon])=="undefined" || typeof(ui.item.gear[posWeapon].item)=="undefined") {document.getElementById('weaponLevel').value = 0;}
            else {document.getElementById('weaponLevel').value = ui.item.gear[posWeapon].item.item_level;}
            
            //equipment_slot_id=18 is beltSlot1, so lets find that
            var posSlot1 = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('18');
            if (typeof(ui.item.gear[posSlot1])=="undefined" || typeof(ui.item.gear[posSlot1].item)=="undefined") {var numSlot1 = 0;}
            else {var numSlot1 = Number(ui.item.gear[posSlot1].item.item_level);}
            
            //equipment_slot_id=19 is beltSlot2, so lets find 
            var posSlot2 = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('19');
            if (typeof(ui.item.gear[posSlot2])=="undefined" || typeof(ui.item.gear[posSlot2].item)=="undefined") {var numSlot2 = 0;}
            else {var numSlot2 = Number(ui.item.gear[posSlot2].item.item_level);}
            
            //equipment_slot_id=20 is beltSlot3, so lets find that
            var posSlot3 = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('20');
            if (typeof(ui.item.gear[posSlot3])=="undefined" || typeof(ui.item.gear[posSlot3].item)=="undefined") {var numSlot3 = 0;}
            else {var numSlot3 = Number(ui.item.gear[posSlot3].item.item_level);}
            
            //equipment_slot_id=21 is beltSlot4, so lets find that
            var posSlot4 = ui.item.gear.map(function(f) { return f.equipment_slot_id; }).indexOf('21');
            if (typeof(ui.item.gear[posSlot4])=="undefined" || typeof(ui.item.gear[posSlot4].item)=="undefined") {var numSlot4 = 0;}
            else {var numSlot4 = Number(ui.item.gear[posSlot4].item.item_level);}
            
            document.getElementById('trinketLevel').value=Math.max(numTrinket, numSlot1, numSlot2, numSlot3, numSlot4);
            
            calcCR();
        },
        open: function () {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function () {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    })
        .autocomplete("instance")._renderItem = function (ul, item) {
        return $("<li>").append("<a>" +
            '<img class="imgThumb" onerror="this.src=\'http://files.enjin.com/450575/file_storage/scripts/crScripts/images/placeholder.jpg\';" src="https://web.archive.org/web/20180207070255/http://census.daybreakgames.com/files/dcuo/images/character/paperdoll/' + item.desc.character_id + '" style="float:left; margin-right: 6px; max-height: 50px;width: auto;">' + '<span style="display:table-cell; vertical-align:middle; height:50px;">' + item.value + "<br>CR: " + item.desc.combat_rating + " " + item.desc.world.name + '</span>' + "</a>").appendTo(ul);
        }    
});

*/