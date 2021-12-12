const fecha = document.querySelector(".fecha");
const categorias = document.querySelector(".categorias");
const template = document.querySelector(".template").content;

const fragment = document.createDocumentFragment()
const perfil = document.querySelector(".perfil")


const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");


let dailyArray = [

	{
		class: "p-s-1",
		img: "images/icon-work.svg",
		titulo: "Work",
		horas: "5hrs",
		horasPasadas: "7hrs"
	},

	{
		class: "p-s-2",
		img: "images/icon-play.svg",
		titulo: "Play",

		
		horas: "1hrs",
		horasPasadas: "2hrs"
	},

	{
		class: "p-s-3",
		img: "images/icon-study.svg",
		titulo: "Study",

		horas: "0hrs",
		horasPasadas: "1hrs"
	},

	{
		class: "p-s-4",
		img: "images/icon-exercise.svg",
		titulo: "Exercise",

		
		horas: "1hrs",
		horasPasadas: "1hrs"
	},

	{
		class: "p-s-5",
		img: "images/icon-social.svg",
		titulo: "Social",

		horas: "1hrs",
		horasPasadas: "3hrs"
	},

	{
		class: "p-s-6",
		img: "images/icon-self-care.svg",
		titulo: "Self Care",
		horas: "0hrs",
		horasPasadas: "1hrs"
	}
] 

let weeklyArray = [
	
	{
		class: "p-s-1",
		img: "images/icon-work.svg",
		titulo: "Work",
		horas: "32hrs",
		horasPasadas: "36hrs"
	},

	{
		class: "p-s-2",
		img: "images/icon-play.svg",
		titulo: "Play",
		horas: "10hrs",
		horasPasadas: "8hrs"
	},

	{
		class: "p-s-3",
		img: "images/icon-study.svg",
		titulo: "Study",
		horas: "4hrs",
		horasPasadas: "7hrs"
	},

	{
		class: "p-s-4",
		img: "images/icon-exercise.svg",
		titulo: "Exercise",
		horas: "4hrs",
		horasPasadas: "5hrs"
	},

	{
		class: "p-s-5",
		img: "images/icon-social.svg",
		titulo: "Social",
		horas: "5hrs",
		horasPasadas: "10hrs"
	},

	{
		class: "p-s-6",
		img: "images/icon-self-care.svg",
		titulo: "Self Care",
		horas: "2hrs",
		horasPasadas: "2hrs"
	}
]

let monthlyArray = [

	{
		class: "p-s-1",
		img: "images/icon-work.svg",
		titulo: "Work",
		horas: "103hrs",
		horasPasadas: "128hrs"
	},

	{
		class: "p-s-2",
		img: "images/icon-play.svg",
		titulo: "Play",
		horas: "23hrs",
		horasPasadas: "29hrs"
	},

	{
		class: "p-s-3",
		img: "images/icon-study.svg",
		titulo: "Study",
		horas: "13hrs",
		horasPasadas: "19hrs"
	},

	{
		class: "p-s-4",
		img: "images/icon-exercise.svg",
		titulo: "Exercise",
		horas: "11hrs",
		horasPasadas: "18hrs"
	},

	{
		class: "p-s-5",
		img: "images/icon-social.svg",
		titulo: "Social",
		horas: "21hrs",
		horasPasadas: "23hrs"
	},

	{
		class: "p-s-6",
		img: "images/icon-self-care.svg",
		titulo: "Self Care",
		horas: "7hrs",
		horasPasadas: "11hrs"
	}
]

let contador = 0

weeklyArray.forEach(element => {
	

	template.querySelector(".card .card-fondo .card-parte-2 h3").innerText = element.horas;
	template.querySelector(".card .card-fondo .card-parte-2 p span").innerText = element.horasPasadas;
	template.querySelector(".card .parte-superior").classList.add(element.class);
	contador ++
	
	template.querySelector(".card .parte-superior img").setAttribute("src", element.img);
	template.querySelector(".card .card-fondo .card-parte-1 h4").innerText = element.titulo;
	
	let clone = document.importNode(template, true);
	fragment.appendChild(clone);
})	

categorias.appendChild(fragment);

function eliminarClass () {
	template.querySelector(".card .parte-superior").setAttribute("class", "parte-superior");
}

function eliminarCard () {
	for (let i = 1; i < 7; i++) {
	categorias.removeChild(categorias.children[0])
	}
}



function active () {
	daily.classList.toggle("active")
	weekly.classList.toggle("active")
	
}

fecha.addEventListener("click", e => {

	const fragment = document.createDocumentFragment()
	
		if(e.target.classList.contains("daily")) {
	
			eliminarCard()
			daily.classList.add("active")
			weekly.classList.remove("active")
			monthly.classList.remove("active")

			eliminarClass()
			
			// contenido()
			dailyArray.forEach(hora => {
				template.querySelector(".card .card-fondo .card-parte-2 h3").innerText = hora.horas;
				template.querySelector(".card .card-fondo .card-parte-2 p span").innerText = hora.horasPasadas;
				template.querySelector(".card .parte-superior").classList.add(hora.class);	

				template.querySelector(".card .parte-superior img").setAttribute("src", hora.img);
				template.querySelector(".card .card-fondo .card-parte-1 h4").innerText = hora.titulo;
				// contenido()

				let clone = document.importNode(template, true);
				fragment.appendChild(clone);
				
			})

			categorias.appendChild(fragment)
	
		}

		if(e.target.classList.contains("weekly")) {
		
			eliminarCard()
			weekly.classList.add("active")
			monthly.classList.remove("active")
			daily.classList.remove("active")

			eliminarClass()

			// contenido()
			weeklyArray.forEach(hora => {

				template.querySelector(".card .card-fondo .card-parte-2 h3").innerText = hora.horas;
				template.querySelector(".card .card-fondo .card-parte-2 p span").innerText = hora.horasPasadas;
				template.querySelector(".card .parte-superior").classList.add(hora.class);
				

				template.querySelector(".card .parte-superior img").setAttribute("src", hora.img);
				template.querySelector(".card .card-fondo .card-parte-1 h4").innerText = hora.titulo;
				// contenido()

				let clone = document.importNode(template, true);
				fragment.appendChild(clone);

			})	
			categorias.appendChild(fragment);
		
		}

		if(e.target.classList.contains("monthly")) {
			
			eliminarCard()
			
			monthly.classList.add("active")
			weekly.classList.remove("active")
			daily.classList.remove("active")

			eliminarClass()

			// contenido()

			monthlyArray.forEach(hora => {
			
				template.querySelector(".card .card-fondo .card-parte-2 h3").innerText = hora.horas;
				template.querySelector(".card .card-fondo .card-parte-2 p span").innerText = hora.horasPasadas;
				template.querySelector(".card .parte-superior").classList.add(hora.class);

				template.querySelector(".card .parte-superior img").setAttribute("src", hora.img);
				template.querySelector(".card .card-fondo .card-parte-1 h4").innerText = hora.titulo;
				// contenido()

				let clone = document.importNode(template, true);
				fragment.appendChild(clone);
			})	
				
			categorias.appendChild(fragment)
			// console.log("hola")
	
		}

})