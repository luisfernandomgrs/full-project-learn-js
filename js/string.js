const App = {

    // Variables
    /*
     String
     "" // aspas duplas
     '' // aspas simples
     `` // template literals ou template strings
    */

    Init(){
        // You code here
        console.log("Bem Vindos ao Starter");
        console.log("String com aspas simples e duplas... 'Bem Vindos ao Starter'");

        // template literals ou crases... permitem multplas linhas
        console.log(`String informada com múltiplas linhas:
                     com aspas 'simples' e "duplas"...`);


        // template literals ou crases... Permite o uso de expressões ou Interpolação
        console.log(`A soma de 10 + 15, é: ${10 + 15}`)
    }
}

App.Init()