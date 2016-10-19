function addressGenerate(){
	var addressNum = Math.floor(Math.random() * 8999) + 1,
	addressName = ['Boylston st.', 'Tremont ave.', 'Park st.', 'Charles st.', 'Broadway ave.', 'Washington st.'],
	addressCity = ['Boston', 'Cambridge', 'Somerville', 'Brookline', 'Dorchester', 'Revere'],
	addressState = ['Massachusetts', 'New Hampshire', 'Connecticut', 'Maine'],
	addressZip = Math.floor(Math.random()* 90000) + 10000,
	random2 = Math.floor((Math.random() * addressName.length)),
	random3 = Math.floor((Math.random() * addressCity.length)),
	random4 = Math.floor((Math.random() * addressState.length));

	var address = addressNum + ' ' + addressName[random2] + ' ' + addressCity[random3] + ', ' + addressState[random4] + ' ' + addressZip;
	
	return address;
}

console.log(addressGenerate());