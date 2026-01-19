export type SurahInfo = {
    number: number;
    name: string;
    startPage: number;
};
export declare const surahs: SurahInfo[];
export declare function getSurah(number: number): SurahInfo | undefined;
export declare function getSurahsByPage(page: number): SurahInfo[];
