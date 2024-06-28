var radio = document.querySelector('.manual-btn')
var cont = 1


document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        targetElement.scrollIntoView({ behavior: 'smooth' }); 
    });
});
