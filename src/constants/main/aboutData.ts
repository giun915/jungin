export type DescChunk = string | { highlight: string }

export type AboutFeature = {
  id: number
  icon: 'bulb' | 'home' | 'tools'
  title: string[]
  desc: (string | { highlight: string })[][]
}

export type ProcessStep = {
    id: number
    text: string[]
}

export const aboutIntro = [
    '루미코드는 디자인과 시공의 완성도를 함께 설계하는 인테리어 브랜드로',
    '섬세한 설계와 체계적인 공정을 기반으로,',
    '신뢰할 수 있는 공간을 구현합니다.',
]

export const aboutFeatures: AboutFeature[] = [
  {
    id: 1,
    icon: 'bulb',
    title: ['Youthful Style', 'Design'],
    desc: [
      ['장소마다 어울리는 디자인을'],
      [{ highlight: '젊은 감각' }, '으로'],
      ['디자인하고 있습니다'],
    ],
  },
  {
    id: 2,
    icon: 'home',
    title: ['Systematic', 'Skill'],
    desc: [
      ['최고의 만족도를 선사할수있도록'],
      [{ highlight: '체계적인 기술력' }, '으로'],
      [{ highlight: '완벽한 시공' }, '을 하고있습니다'],
    ],
  },
  {
    id: 3,
    icon: 'tools',
    title: ['After-Sales', 'Service'],
    desc: [
      ['디스플레이후 A/S까지 완벽하게 제공하여'],
      [{ highlight: '철저한 사후관리' }, '를'],
      ['보장하고 있습니다.'],
    ],
  },
]

export const processSteps: ProcessStep[] = [
  { id: 1, text: ['상담', '(전화,사무실)'] },
  { id: 2, text: ['현장실측'] },
  { id: 3, text: ['세부상담'] },
  { id: 4, text: ['디자인'] },
  { id: 5, text: ['계약 및 계약금'] },
  { id: 6, text: ['시공'] },
  { id: 7, text: ['마감미팅'] },
  { id: 8, text: ['A/S'] },
]