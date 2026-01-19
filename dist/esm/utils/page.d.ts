import { ProcessedWord, Verse } from '../types';
/**
 * Convert a page number into a string and ensure it's a valid page number.
 */
export declare function getValidPageNumber(number?: number | string): number;
/**
 * Convert an array of verses to an object of lines
 * [Verses]
 * to
 * { [lineNumber]: [words of the line] }
 */
export declare function getLinesByVerses(verses: Verse[]): Record<string, ProcessedWord[]>;
