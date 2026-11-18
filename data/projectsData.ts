export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'living' | 'kitchen' | 'entrance' | 'kids' | 'bedroom';
  image: string;
  width: number;
  height: number;
  description: string;
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-01',
    title: "Living Room Overview & Seating",
    category: "Living Room",
    categorySlug: 'living',
    image: '/images/our-projects/our-projects_01_1206x1359.jpg',
    width: 1206,
    height: 1359,
    description: "Thoughtful living room execution featuring minimalist wall panelling, ambient warm cove lighting, and tailored comfort seating.",
    highlights: ["Bespoke Wall Fluting", "Ambient Cove Lighting", "Minimalist Palette"]
  },
  {
    id: 'proj-02',
    title: "Living Room Ambient Lighting & Sofa",
    category: "Living Room",
    categorySlug: 'living',
    image: '/images/our-projects/our-projects_02_1206x1354.jpg',
    width: 1206,
    height: 1354,
    description: "Thoughtful living room execution featuring minimalist wall panelling, ambient warm cove lighting, and tailored comfort seating.",
    highlights: ["Bespoke Wall Fluting", "Ambient Cove Lighting", "Minimalist Palette"]
  },
  {
    id: 'proj-03',
    title: "Detailed Wall Execution & Finishes",
    category: "Living Room Detailing",
    categorySlug: 'living',
    image: '/images/our-projects/our-projects_03_1157x1269.jpg',
    width: 1157,
    height: 1269,
    description: "Thoughtful living room execution featuring minimalist wall panelling, ambient warm cove lighting, and tailored comfort seating.",
    highlights: ["Bespoke Wall Fluting", "Ambient Cove Lighting", "Minimalist Palette"]
  },
  {
    id: 'proj-04',
    title: "Bespoke Wall Panelling & Accents",
    category: "Living Room Detailing",
    categorySlug: 'living',
    image: '/images/our-projects/our-projects_04_1180x1285.jpg',
    width: 1180,
    height: 1285,
    description: "Thoughtful living room execution featuring minimalist wall panelling, ambient warm cove lighting, and tailored comfort seating.",
    highlights: ["Bespoke Wall Fluting", "Ambient Cove Lighting", "Minimalist Palette"]
  },
  {
    id: 'proj-05',
    title: "Dining Area & Open Kitchen Flow",
    category: "Dining & Kitchen",
    categorySlug: 'kitchen',
    image: '/images/our-projects/our-projects_05_1206x1394.jpg',
    width: 1206,
    height: 1394,
    description: "Ergonomic dining and modular kitchen setup crafted with moisture-resistant materials, deep storage, and elegant pendant illumination.",
    highlights: ["Moisture-Proof Marine Ply", "Hettich Soft-Close Hardware", "Easy-Clean Backsplash"]
  },
  {
    id: 'proj-06',
    title: "Modern Shelving & Countertop Layout",
    category: "Dining & Kitchen",
    categorySlug: 'kitchen',
    image: '/images/our-projects/our-projects_06_1206x1389.jpg',
    width: 1206,
    height: 1389,
    description: "Ergonomic dining and modular kitchen setup crafted with moisture-resistant materials, deep storage, and elegant pendant illumination.",
    highlights: ["Moisture-Proof Marine Ply", "Hettich Soft-Close Hardware", "Easy-Clean Backsplash"]
  },
  {
    id: 'proj-07',
    title: "Dining Table Setting & Chandelier",
    category: "Dining Area",
    categorySlug: 'kitchen',
    image: '/images/our-projects/our-projects_07_1122x1392.jpg',
    width: 1122,
    height: 1392,
    description: "Ergonomic dining and modular kitchen setup crafted with moisture-resistant materials, deep storage, and elegant pendant illumination.",
    highlights: ["Moisture-Proof Marine Ply", "Hettich Soft-Close Hardware", "Easy-Clean Backsplash"]
  },
  {
    id: 'proj-08',
    title: "Custom Dining Wall & Cabinetry",
    category: "Dining Area",
    categorySlug: 'kitchen',
    image: '/images/our-projects/our-projects_08_1166x1432.jpg',
    width: 1166,
    height: 1432,
    description: "Ergonomic dining and modular kitchen setup crafted with moisture-resistant materials, deep storage, and elegant pendant illumination.",
    highlights: ["Moisture-Proof Marine Ply", "Hettich Soft-Close Hardware", "Easy-Clean Backsplash"]
  },
  {
    id: 'proj-09',
    title: "Entrance Foyer & Main Door Design",
    category: "Main Door & Entrance",
    categorySlug: 'entrance',
    image: '/images/our-projects/our-projects_09_1206x1450.jpg',
    width: 1206,
    height: 1450,
    description: "Inviting entrance foyer design creating an impactful first impression with tailored shoe console and textured feature panelling.",
    highlights: ["Concealed Shoe Storage", "Foyer Accent Mirror", "Warm Entry Lighting"]
  },
  {
    id: 'proj-10',
    title: "Foyer Console & Accent Panelling",
    category: "Main Door & Entrance",
    categorySlug: 'entrance',
    image: '/images/our-projects/our-projects_10_1206x1445.jpg',
    width: 1206,
    height: 1445,
    description: "Inviting entrance foyer design creating an impactful first impression with tailored shoe console and textured feature panelling.",
    highlights: ["Concealed Shoe Storage", "Foyer Accent Mirror", "Warm Entry Lighting"]
  },
  {
    id: 'proj-11',
    title: "Kids Study Desk & Storage Unit",
    category: "Kids Room",
    categorySlug: 'kids',
    image: '/images/our-projects/our-projects_11_1078x1510.jpg',
    width: 1078,
    height: 1510,
    description: "Playful and secure kids bedroom environment with rounded edges, built-in study nook, and ample organized book/toy shelving.",
    highlights: ["Child-Safe Rounded Finishes", "Integrated Study Desk", "Durable Laminate Surfaces"]
  },
  {
    id: 'proj-12',
    title: "Kids Bedroom Wall Colors & Shelving",
    category: "Kids Room",
    categorySlug: 'kids',
    image: '/images/our-projects/our-projects_12_1172x1627.jpg',
    width: 1172,
    height: 1627,
    description: "Playful and secure kids bedroom environment with rounded edges, built-in study nook, and ample organized book/toy shelving.",
    highlights: ["Child-Safe Rounded Finishes", "Integrated Study Desk", "Durable Laminate Surfaces"]
  },
  {
    id: 'proj-13',
    title: "Playful Built-in Wardrobe & Bunk Area",
    category: "Kids Room",
    categorySlug: 'kids',
    image: '/images/our-projects/our-projects_13_1206x1689.jpg',
    width: 1206,
    height: 1689,
    description: "Playful and secure kids bedroom environment with rounded edges, built-in study nook, and ample organized book/toy shelving.",
    highlights: ["Child-Safe Rounded Finishes", "Integrated Study Desk", "Durable Laminate Surfaces"]
  },
  {
    id: 'proj-14',
    title: "Safety-Designed Furniture Details",
    category: "Kids Room",
    categorySlug: 'kids',
    image: '/images/our-projects/our-projects_14_1160x1610.jpg',
    width: 1160,
    height: 1610,
    description: "Playful and secure kids bedroom environment with rounded edges, built-in study nook, and ample organized book/toy shelving.",
    highlights: ["Child-Safe Rounded Finishes", "Integrated Study Desk", "Durable Laminate Surfaces"]
  },
  {
    id: 'proj-15',
    title: "Master Bed & Natural Lighting Setting",
    category: "Master Bedroom",
    categorySlug: 'bedroom',
    image: '/images/our-projects/our-projects_15_1203x1644.jpg',
    width: 1203,
    height: 1644,
    description: "Serene master bedroom sanctuary blending soft acoustic textures, floor-to-ceiling wardrobe joinery, and maximizing natural Kolkata daylight.",
    highlights: ["Floor-to-Ceiling Wardrobes", "Cushioned Headboard Panel", "Bedside Task Lighting"]
  },
  {
    id: 'proj-16',
    title: "Headboard Wall Treatment & Nightstand",
    category: "Master Bedroom",
    categorySlug: 'bedroom',
    image: '/images/our-projects/our-projects_16_946x1293.jpg',
    width: 946,
    height: 1293,
    description: "Serene master bedroom sanctuary blending soft acoustic textures, floor-to-ceiling wardrobe joinery, and maximizing natural Kolkata daylight.",
    highlights: ["Floor-to-Ceiling Wardrobes", "Cushioned Headboard Panel", "Bedside Task Lighting"]
  },
  {
    id: 'proj-17',
    title: "Full-Length Wardrobe & Dressing Area",
    category: "Master Bedroom",
    categorySlug: 'bedroom',
    image: '/images/our-projects/our-projects_17_1148x1569.jpg',
    width: 1148,
    height: 1569,
    description: "Serene master bedroom sanctuary blending soft acoustic textures, floor-to-ceiling wardrobe joinery, and maximizing natural Kolkata daylight.",
    highlights: ["Floor-to-Ceiling Wardrobes", "Cushioned Headboard Panel", "Bedside Task Lighting"]
  },
  {
    id: 'proj-18',
    title: "Ambient Accent Lighting & False Ceiling",
    category: "Master Bedroom",
    categorySlug: 'bedroom',
    image: '/images/our-projects/our-projects_18_1159x1584.jpg',
    width: 1159,
    height: 1584,
    description: "Serene master bedroom sanctuary blending soft acoustic textures, floor-to-ceiling wardrobe joinery, and maximizing natural Kolkata daylight.",
    highlights: ["Floor-to-Ceiling Wardrobes", "Cushioned Headboard Panel", "Bedside Task Lighting"]
  },
  {
    id: 'proj-19',
    title: "Minimalist Bedroom Corner & Styling",
    category: "Master Bedroom",
    categorySlug: 'bedroom',
    image: '/images/our-projects/our-projects_19_1206x1649.jpg',
    width: 1206,
    height: 1649,
    description: "Serene master bedroom sanctuary blending soft acoustic textures, floor-to-ceiling wardrobe joinery, and maximizing natural Kolkata daylight.",
    highlights: ["Floor-to-Ceiling Wardrobes", "Cushioned Headboard Panel", "Bedside Task Lighting"]
  },
  {
    id: 'proj-20',
    title: "Cozy Master Suite Comfort View",
    category: "Master Bedroom",
    categorySlug: 'bedroom',
    image: '/images/our-projects/our-projects_20_1192x1630.jpg',
    width: 1192,
    height: 1630,
    description: "Serene master bedroom sanctuary blending soft acoustic textures, floor-to-ceiling wardrobe joinery, and maximizing natural Kolkata daylight.",
    highlights: ["Floor-to-Ceiling Wardrobes", "Cushioned Headboard Panel", "Bedside Task Lighting"]
  },
];
