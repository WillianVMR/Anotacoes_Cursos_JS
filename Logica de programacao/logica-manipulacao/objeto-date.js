// Função Date é uma função construtora (Começa com letra maiuscula)

const data = new Date(0); // 01/01/1970 Timestamp Unix ou Época unix

// new Date(ano, mês) mês array [0-11]


// Syntax

new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

const dia = data.getDate();
const mes = data.getMonth(); // Mês começa do zero
const ano = getFullYear();
const hora = getHours();
const minutos = getMinutes();
const segundos = getSeconds();
const milisegundos = getMillisseconds();
const diaSemana = getDay(); /// [0-6]

// Pegar milésimos de segundos da data atual

const milesimosSegundsoAgora = Date.now();