export const GOVERNORATES = {
  "Tunis": { lat: 36.8065, lon: 10.1815 },
  "Ariana": { lat: 36.8625, lon: 10.1956 },
  "Ben Arous": { lat: 36.7531, lon: 10.2188 },
  "La Manouba": { lat: 36.8081, lon: 10.0972 },
  "Nabeul": { lat: 36.4561, lon: 10.7376 },
  "Bizerte": { lat: 37.2744, lon: 9.8739 },
  "Zaghouan": { lat: 36.4011, lon: 10.1423 },
  "Béja": { lat: 36.7256, lon: 9.1817 },
  "Jendouba": { lat: 36.5011, lon: 8.7802 },
  "Le Kef": { lat: 36.1822, lon: 8.7149 },
  "Siliana": { lat: 36.0849, lon: 9.3708 },
  "Sousse": { lat: 35.8256, lon: 10.6369 },
  "Monastir": { lat: 35.7780, lon: 10.8262 },
  "Mahdia": { lat: 35.5047, lon: 11.0622 },
  "Sfax": { lat: 34.7406, lon: 10.7603 },
  "Kairouan": { lat: 35.6781, lon: 10.0963 },
  "Kasserine": { lat: 35.1676, lon: 8.8365 },
  "Sidi Bouzid": { lat: 35.0382, lon: 9.4849 },
  "Gabès": { lat: 33.8815, lon: 10.0982 },
  "Médenine": { lat: 33.3550, lon: 10.5055 },
  "Tataouine": { lat: 32.9297, lon: 10.4518 },
  "Gafsa": { lat: 34.4250, lon: 8.7842 },
  "Tozeur": { lat: 33.9197, lon: 8.1335 },
  "Kébili": { lat: 33.7044, lon: 8.9690 }
};

export const AGENCIES = {
  "Tunis": { lat: 36.8065, lon: 10.1815 },
  "Nabeul": { lat: 36.4561, lon: 10.7376 },
  "Bizerte": { lat: 37.2744, lon: 9.8739 },
  "Sousse": { lat: 35.8256, lon: 10.6369 }
};

export const CITIES_TO_GOV: Record<string, string> = {
  "tunis": "Tunis", "le bardo": "Tunis", "bardo": "Tunis", "la goulette": "Tunis", "goulette": "Tunis", "le kram": "Tunis", "kram": "Tunis", "la marsa": "Tunis", "marsa": "Tunis", "carthage": "Tunis", "sidi bou saïd": "Tunis", "sidi hassine": "Tunis",
  "ariana": "Ariana", "la soukra": "Ariana", "raoued": "Ariana", "kalaat el-andalous": "Ariana", "sidi thabet": "Ariana", "ettadhamen": "Ariana", "mnihla": "Ariana",
  "ben arous": "Ben Arous", "el mourouj": "Ben Arous", "hammam lif": "Ben Arous", "hammam chott": "Ben Arous", "bou mhel el-bassatine": "Ben Arous", "ezzahra": "Ben Arous", "radès": "Ben Arous", "mégrine": "Ben Arous", "mohamedia": "Ben Arous", "fouchana": "Ben Arous", "mornag": "Ben Arous", "khalidia": "Ben Arous",
  "la manouba": "La Manouba", "manouba": "La Manouba", "denden": "La Manouba", "douar hicher": "La Manouba", "oued ellil": "La Manouba", "mornaguia": "La Manouba", "borj el amri": "La Manouba", "tebourba": "La Manouba", "el battan": "La Manouba", "jedeida": "La Manouba", "el fejja": "La Manouba",
  "nabeul": "Nabeul", "dar chaâbane el fehri": "Nabeul", "béni khiar": "Nabeul", "maâmoura": "Nabeul", "somaâ": "Nabeul", "korba": "Nabeul", "tazarka": "Nabeul", "menzel temime": "Nabeul", "menzel horr": "Nabeul", "el mida": "Nabeul", "kélibia": "Nabeul", "azmour": "Nabeul", "hammam ghezèze": "Nabeul", "el haouaria": "Nabeul", "takilsa": "Nabeul", "soliman": "Nabeul", "korbous": "Nabeul", "menzel bouzelfa": "Nabeul", "béni khalled": "Nabeul", "zaouiet djedidi": "Nabeul", "grombalia": "Nabeul", "bou argoub": "Nabeul", "hammamet": "Nabeul",
  "bizerte": "Bizerte", "menzel bourguiba": "Bizerte", "mateur": "Bizerte", "ras jebel": "Bizerte", "el alia": "Bizerte", "ghar el melh": "Bizerte", "menzel abderrahmane": "Bizerte", "menzel jemil": "Bizerte", "metline": "Bizerte", "raf raf": "Bizerte", "sejnane": "Bizerte", "joumine": "Bizerte", "ghazala": "Bizerte", "utique": "Bizerte", "tinja": "Bizerte", "aousja": "Bizerte",
  "zaghouan": "Zaghouan", "zriba": "Zaghouan", "el fahs": "Zaghouan", "nadhour": "Zaghouan", "bir mcherga": "Zaghouan", "saouaf": "Zaghouan", "jebel oust": "Zaghouan",
  "béja": "Béja", "el ksar": "Béja", "medjez el-bab": "Béja", "testour": "Béja", "teboursouk": "Béja", "goubellat": "Béja", "amdoun": "Béja", "nefza": "Béja", "thibar": "Béja", "sidi ismaïl": "Béja",
  "jendouba": "Jendouba", "bou salem": "Jendouba", "tabarka": "Jendouba", "aïn draham": "Jendouba", "fernana": "Jendouba", "ghardimaou": "Jendouba", "oued mliz": "Jendouba", "balta-bou aouane": "Jendouba", "beni mtir": "Jendouba", "el kalâa-maâden-fersane": "Jendouba",
  "le kef": "Le Kef", "kef": "Le Kef", "dahmani": "Le Kef", "tajerouine": "Le Kef", "jérissa": "Le Kef", "sakiet sidi youssef": "Le Kef", "kalaat senan": "Le Kef", "el ksour": "Le Kef", "nebeur": "Le Kef", "touiref": "Le Kef", "menzel salem": "Le Kef", "kalaat khasba": "Le Kef", "ebba ksour": "Le Kef",
  "siliana": "Siliana", "bou arada": "Siliana", "gaâfour": "Siliana", "makthar": "Siliana", "rouhia": "Siliana", "bargou": "Siliana", "el krib": "Siliana", "laroussa": "Siliana", "bourouis": "Siliana", "kesra": "Siliana", "sidi morched": "Siliana",
  "sousse": "Sousse", "hammam sousse": "Sousse", "akouda": "Sousse", "kalâa kebira": "Sousse", "kalâa seghira": "Sousse", "msaken": "Sousse", "enfidha": "Sousse", "bouficha": "Sousse", "hergla": "Sousse", "sidi bou ali": "Sousse", "kondar": "Sousse", "sidi el hani": "Sousse", "messadine": "Sousse", "zawiet sousse": "Sousse", "ksibet thrayet": "Sousse", "el gounna": "Sousse", "el khalij": "Sousse",
  "monastir": "Monastir", "khniss": "Monastir", "ouardanine": "Monastir", "sahline": "Monastir", "zarmdine": "Monastir", "béni hassen": "Monastir", "jemmal": "Monastir", "menzel kamel": "Monastir", "sayada": "Monastir", "lamta": "Monastir", "bouhjar": "Monastir", "ksar hellal": "Monastir", "ksibet el-médiouni": "Monastir", "bennane-bodher": "Monastir", "téboulba": "Monastir", "bekalta": "Monastir", "moknine": "Monastir", "touza": "Monastir", "menzel hayet": "Monastir", "menzel harb": "Monastir", "menzel farsi": "Monastir", "amiret hajjaj": "Monastir", "amiret touazra": "Monastir", "amiret el fhoul": "Monastir", "cherahil": "Monastir", "el masdoum": "Monastir",
  "mahdia": "Mahdia", "rejiche": "Mahdia", "ksour essef": "Mahdia", "chebba": "Mahdia", "melloulèche": "Mahdia", "el jem": "Mahdia", "bou merdes": "Mahdia", "chorbane": "Mahdia", "hebira": "Mahdia", "sidi alouane": "Mahdia", "kerker": "Mahdia", "bradaa": "Mahdia", "essouassi": "Mahdia", "ouled chamekh": "Mahdia", "tlelsa": "Mahdia", "sidi zid": "Mahdia", "zelba": "Mahdia", "hekaima": "Mahdia",
  "sfax": "Sfax", "sakiet ezzit": "Sfax", "sakiet eddaïer": "Sfax", "chihia": "Sfax", "gremda": "Sfax", "el ain": "Sfax", "thyna": "Sfax", "agareb": "Sfax", "jebiniana": "Sfax", "el hencha": "Sfax", "mahrès": "Sfax", "skhira": "Sfax", "bir ali ben khalifa": "Sfax", "kerkennah": "Sfax", "el amra": "Sfax", "el hazeg": "Sfax", "nadhour-sidi salah": "Sfax", "awabed khazanet": "Sfax",
  "kairouan": "Kairouan", "chebika": "Kairouan", "sbikha": "Kairouan", "oueslatia": "Kairouan", "haffouz": "Kairouan", "hajeb el ayoun": "Kairouan", "nasrallah": "Kairouan", "bou hajla": "Kairouan", "el ala": "Kairouan", "menzel mehiri": "Kairouan", "echrarda": "Kairouan", "ain djeloula": "Kairouan", "sisseb el-drea": "Kairouan",
  "kasserine": "Kasserine", "sbeïtla": "Kasserine", "thala": "Kasserine", "fériana": "Kasserine", "thélepte": "Kasserine", "sbiba": "Kasserine", "jedelienne": "Kasserine", "magel bel abbès": "Kasserine", "ennour": "Kasserine", "ezzouhour": "Kasserine", "hassi el ferid": "Kasserine", "el ayoun": "Kasserine", "foussana": "Kasserine", "haïdra": "Kasserine", "rakba": "Kasserine",
  "sidi bouzid": "Sidi Bouzid", "jilma": "Sidi Bouzid", "cebbalat ouled asker": "Sidi Bouzid", "bir el hafey": "Sidi Bouzid", "sidi ali ben aoun": "Sidi Bouzid", "menzel bouzaiane": "Sidi Bouzid", "meknassy": "Sidi Bouzid", "souk jedid": "Sidi Bouzid", "regueb": "Sidi Bouzid", "ouled haffouz": "Sidi Bouzid", "mezzouna": "Sidi Bouzid", "saïda": "Sidi Bouzid", "faid banouach": "Sidi Bouzid", "el hichria": "Sidi Bouzid",
  "gabès": "Gabès", "chenini nahal": "Gabès", "ghannouch": "Gabès", "métouia": "Gabès", "oudref": "Gabès", "el hamma": "Gabès", "matmata": "Gabès", "nouvelle matmata": "Gabès", "mareth": "Gabès", "zarat": "Gabès", "dekhilet toujane": "Gabès", "habib thameur-bou chemma": "Gabès",
  "médenine": "Médenine", "ben guerdane": "Médenine", "zarzis": "Médenine", "houmt souk": "Médenine", "midoun": "Médenine", "ajim": "Médenine", "béni khedache": "Médenine", "sidi makhlouf": "Médenine", "zarzis nord": "Médenine", "bougrara": "Médenine",
  "tataouine": "Tataouine", "ghomrassen": "Tataouine", "remada": "Tataouine", "bir lahmar": "Tataouine", "dehiba": "Tataouine", "smâr": "Tataouine", "tataouine sud": "Tataouine",
  "gafsa": "Gafsa", "moularès": "Gafsa", "redeyef": "Gafsa", "métlaoui": "Gafsa", "mdhilla": "Gafsa", "el guettar": "Gafsa", "belkhir": "Gafsa", "sened": "Gafsa", "sidi aïch": "Gafsa", "lalla": "Gafsa", "zanouch": "Gafsa",
  "tozeur": "Tozeur", "nefta": "Tozeur", "degache": "Tozeur", "hamet jerid": "Tozeur", "tamaghza": "Tozeur", "hazoua": "Tozeur",
  "kébili": "Kébili", "douz": "Kébili", "souk lahad": "Kébili", "faouar": "Kébili", "jemna": "Kébili", "el golaa": "Kébili", "bechri-fatnassa": "Kébili"
};

// Haversine formula to calculate distance between two coordinates in km
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export interface Lead {
  id: string;
  nomPrenom: string;
  typeInstallation: string;
  factureSteg: string;
  refSteg: string;
  plateforme: string;
  email: string;
  telephone: string;
  gouvernoratVille: string;
  
  // Calculated fields
  score: number;
  agence: string;
  gouvernorat: string | null;
  distance: number | null;
  refStegValid: "MT" | "BT" | "Invalide";
}

export function processLead(rawLead: any): Lead {
  let score = 0;
  
  // 1. Type d'installation
  const type = (rawLead.typeInstallation || rawLead.Type || "").toLowerCase();
  if (type.includes("industriel")) score += 25;
  else if (type.includes("agricole")) score += 20;
  else if (type.includes("résidentiel") || type.includes("residentiel")) score += 20;

  // 2. Facture STEG
  const factureStr = (rawLead.factureSteg || rawLead["montant_de_la_facture_steg_(2_mois)"] || "").toLowerCase();
  const factureMatch = factureStr.match(/\d+/);
  if (factureMatch) {
    const facture = parseInt(factureMatch[0], 10);
    if (facture >= 300) score += 15;
    else if (facture >= 200) score += 10;
    else if (facture >= 100) score += 8;
  }

  // 3. Référence STEG
  let refSteg = (rawLead.refSteg || rawLead["Référence STEG"] || "").toString().trim();
  
  // Nettoyage de la référence (suppression des espaces, ex: "42580 496 0" -> "425804960")
  refSteg = refSteg.replace(/\s+/g, '');

  let refStegValid: "MT" | "BT" | "Invalide" = "Invalide";
  if (/^\d{6}$/.test(refSteg)) {
    refStegValid = "MT";
    score += 20;
  } else if (/^[a-zA-Z0-9]{9}$/.test(refSteg)) {
    refStegValid = "BT";
    score += 20;
  }

  // 4. Contact
  const email = (rawLead.email || rawLead.Email || "").trim();
  let phone = (rawLead.telephone || rawLead.Téléphone || "").toString().trim();
  
  // Nettoyage du numéro de téléphone (ex: 'p:+21655454585' -> '55454585')
  phone = phone.replace(/^'/, '').replace(/^p:\s*/i, '').replace(/^(\+216|00216)\s*/, '').trim();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = phone.length >= 8; // Basic validation
  if (emailValid && phoneValid) {
    score += 10;
  }

  // 5. Distance & Routing
  const locationRaw = (rawLead.gouvernoratVille || rawLead.Gouvernorat || "").toLowerCase().trim();
  
  // Try to find governorate
  let govName: string | null = null;
  
  // Direct match with governorate list
  const govKeys = Object.keys(GOVERNORATES).map(k => k.toLowerCase());
  if (govKeys.includes(locationRaw)) {
    govName = Object.keys(GOVERNORATES).find(k => k.toLowerCase() === locationRaw) || null;
  } else {
    // Try to match city
    for (const [city, gov] of Object.entries(CITIES_TO_GOV)) {
      if (locationRaw.includes(city)) {
        govName = gov;
        break;
      }
    }
  }

  let agence = "Hors Tunisie";
  let distance = null;

  if (govName && GOVERNORATES[govName as keyof typeof GOVERNORATES]) {
    const govCoords = GOVERNORATES[govName as keyof typeof GOVERNORATES];
    
    // Find closest agency
    let minDistance = Infinity;
    let closestAgency = "";
    
    for (const [agencyName, agencyCoords] of Object.entries(AGENCIES)) {
      const d = calculateDistance(govCoords.lat, govCoords.lon, agencyCoords.lat, agencyCoords.lon);
      if (d < minDistance) {
        minDistance = d;
        closestAgency = agencyName;
      }
    }
    
    agence = closestAgency;
    distance = minDistance;
    
    if (distance < 20) score += 30;
    else if (distance < 50) score += 20;
    else if (distance < 100) score += 10;
    else score += 5;
  } else {
    // Invalid city / Not in Tunisia
    score = 0;
  }

  return {
    id: Math.random().toString(36).substring(2, 9),
    nomPrenom: rawLead.nomPrenom || rawLead["Nom & Prénom"] || "",
    typeInstallation: rawLead.typeInstallation || rawLead.Type || "",
    factureSteg: rawLead.factureSteg || rawLead["montant_de_la_facture_steg_(2_mois)"] || "",
    refSteg: refSteg,
    plateforme: rawLead.plateforme || rawLead.Plateforme || "",
    email: email,
    telephone: phone,
    gouvernoratVille: rawLead.gouvernoratVille || rawLead.Gouvernorat || "",
    score: Math.min(score, 100),
    agence,
    gouvernorat: govName,
    distance,
    refStegValid
  };
}
