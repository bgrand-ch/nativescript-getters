import { IValuePairs } from "./value-pairs.model";
import { View } from "tns-core-modules/ui/core/view/view";
interface IGettersMethods {
    getViewsByTag<T extends View>(tagName: string): Array<T>;
    getViewsByTags<T extends View>(...tagNames: Array<string>): Array<T>;
    getViewsByType<T extends View>(typeName: string): Array<T>;
    getViewsByTypes<T extends View>(...typeNames: Array<string>): Array<T>;
    getViewsByClass<T extends View>(className: string): Array<T>;
    getViewsByClasses<T extends View>(...classNames: Array<string>): Array<T>;
    getViewsByProperty<T extends View>(propertyName: string): Array<T>;
    getViewsByProp<T extends View>(propertyName: string): Array<T>;
    getViewsByAttribute<T extends View>(propertyName: string): Array<T>;
    getViewsByAttr<T extends View>(propertyName: string): Array<T>;
    getViewsByProperties<T extends View>(...propertyNames: Array<string>): Array<T>;
    getViewsByProps<T extends View>(...propertyNames: Array<string>): Array<T>;
    getViewsByAttributes<T extends View>(...propertyNames: Array<string>): Array<T>;
    getViewsByAttrs<T extends View>(...propertyNames: Array<string>): Array<T>;
    getViewsByValuePair<T extends View>(propertyName: string, propertyValue: string | number | boolean): Array<T>;
    getViewsByValPair<T extends View>(propertyName: string, propertyValue: any): Array<T>;
    getViewsByValuePairs<T extends View>(...valuePairs: Array<IValuePairs>): Array<T>;
    getViewsByValPairs<T extends View>(...valuePairs: Array<IValuePairs>): Array<T>;
    getViewsByIdentifiers<T extends View>(...identifiers: Array<string>): Array<T>;
    getViewByIdentifier<T extends View>(id: string): T;
}
export { IGettersMethods };
