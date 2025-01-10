const button =document.getElementById("buttton");
const funcontent = document.getElementById("funContent");
const fun = document.getElementById("fun");



button.onclick=() => {
    axios.get('')
    .then(function (respose){
        button.textContent="next";
        funcontent.textcontent= response .Data.setup
        fun.textContent="";
        setTimeout(function(){
            fun.textContent=respose.data.punchline;

        },1000);

    })
    .catch(function(error){
        console.log(error)
    });

    }

 