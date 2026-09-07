import type { Project } from "@/types/project";

/**
 * Static project data. Kept as a plain typed array — deliberately with no
 * framework- or presentation-specific code — so this file can later be
 * replaced by calls to a headless CMS (Sanity, Contentful, Strapi, etc.)
 * without touching any component. See src/lib/projects.ts for the only
 * functions pages are allowed to import from.
 *
 * Facts not supplied by the client (location, year, area) are marked
 * "a confirmar" rather than invented, per project brief.
 */
export const projects: Project[] = [
  {
    slug: "casa-vertice",
    title: "Casa Vértice",
    category: "residencial",
    location: "Localização a confirmar",
    year: "Ano a confirmar",
    area: "Área a confirmar",
    excerpt:
      "Cozinha, bar e jantar integrados em um projeto de linhas marcantes, marcenaria sofisticada e luz cênica.",
    description: [
      "Um projeto contemporâneo que combina linhas marcantes, marcenaria sofisticada, madeira e iluminação cênica.",
      "A integração entre cozinha, bar e jantar cria uma atmosfera elegante e funcional, pensada para receber e valorizar a experiência de estar em casa.",
    ],
    coverImage: {
      src: "/images/projects/casa-vertice/1.jpg",
      width: 1600,
      height: 900,
      alt: "Cozinha com ilha central, banquetas e iluminação cênica em fita de LED",
    },
    images: [
      {
        src: "/images/projects/casa-vertice/2.jpg",
        width: 1099,
        height: 1431,
        alt: "Detalhe da ilha da cozinha com cooktop, cuba e marcenaria em madeira",
      },
      {
        src: "/images/projects/casa-vertice/3.jpg",
        width: 1600,
        height: 900,
        alt: "Bar integrado com adega e mesa de jantar redonda sob luminária pendente",
      },
    ],
    drawings: [],
    featured: true,
    order: 1,
  },
  {
    slug: "casa-aurea",
    title: "Casa Áurea",
    category: "residencial",
    location: "Localização a confirmar",
    year: "Ano a confirmar",
    area: "Área a confirmar",
    excerpt:
      "Uma casa que integra ambientes com madeira natural, tons neutros e iluminação acolhedora.",
    description: [
      "A Casa Áurea valoriza a integração entre os ambientes, unindo madeira natural, tons neutros e iluminação acolhedora.",
      "O resultado é um espaço elegante e atemporal, pensado para proporcionar conforto, conexão e momentos de convivência.",
    ],
    coverImage: {
      src: "/images/projects/casa-aurea/1.jpg",
      width: 1085,
      height: 1450,
      alt: "Sala de jantar integrada à cozinha e à escada, com lustre de cristal",
    },
    images: [
      {
        src: "/images/projects/casa-aurea/3.jpg",
        width: 1086,
        height: 1449,
        alt: "Mesa de jantar em madeira maciça sob lustre de cristal, com vista para o jardim",
      },
      {
        src: "/images/projects/casa-aurea/2.jpg",
        width: 940,
        height: 1450,
        alt: "Sala de estar com painel de madeira, TV e tapete natural",
      },
    ],
    drawings: [],
    featured: true,
    order: 2,
  },
  {
    slug: "cozinha-cacau",
    title: "Cozinha Cacau",
    category: "interiores",
    location: "Localização a confirmar",
    year: "Ano a confirmar",
    area: "Área a confirmar",
    excerpt:
      "Uma cozinha inspirada nos tons do cacau, onde madeira e preto criam um ambiente acolhedor e sofisticado.",
    description: [
      "Inspirada nos tons e texturas do cacau, a cozinha combina madeira e preto para criar um ambiente acolhedor, sofisticado e contemporâneo.",
      "A iluminação natural e os detalhes em luz indireta valorizam os materiais, tornando o espaço funcional e convidativo para momentos de convivência.",
    ],
    coverImage: {
      src: "/images/projects/cozinha-cacau/3.jpg",
      width: 1448,
      height: 1086,
      alt: "Cozinha planejada em madeira e preto, com eletrodomésticos integrados e iluminação embutida",
    },
    images: [
      {
        src: "/images/projects/cozinha-cacau/1.jpg",
        width: 1086,
        height: 1448,
        alt: "Sala de jantar integrada à cozinha, com mesa preta posta e vista para o pôr do sol",
      },
      {
        src: "/images/projects/cozinha-cacau/2.jpg",
        width: 1086,
        height: 1448,
        alt: "Vista da sala de jantar em direção à cozinha planejada em madeira e preto, com iluminação em fita de LED",
      },
    ],
    drawings: [],
    featured: true,
    order: 3,
  },
  {
    slug: "quarto-essencia",
    title: "Quarto Essência",
    category: "interiores",
    location: "Localização a confirmar",
    year: "Ano a confirmar",
    area: "Área a confirmar",
    excerpt:
      "Um quarto multiuso pensado como refúgio de leveza, conforto e tranquilidade, com madeira natural e iluminação acolhedora.",
    description: [
      "O Quarto Essência foi pensado como um refúgio de leveza, conforto e tranquilidade, combinando tons claros, madeira natural e iluminação acolhedora.",
      "A composição minimalista valoriza a funcionalidade e os elementos naturais, criando um espaço contemporâneo e sereno para trabalhar, relaxar e se reconectar.",
    ],
    coverImage: {
      src: "/images/projects/quarto-essencia/2.jpg",
      width: 1254,
      height: 1254,
      alt: "Quarto compacto com cama, escrivaninha e estante em madeira natural, iluminado por luz natural e fitas de LED",
    },
    images: [
      {
        src: "/images/projects/quarto-essencia/1.jpg",
        width: 1254,
        height: 836,
        alt: "Canto de closet e escrivaninha com estante em madeira, plantas e iluminação indireta",
      },
    ],
    drawings: [],
    featured: true,
    order: 4,
  },
  {
    slug: "quarto-horizonte",
    title: "Quarto Horizonte",
    category: "interiores",
    location: "Localização a confirmar",
    year: "Ano a confirmar",
    area: "Área a confirmar",
    excerpt:
      "Um quarto contemporâneo que une tons azulados, madeira clara e um cantinho de estudos sob medida.",
    description: [
      "Um quarto contemporâneo que une aconchego, personalidade e funcionalidade.",
      "A combinação dos tons azulados com a madeira clara cria uma atmosfera tranquila e acolhedora, enquanto o espaço de estudos e a estante valorizam a praticidade e os interesses do morador.",
      "A iluminação quente e a entrada de luz natural completam o ambiente, trazendo equilíbrio entre conforto, criatividade e modernidade.",
    ],
    coverImage: {
      src: "/images/projects/quarto-horizonte/1.jpg",
      width: 1355,
      height: 1161,
      alt: "Quarto com estante de marcenaria em tons azulados e madeira clara, sofá e escrivaninha de estudos",
    },
    images: [],
    drawings: [],
    featured: true,
    order: 5,
  },
  {
    slug: "quarto-bosque-encantado",
    title: "Quarto Bosque Encantado",
    category: "interiores",
    location: "Localização a confirmar",
    year: "Ano a confirmar",
    area: "Área a confirmar",
    excerpt:
      "Um quarto infantil transformado em um pequeno bosque de imaginação, em tons suaves de rosa e dourado.",
    description: [
      "Um quarto infantil inspirado na delicadeza da natureza, onde tons suaves de rosa, madeira e dourado criam uma atmosfera acolhedora e afetiva.",
      "O mural de árvores, flores e borboletas transforma o ambiente em um pequeno bosque de imaginação, pensado para estimular a criatividade e proporcionar aconchego nos primeiros anos de vida.",
    ],
    coverImage: {
      src: "/images/projects/quarto-bosque-encantado/1.jpg",
      width: 1354,
      height: 1161,
      alt: "Berço rosa diante de um mural infantil de árvores, flores e borboletas",
    },
    images: [
      {
        src: "/images/projects/quarto-bosque-encantado/2.jpg",
        width: 1354,
        height: 1161,
        alt: "Cômoda e poltrona de amamentação junto ao mural infantil do quarto Bosque Encantado",
      },
    ],
    drawings: [],
    featured: true,
    order: 6,
  },
];
