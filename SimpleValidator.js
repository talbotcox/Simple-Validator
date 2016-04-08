document.getElementById("name1").innerHTML = name();


function name(loop) {
  var numcheck = false
	
	while(!numcheck) {
		  var name1 = prompt("What is your name you dumb dumb?")
		  console.log(name1 === true)
		  if(name1 === false || name1 === " "){
		  	numcheck = false
		  } else {
		  	numcheck = true
		  }
	}
	return "Well hello " + name1 + "! My name is Jim Carry"
}


document.getElementById("phonenumber1").innerHTML = phonenumber();

function phonenumber(loop) {
  var numcheck = false
	
	while(!numcheck) {
		  var phoneNumber = prompt("Please enter your phone number in this format XXX-XXX-XXXX")
	numcheck = isnumber(phoneNumber.split("-").join(''))
	}
	return "What a freaking idiot why would you give me your phone number? " + phoneNumber + " I am going to post it on social Media."
}


//phonenumber()

document.getElementById("birthdayfinal").innerHTML = birthday();

function birthday(loop) {
  var bcheck = false
	
	while(!bcheck) {
		  var birth = prompt("Please enter your Birthday in this format MM/DD/YYYY")
		bcheck = isnumber(birth.split("/").join(''))
			if (birth[0]+birth[1] > 13 || birth[0]+birth[1] <= 0 ){
			bcheck = false
			} 	else if (birth[3]+birth[4] > 31 || birth[3]+birth[4] <= 01 ){
				bcheck = false
				}	else if (birth[6]+birth[7]+birth[8]+birth[9] > 2016 || birth[6]+birth[7]+birth[8]+birth[9] <= 1901 ){
					bcheck = false
					}
	
	}
	return "By the way your Birthday is "  + birth + " yeah I know how creepy is that. I dated a girl who had the same birthday. "
	
}

//birthday()


document.getElementById("post").innerHTML = postalCode();
//postal code
function postalCode(loop) {
  var pcheck = false
	
	while(!pcheck) {
		  var zip = prompt("Please enter your Zip Code in this format xxxxx OR xxxxx-xxxx")
		pcheck = isnumber(zip.split("-").join(''))
			if (zip.length > 10 || zip.length <= 4 ){
			pcheck = false
			}
	}
	return "I think mainly in the " + zip + " area. So if you are in the aera I would love to creep on ya some more."

}

//postalCode()


document.getElementById("st").innerHTML = state();
//state abbreviation 
function state(loop) {
  var scheck = false
	
	while(!scheck) {
		  var birth = prompt("Please enter your state abbreviation. Must be two characters")
	scheck = isState(birth.split(" ").join('').toUpperCase())
	}
	
	return "Oh well I am going to be in " + birth + " soon."
	
}

//state()

document.getElementById("mar").innerHTML = married();
//Married
function married(loop) {
  var mcheck = false
	
	while(!mcheck) {
		  var m = prompt("Are you Married? Yes or No")
	mcheck = areu(m.split(" ").join('').toUpperCase())
	}
	
	return "Oh yeah by the way do you have a wife?" + m + " ? HA I knew it. Okay See ya dude!"
}

//married()





// Is a number Function for Phone, Birthday, Postal Code
function isnumber(n){
		return !isNaN(parseFloat(n)) && isFinite(n)
	}
	
// State Checker
function isState(x){
	var states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
	if (states.indexOf(x) === -1){
		return false
	} else {
		return true
	}
	
}

// Marrige Checker
function areu(x){
	if(x === "YES" || x === "NO"){
		return true
	} else {
		return false
	}
}