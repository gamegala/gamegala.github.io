function showRes() {
	console.log("test");
	var email = document.getElementById("email").value.trim();
	var lastName = document.getElementById("lastName").value.trim();
	console.log(email);
	console.log(lastName);
	if (email == "" || lastName == "") {
		window.alert("Please fill email and last name");
	} else if (!(email in stuDb)) {
		window.alert("Wrong email")
	} else if (stuDb[email]['LastName'].toUpperCase() == lastName.toUpperCase()) {
		var student = stuDb[email];
		if (student['Award'] == "Third Prize") {
			var rank = "28%"
		} else if (student['Award'] == "Second Prize") {
			var rank = "19%"
		} else if (student['Award'] == "First Prize") {
			var rank = "8%"
		} else {
			var rank = "42%"
		}
		document.getElementById("result_table").innerHTML = '<tr><td>Name</td><td>' + student.FirstName + ' ' + student.LastName + '</td></tr>' + '<tr><td>Grade</td><td>' + student.GradeLevel + '</td></tr>' + '<tr><td>School</td><td>' + student.School + '</td></tr>' + '<tr><td>Project Title</td><td>' + student.Title + '</td></tr>' + '<tr><td>Division</td><td>' + student.Division + '</td></tr>' + '<tr><td>Award</td><td>' + student.Award + '</td></tr>' + '<tr><td>Rank</td><td>' + rank + '</td></tr>' + '<tr><td>Judge Comment</td><td>' + student.Comment + '</td></tr>'
	} else {
		window.alert("Wrong Last name")
	}	
}
