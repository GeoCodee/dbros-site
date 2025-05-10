export interface packageInfo {
  type: string;
  price: string;
  services: string[];
}

export interface maintenanceInfo {
  type: string;
  descripion: string;
  price: string;
  services: string[];
}
export const garageMaintenancePlans: maintenanceInfo[] = [
  {
    type: "Basic Plan",
    descripion:
      "ideal for homeowners who want to maintain an organized garage with minimal effort and for small families",
    price: "150/month",
    services: [
      "dusting and sweeping",
      "dumping expired items",
      "quick decluttering and reorganizing",
      "slatwall wipe down",
      "priority booking for other services",
    ],
  },
  {
    type: "Standard Plan",
    descripion:
      "ideal for homeowners who use garage frequently for gatherings and as high foot traffic area",
    price: "200/month",
    services: [
      "everything in basic plan",
      "deep cleaning of floor and ceiling area (e.g. spills and cobwebs)",
      "exclusive monthly promotions",
      "up to $10 dump disposal (exceeding is $50 minimum charge)",
    ],
  },
  {
    type: "Premium Plan",
    descripion: "",
    price: "400/month",
    services: [
      "everything in basic and standard plan",
      "custom solutions for ongoing storage challenges",
      "money banking (bank up to $250/month)",
    ],
  },
];

export const packages: packageInfo[] = [
  {
    type: "Basic Package",
    price: "1,999",
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
    price: "5,999",
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
    price: "9,499",
    services: [
      "Garage organization",
      "Demo/disposal",
      "Epoxy flake floors",
      "3 smartslat wall",
      "$600 accessories",
      "Paint drywall",
    ],
  },
];
