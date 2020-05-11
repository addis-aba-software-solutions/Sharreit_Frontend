import P0 from "../../Assets/productSharing/textbook.svg";
import P1 from "../../Assets/productSharing/tools.svg";
import P2 from "../../Assets/productSharing/instrument.svg";
import P3 from "../../Assets/productSharing/luggage.svg";
import P4 from "../../Assets/productSharing/camping.svg";
import P5 from "../../Assets/productSharing/tools.svg";
import P6 from "../../Assets/productSharing/farming.svg";
import P7 from "../../Assets/productSharing/ladder.svg";
import P8 from "../../Assets/productSharing/office.svg";
import P9 from "../../Assets/productSharing/storage.svg";
import P10 from "../../Assets/productSharing/photography.svg";

import S0 from "../../Assets/serviceSharing/nanny.svg";
import S1 from "../../Assets/serviceSharing/tutor.svg";
import S2 from "../../Assets/serviceSharing/musicteacher.svg";
import S3 from "../../Assets/serviceSharing/fitness.svg";
import S4 from "../../Assets/serviceSharing/driver.svg";
import S5 from "../../Assets/serviceSharing/cleaning.svg";

import D0 from "../../Assets/digitalSharing/subscription.svg";
import D1 from "../../Assets/digitalSharing/ticket.svg";

export const categories = [
  "Product Sharing",
  "Services Sharing",
  "Digital Sharing",
];

export const subCategories = {
  [categories[0]]: [
    "Textbooks",
    "Power Tools",
    "Music Instruments",
    "Luggage",
    "Camping Gear", 
    "Construction Equipments",
    "Farming Equipments",
    "Ladder",
    "Office Space",
    "Storage Space",
    "Photography / Videography",
  ],

  [categories[1]]: [
    "Nanny",
    "Tutors",
    "Music Tutors",
    "Personal Trainer",
    "Personal Drivers",
    "Cleaners",
  ],

  [categories[2]]: ["Season Tickets", "Subscription Services"],
};

export const icons = {
  [categories[0]]: [P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, P10],

  [categories[1]]: [S0, S1, S2, S3, S4, S5],

  [categories[2]]: [D0, D1],
};
