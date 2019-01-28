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
    in Biology, I discovered coding through Python and shifted my focus to IT and computing. I then did an MSc Computer
    Science at UCL, graduating in September 2017. I now work as a Frontend Developer at YOOBIC LTD.\r I love to read and learn new things and I am always open to try
    new technologies and languages out there.`,
}


