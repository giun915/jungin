import type { Component } from "vue"
import IconEmail from "@/components/icons/common/IconEmail.vue"
import IconPhone from "@/components/icons/common/IconPhone.vue"
import IconAccount from "@/components/icons/footer/IconAccount.vue"
import IconBuilding from "@/components/icons/footer/IconBuilding.vue"
import IconClock from "@/components/icons/footer/IconClock.vue"
import IconDocument from "@/components/icons/footer/IconDocument.vue"
import IconInsta from "@/components/icons/footer/IconInsta.vue"
import IconKakao from "@/components/icons/footer/IconKakao.vue"
import IconLocation from "@/components/icons/footer/IconLocation.vue"

export type FooterContactItem = {
    className: string
    icon: Component
    text: string[]
}

export const footerContactList: FooterContactItem[] = [
  {
    className: "list01",
    icon: IconBuilding,
    text: ["루미코드", "대표: 이기운"]
  },
  {
    className: "list02",
    icon: IconDocument,
    text: ["사업자등록번호", "000-00-00000"]
  },
  {
    className: "list03",
    icon: IconClock,
    text: ["월요일 - 토요일", "09:00 - 19:00"]
  },
  {
    className: "list04",
    icon: IconInsta,
    text: ["Instagram ID", "yigiun"]
  },
  {
    className: 'list05',
    icon: IconEmail,
    text: ['giun915', '@gmail.com'],
  },
  {
    className: 'list06',
    icon: IconPhone,
    text: ['휴대폰번호', '010-8984-2401'],
  },
  {
    className: 'list07',
    icon: IconLocation,
    text: [
      '인천시 부평구',
      '갈월서로45',
    ],
  },
  {
    className: 'list08',
    icon: IconAccount,
    text: ['국민은행', '루미코드(이기운)', '000000-00-000000'],
  },
  {
    className: 'list09',
    icon: IconKakao,
    text: ['카카오톡', 'ID:giun123', '플러스ID:giun123'],
  },
]