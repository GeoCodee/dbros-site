import { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Text,
  Modal,
  Input,
} from "@nextui-org/react";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { packages } from "../../models/packageInfo";

export const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
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

    if (!firstName || !lastName || !email || !phone || !selectedPackage) {
      setErrorMessage("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "package",
          package: selectedPackage,
          firstName,
          lastName,
          email,
          phone,
        }),
      });

      if (response.ok) {
        setSuccessMessage(
          "Request submitted successfully! We'll contact you shortly"
        );
        setTimeout(() => {
          setIsModalOpen(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setSelectedPackage("");
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
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text h2>Available Packages</Text>
        </Flex>

        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          {packages.map((pkg) => (
            <Card key={pkg.type} css={{ p: "$6", mw: "400px" }}>
              <Card.Header>
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      {pkg.type}
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>
                      {pkg.services.join(", ")}
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: "$4" }}>
                <Text css={{ display: "contents" }} h2>
                  ${pkg.price}{" "}
                </Text>
                <Button
                  css={{ mt: "$7", mb: "$12" }}
                  onPress={() => {
                    setSelectedPackage(pkg.type);
                    setIsModalOpen(true);
                  }}
                >
                  Get Started
                </Button>

                <Divider />
                <Box as={"ul"}>
                  {pkg.services.map((service, index) => (
                    <Flex
                      key={index}
                      as={"li"}
                      css={{ py: "$2", gap: "$2" }}
                      align={"center"}
                    >
                      <CheckIcon />
                      <Text span css={{ color: "$accents8" }}>
                        {service}
                      </Text>
                    </Flex>
                  ))}
                </Box>
              </Card.Body>
            </Card>
          ))}
        </Flex>
      </Flex>

      {/* Package Request Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setErrorMessage("");
          setSuccessMessage("");
          setSelectedPackage("");
        }}
        closeButton
      >
        <Modal.Header>
          <Text h3>Request {selectedPackage} Package</Text>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="$4">
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
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </Flex>
          </form>
        </Modal.Body>
      </Modal>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
