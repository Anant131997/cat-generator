document.addEventListener("DOMContentLoaded",()=>{
    let generate_btn = document.querySelector(".btn");
    generate_btn.addEventListener("click", catImgGenerator);

    function catImgGenerator(event){
        let api = fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            let btn_click = document.querySelector(".catImg");
            btn_click.innerHTML = '';
            // console.log(data);
            let catImgUrl = data[0].url;
            let randomCat = document.createElement("img");
            randomCat.setAttribute('src', `${catImgUrl}`);
            randomCat.classList.add("showcase");

            btn_click = document.querySelector(".catImg");
            btn_click.appendChild(randomCat);
        })
        .catch(err => console.log(err));
    }
})