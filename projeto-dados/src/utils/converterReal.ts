export function conveterReal(total: number){
   return total.toLocaleString('pt-BR', {style:"currency",currency:"BRL"})
}