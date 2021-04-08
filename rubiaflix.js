var listaImagens = []

listaImagens.push("https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagens.push("https://m.media-amazon.com/images/M/MV5BNzFlMjA0ZmUtZWI0Mi00ZGJkLTlmMmYtZmE1ODZiMjhjMGM0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagens.push("https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagens.push("https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagens.push("https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagens.push("https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR3,0,182,268_AL_.jpg")

var listaNomes = []

listaNomes.push("Até o Último Homem", "A Garota no Trem", "Green Book", "As Branquelas", "Intocáveis", "Um Contratempo")

var genero = []

genero.push("Biografia/Drama/", "Crime/Drama", "Biografia/Comédia/Drama", "Comédia/Crime", "Biografia/Drama/Comédia", "Crime/Drama/Mistério")


var ids = []

ids.push("1", "2", "3", "4", "5", "6")

var trailers = []

trailers.push("https://www.youtube.com/embed/4s4UCxCv_OE", "https://www.youtube.com/embed/kmQ1WcX425E", "https://www.youtube.com/embed/NwyeDErhF2Y", "https://www.youtube.com/embed/ecPZX2Xjftk", "https://www.youtube.com/embed/Fb8h4gChlU", "https://www.youtube.com/embed/4DTjlmNYMEo")

var hora = []

hora.push("2h 19min", "1h 52m", "2h 10m", "1h 49m", "1h 52m", "1h 46m")

var desde = []

desde.push("<b>2016</b>", "<b>2016</b>", "<b>2018</b>", "<b>2004</b>", "<b>2011</b>", "<b>2017</b>")

var img = document.querySelector("#filmes");
for (var i = 0; i < listaImagens.length; i++){
    document.write("<div class='base' id='filmes'><div class='filme'><img data-toggle='modal' data-target='#"+ids[i]+"' src=" + listaImagens[i]+ "><p class='nome'>"+ listaNomes[i] + "</p><p class='data'>Desde de " + desde[i]+ "<div class='imghover'><div class='info'><span>"+ genero[i] + "</span><span>Duração: "+ hora[i] + "</span></div></div></div></div><div class='modal fade' id='"+ids[i]+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'><div class='modal-body'><iframe style='border-radius: 10px;' width='100%' height='320' src="+ trailers[i] +" title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div></div></div>")
}
