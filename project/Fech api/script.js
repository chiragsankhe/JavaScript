let div1 = document.getElementById("div1");
let p = document.createElement("p");
p.innerHTML = "Pokemon fech api".toUpperCase();


p.style.cssText = "padding-top: 10px; font-size:20px; t";
div1.appendChild(p);

div1.style.cssText = "background-color: yellow; color: black; text-align: center; height:40px; margin-left:20%; margin-right:20%; border-radius:20px; ";

fetchdata();
async function fetchdata() {

    try {

        const name = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        // const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if (!response.ok) {
            throw new Error("could not find response");

        }
        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const pokemonSprite_back = data.sprites.back_default;
        const back = document.getElementById("back_img");
        back.src = pokemonSprite_back;






    } catch (error) {
        console.error(error);
    }
}