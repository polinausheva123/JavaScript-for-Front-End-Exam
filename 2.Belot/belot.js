function belot(){

    let belot =[50,100,30,20];

  let tochkiNaTedi=belot[0];
   let tochkiNaNikoleta=belot[1];
   let tochkiNaRadi=belot[2];
   let tochkiNaIvo=belot[3];


    let tediMami= tochkiNaTedi*0.10;
    let finalniTedi=tochkiNaTedi-tediMami;

    let nikiMami= tochkiNaNikoleta*0.05;
    let finalniNiki=tochkiNaNikoleta-nikiMami;


    let men=tochkiNaRadi+tochkiNaIvo;
    let Muje= men -(men/6);
    let woman = finalniNiki+finalniTedi;


    if(woman>Muje){
        console.log("Highest points: "+Math.max(finalniNiki, tochkiNaRadi, finalniTedi,tochkiNaIvo));
        console.log("GIRLS POWER");
        console.log("Difference between points: "+Math.ceil(woman-Muje))
    }
    else{
        console.log("Highest points: "+Math.max(finalniNiki, tochkiNaRadi, finalniTedi,tochkiNaIvo));
        console.log("MANS POWER");
        console.log("Difference between points: "+ Math.ceil(Muje-woman))
    }
}
belot();
