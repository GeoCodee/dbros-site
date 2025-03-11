import { Button, Divider, Grid, Text, Card, Row } from "@nextui-org/react";

import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';
import { trustedInfoSample } from '../../models/trustedInfo';

export const Trusted = () => {

     // Destructure your headline and reviews from the sample
  const { headline, reviews } = trustedInfoSample;

  // Helper to render star rating; you can also use a dedicated Rating component if you have one
  const renderStars = (rating: number) => {
    // For a simple text-based approach:
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

   return (
      <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        {/* Headline */}
        <Text h2 css={{ textAlign: "center" }}>
          {headline}
        </Text>

        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
            mb: "$10", // add a bit more bottom margin
          }}
          weight="normal"
          size={"$lg"}
        >
          We’ve helped countless homeowners get a spotless, well-organized
          garage. Check out what people are saying about us!
        </Text>

        {/* Reviews Grid */}
        <Grid.Container gap={2} justify="center">
          {reviews.map((review, index) => (
            <Grid
              key={index}
              xs={12}
              sm={6} 
              md={3} // Adjust breakpoints to show up to 4 or more columns
            >
              <Card
                variant="bordered"
                css={{ mw: "330px", h: "auto", p: "$6" }}
              >
                <Card.Header css={{ pb: "$2" }}>
                  <Text b size={"$lg"}>
                    {review.customerName}
                  </Text>
                </Card.Header>
                <Card.Body css={{ py: 0 }}>
                  <Text size={"$md"} css={{ color: "$accents7" }}>
                    {`"${review.feedback}"`}
                  </Text>
                  <Text
                    size={"$sm"}
                    css={{ color: "$accents8", mt: "$2" }}
                  >
                    {renderStars(review.rating)} 
                    {" "}({review.rating}/5)
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
   );
};
