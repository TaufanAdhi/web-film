const card = document.querySelector('#row1')
const divCard = document.createElement('div')
divCard.setAttribute('class', 'col-md-4 my-3')
const btn = document.querySelector('.tombol')
const text = document.querySelector('.search')
text.addEventListener('change', function (e) {
    let value = e.target.value
    btn.addEventListener('click', function (e) {
        showMovie(value)
    })
})





function addLiSDoc(data) {
    const detail = document.querySelector('.li')
    let liDetail = '';
    templateDS(data).forEach((e) => {
        liDetail += `<li class="list-group-item">${e}</li>`
    })
    detail.innerHTML = liDetail;
    function templateDS(data) {
        let dt = []
        for (const x in data) {
            if (dt.length < 10) {
                dt.push(`${x}:${data[x]}`)
            }
        }
        return dt;
    }
}


function addPosterSDoc(data) {
    const imgDetail = document.querySelector('.imgDetail')
    imgDetail.setAttribute('src', `${data.Poster}`)
}


function tampilDetailS(data) {
    $.ajax({
        url: `http://www.omdbapi.com/?apikey=a4cfe793&i=${data}`,
        success: data => {
            const modalTitle = document.querySelector('#exampleModalLabel')
            modalTitle.innerHTML = data.Title;
            addPosterSDoc(data)
            addLiSDoc(data)
        }
    })
}

function showMovie(a) {
    $.ajax({
        url: `http://www.omdbapi.com/?apikey=a4cfe793&s=${a}`,
        success: movies => {
            addCardToDocument(movies)
            const idm = document.querySelectorAll('.idm')
            idm.forEach(function (e) {
                e.onclick = function () {
                    let data = e.getAttribute('data-idmb')
                    tampilDetailS(data)
                }
            })
        }
    })
    function addCardToDocument(movies) {
        const movie = movies.Search
        let appen = '';
        movie.forEach(e => {
            appen += addCard(e)
        })
        console.log(appen)
        card.innerHTML = appen;
        function addCard(e) {
            return `<div class="col-md-4 my-3">
            <div class="card">
                <img src="${e.Poster}" class="card-img-top poster">
                <div class="card-body">
                    <h5 class="card-title">${e.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${e.Year}</h6>
                    <a href="#" class="btn btn-primary idm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-idmb="${e.imdbID}">Lihat Detail</a>
                </div>
            </div>
            </div>`;
        }
    }
}


// sekedar menambahkan warna ke li 

const ul = document.querySelectorAll('ul *')
ul.forEach(e => {
    e.classList.add('text-light')
})

// akhir

// sekedar menambahkan opacity 
const hold = document.querySelectorAll('.hold')

hold.forEach(e => {
    e.addEventListener('mouseenter', function () {
        const div = this.querySelector('div')
        div.classList.add('opacity-100')
    })
    e.addEventListener('mouseleave', function () {
        const div = this.querySelector('div')
        div.classList.remove('opacity-100')
    })

    e.addEventListener('click', function (e) {
        const name = this.getAttribute('data-name')
        const title = document.querySelector('.modal-title')
        title.innerHTML = name;
        console.log(title)
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=a4cfe793&s=${name}`,
            success: dataN => {
                const thumb = document.querySelector('.movieThumb .row')
                let data = dataN.Search
                let isi = ''
                data.forEach((e, i) => {
                    if (name === 'Dilan' && i < 2) {
                        console.log('asd')
                        isi += `<div class="col-md-3  my-3">
                        <div class="card" style="width: 18rem; min-height: 35rem;">
                            <img src="${e.Poster}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${e.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${e.Year}</h6>
                                <a href="#" class="btn btn-primary btnThumb" data-idmb="${e.imdbID}" data-bs-toggle="modal" data-bs-target="#detailModal">Cek Detail</a>
                            </div>
                        </div>
                    </div>
                    `
                    } else if (name !== 'Dilan') {

                        isi += `<div class="col-md-3  my-3">
                            <div class="card" style="width: 18rem; min-height: 35rem;">
                                <img src="${e.Poster}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">${e.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">${e.Year}</h6>
                                    <a href="" class="btn btn-primary btnThumb" data-idmb="${e.imdbID}" data-bs-toggle="modal" data-bs-target="#detailModal">Cek Detail</a>
                                </div>
                            </div>
                        </div>
                    `
                    }
                })
                thumb.innerHTML = isi;

                const detail = document.querySelectorAll('.btnThumb')
                detail.forEach(e => {
                    e.addEventListener('click', async function (event) {
                        let data = this.getAttribute('data-idmb')
                        data = await fetch(`http://www.omdbapi.com/?apikey=a4cfe793&i=${data}`)
                            .then(response => response.json())
                            .then(response => response)
                        modalThumb(data)
                    })
                })



            }

        })
    })
})


function modalThumb(data) {
    const imgTD = document.querySelector('.imgTD')
    const ul = document.querySelector('#detailModal .list-group')
    imgTD.setAttribute('src', `${data.Poster}`);

    let dt = []
    for (const x in data) {
        if (dt.length < 10) {
            dt.push(`${x}:${data[x]}`)
        }
    }
    let liDetail = '';
    dt.forEach((e) => {
        liDetail += `<li class="list-group-item">${e}</li>`
    })

    ul.innerHTML = liDetail;
}








// genre film 


let genre = `aksi,petualangan, animasi, komedi, drama, horor, fantasi, sains fiksi, musikal, romantis, misteri, kejahatan, thriller, fiksi ilmiah, film noire, sejarah, perang, dokumenter, olahraga,superhero.`;
genre = genre.split(',')
const rowGenre = document.querySelector('.genre')
let genreE = ``;
genre.forEach(e => {
    genreE += ` 
    <div class="col-md-2 me-3 my-2">
        <button type="button" class="btn btn-danger genreBtn">${e}</button>
    </div>`
})

rowGenre.innerHTML = genreE;

// chagen class icon genre 

let iconG = document.querySelector('.bi-caret-up-square-fill')

iconG = iconG.parentElement;


iconG.addEventListener('click', function(e) {
    iconG.childNodes[1].classList.toggle('bi-caret-up-square-fill')
    iconG.childNodes[1].classList.toggle('bi-caret-down-square-fill')
})


// icon film slide

const iconFilmL = document.querySelectorAll(`.rightIFilm`)
const iconFilmR = document.querySelectorAll(`.leftIFilm`)
const containAnime = document.querySelectorAll('#anime .col-2')
let amount = containAnime.length - 5;
let film = document.querySelectorAll(`div .film`)

aFI = [];

film.forEach(e => aFI.push(0));


iconFilmL.forEach((e,i) => {
    
    e.addEventListener('click', function(e) {
        let tMin = -14 * amount;
        if(aFI[i] === tMin){
            
        }else{
            aFI[i] += -14;
        }
        film[i].style.marginLeft = `${aFI[i]}rem`;
        console.log(film) 
        
    });
    
})

iconFilmR.forEach((e,i) => {
    e.addEventListener('click', function(e) {
        // let tMin = 14 * amount;
        if(aFI[i] === 0){
            
        }else{
            aFI[i] += 14;
        }
        film[i].style.marginLeft = `${aFI[i]}rem`;
        console.log(film) 
        
    });
})








