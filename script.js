const avaliacoes = [
    {
        img: "foto1.png",
        author: "José Carlos",
        job: "Trabalho1",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officia vero, deleniti repellendus cupiditate est quisquam saepe veritatis nisi distinctio officiis voluptate optio iste voluptatem incidunt nobis vel, unde quaerat."
    },
    {
        img: "foto2.jpg",
        author: "Antnio carlos",
        job: "Trabalho2",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officia vero, deleniti repellendus cupiditate est quisquam saepe veritatis nisi distinctio officiis voluptate optio iste voluptatem incidunt nobis vel, unde quaerat."
    },
    {
        img: "foto3.jpg",
        author: "Maria José",
        job: "Trabalho3",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse officia vero, deleniti repellendus cupiditate est quisquam saepe veritatis nisi distinctio officiis voluptate optio iste voluptatem incidunt nobis vel, unde quaerat."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const btnNext = document.querySelector(".next-btn");
const btnPrev = document.querySelector(".prev-btn");

let contador = 0;

window.addEventListener("DOMContentLoaded", function(){
    exibirPessoas();
})

function exibirPessoas(){
    img.src = avaliacoes[contador].img;
    author.textContent = avaliacoes[contador].author;
    job.textContent = avaliacoes[contador].job;
    text.textContent = avaliacoes[contador].text;
}

btnNext.addEventListener("click", function(){
    contador++;
    if (contador >= avaliacoes.length) {
        contador = 0;
    }
    exibirPessoas();
})

btnPrev.addEventListener("click", function(){
    contador--;
    if (contador <= 0) {
        contador = avaliacoes.length -1;
    }
    exibirPessoas();
})