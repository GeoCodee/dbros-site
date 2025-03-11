export interface TrustedInfo{
    headline:string;
    reviews: Review[];
}

export interface Review{
    customerName: string;
    rating: number;
    feedback:string;
}


export const trustedInfoSample: TrustedInfo = {
    headline: "Trusted by over 100+ customers",
    reviews: [
      {
        customerName: "John D.",
        rating: 5,
        feedback: "Your team did an amazing job. My garage has never been cleaner!",
      
      },
      {
        customerName: "Sarah K.",
        rating: 5,
        feedback:
          "Fast, friendly, and thorough. I’ll definitely be using your service again.",
      },
      {
        customerName: "Michael B.",
        rating: 4,
        feedback:
          "They were punctual and got rid of all the junk. The organization could have been a bit more detailed, but overall a great service.",
       
      },
      {
        customerName: "Lisa T.",
        rating: 5,
        feedback:
          "Worth every penny—my garage is finally functional and clutter-free!",
       
      },
    ],
  };