/**
 * 
 * @param  {Array.<string | boolean>} styles 
 * @returns {string}
 */
export default function cx(...styles) {
    return styles.join(" ");
}