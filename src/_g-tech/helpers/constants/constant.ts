import {NavLinkModel, SocialLinkModel} from "../ts/model";
import {Twitter} from "lucide-react";
import {FaFacebook, FaLinkedin, FaYoutube} from "react-icons/fa6";


export const navLinks: NavLinkModel[] = [
    {
        id: 1,
        name: 'Home',
        path: '/home'
    },
    {
        id: 2,
        name: 'Shop',
        path: '/shop'
    },
    {
        id: 3,
        name: 'Offers',
        path: '/offers'
    },
    {
        id: 4,
        name: 'Our Story',
        path: '/story'
    },
    {
        id: 5,
        name: 'Blog',
        path: '/blog'
    },
]


export const socialLinks: SocialLinkModel[] = [
    {
        id: 1,
        icon: Twitter
    },
    {
        id: 2,
        icon: FaFacebook
    },
    {
        id: 3,
        icon: FaLinkedin
    },
    {
        id: 4,
        icon: FaYoutube
    }
]