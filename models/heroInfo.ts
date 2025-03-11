export interface HeroInfo {
  headline1: string;
  headline2: string;
  subHeadline: string;
  actionButtonLabel:string;
  benefits: string[];
  requestConsultation?: (email: string) => void;
}

export const dbrosHeroInfo: HeroInfo = {
  headline1: "We Offer",
  headline2: "Garage Cleaning & Organizing Service",
  subHeadline:
    "We make garage cleaning a breeze—get a spotless, well-organized space in no time.",
  actionButtonLabel: "REQUEST A CONSULTATION",
  benefits: [
    "Professional & Reliable Service",
    "Free Initial Consultation",
    "Customized Organization Solutions",
    "Satisfaction Guaranteed",
  ],
  requestConsultation: (email: string) => {
    // Implementation can be added later
    console.log("Consultation requested for:", email);
  },
};
