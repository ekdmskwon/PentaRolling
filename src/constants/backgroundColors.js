export const CARD_BACKGROUND_COLORS = {
  beige: "#FFE2AD",
  purple: "#ECD9FF",
  blue: "#B1E4FF",
  green: "#D0F5C3",
};

// 기존 CreateRollingPaperPage 사용처와 호환되도록 배열도 유지
const BACKGROUND_COLORS = [
  { label: "beige", color: CARD_BACKGROUND_COLORS.beige },
  { label: "purple", color: CARD_BACKGROUND_COLORS.purple },
  { label: "blue", color: CARD_BACKGROUND_COLORS.blue },
  { label: "green", color: CARD_BACKGROUND_COLORS.green },
];

export default BACKGROUND_COLORS;
