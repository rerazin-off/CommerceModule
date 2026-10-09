import type { Product } from '../interfaces/interfaces';

const modules = import.meta.glob(
  '@/Assets/img/*.png',
  { eager: true, import: 'default' }
) as Record<string, string>;

const img = (name: string): string => {
  const key = Object.keys(modules).find((k) => k.endsWith('/' + name));
  if (!key) {
    console.warn(`[products] Картинка не найдена: ${name}`);
    return '';
  }
  return modules[key];
};

export const productsAll: Product[] = [
  { src: img('sok (1).png'), alt: 'сок1', category: 'drinks' },
  { src: img('meal (4).png'), alt: 'мука 4', category: 'grocery', bakaleyaGroup: 'flour' },
  { src: img('milk (2).png'), alt: 'молоко 2', category: 'dairy' },
  { src: img('sok (4).png'), alt: 'сок4', category: 'drinks' },
  { src: img('milk (3).png'), alt: 'молоко 3', category: 'dairy' },
  { src: img('coffe3.png'), alt: 'кофе 3', category: 'grocery3', bakaleyaGroup: 'coffee' },
  { src: img('milk (4).png'), alt: 'молоко 4', category: 'dairy' },
  { src: img('fish (1).png'), alt: 'рыбка 1', category: 'fish' },
  { src: img('sok (3).png'), alt: 'сок3', category: 'drinks' },
  { src: img('fish (2).png'), alt: 'рыбка 2', category: 'fish' },
  { src: img('mak (1).png'), alt: 'макароны 1', category: 'grocery1', bakaleyaGroup: 'pasta' },
  { src: img('sok (2).png'), alt: 'сок2', category: 'drinks' },
  { src: img('mak (2).png'), alt: 'макароны 2', category: 'grocery1', bakaleyaGroup: 'pasta' },
  { src: img('fish (3).png'), alt: 'рыбка 3', category: 'fish' },
  { src: img('mak (4).png'), alt: 'макароны 4', category: 'grocery1', bakaleyaGroup: 'pasta' },
  { src: img('meal (1).png'), alt: 'мука 1', category: 'grocery', bakaleyaGroup: 'flour' },
  { src: img('meal (2).png'), alt: 'мука 2', category: 'grocery', bakaleyaGroup: 'flour' },
  { src: img('fish (4).png'), alt: 'рыбка 4', category: 'fish' },
  { src: img('meal (3).png'), alt: 'мука 3', category: 'grocery', bakaleyaGroup: 'flour' },
  { src: img('kryp (1).png'), alt: 'крупы 1', category: 'grocery2', bakaleyaGroup: 'cereals' },
  { src: img('mak (3).png'), alt: 'макароны 3', category: 'grocery1', bakaleyaGroup: 'pasta' },
  { src: img('kryp (2).png'), alt: 'крупы 2', category: 'grocery2', bakaleyaGroup: 'cereals' },
  { src: img('milk (1).png'), alt: 'молоко 1', category: 'dairy' },
  { src: img('kryp (3).png'), alt: 'крупы 3', category: 'grocery2', bakaleyaGroup: 'cereals' },
  { src: img('coffe.png'), alt: 'кофе 1', category: 'grocery3', bakaleyaGroup: 'coffee' },
  { src: img('coffe2.png'), alt: 'кофе 2', category: 'grocery3', bakaleyaGroup: 'coffee' },
  { src: img('kryp (4).png'), alt: 'крупы 4', category: 'grocery2', bakaleyaGroup: 'cereals' },
  { src: img('coffe4.png'), alt: 'кофе 4', category: 'grocery3', bakaleyaGroup: 'coffee' },
];

export const categoriesAll = ['grocery', 'grocery1', 'grocery2', 'grocery3'];