import { IBusinessCard, IPersonalData } from '../interfaces';

const BUSINESS_CARD: IBusinessCard = {
    firstName: 'Miguel',
    lastName: 'Marin Vermelho',
    email: 'miguelmarinvermelho@gmail.com',
    photoUrl: './assets/miguel.jpeg',
    contactMethods: [
        {
            name: 'Slack',
            link: 'https://www.slack.com'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/miguel-marin-09805185/'
        },
        {
            name: 'GitHub',
            link: "https://github.com/kiily"
        }
    ]
}

export const PERSONAL_DATA: IPersonalData = {
    businessCard: BUSINESS_CARD,
    introText: `I was born in Luxembourg and attended the European School of Luxembourg, both for primary and secondary education. I then
    moved to London (2013) and graduated from UCL with a BSc Biomedical Sciences (2016). Despite being really interested
    in Biology, I started coding with Python and shifted my focus to IT and computing. I then did an MSc Computer
    Science at UCL, graduating in september 2017.`,
}


