import { useState } from "react";
import {
  Button,
  Dropdown,
  Link,
  Navbar,
  Switch,
  Text,
  Modal,
} from "@nextui-org/react";
import { ModalLogin } from "../modal";
import { icons } from "./icons";
import { AcmeLogo, DbrosLogo } from "./logo";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { GithubIcon } from "../icons/GithubIcon";
import { contactInfo, navItems } from "../../models/navbarInfo";

export const Nav = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const collapseItems = [
    // "Features",
    // "Customers",
    // "Pricing",
    "Company",
    "Legal",
  ];

  return (
    <Navbar
      isBordered
      css={{
        overflow: "hidden",
        "& .nextui-navbar-container": {
          background: "$background",
          borderBottom: "none",
        },
        color: "$text",
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
        <DbrosLogo></DbrosLogo>
        <Navbar.Content
          hideIn="sm"
          css={{
            pl: "1rem",
          }}
        >
          {navItems.map((item, index) =>
            item.name === "Contact Us" ? (
              <Navbar.Item key={index}>
                <Link
                  css={{ cursor: "pointer" }}
                  onPress={() => setIsContactModalOpen(true)}
                >
                  {item.name}
                </Link>
              </Navbar.Item>
            ) : (
              <Navbar.Link key={index} href={item.path}>
                {item.name}
              </Navbar.Link>
            )
          )}
        </Navbar.Content>
      </Navbar.Brand>

      <Navbar.Collapse>
        {navItems.map((item, index) =>
          item.name === "Contact Us" ? (
            <Navbar.CollapseItem key={index}>
              <Link
                color="inherit"
                css={{ minWidth: "100%", cursor: "pointer" }}
                onPress={() => setIsContactModalOpen(true)}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ) : (
            <Navbar.CollapseItem key={index}>
              <Link color="inherit" css={{ minWidth: "100%" }} href={item.path}>
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          )
        )}
        <Navbar.CollapseItem>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      <Navbar.Content>
        <Navbar.Item hideIn={"xs"}>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
      </Navbar.Content>

      {/* Contact Information Modal */}
      <Modal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      >
        <Modal.Header>
          <Text h4>Contact Us</Text>
        </Modal.Header>
        <Modal.Body>
          <Text>Phone: {contactInfo.phone}</Text>
          <Text>Email: {contactInfo.email}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat onPress={() => setIsContactModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
