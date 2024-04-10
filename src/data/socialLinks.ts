import { SocialLink } from "@/types/socialLink";
import { faGithub, faInstagram, faLinkedin, faTwitch} from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
export const SocialLinks:SocialLink[] = [
    {
        icon:faGlobe,
        name:'Personal website',
        url:'https://gregoryc.dev',
        description:'Know more about me'
    },
    {
        icon:faLinkedin,
        name:'LinkedIn',
        url:'https://www.linkedin.com/in/gregory-alexander-cabral-de-los-santos-79835614b/',
        description:'Know more about my professional career'
    },
    {
        icon:faGithub,
        name:'Github',
        url:'https://github.com/Gr3gorywolf',
        description:'Check out my github profile'
    },
    {
        icon:faInstagram,
        name:'Instagram',
        url:'https://www.instagram.com/gr3gorywolf',
        description:'Follow my adventures.'
    },
    {
        icon:faTwitch,
        name:'Twitch',
        url:'https://www.twitch.tv/gregorywolf123',
        description:'Join me for live gaming/coding adventures on Twitch'
    }
]