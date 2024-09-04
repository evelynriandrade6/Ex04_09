module.exports = class controllerNumbers{

    static async checkPar(req,res){

        const {numero} = req.body;
        if(isNaN(numero)||typeof numero == "string"){
            res.status(400).json({message: "O número é inválido!"});
        }else if(numero % 2 == 0){
            res.status(200).json({message: "O número é par!"});
        }
        else{
            res.status(400).json({message: "O número é ímpar!"});
        }
    }

    static async checkPrimo(req,res){

        const{numero} = req.body;
        if(isNaN(numero)||typeof numero == "string"){
            res.status(400).json({message: "O número é inválido!"});
        }else if(primos(numero)){
                res.status(200).json({message: "O número é primo!"});
        }
        else {
            res.status(400).json({message: "O número não é primo!"});
        }
    
    }
}

function primos(num){
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            /* Se um número(num) é divisível por qualquer número(i) entre 2 e a raíz dele(num), 
            ele não é primo*/
            return false;
        }
    }
    return true; // Se ele for primo, retorna verdadeiro(true)
}
