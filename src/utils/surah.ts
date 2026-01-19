import pagesData from '../data/pages-v2.json'
import surahNames from '../data/surah.json'
import { Verse } from '../types'

export type SurahInfo = {
    number: number
    name: string      // Arabic name
    startPage: number
}

// Build surah info with start pages (computed once at module load)
export const surahs: SurahInfo[] = (() => {
    const surahStartPages: Record<number, number> = {}

    ;(pagesData as Verse[][]).forEach((verses, pageIndex) => {
        const page = pageIndex + 1
        verses.forEach(verse => {
            const surahId = parseInt(verse.d.split('_')[0])
            if (!surahStartPages[surahId]) {
                surahStartPages[surahId] = page
            }
        })
    })

    return surahNames.map((name, index) => ({
        number: index + 1,
        name,
        startPage: surahStartPages[index + 1] || 1,
    }))
})()

// Get surah by number (1-114)
export function getSurah(number: number): SurahInfo | undefined {
    return surahs[number - 1]
}

// Get surah(s) for a given page
export function getSurahsByPage(page: number): SurahInfo[] {
    return surahs.filter(s => {
        const nextSurah = surahs[s.number]
        const endPage = nextSurah ? nextSurah.startPage - 1 : 604
        return page >= s.startPage && page <= endPage
    })
}
