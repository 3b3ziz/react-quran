/**
 * Groups an array of objects by a specified key.
 */
export declare function groupBy<T>(values: T[], key: keyof T): Record<string, T[]>;
/**
 * Deeply check if two values are equal
 */
export declare function isDeepEqual(value1: any, value2: any): boolean;
/**
 * Check if the item "x" is in "arr"
 */
export declare function isSubset(array: any[], subObject: any): boolean;
