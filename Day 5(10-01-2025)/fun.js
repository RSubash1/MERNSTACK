button.addEventListener('click', () => {
    console.log("Button clicked");
    axios.get('https://official-joke-api.appspot.com/jokes/random') 
    .then(function(response) {
        console.log("API request success");
        button.textContent = "Next";
        funContent.textContent = response.data.setup;
        fun.textContent = "";
        setTimeout(function() {
            fun.textContent = response.data.punchline;
        }, 1000);
    })
    .catch(function(error) {
        console.log("API request failed", error); 
    });
});



