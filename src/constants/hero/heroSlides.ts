export type HeroSlide = {
    id: number
    image: string
    title: string
    desc: string[]
    href: string
    cta: string 
}

export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        image: '/imgs/hero/slider01.jpg',
        title: "Residential Space",
        desc: [
            '성공과 관련된 가장 중요한 요소',
            '하나뿐인 독창적인 디자인',
        ],
        href: "/sub01",
        cta: "VIEW PORTFOLIO"
    },
    {
        id: 2,
        image: '/imgs/hero/slider02.jpg',
        title: 'Commercial Space',
        desc: [
            '차별화된 공간연출',
            '편리하고 실용적인 디자인',
        ],
        href: '/sub02',
        cta: 'VIEW PORTFOLIO',
    },
]