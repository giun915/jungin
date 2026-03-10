export type PortfolioCategory = 'commercial' | 'residential'

export type PortfolioCategoryData = {
  key: PortfolioCategory

  cardTitle: string
  cardImage: string
  cardAlt: string
  cardText: string[]

  label: string
  desc: string[]
}

export type PortfolioListItem = {
  id: number
  slug: string
  title: string[]
  itemClass: string
  itemMainImage: string
}

export type PortfolioCategoryPageData = PortfolioCategoryData & {
  items: PortfolioListItem[]
}

export const portfolioCategories: PortfolioCategoryPageData[] = [
  {
    key: 'commercial',

    cardTitle: 'Commercial Space',
    cardImage: '/imgs/common/commercial.jpg',
    cardAlt: 'commercial space',
    cardText: ['브랜드의 개성을 살린 공간 설계', '감각적이고 실용적인 상업 인테리어'],

    label: '상업공간',
    desc: ['브랜드의 첫인상을 완성하는 공간', '감각과 실용성을 함께 담은 디자인'],

    items: [
      {
        id: 7,
        slug: 'atelier-bloom',
        title: ['플라워 스튜디오', '아뜰리에 블룸'],
        itemClass: 'pf_item007',
        itemMainImage: "/imgs/portfolio/commercial/atelier-bloom/main_display.png"
      },
      {
        id: 6,
        slug: 'cafe-snow-mill',
        title: ['카페 스노우밀'],
        itemClass: 'pf_item006',
        itemMainImage: "/imgs/portfolio/commercial/cafe-snow-mill/main_display.png"
      },
      {
        id: 5,
        slug: 'urban-property',
        title: ['어반 부동산'],
        itemClass: 'pf_item005',
        itemMainImage: "/imgs/portfolio/commercial/urban-property/main_display.png"
      },
      {
        id: 4,
        slug: 'world-map-pub',
        title: ['월드맵 펍'],
        itemClass: 'pf_item004',
        itemMainImage: "/imgs/portfolio/commercial/world-map-pub/main_display.png"
      },
      {
        id: 3,
        slug: 'smile-dental',
        title: ['스마일 치과'],
        itemClass: 'pf_item003',
        itemMainImage: "/imgs/portfolio/commercial/smile-dental/main_display.png"
      },
      {
        id: 2,
        slug: 'prime-estate',
        title: ['프라임 부동산'],
        itemClass: 'pf_item002',
        itemMainImage: "/imgs/portfolio/commercial/prime-estate/main_display.png"
      },
      {
        id: 1,
        slug: 'table-house',
        title: ['레스토랑', '테이블하우스'],
        itemClass: 'pf_item001',
        itemMainImage: "/imgs/portfolio/commercial/table-house/main_display.png"
      },
    ],
  },
  {
    key: 'residential',

    cardTitle: 'Residential Space',
    cardImage: '/imgs/common/residential.png',
    cardAlt: 'residential space',
    cardText: ['일상의 편안함을 담은 공간', '세련되고 따뜻한 주거 인테리어'],

    label: '주거공간',
    desc: ['삶의 분위기를 바꾸는 주거 공간', '편안함과 감성을 함께 담은 디자인'],

    items: [
      {
        id: 4,
        slug: 'songdo-apartment',
        title: ['송도 아파트'],
        itemClass: 'pf_item006',
        itemMainImage: "/imgs/portfolio/residential/songdo-apartment/main_display.png"
      },
      {
        id: 3,
        slug: 'cheongna-house',
        title: ['청라 단독주택'],
        itemClass: 'pf_item005',
        itemMainImage: "/imgs/portfolio/residential/cheongna-house/main_display.png"
      },
      {
        id: 2,
        slug: 'bupyeong-villa',
        title: ['부평 빌라'],
        itemClass: 'pf_item004',
        itemMainImage: "/imgs/portfolio/residential/bupyeong-villa/main_display.png"
      },
      {
        id: 1,
        slug: 'gimpo-penthouse',
        title: ['김포 펜트하우스'],
        itemClass: 'pf_item003',
        itemMainImage: "/imgs/portfolio/residential/gimpo-penthouse/main_display.png"
      },
    ],
  },
]

export const getPortfolioCategory = (categoryKey: string) =>
  portfolioCategories.find((category) => category.key === categoryKey)