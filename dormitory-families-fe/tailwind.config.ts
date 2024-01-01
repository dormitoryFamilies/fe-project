import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      //화면 사이즈
      md: '375px',
    },
    colors: {
      // Brand colors
      primary: "#E70050",
      second: "#FFAEB8",

      // Particular colors
      point: "#FF5449",

      // Achromatic colors
      black: "#191919",
      gray4: "#4F4F4F",
      gray3: "#767676",
      gray2: "#999999",
      gray1: "#DBDBDB",
      gray0: "#F4F4F4",
      white: "#FFFFFF",

      // 그 외 추가 컬러
      // ...
    },
    fontSize: {
      //헤더 사이즈
      header1: "64px",

      //타이틀 사이즈
      title1: "32px", // 대 타이틀
      title2: "24px", // 중 타이틀
      title3: "20px", // 소 타이틀 2
      title4: "18px", // 소 타이틀
      title5: "16px", // 본문 2

      //서브타이틀 사이즈
      subtitle1: "15px", // 본문
      subtitle2: "13px", // 작은

      //body 사이즈
      body1: "16px",
      body2: "14px",

      //button 사이즈
      button: "14px"
    },
    extend: {
      spacing: {
        main: "1920px",
        home: "1434px",
        home2: "940px",
        side: "486px",
      },
    },
    minWidth: {
      main: "1920px",
      home: "1434px",
      home2: "940px",
      side: "486px",
    },
  },
  plugins: [],
}
export default config
