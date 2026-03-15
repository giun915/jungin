export type SnsLink = {
    id: "kakao" | "insta" | "blog"
    href: string
    icon: string
    alt: string
}

export type NavItem = {
    id: string
    label: string
    href: string
}

export const snsLinks: SnsLink[] = [
    {
    id: 'kakao',
    href: 'https://open.kakao.com/o/sJl2Bn4e',
    icon: `${import.meta.env.BASE_URL}imgs/icons/kakao.png`,
    alt: '카카오톡 로고',
  },
  {
    id: 'insta',
    href: 'https://www.instagram.com/yigiun?igsh=MTVqb3ppeGFxcGRoMA==',
    icon: `${import.meta.env.BASE_URL}imgs/icons/insta.png`,
    alt: '인스타그램 로고',
  },
  {
    id: 'blog',
    href: '#',
    icon: `${import.meta.env.BASE_URL}imgs/icons/blog.jpg`,
    alt: '블로그 로고',
  },
]

export const gnbItems: NavItem[] = [
  { id: 'main', label: 'MAIN', href: '/' },
  { id: 'about', label: 'ABOUT', href: '/#about' },
  { id: 'portfolio', label: 'PORTFOLIO', href: '/#portfolio' },
  { id: 'contact', label: 'CONTACT', href: '/#footer' },
]