// UI 

const container = document.querySelector('.container');
const row = 5;



for(let i = 0; i < row * 3; i++){

    const apikey = "0b8b62f3db5113be18aad8a679006e90";
    const mainnum = "400";
    const apinum = `movie/${getrandonum()}?`;
    const popular = "discover/movie?sort_by=popularity.desc&";
    const imgapi = "https://image.tmdb.org/t/p/w500";
    const url = `https://api.themoviedb.org/3/${apinum}api_key=${apikey}`;

    fetch(url)
    .then(res => res.json())
    .then(data=>{
        // console.log(data);
        // console.log(data.results[0]);
        // console.log(data.spoken_languages[0].english_name);
        // console.log(data.backdrop_path);

        const div = document.createElement('div');
        div.className = "box";

        const images = imgapi+data.poster_path;

        div.innerHTML = `
                    <img src="${images}" width="200px" alt="img1">
                    
                    <div class="text-box">
                        <h2>${data.title}</h2>
                        <p>${data.overview.slice(0,100)}...</p>

                        <div class="read">
                            <i class="fas fa-times"></i>
                            <p>${data.overview}</p>
                        </div>

                        <button>Read More</button>
                    </div>  
                    
        `;


         // // console.log(div);
         container.appendChild(div);


        const btn = div.querySelector('button');
        const read = div.querySelector('.read');
        const fas = div.querySelector('.fas');
        // console.log(fas);

        btn.addEventListener('click',()=>{
            // console.log("hey");

            read.classList.add('slide');
        });

        fas.addEventListener('click',function(){
            read.classList.remove('slide');
        });

       


    });
}





function getrandonum(){
    return Math.floor(Math.random() * 1000);
}
// console.log(getrandonum());



// ဒီapiကို သုံးတဲ့အခါ 
// 1) create Url
// 2) img url သွားယူ ပြီးရင် poster_path with 


