export interface IITXP {
    id: number;
    name: string;
    imgLogo: string;
    description: string;
    type?: ITXPType;
}

export type ITXPType = 'language' | 'build-tool' | 'framework' | 'data-tool';