// src/data/perfumes.js
import goodGirlParfum from './assets/products/good-girl-parfum.webp';
import diorSauvage from './assets/products/dior-sauvage.webp';
import versaceCrystal from './assets/products/versace-crystal.webp';
import ckOne from './assets/products/ck-one.webp';
import armaniSi from './assets/products/arman-si.webp';
import bvlgariMan from './assets/products/black-man.webp';
import marcJacobsDaisy from './assets/products/marc-jobs.webp';
import creedAventus from './assets/products/creed-aventus.webp';
import tomFordNoir from './assets/products/tomford.webp';
import joMalonePeony from './assets/products/jo-malone-peony.webp';
import versaceEros from './assets/products/Versace Eros.webp';
import gucciBloom from './assets/products/gucci-bloom.webp';
import jeanPaulScandal from './assets/products/jean-paul-scandal.webp';
import baccaratRouge from './assets/products/baccaratRouge.webp';
import lancomeLaVie from './assets/products/lancome-la-vie.webp';
import yslY from './assets/products/ysl.jpg';

const perfumes = [
  {
    id: 1,
    name: 'Dior Sauvage',
    slug: 'dior-sauvage',
    price: 140,
    salePrice: 115,
    category: 'men',
    tags: ['best-selling'],
    image: diorSauvage,
    description: 'Dior Sauvage is a powerful and fresh scent featuring bergamot, pepper, and amberwood, inspired by wide-open landscapes.'
  },
  {
    id: 2,
    name: 'Girl Eau De Parfum',
    slug: 'girl-eau-de-parfum',
    price: 139,
    salePrice: 187,
    category: 'women',
    tags: ['exclusive', 'best-selling'],
    image: goodGirlParfum,
    description: 'Good Girl Eau De Parfum is a bold, floral fragrance with notes of lavender, orange blossom, and musk. A scent of freedom for modern women.'
  },
  {
    id: 3,
    name: 'Crystal Eau De Toilette',
    slug: 'crystal-eau-de-toilette',
    price: 160,
    salePrice: 135,
    category: 'women',
    tags: ['exclusive'],
    image: versaceCrystal,
    description: 'Crystal Eau De Toilette is an iconic aldehydic floral fragrance blending jasmine, rose, and sandalwood—timeless and elegant.'
  },
  {
    id: 4,
    name: 'CK One',
    slug: 'ck-one',
    price: 85,
    salePrice: 70,
    category: 'unisex',
    tags: [],
    image: ckOne,
    description: 'CK One by Calvin Klein is a unisex citrus fragrance with fresh pineapple, papaya, and green tea notes for a youthful and casual vibe.'
  },
  {
    id: 5,
    name: 'Armani Sí',
    slug: 'armani-si',
    price: 130,
    category: 'women',
    tags: ['exclusive'],
    image: armaniSi,
    description: 'Armani Sí is a modern chypre fragrance with blackcurrant nectar, rose de mai, and blond woods—sophisticated and feminine.'
  },
  {
    id: 6,
    name: 'Bvlgari Man in Black',
    slug: 'bvlgari-man-in-black',
    price: 110,
    salePrice: 90,
    category: 'men',
    tags: [],
    image: bvlgariMan,
    description: 'Bvlgari Man in Black features rum, leather, and spices for an intense, mysterious scent for bold men.'
  },
  {
    id: 7,
    name: 'Marc Jacobs Daisy',
    slug: 'marc-jacobs-daisy',
    price: 125,
    salePrice: 105,
    category: 'women',
    tags: ['best-selling'],
    image: marcJacobsDaisy,
    description: 'Marc Jacobs Daisy is a fresh floral fragrance with wild strawberry, violet leaves, and jasmine, perfect for youthful and vibrant women.'
  },
  {
    id: 8,
    name: 'Creed Aventus',
    slug: 'creed-aventus',
    price: 220,
    category: 'men',
    tags: ['exclusive', 'best-selling'],
    image: creedAventus,
    description: 'Creed Aventus is a powerful and fruity fragrance with pineapple, blackcurrant, and birch. It celebrates strength and success.'
  },
  {
    id: 9,
    name: 'Tom Ford Noir',
    slug: 'tom-ford-noir',
    price: 145,
    category: 'men',
    tags: [],
    image: tomFordNoir,
    description: 'Tom Ford Noir is an oriental and sensual fragrance combining spicy, floral, and amber notes—rich and sophisticated.'
  },
  {
    id: 10,
    name: 'Jo Malone Peony & Blush Suede',
    slug: 'jo-malone-peony-blush-suede',
    price: 135,
    category: 'women',
    tags: [],
    image: joMalonePeony,
    description: 'A luxurious scent featuring peony, red apple, and suede. Jo Malone Peony & Blush Suede is elegant and romantic.'
  },
  {
    id: 11,
    name: 'Versace Eros',
    slug: 'versace-eros',
    price: 115,
    category: 'men',
    tags: [],
    image: versaceEros,
    description: 'Versace Eros is a masculine fragrance with mint, green apple, and tonka bean—bold, passionate, and seductive.'
  },
  {
    id: 12,
    name: 'Gucci Bloom',
    slug: 'gucci-bloom',
    price: 128,
    salePrice: 105,
    category: 'women',
    tags: ['exclusive'],
    image: gucciBloom,
    description: 'Gucci Bloom is a rich white floral fragrance with jasmine, tuberose, and Rangoon creeper—lush and feminine.'
  },
  {
    id: 13,
    name: 'Jean Paul Gaultier Scandal',
    slug: 'jean-paul-gaultier-scandal',
    price: 118,
    category: 'women',
    tags: [],
    image: jeanPaulScandal,
    description: 'Scandal is a sensual blend of honey, gardenia, and patchouli—provocative and empowering.'
  },
  {
    id: 14,
    name: "Maison Francis Kurkdjian Baccarat",
    slug: "maison-francis-kurkdjian-baccarat",
    price: 420,
    salePrice: 380,
    category: "unisex",
    tags: ["exclusive"],
    image: baccaratRouge,
    description: 'Baccarat Rouge is an amber floral fragrance with saffron, amberwood, and cedar—a luxurious and hypnotic scent.'
  },
  {
    id: 15,
    name: 'Lancôme La Vie Est Belle',
    slug: 'lancome-la-vie-est-belle',
    price: 138,
    category: 'women',
    tags: [],
    image: lancomeLaVie,
    description: 'La Vie Est Belle is a sweet and powdery fragrance featuring iris, praline, and vanilla—joyful and radiant.'
  },
  {
    id: 16,
    name: 'YSL Y Eau de Parfum',
    slug: 'ysl-y-eau-de-parfum',
    price: 125,
    salePrice: 110,
    category: 'unisex',
    tags: [],
    image: yslY,
    description: 'Y by Yves Saint Laurent is a fresh and woody fragrance with bergamot, sage, and tonka bean—clean and charismatic.'
  }
];

export default perfumes;
