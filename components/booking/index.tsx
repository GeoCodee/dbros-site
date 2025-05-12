import React, { useState } from "react";
import { Button, Divider, Text, Input, Spacer, Grid } from "@nextui-org/react";
import { Calendar } from "../../components/ui/calendar"; // Adjust path as needed
import { Box } from "../../components/styles/box"; // Adjust path as needed

export const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "booking", // NEW
          date: date?.toString() ?? "N/A",
          time,
          firstName,
          lastName,
          email,
          phone,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Booking sent successfully!");
        // Reset form (optional)
        setDate(new Date());
        setTime("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      } else {
        alert("Failed to send booking: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "Primary",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "1080px",
        margin: "auto",
      }}
    >
      <Text h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
        Booking Page
      </Text>
      <Divider />
      <Spacer y={2} />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
      <Spacer y={2} />
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6}>
          <Input
            clearable
            underlined
            labelPlaceholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <Input
            clearable
            underlined
            labelPlaceholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      <Input
        clearable
        underlined
        labelPlaceholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        fullWidth
      />
      <Spacer y={2} />
      <Input
        clearable
        underlined
        labelPlaceholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <Spacer y={2} />
      <Input
        clearable
        underlined
        labelPlaceholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
      />
      <Spacer y={3} />
      <Button
        color="primary"
        style={{ width: "100%", padding: "12px" }}
        onClick={handleSubmit}
      >
        Book Now
      </Button>
    </Box>
  );
};
