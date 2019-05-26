export interface ChpImage {
    class?: string;
    right: boolean;
    src: any;
    desc: string;
    text: string;
}

export interface ChpServicesAndGoods {
    title: string;
    texts: string[];
}

export interface ChpPartner {
    title: string;
    logo: any;
}

export interface ChpState {
    images: ChpImage[];
    services: ChpServicesAndGoods;
    goods: ChpServicesAndGoods;
    partners: ChpPartner[];
}
