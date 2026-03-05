export type PortfolioIntroItem = {
  highlight: string
  text: string
}

export const portfolioIntro: PortfolioIntroItem[] = [
  {
    highlight: '편하게',
    text: '쉴수있는 공간',
  },
  {
    highlight: '편하게',
    text: '찾아올수 있는 공간',
  },
  {
    highlight: '편하게',
    text: '일할수 있는 공간',
  },
  {
    highlight: '최고의 만족도',
    text: '를 보장해드립니다',
  },
]

export type PortfolioCategory = 'commercial' | 'residential'

export type PortfolioCategoryData = {
  key: PortfolioCategory

  cardTitle: string
  cardImage: string
  cardAlt: string
  cardText: string[]

  headerImage: string
  headerAlt: string
  label: string
  desc: string[]
}

export const portfolioCategories: PortfolioCategoryData[] = [
  {
    key: 'commercial',

    cardTitle: 'Commercial Space',
    cardImage: '/imgs/main/portfolio_c.png',
    cardAlt: 'commercial space',
    cardText: ['성공과 관련된 가장중요한 요소', '하나뿐인 독창적인 디자인'],

    headerImage: '/imgs/common/slide01_02_tit.png',
    headerAlt: 'commercial space',
    label: '상업공간',
    desc: ['성공과 관련된 가장중요한 요소', '하나뿐인 독창적인 디자인'],
  },
  {
    key: 'residential',

    cardTitle: 'Residential Space',
    cardImage: '/imgs/main/portfolio_r.jpg',
    cardAlt: 'residential space',
    cardText: ['차별화된 공간연출', '편리하고 실용적인 디자인'],

    headerImage: '/imgs/common/slide02_02_tit.png',
    headerAlt: 'residential space',
    label: '주거공간',
    desc: ['차별화된 공간연출', '편리하고 실용적인 디자인'],
  },
]