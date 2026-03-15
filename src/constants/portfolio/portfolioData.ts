export type PortfolioCategory = 'commercial' | 'residential'

export type PortfolioDetailImage = {
  src: string
  alt: string
}

export type PortfolioDetail = {
  id: number
  title: string
  images: PortfolioDetailImage[]
}

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
  detailList: PortfolioDetail[]
}

export type PortfolioCategoryPageData = PortfolioCategoryData & {
  items: PortfolioListItem[]
}

export const portfolioCategories: PortfolioCategoryPageData[] = [
  {
    key: 'commercial',

    cardTitle: 'Commercial Space',
    cardImage: `${import.meta.env.BASE_URL}imgs/common/commercial.jpg`,
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
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/atelier-bloom/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
      {
        id: 6,
        slug: 'cafe-snow-mill',
        title: ['카페 스노우밀'],
        itemClass: 'pf_item006',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/cafe-snow-mill/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        slug: 'urban-property',
        title: ['어반 부동산'],
        itemClass: 'pf_item005',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/urban-property/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
      {
        id: 4,
        slug: 'world-map-pub',
        title: ['월드맵 펍'],
        itemClass: 'pf_item004',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/world-map-pub/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        slug: 'smile-dental',
        title: ['스마일 치과'],
        itemClass: 'pf_item003',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/smile-dental/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        slug: 'prime-estate',
        title: ['프라임 부동산'],
        itemClass: 'pf_item002',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/prime-estate/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        slug: 'table-house',
        title: ['레스토랑', '테이블하우스'],
        itemClass: 'pf_item001',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/commercial/table-house/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ATELIER BLOOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item001.png`,
                alt: '포트폴리오 상세 예제 이미지1',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item002.png`,
                alt: '포트폴리오 상세 예제 이미지2',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item003.png`,
                alt: '포트폴리오 상세 예제 이미지3',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item004.png`,
                alt: '포트폴리오 상세 예제 이미지4',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/commercial/item005.png`,
                alt: '포트폴리오 상세 예제 이미지5',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'residential',

    cardTitle: 'Residential Space',
    cardImage: `${import.meta.env.BASE_URL}imgs/common/residential.png`,
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
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/residential/songdo-apartment/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ENTRANCE',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item001.png`,
                alt: '현관문',
              },
            ],
          },
          {
            id: 2,
            title: 'MASTER BEDROOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item002.png`,
                alt: '안방',
              },
            ],
          },
          {
            id: 3,
            title: 'KITCHEN',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item003.png`,
                alt: '아일랜드 식탁',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item004.png`,
                alt: '씽크대',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        slug: 'cheongna-house',
        title: ['청라 단독주택'],
        itemClass: 'pf_item005',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/residential/cheongna-house/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ENTRANCE',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item001.png`,
                alt: '현관문',
              },
            ],
          },
          {
            id: 2,
            title: 'MASTER BEDROOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item002.png`,
                alt: '안방',
              },
            ],
          },
          {
            id: 3,
            title: 'KITCHEN',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item003.png`,
                alt: '아일랜드 식탁',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item004.png`,
                alt: '씽크대',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        slug: 'bupyeong-villa',
        title: ['부평 빌라'],
        itemClass: 'pf_item004',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/residential/bupyeong-villa/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ENTRANCE',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item001.png`,
                alt: '현관문',
              },
            ],
          },
          {
            id: 2,
            title: 'MASTER BEDROOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item002.png`,
                alt: '안방',
              },
            ],
          },
          {
            id: 3,
            title: 'KITCHEN',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item003.png`,
                alt: '아일랜드 식탁',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item004.png`,
                alt: '씽크대',
              },
            ],
          },
        ],
      },
      {
        id: 1,
        slug: 'gimpo-penthouse',
        title: ['김포 펜트하우스'],
        itemClass: 'pf_item003',
        itemMainImage: `${import.meta.env.BASE_URL}imgs/portfolio/residential/gimpo-penthouse/main_display.png`,
        detailList: [
          {
            id: 1,
            title: 'ENTRANCE',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item001.png`,
                alt: '현관문',
              },
            ],
          },
          {
            id: 2,
            title: 'MASTER BEDROOM',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item002.png`,
                alt: '안방',
              },
            ],
          },
          {
            id: 3,
            title: 'KITCHEN',
            images: [
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item003.png`,
                alt: '아일랜드 식탁',
              },
              {
                src: `${import.meta.env.BASE_URL}imgs/portfolio/common/residential/item004.png`,
                alt: '씽크대',
              },
            ],
          },
        ],
      },
    ],
  },
]

export const getPortfolioCategory = (categoryKey: string) =>
  portfolioCategories.find((category) => category.key === categoryKey)

export const getPortfolioDetail = (categoryKey: string, slug: string) => {
  const category = getPortfolioCategory(categoryKey)
  return category?.items.find((item) => item.slug === slug)
}