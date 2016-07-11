var teddy = {
			title: "President",
			name: "Theodore Roosevelt",
			bio: "Teddy was an extraordinary president who had no problems speaking his mind. Lorem ipsum dolor sit amet, ea iisque nostrum reformidans nec. Quem suavitate ei pro, sit cu alterum voluptatum. In probo repudiare vix, te quem wisi eum, sed labitur evertitur scripserit te. Nostro reformidans vix no, ne elitr quando definitiones qui, cu ius deleniti molestiae. Homero laboramus vim ei, sale aliquip insolens quo te. Vim ea tota eleifend adversarium."
			};

var output = document.getElementById('output');

output.innerHTML = "<div class='teddyBio' id='person'>"
					+
					"<h3>" + teddy.name + "</h3>"
					+
					"<h5>" + teddy.title + "</h5>"
					+ 
					"<p>" + teddy.bio + "</p>"
					+ 
					"</div>";

var bioContainer = document.getElementById('person');

bioContainer.addEventListener("click", function(event) {
	if (event.target === bioContainer) {
		document.getElementById('textBox').focus();
		bioContainer.childNodes[2].style.border = "5px dotted black";
		bioContainer.childNodes[2].innerHTML = "";
		textBox.addEventListener("keypress", function(press) {
			if (press.keyCode === 13) {
				bioContainer.childNodes[2].innerHTML = textBox.value;
			}
		});
	} else {
		bioContainer.childNodes[2].style.border = "";
	}
});

console.log(textBox);