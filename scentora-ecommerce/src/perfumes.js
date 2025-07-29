
// src/data/perfumes.js
import yslLibre from './assets/products/ysl-libre.webp';
import diorSauvage from './assets/products/dior-sauvage.webp';
import chanelNo5 from './assets/products/no5-chanel.jpg';
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
import yslY from './assets/products/ysl-l-parfum.webp';

const perfumes = [
  {
    id: 1,
    name: 'YSL Libre Eau de Parfum',
    price: 120,
    category: 'women',
    tags: ['exclusive', 'best-selling'],
    image: yslLibre,
  },
  {
    id: 2,
    name: 'Dior Sauvage',
    price: 140,
    category: 'men',
    tags: ['best-selling'],
    image: diorSauvage,
  },
  {
    id: 3,
    name: 'Chanel No. 5',
    price: 160,
    category: 'women',
    tags: ['exclusive'],
    image: chanelNo5,
  },
  {
    id: 4,
    name: 'CK One',
    price: 85,
    category: 'unisex',
    tags: [],
    image: ckOne,
  },
  {
    id: 5,
    name: 'Armani Sí',
    price: 130,
    category: 'women',
    tags: ['exclusive'],
    image: armaniSi,
  },
  {
    id: 6,
    name: 'Bvlgari Man in Black',
    price: 110,
    category: 'men',
    tags: [],
    image: bvlgariMan,
  },
  {
    id: 7,
    name: 'Marc Jacobs Daisy',
    price: 125,
    category: 'women',
    tags: ['best-selling'],
    image: marcJacobsDaisy,
  },
  {
    id: 8,
    name: 'Creed Aventus',
    price: 220,
    category: 'men',
    tags: ['exclusive', 'best-selling'],
    image: creedAventus,
  },
  {
    id: 9,
    name: 'Tom Ford Noir',
    price: 145,
    category: 'men',
    tags: [],
    image: tomFordNoir,
  },
  {
    id: 10,
    name: 'Jo Malone Peony & Blush Suede',
    price: 135,
    category: 'women',
    tags: [],
    image: joMalonePeony,
  },
  {
    id: 11,
    name: 'Versace Eros',
    price: 115,
    category: 'men',
    tags: ['best-selling'],
    image: versaceEros,
  },
  {
    id: 12,
    name: 'Gucci Bloom',
    price: 128,
    category: 'women',
    tags: ['exclusive'],
    image: gucciBloom,
  },
  {
    id: 13,
    name: 'Jean Paul Gaultier Scandal',
    price: 118,
    category: 'women',
    tags: [],
    image: jeanPaulScandal,
  },
  {
    id: 14,
    name: "Maison Francis Kurkdjian Baccarat Rouge 540",
    category: "unisex",
    price: 420,
    tags: ["exclusive"],
    image: baccaratRouge,
  },
  {
    id: 15,
    name: 'Lancôme La Vie Est Belle',
    price: 138,
    category: 'women',
    tags: [],
    image: lancomeLaVie,
  },
  {
    id: 16,
    name: 'YSL Y Eau de Parfum',
    price: 125,
    category: 'unisex',
    tags: ['best-selling'],
    image: yslY,
  }
];

export default perfumes;
