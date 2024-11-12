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

export const globalConfig: config = {
    personalName: 'Diego Hernández',
    title: "Hola, soy Diego Hernández",
    subtitle: "Un universitario católico de 20 años que necesita tu ayuda para vivir SEEK 2025.",
    moneypool: "https://www.moneypool.mx/p/IeBnElA",

    transfer: {
        bank: "BBVA",
        clabe: "012180015256210819",
    },

    expenses: {
        transporte: [14000],
        boleto: [6500],
        hospedaje: [4500],
        comida: [4500],
    },

    prayerFormsUrl: "https://diego-hdz.notion.site/13be954db47680a4a3dfc1526aceb634?pvs=105",
}

export const SITE_TITLE = `${globalConfig.personalName} | SEEK 2025`;
export const SITE_DESCRIPTION = globalConfig.subtitle;

