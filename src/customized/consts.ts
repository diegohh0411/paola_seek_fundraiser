interface config {
    personalName: string;
    title: string,
    subtitle: string,
    moneypool?: string,

    transfer: {
        bank: string,
        clabe: string,
    },

    expenses: {
        transporte: number[],
        boleto: number[],
        hospedaje: number[],
        comida: number[],
    },

    prayerFormsUrl?: string,
}

export const db_username = 'paola';

export const globalConfig: config = {
    personalName: 'Paola Espejo',
    title: "Hola! soy Paola Espejo",
    subtitle: "Y soy una estudiante católica de 20 años con muchas ganas de ir a SEEK 2025 y necesito tu ayuda para hacerlo realidad. ",
    moneypool: "https://www.moneypool.mx/p/YSlyPsc",

    transfer: {
        bank: "Nu",
        clabe: "638180010116050598",
    },

    expenses: {
        transporte: [14000],
        boleto: [7500],
        hospedaje: [4500],
        comida: [4500],
    },

    prayerFormsUrl: 'https://vanilla-fine-4e8.notion.site/143cbd6bf2a3806baf69e0a6269a35da?pvs=105'
}

export const SITE_TITLE = `Dona a ${globalConfig.personalName} | SEEK 2025`;
export const SITE_DESCRIPTION = globalConfig.subtitle;

