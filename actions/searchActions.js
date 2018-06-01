import {
    REQUEST_HOUSE_LEGISLATOR,
    REQUEST_SENATE_LEGISLATOR,
    FETCHING_LEGISLATOR
} from "./types";
import axios from "axios";
import {openstatesKey, googleKey2, prorepublicaKey} from "../config";
import {NavigationActions} from "react-navigation";
const legs = [
    {
        CID: "N00036633",
        CRPName: "Ralph Abraham",
        Party: "R",
        Office: "LA05",
        FECCandID: "H4LA05221"
    },
    {
        CID: "N00035451",
        CRPName: "Alma Adams",
        Party: "D",
        Office: "NC12",
        FECCandID: "H4NC12100"
    },
    {
        CID: "N00003028",
        CRPName: "Robert B. Aderholt",
        Party: "R",
        Office: "AL04",
        FECCandID: "H6AL04098"
    },
    {
        CID: "N00033997",
        CRPName: "Pete Aguilar",
        Party: "D",
        Office: "CA31",
        FECCandID: "H2CA31125"
    },
    {
        CID: "N00009888",
        CRPName: "Lamar Alexander",
        Party: "R",
        Office: "TNS2",
        FECCandID: "S2TN00058"
    },
    {
        CID: "N00033720",
        CRPName: "Richard W. Allen",
        Party: "R",
        Office: "GA12",
        FECCandID: "H2GA12121"
    },
    {
        CID: "N00031938",
        CRPName: "Justin Amash",
        Party: "R",
        Office: "MI03",
        FECCandID: "H0MI03126"
    },
    {
        CID: "N00031177",
        CRPName: "Mark Amodei",
        Party: "R",
        Office: "NV02",
        FECCandID: "H2NV02395"
    },
    {
        CID: "N00037049",
        CRPName: "Donald John Bacon",
        Party: "R",
        Office: "NE02",
        FECCandID: "H6NE02125"
    },
    {
        CID: "N00038397",
        CRPName: "Maggie Hassan",
        Party: "D",
        Office: "NHS1",
        FECCandID: "S6NH00091"
    },
    {
        CID: "N00005736",
        CRPName: "Brian Babin",
        Party: "R",
        Office: "TX36",
        FECCandID: "H6TX02079"
    },
    {
        CID: "N00004367",
        CRPName: "Tammy Baldwin",
        Party: "D",
        Office: "WIS1",
        FECCandID: "S2WI00219"
    },
    {
        CID: "N00025495",
        CRPName: "Lou Barletta",
        Party: "R",
        Office: "PA11",
        FECCandID: "H2PA11098"
    },
    {
        CID: "N00031233",
        CRPName: "Andy Barr",
        Party: "R",
        Office: "KY06",
        FECCandID: "H0KY06104"
    },
    {
        CID: "N00006236",
        CRPName: "John A. Barrasso",
        Party: "R",
        Office: "WYS1",
        FECCandID: "S6WY00068"
    },
    {
        CID: "N00005656",
        CRPName: "Joe Barton",
        Party: "R",
        Office: "TX06",
        FECCandID: "H4TX06117"
    },
    {
        CID: "N00031877",
        CRPName: "Karen Bass",
        Party: "D",
        Office: "CA37",
        FECCandID: "H0CA33117"
    },
    {
        CID: "N00033904",
        CRPName: "Joyce Beatty",
        Party: "D",
        Office: "OH03",
        FECCandID: "H2OH03125"
    },
    {
        CID: "N00009774",
        CRPName: "Xavier Becerra",
        Party: "D",
        Office: "CA34",
        FECCandID: "H2CA30143"
    },
    {
        CID: "N00039533",
        CRPName: "John Bergman",
        Party: "R",
        Office: "MI01",
        FECCandID: "H6MI01226"
    },
    {
        CID: "N00030608",
        CRPName: "Michael F. Bennet",
        Party: "D",
        Office: "COS1",
        FECCandID: "S0CO00211"
    },
    {
        CID: "N00030717",
        CRPName: "Ami Bera",
        Party: "D",
        Office: "CA07",
        FECCandID: "H0CA03078"
    },
    {
        CID: "N00036018",
        CRPName: "Don Beyer",
        Party: "D",
        Office: "VA08",
        FECCandID: "H4VA08224"
    },
    {
        CID: "N00027462",
        CRPName: "Gus Bilirakis",
        Party: "R",
        Office: "FL12",
        FECCandID: "H6FL09070"
    },
    {
        CID: "N00036449",
        CRPName: "Mike Bishop",
        Party: "R",
        Office: "MI08",
        FECCandID: "H4MI08135"
    },
    {
        CID: "N00025292",
        CRPName: "Rob Bishop",
        Party: "R",
        Office: "UT01",
        FECCandID: "H2UT01094"
    },
    {
        CID: "N00002674",
        CRPName: "Sanford Bishop",
        Party: "D",
        Office: "GA02",
        FECCandID: "H2GA02031"
    },
    {
        CID: "N00031539",
        CRPName: "Diane Black",
        Party: "R",
        Office: "TN06",
        FECCandID: "H0TN06257"
    },
    {
        CID: "N00003105",
        CRPName: "Marsha Blackburn",
        Party: "R",
        Office: "TN07",
        FECCandID: "H2TN06030"
    },
    {
        CID: "N00033744",
        CRPName: "Rod Blum",
        Party: "R",
        Office: "IA01",
        FECCandID: "H2IA01055"
    },
    {
        CID: "N00007727",
        CRPName: "Earl Blumenauer",
        Party: "D",
        Office: "OR03",
        FECCandID: "H6OR03064"
    },
    {
        CID: "N00031685",
        CRPName: "Richard Blumenthal",
        Party: "D",
        Office: "CTS2",
        FECCandID: "S0CT00177"
    },
    {
        CID: "N00005195",
        CRPName: "Roy Blunt",
        Party: "R",
        Office: "MOS1",
        FECCandID: "S0MO00183"
    },
    {
        CID: "N00003675",
        CRPName: "John Boehner",
        Party: "R",
        Office: "OH08",
        FECCandID: "H0OH08029"
    },
    {
        CID: "N00033474",
        CRPName: "Suzanne Bonamici",
        Party: "D",
        Office: "OR01",
        FECCandID: "H2OR01133"
    },
    {
        CID: "N00035267",
        CRPName: "Cory Booker",
        Party: "D",
        Office: "NJS2",
        FECCandID: "S4NJ00185"
    },
    {
        CID: "N00013873",
        CRPName: "John Boozman",
        Party: "R",
        Office: "ARS2",
        FECCandID: "S0AR00150"
    },
    {
        CID: "N00024866",
        CRPName: "Madeleine Z. Bordallo",
        Party: "D",
        Office: "GU00",
        FECCandID: "H2GU00033"
    },
    {
        CID: "N00035420",
        CRPName: "Mike Bost",
        Party: "R",
        Office: "IL12",
        FECCandID: "H4IL12060"
    },
    {
        CID: "N00039953",
        CRPName: "Clay Higgins",
        Party: "R",
        Office: "LA03",
        FECCandID: ""
    },
    {
        CID: "N00036915",
        CRPName: "Kamala D. Harris",
        Party: "D",
        Office: "CAS1",
        FECCandID: "S6CA00584"
    },
    {
        CID: "N00035307",
        CRPName: "Brendan Boyle",
        Party: "D",
        Office: "PA13",
        FECCandID: "H4PA13199"
    },
    {
        CID: "N00005883",
        CRPName: "Kevin Brady",
        Party: "R",
        Office: "TX08",
        FECCandID: "H6TX08100"
    },
    {
        CID: "N00001619",
        CRPName: "Robert A. Brady",
        Party: "D",
        Office: "PA01",
        FECCandID: "H8PA01153"
    },
    {
        CID: "N00036013",
        CRPName: "Dave Brat",
        Party: "R",
        Office: "VA07",
        FECCandID: "H4VA07143"
    },
    {
        CID: "N00033532",
        CRPName: "James Bridenstine",
        Party: "R",
        Office: "OK01",
        FECCandID: "H2OK01143"
    },
    {
        CID: "N00030910",
        CRPName: "Mo Brooks",
        Party: "R",
        Office: "AL05",
        FECCandID: "H0AL05163"
    },
    {
        CID: "N00033495",
        CRPName: "Susan Brooks",
        Party: "R",
        Office: "IN05",
        FECCandID: "H2IN05082"
    },
    {
        CID: "N00030642",
        CRPName: "Al Lawson",
        Party: "D",
        Office: "FL05",
        FECCandID: ""
    },
    {
        CID: "N00003535",
        CRPName: "Sherrod Brown",
        Party: "D",
        Office: "OHS1",
        FECCandID: "S6OH00163"
    },
    {
        CID: "N00034254",
        CRPName: "Julia Brownley",
        Party: "D",
        Office: "CA26",
        FECCandID: "H2CA00120"
    },
    {
        CID: "N00027626",
        CRPName: "Vernon Buchanan",
        Party: "R",
        Office: "FL16",
        FECCandID: "H6FL13148"
    },
    {
        CID: "N00030829",
        CRPName: "Kenneth R. Buck",
        Party: "R",
        Office: "CO04",
        FECCandID: "H4CO04090"
    },
    {
        CID: "N00031227",
        CRPName: "Larry Bucshon",
        Party: "R",
        Office: "IN08",
        FECCandID: "H0IN08114"
    },
    {
        CID: "N00025219",
        CRPName: "Michael Burgess",
        Party: "R",
        Office: "TX26",
        FECCandID: "H2TX26093"
    },
    {
        CID: "N00002221",
        CRPName: "Richard Burr",
        Party: "R",
        Office: "NCS2",
        FECCandID: "S4NC00089"
    },
    {
        CID: "N00033390",
        CRPName: "Cheri Bustos",
        Party: "D",
        Office: "IL17",
        FECCandID: "H2IL17071"
    },
    {
        CID: "N00027035",
        CRPName: "G. K. Butterfield",
        Party: "D",
        Office: "NC01",
        FECCandID: "H4NC01046"
    },
    {
        CID: "N00035380",
        CRPName: "Bradley Byrne",
        Party: "R",
        Office: "AL01",
        FECCandID: "H4AL01123"
    },
    {
        CID: "N00007099",
        CRPName: "Ken Calvert",
        Party: "R",
        Office: "CA42",
        FECCandID: "H2CA37023"
    },
    {
        CID: "N00007836",
        CRPName: "Maria Cantwell",
        Party: "D",
        Office: "WAS1",
        FECCandID: "S8WA00194"
    },
    {
        CID: "N00009771",
        CRPName: "Shelley Moore Capito",
        Party: "R",
        Office: "WVS2",
        FECCandID: "S4WV00159"
    },
    {
        CID: "N00037015",
        CRPName: "Salud Carbajal",
        Party: "D",
        Office: "CA24",
        FECCandID: "H6CA24303"
    },
    {
        CID: "N00000267",
        CRPName: "Michael E. Capuano",
        Party: "D",
        Office: "MA07",
        FECCandID: "H8MA08071"
    },
    {
        CID: "N00033373",
        CRPName: "Tony Cardenas",
        Party: "D",
        Office: "CA29",
        FECCandID: "H2CA28113"
    },
    {
        CID: "N00001955",
        CRPName: "Ben Cardin",
        Party: "D",
        Office: "MDS1",
        FECCandID: "S6MD03177"
    },
    {
        CID: "N00038414",
        CRPName: "Lisa Blunt Rochester",
        Party: "D",
        Office: "DE01",
        FECCandID: "H6DE00206"
    },
    {
        CID: "N00012508",
        CRPName: "Tom Carper",
        Party: "D",
        Office: "DES1",
        FECCandID: "S8DE00079"
    },
    {
        CID: "N00029513",
        CRPName: "Andre Carson",
        Party: "D",
        Office: "IN07",
        FECCandID: "H8IN07184"
    },
    {
        CID: "N00035346",
        CRPName: "Buddy Carter",
        Party: "R",
        Office: "GA01",
        FECCandID: "H4GA01039"
    },
    {
        CID: "N00025095",
        CRPName: "John Carter",
        Party: "R",
        Office: "TX31",
        FECCandID: "H2TX31044"
    },
    {
        CID: "N00034128",
        CRPName: "Matt Cartwright",
        Party: "D",
        Office: "PA17",
        FECCandID: "H2PA17079"
    },
    {
        CID: "N00027503",
        CRPName: "Bob Casey",
        Party: "D",
        Office: "PAS2",
        FECCandID: "S6PA00217"
    },
    {
        CID: "N00030245",
        CRPName: "Bill Cassidy",
        Party: "R",
        Office: "LAS1",
        FECCandID: "S4LA00107"
    },
    {
        CID: "N00027514",
        CRPName: "Kathy Castor",
        Party: "D",
        Office: "FL14",
        FECCandID: "H6FL11126"
    },
    {
        CID: "N00033316",
        CRPName: "Joaquin Castro",
        Party: "D",
        Office: "TX20",
        FECCandID: "H2TX35011"
    },
    {
        CID: "N00003689",
        CRPName: "Steve Chabot",
        Party: "R",
        Office: "OH01",
        FECCandID: "H8OH01043"
    },
    {
        CID: "N00028958",
        CRPName: "Jason Chaffetz",
        Party: "R",
        Office: "UT03",
        FECCandID: "H8UT03089"
    },
    {
        CID: "N00030600",
        CRPName: "Judy Chu",
        Party: "D",
        Office: "CA27",
        FECCandID: "H0CA32101"
    },
    {
        CID: "N00032019",
        CRPName: "David Cicilline",
        Party: "D",
        Office: "RI01",
        FECCandID: "H0RI01073"
    },
    {
        CID: "N00035278",
        CRPName: "Katherine Clark",
        Party: "D",
        Office: "MA05",
        FECCandID: "H4MA05084"
    },
    {
        CID: "N00026961",
        CRPName: "Yvette D Clarke",
        Party: "D",
        Office: "NY09",
        FECCandID: "H4NY11138"
    },
    {
        CID: "N00040007",
        CRPName: "Francis Rooney",
        Party: "R",
        Office: "FL19",
        FECCandID: ""
    },
    {
        CID: "N00012460",
        CRPName: "Wm. Lacy Clay",
        Party: "D",
        Office: "MO01",
        FECCandID: "H0MO01066"
    },
    {
        CID: "N00026790",
        CRPName: "Emanuel Cleaver",
        Party: "D",
        Office: "MO05",
        FECCandID: "H4MO05234"
    },
    {
        CID: "N00002408",
        CRPName: "James E. Clyburn",
        Party: "D",
        Office: "SC06",
        FECCandID: "H2SC02042"
    },
    {
        CID: "N00003845",
        CRPName: "Dan Coats",
        Party: "R",
        Office: "INS2",
        FECCandID: "S0IN00053"
    },
    {
        CID: "N00003328",
        CRPName: "Thad Cochran",
        Party: "R",
        Office: "MSS1",
        FECCandID: "S8MS00055"
    },
    {
        CID: "N00024753",
        CRPName: "Mike Coffman",
        Party: "R",
        Office: "CO06",
        FECCandID: "H8CO06138"
    },
    {
        CID: "N00003225",
        CRPName: "Steve Cohen",
        Party: "D",
        Office: "TN09",
        FECCandID: "H6TN09068"
    },
    {
        CID: "N00025726",
        CRPName: "Tom Cole",
        Party: "R",
        Office: "OK04",
        FECCandID: "H2OK04055"
    },
    {
        CID: "N00036158",
        CRPName: "Bonnie Coleman",
        Party: "D",
        Office: "NJ12",
        FECCandID: "H4NJ12149"
    },
    {
        CID: "N00001285",
        CRPName: "Chris Collins",
        Party: "R",
        Office: "NY27",
        FECCandID: "H8NY29032"
    },
    {
        CID: "N00033518",
        CRPName: "Doug Collins",
        Party: "R",
        Office: "GA09",
        FECCandID: "H2GA09150"
    },
    {
        CID: "N00000491",
        CRPName: "Susan M. Collins",
        Party: "R",
        Office: "MES2",
        FECCandID: "S6ME00159"
    },
    {
        CID: "N00036023",
        CRPName: "Barbara Comstock",
        Party: "R",
        Office: "VA10",
        FECCandID: "H4VA10089"
    },
    {
        CID: "N00026041",
        CRPName: "Mike Conaway",
        Party: "R",
        Office: "TX11",
        FECCandID: "H4TX19136"
    },
    {
        CID: "N00029891",
        CRPName: "Gerry Connolly",
        Party: "D",
        Office: "VA11",
        FECCandID: "H8VA11062"
    },
    {
        CID: "N00004029",
        CRPName: "John Jr Conyers",
        Party: "D",
        Office: "MI13",
        FECCandID: "H6MI01028"
    },
    {
        CID: "N00034224",
        CRPName: "Paul Cook",
        Party: "R",
        Office: "CA08",
        FECCandID: "H2CA08164"
    },
    {
        CID: "N00031820",
        CRPName: "Chris Coons",
        Party: "D",
        Office: "DES2",
        FECCandID: "S0DE00092"
    },
    {
        CID: "N00003132",
        CRPName: "Jim Cooper",
        Party: "D",
        Office: "TN05",
        FECCandID: "H2TN05131"
    },
    {
        CID: "N00027441",
        CRPName: "Bob Corker",
        Party: "R",
        Office: "TNS1",
        FECCandID: "S6TN00216"
    },
    {
        CID: "N00024852",
        CRPName: "John Cornyn",
        Party: "R",
        Office: "TXS1",
        FECCandID: "S2TX00106"
    },
    {
        CID: "N00026341",
        CRPName: "Jim Costa",
        Party: "D",
        Office: "CA16",
        FECCandID: "H4CA20082"
    },
    {
        CID: "N00031064",
        CRPName: "Ryan Costello",
        Party: "R",
        Office: "PA06",
        FECCandID: "H0PA06076"
    },
    {
        CID: "N00033363",
        CRPName: "Tom Cotton",
        Party: "R",
        Office: "ARS1",
        FECCandID: "S4AR00103"
    },
    {
        CID: "N00024842",
        CRPName: "Joe Courtney",
        Party: "D",
        Office: "CT02",
        FECCandID: "H2CT02112"
    },
    {
        CID: "N00004614",
        CRPName: "Kevin Cramer",
        Party: "R",
        Office: "ND01",
        FECCandID: "H0ND01026"
    },
    {
        CID: "N00006267",
        CRPName: "Mike Crapo",
        Party: "R",
        Office: "IDS2",
        FECCandID: "S8ID00027"
    },
    {
        CID: "N00030770",
        CRPName: "Rick Crawford",
        Party: "R",
        Office: "AR01",
        FECCandID: "H0AR01083"
    },
    {
        CID: "N00039777",
        CRPName: "John Rutherford",
        Party: "R",
        Office: "FL04",
        FECCandID: ""
    },
    {
        CID: "N00001127",
        CRPName: "Joseph Crowley",
        Party: "D",
        Office: "NY14",
        FECCandID: "H8NY07046"
    },
    {
        CID: "N00033085",
        CRPName: "Ted Cruz",
        Party: "R",
        Office: "TXS2",
        FECCandID: "P60006111"
    },
    {
        CID: "N00024978",
        CRPName: "Henry Cuellar",
        Party: "D",
        Office: "TX28",
        FECCandID: "H2TX23082"
    },
    {
        CID: "N00009738",
        CRPName: "John Culberson",
        Party: "R",
        Office: "TX07",
        FECCandID: "H0TX07055"
    },
    {
        CID: "N00001971",
        CRPName: "Elijah E. Cummings",
        Party: "D",
        Office: "MD07",
        FECCandID: "H6MD07160"
    },
    {
        CID: "N00035403",
        CRPName: "Carlos Curbelo",
        Party: "R",
        Office: "FL26",
        FECCandID: "H4FL26038"
    },
    {
        CID: "N00033054",
        CRPName: "Steven Daines",
        Party: "R",
        Office: "MTS2",
        FECCandID: "S2MT00096"
    },
    {
        CID: "N00004884",
        CRPName: "Danny K. Davis",
        Party: "D",
        Office: "IL07",
        FECCandID: "H4IL07037"
    },
    {
        CID: "N00034784",
        CRPName: "Rodney Davis",
        Party: "R",
        Office: "IL13",
        FECCandID: "H2IL13120"
    },
    {
        CID: "N00009604",
        CRPName: "Susan A. Davis",
        Party: "D",
        Office: "CA53",
        FECCandID: "H0CA49055"
    },
    {
        CID: "N00007781",
        CRPName: "Peter DeFazio",
        Party: "D",
        Office: "OR04",
        FECCandID: "H6OR04047"
    },
    {
        CID: "N00006134",
        CRPName: "Diana DeGette",
        Party: "D",
        Office: "CO01",
        FECCandID: "H6CO01141"
    },
    {
        CID: "N00033897",
        CRPName: "John K. Delaney",
        Party: "D",
        Office: "MD06",
        FECCandID: "H2MD06195"
    },
    {
        CID: "N00000615",
        CRPName: "Rosa L. DeLauro",
        Party: "D",
        Office: "CT03",
        FECCandID: "H0CT03072"
    },
    {
        CID: "N00030693",
        CRPName: "Suzan DelBene",
        Party: "D",
        Office: "WA01",
        FECCandID: "H0WA08046"
    },
    {
        CID: "N00031593",
        CRPName: "Jeff Denham",
        Party: "R",
        Office: "CA10",
        FECCandID: "H0CA19173"
    },
    {
        CID: "N00026171",
        CRPName: "Charlie Dent",
        Party: "R",
        Office: "PA15",
        FECCandID: "H4PA15087"
    },
    {
        CID: "N00034746",
        CRPName: "Ron DeSantis",
        Party: "R",
        Office: "FL06",
        FECCandID: "S6FL00293"
    },
    {
        CID: "N00030709",
        CRPName: "Mark Desaulnier",
        Party: "D",
        Office: "CA11",
        FECCandID: "H0CA10073"
    },
    {
        CID: "N00030957",
        CRPName: "Scott Desjarlais",
        Party: "R",
        Office: "TN04",
        FECCandID: "H0TN04195"
    },
    {
        CID: "N00031317",
        CRPName: "Theodore E. Deutch",
        Party: "D",
        Office: "FL22",
        FECCandID: "H0FL19080"
    },
    {
        CID: "N00025337",
        CRPName: "Mario Diaz-Balart",
        Party: "R",
        Office: "FL25",
        FECCandID: "H2FL25018"
    },
    {
        CID: "N00036149",
        CRPName: "Debbie Dingell",
        Party: "D",
        Office: "MI12",
        FECCandID: "H4MI12079"
    },
    {
        CID: "N00006023",
        CRPName: "Lloyd Doggett",
        Party: "D",
        Office: "TX35",
        FECCandID: "H4TX10028"
    },
    {
        CID: "N00033101",
        CRPName: "Brad Schneider",
        Party: "D",
        Office: "IL10",
        FECCandID: "H2IL10068"
    },
    {
        CID: "N00026586",
        CRPName: "Joe Donnelly",
        Party: "D",
        Office: "INS1",
        FECCandID: "S2IN00091"
    },
    {
        CID: "N00036928",
        CRPName: "Dan Donovan",
        Party: "R",
        Office: "NY11",
        FECCandID: "H5NY11010"
    },
    {
        CID: "N00001373",
        CRPName: "Mike Doyle",
        Party: "D",
        Office: "PA14",
        FECCandID: "H4PA18131"
    },
    {
        CID: "N00033240",
        CRPName: "Raja Krishnamoorthi",
        Party: "D",
        Office: "IL08",
        FECCandID: "H6IL08147"
    },
    {
        CID: "N00030967",
        CRPName: "Sean P. Duffy",
        Party: "R",
        Office: "WI07",
        FECCandID: "H0WI07051"
    },
    {
        CID: "N00030752",
        CRPName: "Jeff Duncan",
        Party: "R",
        Office: "SC03",
        FECCandID: "H0SC03077"
    },
    {
        CID: "N00003209",
        CRPName: "John J. Duncan Jr.",
        Party: "R",
        Office: "TN02",
        FECCandID: "H8TN02069"
    },
    {
        CID: "N00004981",
        CRPName: "Dick Durbin",
        Party: "D",
        Office: "ILS1",
        FECCandID: "S6IL00151"
    },
    {
        CID: "N00036999",
        CRPName: "Anthony Brown",
        Party: "D",
        Office: "MD04",
        FECCandID: "H6MD04209"
    },
    {
        CID: "N00028257",
        CRPName: "Keith Ellison",
        Party: "D",
        Office: "MN05",
        FECCandID: "H6MN05183"
    },
    {
        CID: "N00031513",
        CRPName: "Renee Ellmers",
        Party: "R",
        Office: "NC02",
        FECCandID: "H0NC02059"
    },
    {
        CID: "N00035440",
        CRPName: "Tom Emmer",
        Party: "R",
        Office: "MN06",
        FECCandID: "H4MN06087"
    },
    {
        CID: "N00001003",
        CRPName: "Eliot L. Engel",
        Party: "D",
        Office: "NY16",
        FECCandID: "H8NY19058"
    },
    {
        CID: "N00006249",
        CRPName: "Mike Enzi",
        Party: "R",
        Office: "WYS2",
        FECCandID: "S6WY00126"
    },
    {
        CID: "N00035483",
        CRPName: "Joni Ernst",
        Party: "R",
        Office: "IAS2",
        FECCandID: "S4IA00129"
    },
    {
        CID: "N00007335",
        CRPName: "Anna Eshoo",
        Party: "D",
        Office: "CA18",
        FECCandID: "H8CA12098"
    },
    {
        CID: "N00033217",
        CRPName: "Elizabeth Esty",
        Party: "D",
        Office: "CT05",
        FECCandID: "H2CT05131"
    },
    {
        CID: "N00031672",
        CRPName: "Blake Farenthold",
        Party: "R",
        Office: "TX27",
        FECCandID: "H0TX27061"
    },
    {
        CID: "N00038601",
        CRPName: "Jimmy Panetta",
        Party: "D",
        Office: "CA20",
        FECCandID: "H6CA20152"
    },
    {
        CID: "N00038450",
        CRPName: "Dwight Evans",
        Party: "D",
        Office: "PA02",
        FECCandID: "H6PA02171"
    },
    {
        CID: "N00007364",
        CRPName: "Dianne Feinstein",
        Party: "D",
        Office: "CAS2",
        FECCandID: "S0CA00199"
    },
    {
        CID: "N00025445",
        CRPName: "David Kustoff",
        Party: "R",
        Office: "TN08",
        FECCandID: "H6TN08227"
    },
    {
        CID: "N00033443",
        CRPName: "Deb Fischer",
        Party: "R",
        Office: "NES1",
        FECCandID: "S2NE00094"
    },
    {
        CID: "N00038779",
        CRPName: "Brian Fitzpatrick",
        Party: "R",
        Office: "PA08",
        FECCandID: "H6PA08277"
    },
    {
        CID: "N00009573",
        CRPName: "Jeff Flake",
        Party: "R",
        Office: "AZS2",
        FECCandID: "S2AZ00141"
    },
    {
        CID: "N00030815",
        CRPName: "Chuck Fleischmann",
        Party: "R",
        Office: "TN03",
        FECCandID: "H0TN03254"
    },
    {
        CID: "N00039106",
        CRPName: "Mike Johnson",
        Party: "R",
        Office: "LA04",
        FECCandID: "H6LA04138"
    },
    {
        CID: "N00031545",
        CRPName: "Bill Flores",
        Party: "R",
        Office: "TX17",
        FECCandID: "H0TX17104"
    },
    {
        CID: "N00039327",
        CRPName: "Donald McEachin",
        Party: "D",
        Office: "VA04",
        FECCandID: "H6VA04061"
    },
    {
        CID: "N00026631",
        CRPName: "Jeff Fortenberry",
        Party: "R",
        Office: "NE01",
        FECCandID: "H4NE01064"
    },
    {
        CID: "N00029139",
        CRPName: "Bill Foster",
        Party: "D",
        Office: "IL11",
        FECCandID: "H8IL14067"
    },
    {
        CID: "N00026166",
        CRPName: "Virginia Foxx",
        Party: "R",
        Office: "NC05",
        FECCandID: "H4NC05146"
    },
    {
        CID: "N00002893",
        CRPName: "Lois Frankel",
        Party: "D",
        Office: "FL21",
        FECCandID: "H2FL14053"
    },
    {
        CID: "N00029016",
        CRPName: "Al Franken",
        Party: "D",
        Office: "MNS1",
        FECCandID: "S8MN00438"
    },
    {
        CID: "N00006423",
        CRPName: "Trent Franks",
        Party: "R",
        Office: "AZ08",
        FECCandID: "H4AZ04024"
    },
    {
        CID: "N00000684",
        CRPName: "Rodney Frelinghuysen",
        Party: "R",
        Office: "NJ11",
        FECCandID: "H2NJ05014"
    },
    {
        CID: "N00030490",
        CRPName: "Marcia L Fudge",
        Party: "D",
        Office: "OH11",
        FECCandID: "H8OH11141"
    },
    {
        CID: "N00033281",
        CRPName: "Tulsi Gabbard",
        Party: "D",
        Office: "HI02",
        FECCandID: "H2HI02508"
    },
    {
        CID: "N00036097",
        CRPName: "Ruben Gallego",
        Party: "D",
        Office: "AZ07",
        FECCandID: "H4AZ07043"
    },
    {
        CID: "N00030856",
        CRPName: "John Garamendi",
        Party: "D",
        Office: "CA03",
        FECCandID: "H0CA10149"
    },
    {
        CID: "N00030780",
        CRPName: "Cory Gardner",
        Party: "R",
        Office: "COS2",
        FECCandID: "S4CO00395"
    },
    {
        CID: "N00036944",
        CRPName: "Josh Gottheimer",
        Party: "D",
        Office: "NJ05",
        FECCandID: "H6NJ05171"
    },
    {
        CID: "N00031128",
        CRPName: "Bob Gibbs",
        Party: "R",
        Office: "OH07",
        FECCandID: "H0OH18077"
    },
    {
        CID: "N00037288",
        CRPName: "John Faso",
        Party: "R",
        Office: "NY19",
        FECCandID: "H6NY19169"
    },
    {
        CID: "N00027658",
        CRPName: "Kirsten Gillibrand",
        Party: "D",
        Office: "NYS1",
        FECCandID: "S0NY00410"
    },
    {
        CID: "N00026148",
        CRPName: "Louie Gohmert",
        Party: "R",
        Office: "TX01",
        FECCandID: "H4TX04039"
    },
    {
        CID: "N00009154",
        CRPName: "Bob Goodlatte",
        Party: "R",
        Office: "VA06",
        FECCandID: "H2VA06115"
    },
    {
        CID: "N00030771",
        CRPName: "Paul Gosar",
        Party: "R",
        Office: "AZ04",
        FECCandID: "H0AZ01259"
    },
    {
        CID: "N00030880",
        CRPName: "Trey Gowdy",
        Party: "R",
        Office: "SC04",
        FECCandID: "H0SC04257"
    },
    {
        CID: "N00037442",
        CRPName: "Neal Dunn",
        Party: "R",
        Office: "FL02",
        FECCandID: "H6FL02208"
    },
    {
        CID: "N00009975",
        CRPName: "Lindsey Graham",
        Party: "R",
        Office: "SCS2",
        FECCandID: "S0SC00149"
    },
    {
        CID: "N00008799",
        CRPName: "Kay Granger",
        Party: "R",
        Office: "TX12",
        FECCandID: "H6TX12060"
    },
    {
        CID: "N00001758",
        CRPName: "Chuck Grassley",
        Party: "R",
        Office: "IAS1",
        FECCandID: "S0IA00028"
    },
    {
        CID: "N00036135",
        CRPName: "Garret Graves",
        Party: "R",
        Office: "LA06",
        FECCandID: "H4LA06153"
    },
    {
        CID: "N00013323",
        CRPName: "Sam Graves",
        Party: "R",
        Office: "MO06",
        FECCandID: "H0MO06073"
    },
    {
        CID: "N00030788",
        CRPName: "Tom Graves",
        Party: "R",
        Office: "GA14",
        FECCandID: "H0GA09030"
    },
    {
        CID: "N00037422",
        CRPName: "Darren Soto",
        Party: "D",
        Office: "FL09",
        FECCandID: "H6FL09179"
    },
    {
        CID: "N00026686",
        CRPName: "Al Green",
        Party: "D",
        Office: "TX09",
        FECCandID: "H4TX09095"
    },
    {
        CID: "N00005870",
        CRPName: "Gene Green",
        Party: "D",
        Office: "TX29",
        FECCandID: "H2TX29030"
    },
    {
        CID: "N00032029",
        CRPName: "Morgan Griffith",
        Party: "R",
        Office: "VA09",
        FECCandID: "H0VA09055"
    },
    {
        CID: "N00025284",
        CRPName: "Raul M. Grijalva",
        Party: "D",
        Office: "AZ03",
        FECCandID: "H2AZ07070"
    },
    {
        CID: "N00029400",
        CRPName: "Michelle Lujan Grisham",
        Party: "D",
        Office: "NM01",
        FECCandID: "H8NM01257"
    },
    {
        CID: "N00036409",
        CRPName: "Glenn S. Grothman",
        Party: "R",
        Office: "WI06",
        FECCandID: "H4WI06048"
    },
    {
        CID: "N00028091",
        CRPName: "Carol Shea-Porter",
        Party: "D",
        Office: "NH01",
        FECCandID: "H6NH01230"
    },
    {
        CID: "N00029675",
        CRPName: "Brett Guthrie",
        Party: "R",
        Office: "KY02",
        FECCandID: "H8KY02031"
    },
    {
        CID: "N00004874",
        CRPName: "Luis V Gutierrez",
        Party: "D",
        Office: "IL04",
        FECCandID: "H2IL08039"
    },
    {
        CID: "N00037019",
        CRPName: "Nanette Barragan",
        Party: "D",
        Office: "CA44",
        FECCandID: "H6CA44103"
    },
    {
        CID: "N00036351",
        CRPName: "Claudia Tenney",
        Party: "R",
        Office: "NY22",
        FECCandID: ""
    },
    {
        CID: "N00033530",
        CRPName: "Ruben Kihuen",
        Party: "D",
        Office: "NV04",
        FECCandID: "H2NV00050"
    },
    {
        CID: "N00029632",
        CRPName: "Gregg Harper",
        Party: "R",
        Office: "MS03",
        FECCandID: "H8MS03067"
    },
    {
        CID: "N00029147",
        CRPName: "Andy Harris",
        Party: "R",
        Office: "MD01",
        FECCandID: "H8MD01094"
    },
    {
        CID: "N00031005",
        CRPName: "Vicky Hartzler",
        Party: "R",
        Office: "MO04",
        FECCandID: "H0MO04086"
    },
    {
        CID: "N00002884",
        CRPName: "Alcee L. Hastings",
        Party: "D",
        Office: "FL20",
        FECCandID: "H2FL23021"
    },
    {
        CID: "N00009869",
        CRPName: "Orrin G. Hatch",
        Party: "R",
        Office: "UTS1",
        FECCandID: "S6UT00063"
    },
    {
        CID: "N00031557",
        CRPName: "Dennis Heck",
        Party: "D",
        Office: "WA10",
        FECCandID: "H0WA03161"
    },
    {
        CID: "N00038734",
        CRPName: "Jacky Rosen",
        Party: "D",
        Office: "NV03",
        FECCandID: "H6NV03139"
    },
    {
        CID: "N00029835",
        CRPName: "Martin Heinrich",
        Party: "D",
        Office: "NMS1",
        FECCandID: "S2NM00088"
    },
    {
        CID: "N00033782",
        CRPName: "Heidi Heitkamp",
        Party: "D",
        Office: "NDS2",
        FECCandID: "S2ND00099"
    },
    {
        CID: "N00027522",
        CRPName: "Dean Heller",
        Party: "R",
        Office: "NVS1",
        FECCandID: "S2NV00183"
    },
    {
        CID: "N00024922",
        CRPName: "Jeb Hensarling",
        Party: "R",
        Office: "TX05",
        FECCandID: "H2TX05121"
    },
    {
        CID: "N00031559",
        CRPName: "Jaime Herrera Beutler",
        Party: "R",
        Office: "WA03",
        FECCandID: "H0WA03187"
    },
    {
        CID: "N00032243",
        CRPName: "Jody B. Hice",
        Party: "R",
        Office: "GA10",
        FECCandID: "H0GA07125"
    },
    {
        CID: "N00027060",
        CRPName: "Brian M. Higgins",
        Party: "D",
        Office: "NY26",
        FECCandID: "H4NY27076"
    },
    {
        CID: "N00035792",
        CRPName: "French Hill",
        Party: "R",
        Office: "AR02",
        FECCandID: "H4AR02141"
    },
    {
        CID: "N00029070",
        CRPName: "Jim Himes",
        Party: "D",
        Office: "CT04",
        FECCandID: "H8CT04172"
    },
    {
        CID: "N00038809",
        CRPName: "Vicente Gonzalez",
        Party: "D",
        Office: "TX15",
        FECCandID: "H6TX15162"
    },
    {
        CID: "N00028139",
        CRPName: "Mazie K. Hirono",
        Party: "D",
        Office: "HIS2",
        FECCandID: "S2HI00106"
    },
    {
        CID: "N00031688",
        CRPName: "John Hoeven",
        Party: "R",
        Office: "NDS1",
        FECCandID: "S0ND00093"
    },
    {
        CID: "N00039551",
        CRPName: "Ted Budd",
        Party: "R",
        Office: "NC13",
        FECCandID: "H6NC13129"
    },
    {
        CID: "N00026427",
        CRPName: "Ro Khanna",
        Party: "D",
        Office: "CA17",
        FECCandID: "H4CA12055"
    },
    {
        CID: "N00001821",
        CRPName: "Steny H. Hoyer",
        Party: "D",
        Office: "MD05",
        FECCandID: "H2MD05155"
    },
    {
        CID: "N00033630",
        CRPName: "Richard Hudson",
        Party: "R",
        Office: "NC08",
        FECCandID: "H2NC08185"
    },
    {
        CID: "N00037034",
        CRPName: "Roger Marshall",
        Party: "R",
        Office: "KS01",
        FECCandID: "H6KS01179"
    },
    {
        CID: "N00033030",
        CRPName: "Jared Huffman",
        Party: "D",
        Office: "CA02",
        FECCandID: "H2CA06259"
    },
    {
        CID: "N00030673",
        CRPName: "Bill Huizenga",
        Party: "R",
        Office: "MI02",
        FECCandID: "H0MI02094"
    },
    {
        CID: "N00031104",
        CRPName: "Randy Hultgren",
        Party: "R",
        Office: "IL14",
        FECCandID: "H0IL14080"
    },
    {
        CID: "N00029258",
        CRPName: "Duncan D. Hunter",
        Party: "R",
        Office: "CA50",
        FECCandID: "H8CA52052"
    },
    {
        CID: "N00031417",
        CRPName: "Will Hurd",
        Party: "R",
        Office: "TX23",
        FECCandID: "H0TX23086"
    },
    {
        CID: "N00038847",
        CRPName: "Tom Garrett",
        Party: "R",
        Office: "VA05",
        FECCandID: "H6VA05142"
    },
    {
        CID: "N00005582",
        CRPName: "James M. Inhofe",
        Party: "R",
        Office: "OKS2",
        FECCandID: "S4OK00083"
    },
    {
        CID: "N00002593",
        CRPName: "Johnny Isakson",
        Party: "R",
        Office: "GAS2",
        FECCandID: "S6GA00119"
    },
    {
        CID: "N00038742",
        CRPName: "Tom Suozzi",
        Party: "D",
        Office: "NY03",
        FECCandID: "H6NY03247"
    },
    {
        CID: "N00007017",
        CRPName: "Darrell Issa",
        Party: "R",
        Office: "CA49",
        FECCandID: "H0CA48024"
    },
    {
        CID: "N00005818",
        CRPName: "Lee Sheila Jackson",
        Party: "D",
        Office: "TX18",
        FECCandID: "H4TX18054"
    },
    {
        CID: "N00033640",
        CRPName: "Hakeem Jeffries",
        Party: "D",
        Office: "NY08",
        FECCandID: "H2NY10092"
    },
    {
        CID: "N00035531",
        CRPName: "Evan Jenkins",
        Party: "R",
        Office: "WV03",
        FECCandID: "H4WV03070"
    },
    {
        CID: "N00029077",
        CRPName: "Lynn Jenkins",
        Party: "R",
        Office: "KS02",
        FECCandID: "H8KS02090"
    },
    {
        CID: "N00032088",
        CRPName: "Bill Johnson",
        Party: "R",
        Office: "OH06",
        FECCandID: "H0OH06189"
    },
    {
        CID: "N00008122",
        CRPName: "Eddie Bernice Johnson",
        Party: "D",
        Office: "TX30",
        FECCandID: "H2TX00015"
    },
    {
        CID: "N00027848",
        CRPName: "Hank Johnson",
        Party: "D",
        Office: "GA04",
        FECCandID: "H6GA04129"
    },
    {
        CID: "N00032546",
        CRPName: "Ron Johnson",
        Party: "R",
        Office: "WIS2",
        FECCandID: "S0WI00197"
    },
    {
        CID: "N00008028",
        CRPName: "Sam Johnson",
        Party: "R",
        Office: "TX03",
        FECCandID: "H2TX03118"
    },
    {
        CID: "N00002942",
        CRPName: "Charlie Crist",
        Party: "D",
        Office: "FL13",
        FECCandID: "H6FL13205"
    },
    {
        CID: "N00002299",
        CRPName: "Walter B. Jones",
        Party: "R",
        Office: "NC03",
        FECCandID: "H2NC01081"
    },
    {
        CID: "N00027894",
        CRPName: "Jim Jordan",
        Party: "R",
        Office: "OH04",
        FECCandID: "H6OH04082"
    },
    {
        CID: "N00035007",
        CRPName: "David P. Joyce",
        Party: "R",
        Office: "OH14",
        FECCandID: "H2OH14064"
    },
    {
        CID: "N00033177",
        CRPName: "Tim Kaine",
        Party: "D",
        Office: "VAS1",
        FECCandID: "S2VA00142"
    },
    {
        CID: "N00003522",
        CRPName: "Marcy Kaptur",
        Party: "D",
        Office: "OH09",
        FECCandID: "H2OH09031"
    },
    {
        CID: "N00035934",
        CRPName: "John Katko",
        Party: "R",
        Office: "NY24",
        FECCandID: "H4NY24073"
    },
    {
        CID: "N00031933",
        CRPName: "Bill Keating",
        Party: "D",
        Office: "MA09",
        FECCandID: "H0MA10082"
    },
    {
        CID: "N00031647",
        CRPName: "Mike Kelly",
        Party: "R",
        Office: "PA03",
        FECCandID: "H0PA03271"
    },
    {
        CID: "N00035215",
        CRPName: "Robin Kelly",
        Party: "D",
        Office: "IL02",
        FECCandID: "H2IL02172"
    },
    {
        CID: "N00037003",
        CRPName: "Trent Kelly",
        Party: "R",
        Office: "MS01",
        FECCandID: "H5MS01059"
    },
    {
        CID: "N00034044",
        CRPName: "Joseph P. Kennedy III",
        Party: "D",
        Office: "MA04",
        FECCandID: "H2MA04073"
    },
    {
        CID: "N00033395",
        CRPName: "Dan Kildee",
        Party: "D",
        Office: "MI05",
        FECCandID: "H2MI05119"
    },
    {
        CID: "N00034453",
        CRPName: "Derek Kilmer",
        Party: "D",
        Office: "WA06",
        FECCandID: "H2WA06129"
    },
    {
        CID: "N00004403",
        CRPName: "Ron Kind",
        Party: "D",
        Office: "WI03",
        FECCandID: "H6WI03099"
    },
    {
        CID: "N00034580",
        CRPName: "Angus King",
        Party: "I",
        Office: "MES1",
        FECCandID: "S2ME00109"
    },
    {
        CID: "N00001193",
        CRPName: "Pete King",
        Party: "R",
        Office: "NY02",
        FECCandID: "H2NY03089"
    },
    {
        CID: "N00025237",
        CRPName: "Steven A. King",
        Party: "R",
        Office: "IA04",
        FECCandID: "H2IA05072"
    },
    {
        CID: "N00030667",
        CRPName: "Adam Kinzinger",
        Party: "R",
        Office: "IL16",
        FECCandID: "H0IL11052"
    },
    {
        CID: "N00027860",
        CRPName: "Tammy Duckworth",
        Party: "D",
        Office: "ILS2",
        FECCandID: "S6IL00292"
    },
    {
        CID: "N00037515",
        CRPName: "Tom O'Halleran",
        Party: "D",
        Office: "AZ01",
        FECCandID: "H6AZ01199"
    },
    {
        CID: "N00038400",
        CRPName: "Jason Lewis",
        Party: "R",
        Office: "MN02",
        FECCandID: "H6MN02149"
    },
    {
        CID: "N00027500",
        CRPName: "Amy Klobuchar",
        Party: "D",
        Office: "MNS2",
        FECCandID: "S6MN00267"
    },
    {
        CID: "N00035820",
        CRPName: "Steve Knight",
        Party: "R",
        Office: "CA25",
        FECCandID: "H4CA25123"
    },
    {
        CID: "N00030875",
        CRPName: "Ann Mclane Kuster",
        Party: "D",
        Office: "NH02",
        FECCandID: "H0NH02181"
    },
    {
        CID: "N00031377",
        CRPName: "Raul Labrador",
        Party: "R",
        Office: "ID01",
        FECCandID: "H0ID01253"
    },
    {
        CID: "N00037031",
        CRPName: "Darin LaHood",
        Party: "R",
        Office: "IL18",
        FECCandID: "H6IL18088"
    },
    {
        CID: "N00033987",
        CRPName: "Doug LaMalfa",
        Party: "R",
        Office: "CA01",
        FECCandID: "H2CA02142"
    },
    {
        CID: "N00028133",
        CRPName: "Douglas L. Lamborn",
        Party: "R",
        Office: "CO05",
        FECCandID: "H6CO05159"
    },
    {
        CID: "N00000898",
        CRPName: "Leonard Lance",
        Party: "R",
        Office: "NJ07",
        FECCandID: "H6NJ12136"
    },
    {
        CID: "N00009724",
        CRPName: "Jim Langevin",
        Party: "D",
        Office: "RI02",
        FECCandID: "H0RI02139"
    },
    {
        CID: "N00031129",
        CRPName: "James Lankford",
        Party: "R",
        Office: "OKS1",
        FECCandID: "S4OK00232"
    },
    {
        CID: "N00009759",
        CRPName: "Rick Larsen",
        Party: "D",
        Office: "WA02",
        FECCandID: "H0WA02080"
    },
    {
        CID: "N00000575",
        CRPName: "John B. Larson",
        Party: "D",
        Office: "CT01",
        FECCandID: "H8CT01046"
    },
    {
        CID: "N00012233",
        CRPName: "Robert E Latta",
        Party: "R",
        Office: "OH05",
        FECCandID: "H8OH05036"
    },
    {
        CID: "N00034068",
        CRPName: "Brenda Lawrence",
        Party: "D",
        Office: "MI14",
        FECCandID: "H2MI14111"
    },
    {
        CID: "N00009918",
        CRPName: "Patrick Leahy",
        Party: "D",
        Office: "VTS2",
        FECCandID: "S4VT00017"
    },
    {
        CID: "N00008046",
        CRPName: "Barbara Lee",
        Party: "D",
        Office: "CA13",
        FECCandID: "H8CA09060"
    },
    {
        CID: "N00031696",
        CRPName: "Mike Lee",
        Party: "R",
        Office: "UTS2",
        FECCandID: "S0UT00165"
    },
    {
        CID: "N00003950",
        CRPName: "Sander Levin",
        Party: "D",
        Office: "MI09",
        FECCandID: "H2MI17023"
    },
    {
        CID: "N00002577",
        CRPName: "John Lewis",
        Party: "D",
        Office: "GA05",
        FECCandID: "H6GA05217"
    },
    {
        CID: "N00035825",
        CRPName: "Ted Lieu",
        Party: "D",
        Office: "CA33",
        FECCandID: "H4CA33119"
    },
    {
        CID: "N00027239",
        CRPName: "Daniel Lipinski",
        Party: "D",
        Office: "IL03",
        FECCandID: "H4IL03077"
    },
    {
        CID: "N00000851",
        CRPName: "Frank A. LoBiondo",
        Party: "R",
        Office: "NJ02",
        FECCandID: "H2NJ02037"
    },
    {
        CID: "N00027741",
        CRPName: "David Loebsack",
        Party: "D",
        Office: "IA02",
        FECCandID: "H6IA02146"
    },
    {
        CID: "N00007479",
        CRPName: "Zoe Lofgren",
        Party: "D",
        Office: "CA19",
        FECCandID: "H4CA16049"
    },
    {
        CID: "N00030676",
        CRPName: "Billy Long",
        Party: "R",
        Office: "MO07",
        FECCandID: "H0MO07113"
    },
    {
        CID: "N00035347",
        CRPName: "Barry Loudermilk",
        Party: "R",
        Office: "GA11",
        FECCandID: "H4GA11061"
    },
    {
        CID: "N00033842",
        CRPName: "Mia Love",
        Party: "R",
        Office: "UT04",
        FECCandID: "H2UT04023"
    },
    {
        CID: "N00033274",
        CRPName: "Alan Lowenthal",
        Party: "D",
        Office: "CA47",
        FECCandID: "H2CA00104"
    },
    {
        CID: "N00001024",
        CRPName: "Nita M. Lowey",
        Party: "D",
        Office: "NY17",
        FECCandID: "H8NY20056"
    },
    {
        CID: "N00005559",
        CRPName: "Frank D. Lucas",
        Party: "R",
        Office: "OK03",
        FECCandID: "H4OK06056"
    },
    {
        CID: "N00030026",
        CRPName: "Blaine Luetkemeyer",
        Party: "R",
        Office: "MO03",
        FECCandID: "H8MO09153"
    },
    {
        CID: "N00029562",
        CRPName: "Ben R. Lujan",
        Party: "D",
        Office: "NM03",
        FECCandID: "H8NM03196"
    },
    {
        CID: "N00035504",
        CRPName: "Liz Cheney",
        Party: "R",
        Office: "WY01",
        FECCandID: "H6WY00159"
    },
    {
        CID: "N00013855",
        CRPName: "Stephen F. Lynch",
        Party: "D",
        Office: "MA08",
        FECCandID: "H2MA09072"
    },
    {
        CID: "N00036155",
        CRPName: "Thomas MacArthur",
        Party: "R",
        Office: "NJ03",
        FECCandID: "H4NJ03130"
    },
    {
        CID: "N00000078",
        CRPName: "Carolyn B. Maloney",
        Party: "D",
        Office: "NY12",
        FECCandID: "H2NY14037"
    },
    {
        CID: "N00034277",
        CRPName: "Sean Patrick Maloney",
        Party: "D",
        Office: "NY18",
        FECCandID: "H2NY22139"
    },
    {
        CID: "N00032838",
        CRPName: "Joe Manchin",
        Party: "D",
        Office: "WVS1",
        FECCandID: "S0WV00090"
    },
    {
        CID: "N00026710",
        CRPName: "Kenny Marchant",
        Party: "R",
        Office: "TX24",
        FECCandID: "H4TX24094"
    },
    {
        CID: "N00031777",
        CRPName: "Tom Marino",
        Party: "R",
        Office: "PA10",
        FECCandID: "H0PA10078"
    },
    {
        CID: "N00000270",
        CRPName: "Ed Markey",
        Party: "D",
        Office: "MAS2",
        FECCandID: "S4MA00028"
    },
    {
        CID: "N00034041",
        CRPName: "Thomas Massie",
        Party: "R",
        Office: "KY04",
        FECCandID: "H2KY04121"
    },
    {
        CID: "N00027459",
        CRPName: "Doris O. Matsui",
        Party: "D",
        Office: "CA06",
        FECCandID: "H6CA05195"
    },
    {
        CID: "N00006424",
        CRPName: "John McCain",
        Party: "R",
        Office: "AZS1",
        FECCandID: "S6AZ00019"
    },
    {
        CID: "N00028152",
        CRPName: "Kevin McCarthy",
        Party: "R",
        Office: "CA23",
        FECCandID: "H6CA22125"
    },
    {
        CID: "N00027694",
        CRPName: "Claire McCaskill",
        Party: "D",
        Office: "MOS2",
        FECCandID: "S6MO00305"
    },
    {
        CID: "N00026460",
        CRPName: "Michael McCaul",
        Party: "R",
        Office: "TX10",
        FECCandID: "H4TX10093"
    },
    {
        CID: "N00006863",
        CRPName: "Tom McClintock",
        Party: "R",
        Office: "CA04",
        FECCandID: "H8CA04152"
    },
    {
        CID: "N00012942",
        CRPName: "Betty McCollum",
        Party: "D",
        Office: "MN04",
        FECCandID: "H0MN04049"
    },
    {
        CID: "N00003389",
        CRPName: "Mitch McConnell",
        Party: "R",
        Office: "KYS1",
        FECCandID: "S2KY00012"
    },
    {
        CID: "N00038858",
        CRPName: "Pramila Jayapal",
        Party: "D",
        Office: "WA07",
        FECCandID: "H6WA07458"
    },
    {
        CID: "N00000179",
        CRPName: "James P. McGovern",
        Party: "D",
        Office: "MA02",
        FECCandID: "H4MA03022"
    },
    {
        CID: "N00026627",
        CRPName: "Patrick McHenry",
        Party: "R",
        Office: "NC10",
        FECCandID: "H4NC10047"
    },
    {
        CID: "N00031681",
        CRPName: "David McKinley",
        Party: "R",
        Office: "WV01",
        FECCandID: "H0WV01072"
    },
    {
        CID: "N00026314",
        CRPName: "Rodgers Cathy McMorris",
        Party: "R",
        Office: "WA05",
        FECCandID: "H4WA05077"
    },
    {
        CID: "N00026926",
        CRPName: "Jerry McNerney",
        Party: "D",
        Office: "CA09",
        FECCandID: "H4CA11081"
    },
    {
        CID: "N00033982",
        CRPName: "Martha McSally",
        Party: "R",
        Office: "AZ02",
        FECCandID: "H2AZ08102"
    },
    {
        CID: "N00033631",
        CRPName: "Mark R. Meadows",
        Party: "R",
        Office: "NC11",
        FECCandID: "H2NC11080"
    },
    {
        CID: "N00031134",
        CRPName: "Patrick Meehan",
        Party: "R",
        Office: "PA07",
        FECCandID: "H0PA07082"
    },
    {
        CID: "N00001171",
        CRPName: "Gregory W. Meeks",
        Party: "D",
        Office: "NY05",
        FECCandID: "H8NY06048"
    },
    {
        CID: "N00000699",
        CRPName: "Robert Menendez",
        Party: "D",
        Office: "NJS1",
        FECCandID: "S6NJ00289"
    },
    {
        CID: "N00034547",
        CRPName: "Grace Meng",
        Party: "D",
        Office: "NY06",
        FECCandID: "H2NY06116"
    },
    {
        CID: "N00029303",
        CRPName: "Jeff Merkley",
        Party: "D",
        Office: "ORS1",
        FECCandID: "S8OR00207"
    },
    {
        CID: "N00012546",
        CRPName: "Luke Messer",
        Party: "R",
        Office: "IN06",
        FECCandID: "H0IN02125"
    },
    {
        CID: "N00040133",
        CRPName: "Stphanie Murphy",
        Party: "D",
        Office: "FL07",
        FECCandID: ""
    },
    {
        CID: "N00001945",
        CRPName: "Barbara A. Mikulski",
        Party: "D",
        Office: "MDS2",
        FECCandID: "S6MD00140"
    },
    {
        CID: "N00036274",
        CRPName: "Paul Mitchell",
        Party: "R",
        Office: "MI10",
        FECCandID: "H4MI04118"
    },
    {
        CID: "N00039503",
        CRPName: "Matt Gaetz",
        Party: "R",
        Office: "FL01",
        FECCandID: "H6FL01119"
    },
    {
        CID: "N00036275",
        CRPName: "John Moolenaar",
        Party: "R",
        Office: "MI04",
        FECCandID: "H4MI04126"
    },
    {
        CID: "N00033814",
        CRPName: "Alex Mooney",
        Party: "R",
        Office: "WV02",
        FECCandID: "H4WV02080"
    },
    {
        CID: "N00026914",
        CRPName: "Gwen Moore",
        Party: "D",
        Office: "WI04",
        FECCandID: "H4WI04183"
    },
    {
        CID: "N00005282",
        CRPName: "Jerry Moran",
        Party: "R",
        Office: "KSS2",
        FECCandID: "S0KS00091"
    },
    {
        CID: "N00035431",
        CRPName: "Seth Moulton",
        Party: "D",
        Office: "MA06",
        FECCandID: "H4MA06090"
    },
    {
        CID: "N00033410",
        CRPName: "Markwayne Mullin",
        Party: "R",
        Office: "OK02",
        FECCandID: "H2OK02083"
    },
    {
        CID: "N00031412",
        CRPName: "Mick Mulvaney",
        Party: "R",
        Office: "SC05",
        FECCandID: "H0SC05031"
    },
    {
        CID: "N00026050",
        CRPName: "Lisa Murkowski",
        Party: "R",
        Office: "AKS2",
        FECCandID: "S4AK00099"
    },
    {
        CID: "N00027566",
        CRPName: "Christopher S Murphy",
        Party: "D",
        Office: "CTS1",
        FECCandID: "S2CT00132"
    },
    {
        CID: "N00037269",
        CRPName: "Brian Mast",
        Party: "R",
        Office: "FL18",
        FECCandID: "H6FL18097"
    },
    {
        CID: "N00024992",
        CRPName: "Tim Murphy",
        Party: "R",
        Office: "PA18",
        FECCandID: "H2PA18143"
    },
    {
        CID: "N00007876",
        CRPName: "Patty Murray",
        Party: "D",
        Office: "WAS2",
        FECCandID: "S2WA00189"
    },
    {
        CID: "N00000939",
        CRPName: "Jerrold Nadler",
        Party: "D",
        Office: "NY10",
        FECCandID: "H2NY17071"
    },
    {
        CID: "N00006789",
        CRPName: "Grace Napolitano",
        Party: "D",
        Office: "CA32",
        FECCandID: "H8CA34068"
    },
    {
        CID: "N00000153",
        CRPName: "Richard E. Neal",
        Party: "D",
        Office: "MA01",
        FECCandID: "H8MA02041"
    },
    {
        CID: "N00009926",
        CRPName: "Bill Nelson",
        Party: "D",
        Office: "FLS1",
        FECCandID: "S8FL00166"
    },
    {
        CID: "N00038285",
        CRPName: "Jodey Arrington",
        Party: "R",
        Office: "TX19",
        FECCandID: "H6TX19099"
    },
    {
        CID: "N00036403",
        CRPName: "Dan Newhouse",
        Party: "R",
        Office: "WA04",
        FECCandID: "H4WA04104"
    },
    {
        CID: "N00032022",
        CRPName: "Kristi Noem",
        Party: "R",
        Office: "SD01",
        FECCandID: "H0SD00054"
    },
    {
        CID: "N00021207",
        CRPName: "Rick Nolan",
        Party: "D",
        Office: "MN08",
        FECCandID: "H2MN08111"
    },
    {
        CID: "N00036154",
        CRPName: "Don Norcross",
        Party: "D",
        Office: "NJ01",
        FECCandID: "H4NJ01084"
    },
    {
        CID: "N00001692",
        CRPName: "Eleanor Holmes Norton",
        Party: "D",
        Office: "DC00",
        FECCandID: "H0DC00058"
    },
    {
        CID: "N00032441",
        CRPName: "Richard Nugent",
        Party: "R",
        Office: "FL11",
        FECCandID: "H0FL05139"
    },
    {
        CID: "N00007248",
        CRPName: "Devin Nunes",
        Party: "R",
        Office: "CA22",
        FECCandID: "H8CA20059"
    },
    {
        CID: "N00031006",
        CRPName: "Alan Nunnelee",
        Party: "R",
        Office: "MS01",
        FECCandID: "H0MS01043"
    },
    {
        CID: "N00033540",
        CRPName: "Beto O'Rourke",
        Party: "D",
        Office: "TX16",
        FECCandID: "H2TX16185"
    },
    {
        CID: "N00029285",
        CRPName: "Pete Olson",
        Party: "R",
        Office: "TX22",
        FECCandID: "H8TX22107"
    },
    {
        CID: "N00031958",
        CRPName: "Steven Palazzo",
        Party: "R",
        Office: "MS04",
        FECCandID: "H0MS04120"
    },
    {
        CID: "N00000781",
        CRPName: "Frank Pallone Jr.",
        Party: "D",
        Office: "NJ06",
        FECCandID: "H8NJ03073"
    },
    {
        CID: "N00035691",
        CRPName: "Gary Palmer",
        Party: "R",
        Office: "AL06",
        FECCandID: "H4AL06098"
    },
    {
        CID: "N00000751",
        CRPName: "Bill Pascrell Jr.",
        Party: "D",
        Office: "NJ09",
        FECCandID: "H6NJ08118"
    },
    {
        CID: "N00030836",
        CRPName: "Rand Paul",
        Party: "R",
        Office: "KYS2",
        FECCandID: "S0KY00156"
    },
    {
        CID: "N00029391",
        CRPName: "Erik Paulsen",
        Party: "R",
        Office: "MN03",
        FECCandID: "H8MN03077"
    },
    {
        CID: "N00034639",
        CRPName: "Donald M. Payne Jr.",
        Party: "D",
        Office: "NJ10",
        FECCandID: "H2NJ10154"
    },
    {
        CID: "N00012672",
        CRPName: "Steve Pearce",
        Party: "R",
        Office: "NM02",
        FECCandID: "H2NM02126"
    },
    {
        CID: "N00007360",
        CRPName: "Nancy Pelosi",
        Party: "D",
        Office: "CA12",
        FECCandID: "H8CA05035"
    },
    {
        CID: "N00035516",
        CRPName: "David Perdue",
        Party: "R",
        Office: "GAS1",
        FECCandID: "S4GA11285"
    },
    {
        CID: "N00027510",
        CRPName: "Edwin G. Perlmutter",
        Party: "D",
        Office: "CO07",
        FECCandID: "H6CO07023"
    },
    {
        CID: "N00034120",
        CRPName: "Scott Perry",
        Party: "R",
        Office: "PA04",
        FECCandID: "H2PA04135"
    },
    {
        CID: "N00029277",
        CRPName: "Gary Peters",
        Party: "D",
        Office: "MIS1",
        FECCandID: "S4MI00355"
    },
    {
        CID: "N00033591",
        CRPName: "Scott Peters",
        Party: "D",
        Office: "CA52",
        FECCandID: "H2CA52089"
    },
    {
        CID: "N00004558",
        CRPName: "Collin Peterson",
        Party: "D",
        Office: "MN07",
        FECCandID: "H2MN07014"
    },
    {
        CID: "N00029168",
        CRPName: "Pedro Pierluisi",
        Party: "D",
        Office: "PR00",
        FECCandID: "H8PR00062"
    },
    {
        CID: "N00013817",
        CRPName: "Chellie Pingree",
        Party: "D",
        Office: "ME01",
        FECCandID: "H8ME01120"
    },
    {
        CID: "N00034416",
        CRPName: "Robert Pittenger",
        Party: "R",
        Office: "NC09",
        FECCandID: "H2NC09134"
    },
    {
        CID: "N00038781",
        CRPName: "Lloyd Smucker",
        Party: "R",
        Office: "PA16",
        FECCandID: "H6PA16320"
    },
    {
        CID: "N00035000",
        CRPName: "Stacey Plaskett",
        Party: "D",
        Office: "VI00",
        FECCandID: "H2VI00082"
    },
    {
        CID: "N00033549",
        CRPName: "Mark Pocan",
        Party: "D",
        Office: "WI02",
        FECCandID: "H2WI02124"
    },
    {
        CID: "N00026457",
        CRPName: "Ted Poe",
        Party: "R",
        Office: "TX02",
        FECCandID: "H4TX02108"
    },
    {
        CID: "N00034584",
        CRPName: "Bruce Poliquin",
        Party: "R",
        Office: "ME02",
        FECCandID: "H4ME02234"
    },
    {
        CID: "N00029127",
        CRPName: "Jared Polis",
        Party: "D",
        Office: "CO02",
        FECCandID: "H8CO02137"
    },
    {
        CID: "N00030744",
        CRPName: "Mike Pompeo",
        Party: "R",
        Office: "KS04",
        FECCandID: "H0KS04051"
    },
    {
        CID: "N00003682",
        CRPName: "Rob Portman",
        Party: "R",
        Office: "OHS2",
        FECCandID: "S0OH00133"
    },
    {
        CID: "N00029662",
        CRPName: "Bill Posey",
        Party: "R",
        Office: "FL08",
        FECCandID: "H8FL15107"
    },
    {
        CID: "N00002260",
        CRPName: "David Price",
        Party: "D",
        Office: "NC04",
        FECCandID: "H6NC04037"
    },
    {
        CID: "N00026160",
        CRPName: "Tom Price",
        Party: "R",
        Office: "GA06",
        FECCandID: "H4GA06087"
    },
    {
        CID: "N00030581",
        CRPName: "Mike Quigley",
        Party: "D",
        Office: "IL05",
        FECCandID: "H0IL05096"
    },
    {
        CID: "N00007635",
        CRPName: "Amata Coleman Radewagen",
        Party: "R",
        Office: "AS00",
        FECCandID: "H4AS00036"
    },
    {
        CID: "N00034549",
        CRPName: "Adriano Espaillat",
        Party: "D",
        Office: "NY13",
        FECCandID: "H2NY13096"
    },
    {
        CID: "N00035972",
        CRPName: "John Lee Ratcliffe",
        Party: "R",
        Office: "TX04",
        FECCandID: "H4TX04153"
    },
    {
        CID: "N00000362",
        CRPName: "Jack Reed",
        Party: "D",
        Office: "RIS2",
        FECCandID: "S6RI00163"
    },
    {
        CID: "N00030949",
        CRPName: "Tom Reed",
        Party: "R",
        Office: "NY23",
        FECCandID: "H0NY29054"
    },
    {
        CID: "N00026885",
        CRPName: "Dave Reichert",
        Party: "R",
        Office: "WA08",
        FECCandID: "H4WA08071"
    },
    {
        CID: "N00037161",
        CRPName: "Catherine Cortez Masto",
        Party: "D",
        Office: "NVS2",
        FECCandID: "S6NV00200"
    },
    {
        CID: "N00031127",
        CRPName: "Jim Renacci",
        Party: "R",
        Office: "OH16",
        FECCandID: "H0OH16097"
    },
    {
        CID: "N00039330",
        CRPName: "Mike Gallagher",
        Party: "R",
        Office: "WI08",
        FECCandID: "H6WI08155"
    },
    {
        CID: "N00035927",
        CRPName: "Kathleen Rice",
        Party: "D",
        Office: "NY04",
        FECCandID: "H4NY04075"
    },
    {
        CID: "N00033832",
        CRPName: "Tom Rice",
        Party: "R",
        Office: "SC07",
        FECCandID: "H2SC07066"
    },
    {
        CID: "N00030184",
        CRPName: "Cedric Richmond",
        Party: "D",
        Office: "LA02",
        FECCandID: "H8LA02054"
    },
    {
        CID: "N00031263",
        CRPName: "Scott W. Taylor",
        Party: "D",
        Office: "VA02",
        FECCandID: ""
    },
    {
        CID: "N00029441",
        CRPName: "James E. Risch",
        Party: "R",
        Office: "IDS1",
        FECCandID: "S8ID00092"
    },
    {
        CID: "N00005285",
        CRPName: "Pat Roberts",
        Party: "R",
        Office: "KSS1",
        FECCandID: "S6KS00080"
    },
    {
        CID: "N00030768",
        CRPName: "Martha Roby",
        Party: "R",
        Office: "AL02",
        FECCandID: "H0AL02087"
    },
    {
        CID: "N00028463",
        CRPName: "Phil Roe",
        Party: "R",
        Office: "TN01",
        FECCandID: "H6TN01388"
    },
    {
        CID: "N00003473",
        CRPName: "Hal Rogers",
        Party: "R",
        Office: "KY05",
        FECCandID: "H0KY05015"
    },
    {
        CID: "N00024759",
        CRPName: "Mike D. Rogers",
        Party: "R",
        Office: "AL03",
        FECCandID: "H2AL03032"
    },
    {
        CID: "N00007151",
        CRPName: "Dana Rohrabacher",
        Party: "R",
        Office: "CA48",
        FECCandID: "H8CA42061"
    },
    {
        CID: "N00031741",
        CRPName: "Todd Rokita",
        Party: "R",
        Office: "IN04",
        FECCandID: "H0IN04170"
    },
    {
        CID: "N00029018",
        CRPName: "Tom Rooney",
        Party: "R",
        Office: "FL17",
        FECCandID: "H8FL16022"
    },
    {
        CID: "N00002858",
        CRPName: "Ileana Ros-Lehtinen",
        Party: "R",
        Office: "FL27",
        FECCandID: "H0FL18025"
    },
    {
        CID: "N00004719",
        CRPName: "Peter Roskam",
        Party: "R",
        Office: "IL06",
        FECCandID: "H6IL06117"
    },
    {
        CID: "N00030645",
        CRPName: "Dennis Ross",
        Party: "R",
        Office: "FL15",
        FECCandID: "H0FL12101"
    },
    {
        CID: "N00031253",
        CRPName: "Keith J. Rothfus",
        Party: "R",
        Office: "PA12",
        FECCandID: "H0PA04220"
    },
    {
        CID: "N00035187",
        CRPName: "Mike Rounds",
        Party: "R",
        Office: "SDS2",
        FECCandID: "S4SD00049"
    },
    {
        CID: "N00033527",
        CRPName: "David Rouzer",
        Party: "R",
        Office: "NC07",
        FECCandID: "H2NC07096"
    },
    {
        CID: "N00006671",
        CRPName: "Lucille Roybal-Allard",
        Party: "D",
        Office: "CA40",
        FECCandID: "H2CA33048"
    },
    {
        CID: "N00008264",
        CRPName: "Ed Royce",
        Party: "R",
        Office: "CA39",
        FECCandID: "H6CA39020"
    },
    {
        CID: "N00030612",
        CRPName: "Marco Rubio",
        Party: "R",
        Office: "FLS2",
        FECCandID: "P60006723"
    },
    {
        CID: "N00033510",
        CRPName: "Raul Ruiz",
        Party: "D",
        Office: "CA36",
        FECCandID: "H2CA36439"
    },
    {
        CID: "N00025482",
        CRPName: "Dutch Ruppersberger",
        Party: "D",
        Office: "MD02",
        FECCandID: "H2MD02160"
    },
    {
        CID: "N00004887",
        CRPName: "Bobby L. Rush",
        Party: "D",
        Office: "IL01",
        FECCandID: "H2IL01042"
    },
    {
        CID: "N00036175",
        CRPName: "Steven Russell",
        Party: "R",
        Office: "OK05",
        FECCandID: "H4OK05132"
    },
    {
        CID: "N00004357",
        CRPName: "Paul Ryan",
        Party: "R",
        Office: "WI01",
        FECCandID: "H8WI01024"
    },
    {
        CID: "N00025280",
        CRPName: "Tim Ryan",
        Party: "D",
        Office: "OH13",
        FECCandID: "H2OH17109"
    },
    {
        CID: "N00039293",
        CRPName: "Andy Biggs",
        Party: "R",
        Office: "AZ05",
        FECCandID: "H6AZ05083"
    },
    {
        CID: "N00024870",
        CRPName: "Linda Sanchez",
        Party: "D",
        Office: "CA38",
        FECCandID: "H2CA39078"
    },
    {
        CID: "N00037260",
        CRPName: "Lou Correa",
        Party: "D",
        Office: "CA46",
        FECCandID: "H6CA46116"
    },
    {
        CID: "N00000528",
        CRPName: "Bernie Sanders",
        Party: "D",
        Office: "VTS1",
        FECCandID: "P60007168"
    },
    {
        CID: "N00002424",
        CRPName: "Mark Sanford",
        Party: "R",
        Office: "SC01",
        FECCandID: "H4SC01073"
    },
    {
        CID: "N00027751",
        CRPName: "John Sarbanes",
        Party: "D",
        Office: "MD03",
        FECCandID: "H6MD03292"
    },
    {
        CID: "N00035544",
        CRPName: "Ben Sasse",
        Party: "R",
        Office: "NES2",
        FECCandID: "S4NE00090"
    },
    {
        CID: "N00009660",
        CRPName: "Steve Scalise",
        Party: "R",
        Office: "LA01",
        FECCandID: "H0LA01087"
    },
    {
        CID: "N00004724",
        CRPName: "Jan Schakowsky",
        Party: "D",
        Office: "IL09",
        FECCandID: "H8IL09067"
    },
    {
        CID: "N00028138",
        CRPName: "Brian Schatz",
        Party: "D",
        Office: "HIS1",
        FECCandID: "S4HI00136"
    },
    {
        CID: "N00009585",
        CRPName: "Adam Schiff",
        Party: "D",
        Office: "CA28",
        FECCandID: "H0CA27085"
    },
    {
        CID: "N00029273",
        CRPName: "Aaron Schock",
        Party: "R",
        Office: "IL18",
        FECCandID: "H8IL18043"
    },
    {
        CID: "N00030071",
        CRPName: "Kurt Schrader",
        Party: "D",
        Office: "OR05",
        FECCandID: "H8OR05107"
    },
    {
        CID: "N00026106",
        CRPName: "Debbie Wasserman Schultz",
        Party: "D",
        Office: "FL23",
        FECCandID: "H4FL20023"
    },
    {
        CID: "N00001093",
        CRPName: "Charles E. Schumer",
        Party: "D",
        Office: "NYS2",
        FECCandID: "S8NY00082"
    },
    {
        CID: "N00006460",
        CRPName: "David Schweikert",
        Party: "R",
        Office: "AZ06",
        FECCandID: "H4AZ06045"
    },
    {
        CID: "N00032457",
        CRPName: "Austin Scott",
        Party: "R",
        Office: "GA08",
        FECCandID: "H0GA08099"
    },
    {
        CID: "N00002147",
        CRPName: "Bobby Scott",
        Party: "D",
        Office: "VA03",
        FECCandID: "H6VA01117"
    },
    {
        CID: "N00024871",
        CRPName: "David Scott",
        Party: "D",
        Office: "GA13",
        FECCandID: "H2GA13012"
    },
    {
        CID: "N00031782",
        CRPName: "Tim Scott",
        Party: "R",
        Office: "SCS1",
        FECCandID: "S4SC00240"
    },
    {
        CID: "N00004291",
        CRPName: "F. James Sensenbrenner Jr.",
        Party: "R",
        Office: "WI05",
        FECCandID: "H8WI09050"
    },
    {
        CID: "N00001813",
        CRPName: "Jose E. Serrano",
        Party: "D",
        Office: "NY15",
        FECCandID: "H0NY18065"
    },
    {
        CID: "N00003062",
        CRPName: "Luther Strange",
        Party: "R",
        Office: "ALS1",
        FECCandID: "S6AL00195"
    },
    {
        CID: "N00005681",
        CRPName: "Pete Sessions",
        Party: "R",
        Office: "TX32",
        FECCandID: "H2TX03126"
    },
    {
        CID: "N00030622",
        CRPName: "Terri A. Sewell",
        Party: "D",
        Office: "AL07",
        FECCandID: "H0AL07086"
    },
    {
        CID: "N00024790",
        CRPName: "Jeanne Shaheen",
        Party: "D",
        Office: "NHS2",
        FECCandID: "S0NH00219"
    },
    {
        CID: "N00009920",
        CRPName: "Richard C. Shelby",
        Party: "R",
        Office: "ALS2",
        FECCandID: "S6AL00013"
    },
    {
        CID: "N00006897",
        CRPName: "Brad Sherman",
        Party: "D",
        Office: "CA30",
        FECCandID: "H6CA24113"
    },
    {
        CID: "N00004961",
        CRPName: "John M. Shimkus",
        Party: "R",
        Office: "IL15",
        FECCandID: "H2IL20042"
    },
    {
        CID: "N00013770",
        CRPName: "Bill Shuster",
        Party: "R",
        Office: "PA09",
        FECCandID: "H2PA09035"
    },
    {
        CID: "N00006263",
        CRPName: "Mike Simpson",
        Party: "R",
        Office: "ID02",
        FECCandID: "H8ID02064"
    },
    {
        CID: "N00033983",
        CRPName: "Kyrsten Sinema",
        Party: "D",
        Office: "AZ09",
        FECCandID: "H2AZ09019"
    },
    {
        CID: "N00027523",
        CRPName: "Albio Sires",
        Party: "D",
        Office: "NJ08",
        FECCandID: "H6NJ13191"
    },
    {
        CID: "N00001311",
        CRPName: "Louise M. Slaughter",
        Party: "D",
        Office: "NY25",
        FECCandID: "H6NY03031"
    },
    {
        CID: "N00007833",
        CRPName: "Adam Smith",
        Party: "D",
        Office: "WA09",
        FECCandID: "H6WA09025"
    },
    {
        CID: "N00027623",
        CRPName: "Adrian Smith",
        Party: "R",
        Office: "NE03",
        FECCandID: "H6NE03115"
    },
    {
        CID: "N00009816",
        CRPName: "Chris Smith",
        Party: "R",
        Office: "NJ04",
        FECCandID: "H8NJ04014"
    },
    {
        CID: "N00035282",
        CRPName: "Jason Smith",
        Party: "R",
        Office: "MO08",
        FECCandID: "H4MO08162"
    },
    {
        CID: "N00001811",
        CRPName: "Lamar Smith",
        Party: "R",
        Office: "TX21",
        FECCandID: "H6TX21012"
    },
    {
        CID: "N00029649",
        CRPName: "Jackie Speier",
        Party: "D",
        Office: "CA14",
        FECCandID: "H8CA12171"
    },
    {
        CID: "N00004118",
        CRPName: "Debbie Stabenow",
        Party: "D",
        Office: "MIS2",
        FECCandID: "S8MI00281"
    },
    {
        CID: "N00035523",
        CRPName: "Elise Stefanik",
        Party: "R",
        Office: "NY21",
        FECCandID: "H4NY21079"
    },
    {
        CID: "N00033932",
        CRPName: "Chris Stewart",
        Party: "R",
        Office: "UT02",
        FECCandID: "H2UT02324"
    },
    {
        CID: "N00029574",
        CRPName: "Steve Stivers",
        Party: "R",
        Office: "OH15",
        FECCandID: "H8OH15076"
    },
    {
        CID: "N00037185",
        CRPName: "Jim Banks",
        Party: "R",
        Office: "IN03",
        FECCandID: "H6IN03229"
    },
    {
        CID: "N00035774",
        CRPName: "Dan Sullivan",
        Party: "R",
        Office: "AKS1",
        FECCandID: "S4AK00214"
    },
    {
        CID: "N00033508",
        CRPName: "Eric Swalwell",
        Party: "D",
        Office: "CA15",
        FECCandID: "H2CA15094"
    },
    {
        CID: "N00025881",
        CRPName: "Colleen Hanabusa",
        Party: "D",
        Office: "HIS1",
        FECCandID: "S4HI00144"
    },
    {
        CID: "N00006701",
        CRPName: "Mark Takano",
        Party: "D",
        Office: "CA41",
        FECCandID: "H2CA43245"
    },
    {
        CID: "N00027605",
        CRPName: "Jon Tester",
        Party: "D",
        Office: "MTS1",
        FECCandID: "S6MT00162"
    },
    {
        CID: "N00003288",
        CRPName: "Bennie G. Thompson",
        Party: "D",
        Office: "MS02",
        FECCandID: "H4MS02068"
    },
    {
        CID: "N00029736",
        CRPName: "Glenn Thompson",
        Party: "R",
        Office: "PA05",
        FECCandID: "H8PA05071"
    },
    {
        CID: "N00007419",
        CRPName: "Mike Thompson",
        Party: "D",
        Office: "CA05",
        FECCandID: "H8CA01109"
    },
    {
        CID: "N00006052",
        CRPName: "Mac Thornberry",
        Party: "R",
        Office: "TX13",
        FECCandID: "H4TX13014"
    },
    {
        CID: "N00004572",
        CRPName: "John Thune",
        Party: "R",
        Office: "SDS1",
        FECCandID: "S2SD00068"
    },
    {
        CID: "N00009699",
        CRPName: "Patrick J. Tiberi",
        Party: "R",
        Office: "OH12",
        FECCandID: "H0OH12062"
    },
    {
        CID: "N00035492",
        CRPName: "Thom Tillis",
        Party: "R",
        Office: "NCS1",
        FECCandID: "S4NC00162"
    },
    {
        CID: "N00027509",
        CRPName: "Scott Tipton",
        Party: "R",
        Office: "CO03",
        FECCandID: "H6CO03139"
    },
    {
        CID: "N00030191",
        CRPName: "Dina Titus",
        Party: "D",
        Office: "NV01",
        FECCandID: "H8NV03036"
    },
    {
        CID: "N00030196",
        CRPName: "Paul Tonko",
        Party: "D",
        Office: "NY20",
        FECCandID: "H8NY21203"
    },
    {
        CID: "N00001489",
        CRPName: "Pat Toomey",
        Party: "R",
        Office: "PAS1",
        FECCandID: "S4PA00121"
    },
    {
        CID: "N00036107",
        CRPName: "Norma Torres",
        Party: "D",
        Office: "CA35",
        FECCandID: "H4CA35031"
    },
    {
        CID: "N00035607",
        CRPName: "Dave Trott",
        Party: "R",
        Office: "MI11",
        FECCandID: "H4MI11097"
    },
    {
        CID: "N00029026",
        CRPName: "Niki Tsongas",
        Party: "D",
        Office: "MA03",
        FECCandID: "H8MA05143"
    },
    {
        CID: "N00025175",
        CRPName: "Michael R. Turner",
        Party: "R",
        Office: "OH10",
        FECCandID: "H2OH03067"
    },
    {
        CID: "N00006561",
        CRPName: "Tom Udall",
        Party: "D",
        Office: "NMS2",
        FECCandID: "S8NM00184"
    },
    {
        CID: "N00004133",
        CRPName: "Fred Upton",
        Party: "R",
        Office: "MI06",
        FECCandID: "H6MI04113"
    },
    {
        CID: "N00033367",
        CRPName: "David Valadao",
        Party: "R",
        Office: "CA21",
        FECCandID: "H2CA20094"
    },
    {
        CID: "N00037036",
        CRPName: "Jamie Raskin",
        Party: "D",
        Office: "MD08",
        FECCandID: "H6MD08457"
    },
    {
        CID: "N00007021",
        CRPName: "Juan Vargas",
        Party: "D",
        Office: "CA51",
        FECCandID: "H2CA50026"
    },
    {
        CID: "N00033839",
        CRPName: "Marc Veasey",
        Party: "D",
        Office: "TX33",
        FECCandID: "H2TX33073"
    },
    {
        CID: "N00034349",
        CRPName: "Filemon Vela",
        Party: "D",
        Office: "TX34",
        FECCandID: "H2TX27190"
    },
    {
        CID: "N00001102",
        CRPName: "Nydia M. Velazquez",
        Party: "D",
        Office: "NY07",
        FECCandID: "H2NY00010"
    },
    {
        CID: "N00003813",
        CRPName: "Pete Visclosky",
        Party: "D",
        Office: "IN01",
        FECCandID: "H4IN01012"
    },
    {
        CID: "N00026823",
        CRPName: "John Kennedy",
        Party: "R",
        Office: "LAS2",
        FECCandID: "S4LA00065"
    },
    {
        CID: "N00033106",
        CRPName: "Ann L. Wagner",
        Party: "R",
        Office: "MO02",
        FECCandID: "H2MO02102"
    },
    {
        CID: "N00026368",
        CRPName: "Tim Walberg",
        Party: "R",
        Office: "MI07",
        FECCandID: "H4MI07103"
    },
    {
        CID: "N00007690",
        CRPName: "Greg Walden",
        Party: "R",
        Office: "OR02",
        FECCandID: "H6OR02116"
    },
    {
        CID: "N00035311",
        CRPName: "Mark Walker",
        Party: "R",
        Office: "NC06",
        FECCandID: "H4NC06052"
    },
    {
        CID: "N00031226",
        CRPName: "Jackie Walorski",
        Party: "R",
        Office: "IN02",
        FECCandID: "H0IN02190"
    },
    {
        CID: "N00035391",
        CRPName: "Mimi Walters",
        Party: "R",
        Office: "CA45",
        FECCandID: "H4CA45097"
    },
    {
        CID: "N00027467",
        CRPName: "Timothy J. Walz",
        Party: "D",
        Office: "MN01",
        FECCandID: "H6MN01174"
    },
    {
        CID: "N00002097",
        CRPName: "Mark Warner",
        Party: "D",
        Office: "VAS2",
        FECCandID: "S6VA00093"
    },
    {
        CID: "N00033492",
        CRPName: "Elizabeth Warren",
        Party: "D",
        Office: "MAS1",
        FECCandID: "S2MA00170"
    },
    {
        CID: "N00006690",
        CRPName: "Maxine Waters",
        Party: "D",
        Office: "CA43",
        FECCandID: "H4CA23011"
    },
    {
        CID: "N00033539",
        CRPName: "Randy Weber",
        Party: "R",
        Office: "TX14",
        FECCandID: "H2TX14149"
    },
    {
        CID: "N00033449",
        CRPName: "Val Demings",
        Party: "D",
        Office: "FL10",
        FECCandID: "H2FL08063"
    },
    {
        CID: "N00000515",
        CRPName: "Peter Welch",
        Party: "D",
        Office: "VT01",
        FECCandID: "H6VT00160"
    },
    {
        CID: "N00033310",
        CRPName: "Brad Wenstrup",
        Party: "R",
        Office: "OH02",
        FECCandID: "H2OH02085"
    },
    {
        CID: "N00035527",
        CRPName: "Bruce Westerman",
        Party: "R",
        Office: "AR04",
        FECCandID: "H4AR04048"
    },
    {
        CID: "N00039090",
        CRPName: "Drew Ferguson",
        Party: "R",
        Office: "GA03",
        FECCandID: "H6GA03113"
    },
    {
        CID: "N00027533",
        CRPName: "Sheldon Whitehouse",
        Party: "D",
        Office: "RIS1",
        FECCandID: "S6RI00221"
    },
    {
        CID: "N00038260",
        CRPName: "James Comer",
        Party: "R",
        Office: "KY01",
        FECCandID: "H6KY01110"
    },
    {
        CID: "N00003280",
        CRPName: "Roger Wicker",
        Party: "R",
        Office: "MSS2",
        FECCandID: "S8MS00196"
    },
    {
        CID: "N00030602",
        CRPName: "Roger Williams",
        Party: "R",
        Office: "TX25",
        FECCandID: "H2TX33040"
    },
    {
        CID: "N00030650",
        CRPName: "Frederica Wilson",
        Party: "D",
        Office: "FL24",
        FECCandID: "H0FL17068"
    },
    {
        CID: "N00024809",
        CRPName: "Joe Wilson",
        Party: "R",
        Office: "SC02",
        FECCandID: "H2SC02059"
    },
    {
        CID: "N00029459",
        CRPName: "Rob Wittman",
        Party: "R",
        Office: "VA01",
        FECCandID: "H8VA01147"
    },
    {
        CID: "N00031857",
        CRPName: "Steve Womack",
        Party: "R",
        Office: "AR03",
        FECCandID: "H0AR03055"
    },
    {
        CID: "N00032416",
        CRPName: "Rob Woodall",
        Party: "R",
        Office: "GA07",
        FECCandID: "H0GA07133"
    },
    {
        CID: "N00007724",
        CRPName: "Ron Wyden",
        Party: "D",
        Office: "ORS2",
        FECCandID: "S6OR00110"
    },
    {
        CID: "N00028073",
        CRPName: "John A. Yarmuth",
        Party: "D",
        Office: "KY03",
        FECCandID: "H6KY03124"
    },
    {
        CID: "N00031502",
        CRPName: "Kevin Yoder",
        Party: "R",
        Office: "KS03",
        FECCandID: "H0KS03137"
    },
    {
        CID: "N00033220",
        CRPName: "Ted Yoho",
        Party: "R",
        Office: "FL03",
        FECCandID: "H2FL06109"
    },
    {
        CID: "N00035509",
        CRPName: "David Young",
        Party: "R",
        Office: "IA03",
        FECCandID: "H4IA03115"
    },
    {
        CID: "N00007999",
        CRPName: "Don Young",
        Party: "R",
        Office: "AK01",
        FECCandID: "H6AK00045"
    },
    {
        CID: "N00038429",
        CRPName: "Trey Hollingsworth",
        Party: "R",
        Office: "IN09",
        FECCandID: "H6IN09176"
    },
    {
        CID: "N00029404",
        CRPName: "Lee Zeldin",
        Party: "R",
        Office: "NY01",
        FECCandID: "H8NY01148"
    },
    {
        CID: "N00035616",
        CRPName: "Ryan K. Zinke",
        Party: "R",
        Office: "MT01",
        FECCandID: "H4MT01041"
    }
];
import {opensecretsKey} from "../config";
import {senators} from "./senate"
import {reps} from './house'
export const searchLegisLators = (navigation, address) => async(dispatch) => {
    let house  = false,
        senate = false;

    try {
        house = await
            axios.get(
                `https://content.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorLowerBody&alt=json&key=${googleKey2}`
            );
    } catch (error) {
    }
    try {
        senate = await
            axios.get(
                `https://content.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorUpperBody&alt=json&key=${googleKey2}`
            );
    } catch (error) {
    }
    if (!house || !senate) {
        dispatch({type: FETCHING_LEGISLATOR, status: false});
        alert("Invalid address");
        return false;
    }

    dispatch({type: REQUEST_HOUSE_LEGISLATOR, data: house.data.officials});
    dispatch({type: REQUEST_SENATE_LEGISLATOR, data: senate.data.officials});
    dispatch({type: FETCHING_LEGISLATOR, status: false});
    if (house.data || senate.data) {
        navigation.dispatch(
            NavigationActions.navigate({
                routeName: "Legislators"
            })
        );
    }
};

export const fetchingData = status => async(dispatch) => {
    dispatch({type: FETCHING_LEGISLATOR, status});
};

const findLegislatorId = (name, type)=> {
    let obj, url;
    let data = []
    if (type == 'senate') {
        data = senators
    } else {
        data = reps
    }
    for (let i = 0; i < data.length; i++) {
        let {first_name, last_name} = data[i]
        if (name.indexOf(first_name) !== -1 && name.indexOf(last_name) !== -1) {
            obj = data[i]
            break;
        }
    }
    return obj
}


export const searchContributors = (name, type) => async(dispatch) => {
    name = name.replace(/[.,]/g, "").split(" ");

    let obj, url;
    for (let j = 0; j < legs.length; j++) {
        let matchedCount = 0;
        for (let i = 0; i < name.length; i++) {
            var regex = new RegExp(name[i], "g");
            if (legs[j]["CRPName"].match(regex)) {
                matchedCount = matchedCount + 1;
            }
        }
        if (matchedCount >= 2) {
            obj = legs[j];
            break;
        }
    }
    if (type == "industries") {
        url = `http://www.opensecrets.org/api/?method=candIndustry&cid=${obj.CID}&output=json&apikey=${opensecretsKey}`;
    } else {
        url = `http://www.opensecrets.org/api/?method=candContrib&cid=${obj.CID}&output=json&apikey=${opensecretsKey}`;
    }
    try {
        let response = await axios.get(url);
        if (response.data) {
            if (type == "industries") {
                return response.data.response.industries.industry;
            } else {
                return response.data.response.contributors.contributor;
            }
        }
    } catch (error) {
    }
};

/***
 * @name fetchRecentVotes
 * @desc fetching recent votes for representatives
 */

export const fetchRecentVotes = (memberName, type) => async(dispatch)=> {
    let response = [];
    let memberId = findLegislatorId(memberName, type)

    try {
        response = await   axios({
            url: `https://api.propublica.org/congress/v1/members/${memberId.id}/votes.json`,
            method: 'get',
            headers: {
                'X-API-Key': prorepublicaKey
            }
        })
        return response.data.results[0]
    }
    catch (error) {

    }
}
/***
 * @name fetchRecentBills
 * @desc fetching recent votes for representatives
 */
export const fetchRecentBills = (memberName, type)=>async(dispatch)=> {
    let response = [];
    let memberId = findLegislatorId(memberName, type)

    try {
        response = await   axios({
            url: `https://api.propublica.org/congress/v1/members/${memberId.id}/bills/introduced.json`,
            method: 'get',
            headers: {
                'X-API-Key': prorepublicaKey
            }
        })
        return response.data.results[0]
    }
    catch (error) {

    }
}
