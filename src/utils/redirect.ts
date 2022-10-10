/**
 * Il prend une chaîne comme argument et redirige l'utilisateur vers l'url fournie
 * @param {string} url - string - L'URL vers laquelle rediriger.
 */
export const redirect = (url: string) => {
    window.location.href = `${url}`;
};
