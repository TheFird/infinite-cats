const cats = document.getElementById('cats');

function DodajKota(){
    const kontener = document.createElement('div');
    kontener.className = 'cat';
    const zdjecie = document.createElement('img');
    zdjecie.src = `https://cataas.com/cat?random=${Math.random()}`;
    kontener.appendChild(zdjecie);
    cats.appendChild(kontener);
}


for(let i = 0; i < 10; i++ ){
    DodajKota();
}



window.addEventListener('scroll', () => {
    for(let i = 0; i < 10; i++ ){
        DodajKota();
    }
});