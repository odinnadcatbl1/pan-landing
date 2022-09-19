import React, { ReactElement } from "react";

export interface IButton {
    className?: string;
    text: string;
    onClick?: () => void;
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

export interface ISelect {
    placeholder: string;
    options: string[];
}

export interface ICheckbox {
    label: ReactElement;
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
