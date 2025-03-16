import { useState } from "react";
import { Button, Divider, Input, Text, Modal } from "@nextui-org/react";
import ReactCompareImage from "react-compare-image";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { dbrosHeroInfo } from "../../models/heroInfo";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (!firstName || !lastName || !email || !phone) {
      setErrorMessage("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone }),
      });

      if (response.ok) {
        setSuccessMessage(
          "Consultation requested successfully! We will contact you shortly"
        );
        setTimeout(() => {
          setIsModalOpen(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
        }, 2000);
      } else {
        setErrorMessage("Failed to send request. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
          {/* Existing Headline - UNCHANGED */}
          <Box css={{ maxWidth: "600px" }}>
            <Text h1 css={{ display: "inline" }}>
              {dbrosHeroInfo.headline1}{" "}
            </Text>
            <Text h1 css={{ display: "inline" }} color="primary">
              {dbrosHeroInfo.headline2}
            </Text>
          </Box>

          {/* Existing Subheadline - UNCHANGED */}
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

          {/* Changed to Modal Trigger Button */}
          <Button color="primary" auto onPress={() => setIsModalOpen(true)}>
            {dbrosHeroInfo.actionButtonLabel}
          </Button>

          {/* Existing Benefits List - UNCHANGED */}
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

        {/* Existing Image Comparison - UNCHANGED */}
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

      {/* Consultation Request Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setErrorMessage("");
          setSuccessMessage("");
        }}
        closeButton
      >
        <Modal.Header>
          <Text h3>Request a Consultation</Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="4">
              <Input
                label="First Name"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                fullWidth
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                fullWidth
              />
              <Input
                label="Email"
                placeholder="john@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
              <Input
                label="Phone Number"
                placeholder="(555) 555-5555"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
              />

              {successMessage && (
                <Text color="success" small>
                  {successMessage}
                </Text>
              )}
              {errorMessage && (
                <Text color="error" small>
                  {errorMessage}
                </Text>
              )}

              <Button
                type="submit"
                color="primary"
                disabled={loading}
                css={{ width: "100%", mt: "$4" }}
              >
                {loading ? "Submitting..." : "Request Consultation"}
              </Button>
            </Flex>
          </form>
        </Modal.Body>
      </Modal>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
      />
    </>
  );
};
