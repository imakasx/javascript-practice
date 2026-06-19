const randomNum = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
    color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
}
// let stop;
// const start = document.getElementById('start').addEventListener('click', function(){
//     stop = setInterval(() => {
//     document.body.style.backgroundColor = randomNum();
//     }, 1000);
// })
// const stp = document.getElementById('stop').addEventListener('click' , function(){
//     clearInterval(stop);
//     stop =null;
// })

//2nd approch



let stp;
const startChangingColor = function(){
    stp = setInterval(changBg,1000);

        function changBg(){
        document.body.style.backgroundColor = randomNum();
    }

}

const stopChangingColor = function(){
    clearInterval(stp);
    stp = null;
};


document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);