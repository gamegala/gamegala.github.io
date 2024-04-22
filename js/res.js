function showRes() {
	console.log("test");
	var email = document.getElementById("email").value.trim();
	var lastName = document.getElementById("lastName").value.trim();	
	document.getElementById("result_table").innerHTML = "";
	if (email == "" || lastName == "") {
		window.alert("Please fill email and last name");
	} else {
		var isFound = false;
		for(var i = 0; i < stuDb.length; i++) {
			// console.log(stuDb[i]);
			if (stuDb[i]['lastname'].toUpperCase() == lastName.toUpperCase() && 
				stuDb[i]['email'].toUpperCase() == email.toUpperCase()) {				

				isFound = true;
				var student = stuDb[i];

				document.getElementById("cong").innerHTML =
			"<h3>Congratulations!</h3>";
		
				document.getElementById("result_table").innerHTML += 
					'<tr><td>Name</td><td>' + student.firstname + ' ' + student.lastname + '</td></tr>' + 
					'<tr><td>Grade</td><td>' + student.grade + '</td></tr>' + 					
					'<tr><td>Project Title</td><td>' + student.title + '</td></tr>' + 
					'<tr><td>Video</td><td><a href="'+ student.youtube + '" target="_blank">' + student.youtube + '</a></td></tr>' + 
					'<tr><td>Division</td><td>' + student.division + '</td></tr>' + 
					'<tr><td>Score</td><td>' + student.score + '/100</td></tr>' + 
					'<tr><td>Rank</td><td>' + student.rank + '</td></tr>' + 
					'<tr><td>Award</td><td><b style="color: red;">' + student.award + '</b></td></tr>' + 
					'<tr><td>Judge Comment</td><td>' + student.comment + '</td></tr><br>';
			}
		}
		if (!isFound) {
			document.getElementById("msg").innerHTML =
			"<h3>Incorrect email or last name. <br> Please contact <a>contact@gamegala.org</a></h3>";
		} else {
			document.getElementById("msg").innerHTML =
			"<h3>Your certificate will be emailed separately. If you find any incorrect information or have questions about the result, please contact <a>contact@gamegala.org</a></h3>";
		}
	} 
}
