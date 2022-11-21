export interface ChpImage {
    imageClass?: string;
    right: boolean;
    src: string;
    desc: string;
    text: string;
}

export interface ChpServicesAndGoods {
    title: string;
    texts: string[];
}

export interface ChpPartner {
    title: string;
    logo: string;
}

export interface ChpState {
    images: ChpImage[];
    services: ChpServicesAndGoods;
    goods: ChpServicesAndGoods;
    partners: ChpPartner[];
}
