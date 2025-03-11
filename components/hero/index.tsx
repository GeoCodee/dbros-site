import { Button, Divider, Input, Text } from "@nextui-org/react";
import ReactCompareImage from "react-compare-image";

import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { dbrosHeroInfo } from "../../models/heroInfo";

export const Hero = () => {
  return (
    <>
      <Flex
        css={{
          gap: "$3",
          px: "$6",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          "@sm": {
            flexDirection: "row",
            mt: "$20",
          },
        }}
        justify={"center"}
      >
        <Box
          css={{
            pt: "$13",

            display: "flex",
            flexDirection: "column",
            gap: "$5",
          }}
        >
          <Box
            css={{
              maxWidth: "600px",
            }}
          >
            <Text
              h1
              css={{
                display: "inline",
              }}
            >
              {dbrosHeroInfo.headline1}{" "}
            </Text>
            <Text
              h1
              css={{
                display: "inline",
              }}
              color="primary"
            >
              {dbrosHeroInfo.headline2}
            </Text>
          </Box>

          <Text
            css={{
              color: "$accents8",
              maxWidth: "400px",
            }}
            size={"$lg"}
            span
          >
            {dbrosHeroInfo.subHeadline}
          </Text>

          <Flex
            css={{
              gap: "$8",
              pt: "$4",
            }}
            wrap={"wrap"}
          >
            <Input placeholder="Enter your email address" size="lg" />
            <Button>{dbrosHeroInfo.actionButtonLabel}</Button>
          </Flex>
          <Box
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "$8",
              pt: "$4",
              mb: "$10",
            }}
          >
            {dbrosHeroInfo.benefits.map((benefit, index) => (
              <Flex
                key={index}
                css={{
                  color: "$accents7",
                  alignItems: "center",
                }}
              >
                <CheckIcon />{" "}
                <span style={{ marginLeft: "8px" }}>{benefit}</span>
              </Flex>
            ))}
          </Box>
        </Box>
        <Box
          css={{
            width: "100%",
            maxWidth: "775px",
            height: "auto",
            objectFit: "contain",
            mt: "$8",
            "@sm": {
              ml: "$12",
              mt: "$0",
            },
          }}
        >
          <ReactCompareImage
            leftImage="before.jpg"
            rightImage="after.jpg"
            leftImageAlt="Garage before cleaning"
            rightImageAlt="Garage after cleaning"
            leftImageLabel="Before"
            rightImageLabel="After"
            sliderPositionPercentage={0.5}
          />
        </Box>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
