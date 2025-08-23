

const getMounth = () => {

    const month = new Date().getMonth()
    let months

    switch (month) {
        case 0:
            months = 'Janeiro'
            break;

        case 1:
            months = 'Fevereiro'
            break;

        case 2:
            months = ' Março'
            break;

        case 3:
            months = ' Abril'
            break;

        case 4:
            months = 'Maio'
            break;

        case 5:
            months = ' Junho'

            break;

        case 6:
            months = ' Julho'

            break;

        case 7:
            months = 'Agosto'
            break;

        case 8:
            months = 'Setembro'
            break;

        case 9:
            months = 'Outubro'
            break;

        case 10:
            months = 'Novembro'
            break;

        case 11:
            months = 'Dezembro'
            break;
    }
    return months
}

export default getMounth;