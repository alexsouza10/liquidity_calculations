/*Liquidez

Liquidez corrente | Equação: LC = AC/PC*/
const liqC = (ac : number, pc : number) => {
  if (ac > 1) {
    console.log('O Ativo Circulante cobre todas as dívidas de curto prazo.');
  }else if (ac < 1) {
    console.log('O Ativo Circulante não consegue cobrir todas as dívidas de curto prazo.');
  }else if (ac = 1) {
    console.log('Equilíbrio financeiro de curto prazo.');
  }
  return {
   liqC: ac / pc
  };
};
console.log(liqC(100.000, 80.000));


//Liquidez Seca | Equação: LS = AC – E / PC
const liqS = (ac : number, e : number, pc:number) => {
   const resultadoSub = ac - e;
   const resultadoDiv = resultadoSub / pc;

   if(resultadoDiv > 0.9) {
    return `A empresa se encontra com a taxa de alta liquidez. ${resultadoDiv}`;
   } else if (resultadoDiv < 0.9) {
    return `A empresa se encontra com a taxa de baixa liquidez. ${resultadoDiv}`;
   }
}

console.log(liqS(260.000, 30.000, 242.000)); 
//               Ativo C.|Estoque|Passivo C.


//Liquidez Imediata | Equação: LI = D/PC
const liqI =(d : number, pc : number) => {
  return {liqI: d / pc};
}
console.log(liqI(20.000, 15.000));


//Liquidez Geral | Equação: LG = AC + RLP / PC + ELP
const liqG = (ac: number, rlp: number, pc: number, elp: number) =>  {
  const resultLiqG = (ac + rlp) / (pc + elp);
  return resultLiqG;
};

const resultG = liqG(800.000, 300.000, 400.000, 150.000);
//                   A.C. |  A.L.P  | P.C  |  E.L.P.
console.log(resultG);