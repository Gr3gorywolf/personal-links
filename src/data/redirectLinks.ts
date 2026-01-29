import { RedirectLink } from "@/types/redirectLink";

export const RedirectLinks: RedirectLink[] = [
    {
        url: '/wine-manager',
        to: 'https://raw.githubusercontent.com/Gr3gorywolf/batocera_wine_manager/main/scripts/install.sh',
        name: 'Batocera wine manager installation'
    },

     {
        url: '/yamata-launcher',
        to: 'https://raw.githubusercontent.com/Gr3gorywolf/Yamata-launcher/master/scripts/linux/install.sh',
        name: 'Yamata launcher installation'
    }
];