import { heroes } from "./data/hero";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {
    const id = '5d86371f2343e37870b91ef1';
    findHero( id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No hay heroe';
        if ( error ) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    });
};


/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object)=>void} callback
 *
 * @anotherValidParam {(error?: String, hero: Object)=>void} callback - 'error' return undefined
 */
const findHero = (id, callback) => {
    const hero = heroes.find( hero => hero.id === id)
    if( !hero ) {
        callback( `Hero with ID ${ id } not found`);
        return; // undefined;
    }

    callback(null, hero)
}