
        function Somar() {
            let valor1 = parseFloat(document.getElementById("txtn1").value);
            let valor2 = parseFloat(document.getElementById("txtn2").value); 
            let soma = valor1 + valor2;
            console.log(soma) 
            let msg = `O resultado da soma entre ${valor1} e ${valor2} é ${soma}`;
            let res = document.getElementById("res");
            res.innerText = msg;
        }

        // // // // // // // // // // // // // // // // // // // // // // // // // // // //

        


        function Multiplicar() {
            let valor11 = parseInt(document.getElementById("txtn21").value) 
            let valor12 = parseInt(document.getElementById("txtn22").value)
            let multiplicar = valor11 * valor12
            let res2 = document.getElementById("res2")
            let msg2 = `O resultado da multiplicação entre ${valor11} e ${valor12} é ${multiplicar}`
            res2.innerText = msg2;
        } 

        function Dividir() {
            let valor21 = parseFloat(document.getElementById("txtn31").value) 
            let valor22 = parseFloat(document.getElementById("txtn32").value)
            let dividir = valor21 / valor22
            let res3 = document.getElementById("res3")
            let msg3 = `O resultado da divisão entre ${valor21} e ${valor22} é ${dividir}`
            res3.innerText = msg3;
        } 

        function Subtrair() {
            let valor41 = parseInt(document.getElementById("txtn41").value) 
            let valor42 = parseInt(document.getElementById("txtn42").value)
            let subtrair = valor41 - valor42
            let res4 = document.getElementById("res4")
            let msg4 = `O resultado da subtração entre ${valor41} e ${valor42} é ${subtrair}`
            res4.innerText = msg4;
        } 
