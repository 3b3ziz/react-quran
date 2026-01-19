export declare const CENTERED_PAGES_VERTICAL: number[];
export declare const CENTERED_PAGES_HORIZONTAL: number[];
export declare const SURAH_ATTAWBAH_ID = 9;
export declare const HAFS_PAGES_COUNT = 604;
/**
 * Lines to center.
 * There are some lines that should have verses in the center to match The Medina Mushaf (officially: Mushaf al-Madinah an-Nabawiyyah, Arabic: مصحف المدينة النبوية).
 * For example, the last two verses of Surah Al-Qari'ah

 * The structure of the data is an array of [SURAH_ID, PAGE_NUMBER, LINE_NUMBER_ON_PAGE]

 * SURAH_ID: Used to ensure that the surah is in the provided LINE_NUMBER_ON_PAGE
 * PAGE_NUMBER: Indicates the page where the line is located
 * LINE_NUMBER_ON_PAGE: Specifies which line of the page should be centered
 *
 * @constant [SURAH_ID, PAGE_NUMBER, LINE_NUMBER_ON_PAGE]
 */
export declare const MEDINA_MUSHAF_CENTERED_LINES: number[][];
