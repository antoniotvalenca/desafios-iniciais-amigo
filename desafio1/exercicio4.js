const data = new Date();

function retornaMesExtenso(n){
    switch (n) {
        case 0:
            return "janeiro";

        case 1:
            return "fevereiro";

        case 2:
            return "março";

        case 3:
            return "abril";

        case 4:
            return "maio";

        case 5:
            return "junho";

        case 6:
            return "julho";

        case 7:
            return "agosto";

        case 8:
            return "setembro";

        case 9:
            return "outubro";

        case 10:
            return "novembro";

        case 11:
            return "dezembro";
    };
}

const mesExtenso = retornaMesExtenso(data.getMonth());

console.log(mesExtenso);