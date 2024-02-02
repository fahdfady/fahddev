export { };

declare global {

    type Socials = {
        id: number;
        name: string;
        link: string;
        type: string;
    }

    const apiURL: string = "https://62f40773a84d8c9681317867.mockapi.io/";
}