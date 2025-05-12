export interface navItem {
  name: string;
  path: string;
}

export interface contactInfoItems {
  phone: string;
  email: string;
}

export const contactInfo: contactInfoItems = {
  phone: "647-569-6113",
  email: "Info@dbrostwins.com",
};

export const navItems: navItem[] = [
  {
    name: "Contact Us",
    path: "/Contact",
  },
  //   {
  //     name: "About",
  //     path: "/About",
  //   },
  {
    name:"Booking",
    path:"Booking"
  }
];
