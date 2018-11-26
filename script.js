function myFirstApp(name, age) {
	alert('Привет, меня зовут ' + name +" и это моя первая программа!");
	function showSkills() {
		let skills = ['html5', 'css3', 'bootstrap'];
		// console.log(skills);
		for (let i = 0; i < skills.length; i++) {
			document.write("Я вадею " + skills[i] + "<br>");
		}
	}
	showSkills();
	function checkAge() {
		if (age < 18) {
			alert('Тебе ещё рано такое знать!');
		} else {
			alert('Ты можешь войти!');
		}
	}
	checkAge();
	function calcPow(num) {
		console.log(num*num);
	}
	calcPow(4);
}
myFirstApp('Kirill', 24);