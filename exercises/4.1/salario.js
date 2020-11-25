let salarioBruto = 3000;
let salarioBase;
let inss;

let irpf;

if (salarioBruto <= 1903.98) {

    irpf= 0;;
}

    else if (salarioBruto <= 2826.65) {

        inss = salarioBruto * 0.075;
    }

        else if (salarioBruto <= 5189.82) {

            inss = salarioBruto * 0.11;

        }

            else {

                inss = 570.88;
            }

salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {

    irpf = 0;

    }
            
        else if (salarioBase <= 2826.65) {
            
            irpf = (salarioBase * 0.075) - 142.80;

        }
            
            else if (salarioBase <= 3751.05) {
            
                irpf = (salarioBase * 0.15) - 354,80;
            
            }
            
                else  if (salarioBase <= 3751.05) {
            
                    irpf = (salarioBase * 0.225) - 636.13;

                }

                    else {

                        irpf = (salarioBase * 0.275) - 869.36;

                    }


console.log(inss);
console.log(salarioBase);
console.log(irpf);
console.log (salarioBase - irpf);