/**
 * Defines the elements of a value pair
 * @interface IValuePairs
 * @param {string} propertyName - Property name of the views to find
 * @param {string|number|boolean} propertyValue - Value of "propertyName"
 */
interface IValuePairs {
    propertyName: string;
    propertyValue: string | number | boolean;
}
export { IValuePairs };
