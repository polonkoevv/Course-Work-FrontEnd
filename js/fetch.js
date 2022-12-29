var list = [8213,37859,5005,10620,41104,6793];

async function getResponse(){
    var response = await fetch('https://dropmefiles.com/degSh');
    var content = await response.json();
    console.log(content);
}

let data = [
    {
        "name" : "Леонардо Ди Каприо",
        "birthDate" : "11 ноября, 1974",
        "photo" :"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9c33caef-be28-4257-b7ed-a407698f1a32/280x420",
        "films" : ["Начало","Поймай меня, если сможешь","Остров проклятых"],
        "rewards": ["Премия канала «MTV», 2019 год","Оскар, 2016 год","Премия канала «MTV», 2016 год"]
    },
    {
        "name" : "Киллиан Мерфи",
        "birthDate" :"25 мая, 1976",
        "photo" :"https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/60c9b049-6177-463f-b518-40337fbeb681/280x420",
        "films" : ["Бэтмен: Начало","Завтрак на Плутоне","Сломленные"],
        "rewards": ["Премия канала «MTV», 2019 год","Оскар, 2016 год","Премия канала «MTV», 2016 год"]
    },
    {
        "name" : "Дэвид Духовны",
        "birthDate" : "7 августа, 1960",
        "photo" : "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/68faf026-93b5-4b85-a7e7-04c9c0aec677/280x420",
        "films" : ["Секретные материалы","То, что мы потеряли","Тайны прошлого"],
        "rewards": ["Премия канала «MTV», 2019 год","Оскар, 2016 год","Премия канала «MTV», 2016 год"]
    }
]



function getJson(){
    var content = JSON.stringify(data);
    console.log(content)
}

console.log(data[0].name)

function addActors(){
    let key;
    var target = document.querySelector('.actors');
    for(key in data){
        target.innerHTML += `
        <div class="actor">
            <div class="img_wrapper">
                <img src="${data[key].photo}" alt="Тут должно быть фото" class="img">
            </div>
            <div class="about__actor">
            <h2 class="name__theatre">${data[key].name}</h2>
            <div class="bio__theatre">
                    <p><span class="bold">Имя</span>: ${data[key].name}<br> <span class="bold">Дата рождения:</span> ${data[key].birthDate}<br> </p>
            </div>

            <div class="rewards__theatre">
                    <p><span class="bold">Лучшие фильмы:</span> <br> ${data[key].films[0]} <br> ${data[key].films[1]} <br> ${data[key].films[2]} <br> <span class="bold">Награды:</span> <br> ${data[key].rewards[0]} <br> ${data[key].rewards[1]} <br> ${data[key].rewards[2]} </p>
            </div>
            </div>
            
        </div>
        `
    }

}

addActors()