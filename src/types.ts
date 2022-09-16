export interface IButton {
    className?: string;
    text: string;
}

export interface IHeaderNavOption {
    name: string;
    link: string;
    descr: string;
}

export interface IHeaderNav {
    name: string;
    options?: IHeaderNavOption[];
}
