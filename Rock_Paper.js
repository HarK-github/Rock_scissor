
let compscore = 0, usrscore = 0, counter = 0;
let plyr;

let a = ["Rock","Paper","Scissor"];
function getCompChoice(){
    return a[Math.ceil(Math.random()*100 % 3)-1];
}

function choice(c){
    if (c == 1){
        plyr = "Rock";
        let b = document.querySelector("div.sm-box2").childNodes;
        for (let i = 1;i < b.length;i+=2){

        b[i].style.height= "100px";
        b[i].style.width= "100px";
        console.log(b[i].style[0]);
        console.log("jjj")
        }
        let a = document.querySelector("button.b_R");
        a.style["height"] = "200px";
        a.style["width"] = "200px";
    }
    else if (c==2){
        plyr = "Paper";
        let b = document.querySelector("div.sm-box2").childNodes;
        for (let i = 1;i < b.length;i+=2){

            b[i].style.height= "100px";
            b[i].style.width= "100px";
            console.log(b[i].style[0]);
            console.log("jjj")
            }
        let a = document.querySelector("button.b_P");
        a.style["height"] = "200px";
        a.style["width"] = "200px";

    }
    else if (c==3){
        plyr = "Scissor";
        let b = document.querySelector("div.sm-box2").childNodes;
        console.log("choice3");
        for (let i = 1;i < b.length;i=i+2){

            b[i].style.height= "100px";
            b[i].style.width= "100px";
        
            }
        let a = document.querySelector("button.b_S");
        a.style["height"] = "200px";
        a.style["width"] = "200px";
    }
    
}

let endgame = ()=> alert(`Player score :${usrscore} \n Computer score ${compscore} \n Total games : ${counter}`)

function playgame(){
    let comp = getCompChoice();
    if (counter == 5){
        endgame();
        counter = 0;
    }
    let txt;
    counter += 1;
    let b1 = document.querySelector("div.sm-box").childNodes;

    for (let j = 1;j < b1.length;j=j+2){
            console.log("Reverting comp button"+j);
            b1[j].style.height= "100px";
            b1[j].style.width= "100px";
            
    }
    let a1 = comp == "Rock"?document.querySelector("div.b_R"): comp == "Scissor"?document.querySelector("div.b_S"):document.querySelector("div.b_P");
    console.log(a1);
    a1.style["height"] = "200px";
    a1.style["width"] = "200px";
    if (plyr == "Rock" && comp == "Scissor" || plyr == "Paper" && comp == "Rock" ){
        txt = `Player won \n Player choice : ${plyr} \n Computer choice : ${comp}`;
        compscore +=1;
    } else if (plyr == comp){
        txt = "TIE !!";
        compscore+=1;
        usrscore+=1;
    }else
    {                
        txt = `Computer won \n Player choice : ${plyr} \n Computer choice : ${comp}`;
        usrscore +=1;
    }
    let button = document.querySelector("button");
    button.textContent = `Select and Play \n ${txt}`;
}