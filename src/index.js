console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    getSelectBreeds();
    getImages();
});

let imgContainer = document.getElementById('dog-image-container');
let breedsList = document.getElementById('dog-breeds');
let selector = document.getElementById('breed-dropdown');

function getImages () {
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then (res => res.json())
    .then (data => data.message)
    .then (images => {
        for (i of images) {
            let dogImg = document.createElement('img');
            dogImg.src = i;
            dogImg.style.width="200px";
            imgContainer.appendChild(dogImg);
        } 
    })
};

selector.addEventListener('change', () => {
    breedsList.replaceChildren('');
    getSelectBreeds()});

function getSelectBreeds () {
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then (res => res.json())
    .then (data => data.message)
    .then (breeds => { console.log(breeds);
        for (i in breeds) {
            if (i.startsWith(selector.value)) {
                let breed = document.createElement('li');
                breed.classList = 'dog-breed';
                breed.textContent = i;
                breedsList.appendChild(breed);
                breed.addEventListener('click',() => breed.style.color = "green")
            }
        }
    })
};


/*function getBreeds () {
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then (res => res.json())
    .then (data => data.message)
    .then (breeds => { console.log(breeds);
        for (i in breeds) {
            let breed = document.createElement('li');
            breed.textContent = i;
            breedsList.appendChild(breed);
            breed.addEventListener('click',() => breed.style.color = "green")
        }
    })
}*/

/*selector.addEventListener('change', selectBreed);

function selectBreed () {
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then (res => res.json())
    .then (data => data.message)
    .then (breeds => { console.log(breeds);
        for (i in breeds) {
            if (i.startsWith(selector.value)) {
                let breed = document.createElement('li');
                breed.textContent = i;
                breedsList.appendChild(breed);
                breed.addEventListener('click',() => breed.style.color = "green")
            }
        }
    })
}
*/