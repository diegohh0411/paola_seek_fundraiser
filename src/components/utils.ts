export const getID = () => {
    return 'id' + crypto.getRandomValues(new Uint32Array(2)).join('');
}
