// for// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log(`Five number Lucky ${i}`)
//         break
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

for(let i=1; i<=5; i++){
    for(j=1; j<=10; j++){
        console.log(i + '*' + j + '=' + i*j )
    }
    break
}

for(let i=1; i<=5; i++){
    for(j=1; j<=10; j++){
        console.log(i + '*' + j + '=' + i*j )
    }
    continue
}