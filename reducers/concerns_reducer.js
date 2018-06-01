import { UPDATE_CONCERN } from "../actions/types";
import { REHYDRATE } from "redux-persist/constants";

const initialState = [
  {
    label: "Agriculture and Food",
    slug: "agirculture-and-food",
    checked: false,
    senate: ["Agriculture and Food"],
    house: ["Agriculture and Food"]
  },
  {
    label: "Animals",
    slug: "animals",
    checked: false,
    senate: ["Animals"],
    house: ["Animals"]
  },
  {
    label: "Armed Forces and National Security",
    slug: "armed-forces-and-national-security",
    checked: false,
    senate: ["Armed Forces and National Security"],
    house: ["Armed Forces and National Security"]
  },
  {
    label: "Arts, Culture, Religion",
    slug: "arts-culture-religion",
    checked: false,
    senate: ["Arts, Culture, Religion"],
    house: ["Arts, Culture, Religion"]
  },
  {
    label: "Civil Rights and Liberties, Minority Issues",
    slug: "civil-rights-and-liberties-minority-issues",
    checked: false,
    senate: ["Civil Rights and Liberties, Minority Issues"],
    house: ["Civil Rights and Liberties, Minority Issues"]
  },
  {
    label: "Commerce",
    slug: "commerce",
    checked: false,
    senate: ["Commerce"],
    house: ["Commerce"]
  },
  {
    label: "Crime and Law Enforcement",
    slug: "crime-and-law-enforcement",
    checked: false,
    senate: ["Crime and Law Enforcement"],
    house: ["Crime and Law Enforcement"]
  },
  {
    label: "Economics and Public Finance",
    slug: "economics-and-public-finance",
    checked: false,
    senate: ["Economics and Public Finance"],
    house: ["Economics and Public Finance"]
  },
  {
    label: "Education",
    slug: "education",
    checked: false,
    senate: ["Education"],
    house: ["Education"]
  },
  {
    label: "Emergency Management",
    slug: "emergency-management",
    checked: false,
    senate: ["Emergency Management"],
    house: ["Emergency Management"]
  },
  {
    label: "Energy",
    slug: "energy",
    checked: false,
    senate: ["Energy"],
    house: ["Energy"]
  },
  {
    label: "Environmental Protection",
    slug: "environmental-protection",
    checked: false,
    senate: ["Environmental Protection"],
    house: ["Environmental Protection"]
  },
  {
    label: "Families",
    slug: "families",
    checked: false,
    senate: ["Families"],
    house: ["Families"]
  },
  {
    label: "Finance and Financial Sector",
    slug: "finance-and-financial-sector",
    checked: false,
    senate: ["Finance and Financial Sector"],
    house: ["Finance and Financial Sector"]
  },
  {
    label: "Foreign Trade and International Finance",
    slug: "foreign-trade-and-international-finance",
    checked: false,
    senate: ["Foreign Trade and International Finance"],
    house: ["Foreign Trade and International Finance"]
  },
  {
    label: "Geographic Areas, Entities, and Committees",
    slug: "geographic-areas-entities-and-committees",
    checked: false,
    senate: ["Geographic Areas, Entities, and Committees"],
    house: ["Geographic Areas, Entities, and Committees"]
  },
  {
    label: "Government Operations and Politics",
    slug: "government-operations-and-politics",
    checked: false,
    senate: ["Government Operations and Politics"],
    house: ["Government Operations and Politics"]
  },
  {
    label: "Health",
    slug: "health",
    checked: false,
    senate: ["Health"],
    house: ["Health"]
  },
  {
    label: "Housing and Community Development",
    slug: "housing-and-community-development",
    checked: false,
    senate: ["Housing and Community Development"],
    house: ["Housing and Community Development"]
  },
  {
    label: "Immigration",
    slug: "immigration",
    checked: false,
    senate: ["Immigration"],
    house: ["Immigration"]
  },
  {
    label: "International Affairs",
    slug: "international-affairs",
    checked: false,
    senate: ["International Affairs"],
    house: ["International Affairs"]
  },
  {
    label: "Labor and Employment",
    slug: "labor-and-employment",
    checked: false,
    senate: ["Labor and Employment"],
    house: ["Labor and Employment"]
  },
  {
    label: "Law",
    slug: "law",
    checked: false,
    senate: ["Law"],
    house: ["Law"]
  },
  {
    label: "Native Americans",
    slug: "native-americans",
    checked: false,
    senate: ["Native Americans"],
    house: ["Native Americans"]
  },
  {
    label: "Private Legislation",
    slug: "private-legislation",
    checked: false,
    senate: ["Private Legislation"],
    house: ["Private Legislation"]
  },
  {
    label: "Public Lands and Natural Resources",
    slug: "public-lands-and-natural-resources",
    checked: false,
    senate: ["Public Lands and Natural Resources"],
    house: ["Public Lands and Natural Resources"]
  },
  {
    label: "Science, Technology, Communications",
    slug: "science-technology-communications",
    checked: false,
    senate: ["Science, Technology, Communications"],
    house: ["Science, Technology, Communications"]
  },
  {
    label: "Social Sciences and History",
    slug: "social-sciences-and-history",
    checked: false,
    senate: ["Social Sciences and History"],
    house: ["Social Sciences and History"]
  },
  {
    label: "Social Welfare",
    slug: "social-welfare",
    checked: false,
    senate: ["Social Welfare"],
    house: ["Social Welfare"]
  },
  {
    label: "Sports and Recreation",
    slug: "sports-and-recreation",
    checked: false,
    senate: ["Sports and Recreation"],
    house: ["Sports and Recreation"]
  },
  {
    label: "Taxation",
    slug: "taxation",
    checked: false,
    senate: ["Taxation"],
    house: ["Taxation"]
  },
  {
    label: "Transportation and Public Works",
    slug: "transportation-and-public-works",
    checked: false,
    senate: ["Transportation and Public Works"],
    house: ["Transportation and Public Works"]
  },
  {
    label: "Water Resources Development",
    slug: "water-resources-development",
    checked: false,
    senate: ["Water Resources Development"],
    house: ["Water Resources Development"]
  }
];

const concernReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.concerns || state;
    case UPDATE_CONCERN:
      state[action.index]["checked"] = action.status;
      return state;
    default:
      return state;
  }
};
export default concernReducer;
