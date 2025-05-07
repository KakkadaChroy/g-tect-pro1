import React from "react";
import {LucideProps} from "lucide-react";
import {IconType} from "react-icons";

export type ID = number | string | null | undefined;
export type SocialIcon = React.ComponentType<LucideProps> | IconType;


export interface NavLinkModel {
    id: ID;
    name: string;
    path: string;
}


export interface SocialLinkModel {
    id?: ID;
    icon?: SocialIcon;
}
