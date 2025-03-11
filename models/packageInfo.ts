export interface packageInfo {
  type: string;
  price: number;
  services: string[];
}

export const packages: packageInfo[] = [
  {
    type: "Basic Package",
    price: 2000,
    services: [
      "Garage organization",
      "Demo/disposal",
      "1 smartslat wall",
      "$200 accessories",
      "Power wash floor",
    ],
  },
  {
    type: "Standard Package",
    price: 6000,
    services: [
      "Garage organization",
      "Demo/disposal",
      "Epoxy flake floors",
      "1 smartslat wall",
      "$300 accessories",
      "Paint drywall",
    ],
  },
  {
    type: "Premium Package",
    price: 9500,
    services: [
      "Garage organization",
      "Demo/disposal",
      "Epoxy flake floors",
      "3 smartslat wall",
      "$600 accessories",
      "Paint ceiling",
    ],
  },
];
