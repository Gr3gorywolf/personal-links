import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface SocialLink {
    name?:string,
    description?:string,
    url:string,
    icon:string | IconDefinition,
}