const Mask = {
    // mascara cpf
    cpf: v => {
        if (v) {
            return v
                .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        }
        return v
    },

    // marcara celular
    cel: v => {
        if (v) {
            return v
                .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{2})(\d)/, '($1) $2') // coloca () entre os dois primeiro caracteres
                .replace(/(\d{4})(\d)/, '$1-$2') // coloca - apos o 4 digito
                .replace(/(-\d{5})\d+?$/, '$1') // captura 5 numeros seguidos de um traço e não deixa ser digitado mais nada
        }
        return v
    },

    unMask: v => {
        if (v) {
            return v
                .replace(/\./g, "") // remove todos os .
                .replace(/\(/g, "") // remove todos os (
                .replace(/\)/g, "") // remove todos os )
                .replace(/\//g, "") // remove todos os /
                .replace(/\s/g, "") // remove todos os " "
        }
        return v
    },

}

export default Mask;