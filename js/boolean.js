var answer = true;

const App = {

    MyLogicVar: true,


    /*
    Boolean
        * Somente 2 valores

        true    // verdadeiro
        false   // false
    */

    Init(){
        // You code here

        console.log(false);
        console.log(true);

        // console.log(MyLogicVar)

        if (App.MyLogicVar)
            console.log("O valor da variável é: Verdadeiro :)");
        else
            console.log("O valor da variável é: False -^º");
            
        /*
        // Outra forma de saida de dados...
        // document.write("O valor da variável é: False -^º");
        */
    }
}

App.Init()