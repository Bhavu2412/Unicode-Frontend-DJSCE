// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '459c46ec93msh2cbe67cc515a851p167284jsnc56cb03131d8',
// 		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
// 	}
// };
// const api_result=document.getElementById("container");
// const api_btn=document.getElementById("getData");
// api_btn.addEventListener('click', getdata)

// function getdata()
// {
//     fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline', options)
// .then(response => response.json())
// .then(response => api_result.innerHTML=response)
// .catch(err => console.error(err));
// document.getElementById("container").innerHTML=response;
// }



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '459c46ec93msh2cbe67cc515a851p167284jsnc56cb03131d8',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

function getdata()
{
	fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	console.log(dailyrecovered)
}