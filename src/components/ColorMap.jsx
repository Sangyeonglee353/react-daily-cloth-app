// Color 매칭을 도와주기 위한 컴포넌트
/*
 * 옷 색상 조합 유형(https://mojikmo.com/%EB%82%A8%EC%9E%90-%EC%98%B7-%EC%83%89%EC%83%81-%EC%A1%B0%ED%95%A9/)
 * (1) 톤온톤: 같은 색, 다른 톤
 * (2) 톤인톤: 다른 색, 같은 톤
 * 표기 방식
 * (1) 방사형 그래프
 * (2) 세로형 막대 그래프
 */

const ColorMap = () => {
    const colorTable = {
        "A+": [[#FFFFFF, #68CAFE]	[#FFFFFF, #0570A8]	[#FFFFFF, #EDDDB4]	[#FFFFFF, #000000]	[#F5F0DB, #68CAFE]	[#F5F0DB, #EDDDB4]	[#F5F0DB, #A10203]	[#F5F0DB, #000000]	[#FECBFB, #68CAFE]	[#01205F, #A10203]	[#000000, #000000]	[#A6A5A6, #000000]],
        "A" : [[#FFFFFF, #034F01],[#FFFFFF, #A10203],[#F5F0DB, #0570A8],[#FD0403, #A10203],[#FECBFB, #0570A8],[#FECBFB, #EDDDB4],[#FECBFB, #000000],[#FDBF0F, #0570A8],[#F3EE04, #68CAFE],[#F3EE04, #0570A8],[#F3EE04, #EDDDB4],[#F3EE04, #A10203],[#01A402, #0570A8],[#06B0F1, #EDDDB4],[#06B0F1, #A10203],[#06B0F1, #000000],[#01205F, #68CAFE],[#01205F, #0570A8],[#01205F, #EDDDB4],[#000000, #0570A8],[#000000, #EDDDB4]],
    ]
    }
  return <div>ColorMap</div>;
};

export default ColorMap;
