
let info = {
	data : []
};

let userInput = [];

document.addEventListener("DOMContentLoaded" , function() {
	document.querySelector(".main_form").addEventListener('submit' , function(event) {
		event.preventDefault();
		let name = document.querySelector(".user_name").value;
		let password = document.querySelector(".user_password").value;
		
		userInput.push(name);
		userInput.push(password);
		info.data.push([userInput[0], userInput[1]]);
		userInput.splice(0,2);
		console.log(info.data);

		readyJSONFile = JSON.stringify(info);
		localStorage.setItem('userAccaunt' , readyJSONFile);

	});
});

console.log(localStorage.getItem('userAccaunt'));