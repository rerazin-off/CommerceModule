import type { Refrigerator } from '../interfaces/interfaces';

const modules = import.meta.glob(
  '@/Assets/img/*.png',
  { eager: true, import: 'default' }
) as Record<string, string>;

const img = (name: string): string => {
  const key = Object.keys(modules).find((k) => k.endsWith('/' + name));
  if (!key) {
    console.warn(`[refrigerators] Картинка не найдена: ${name}`);
    return '';
  }
  return modules[key];
};

export const refrigeratorsAll: Refrigerator[] = [
  { src: img('1_v2.png'), alt: 'Холодильник для напитков', categories: ['drinks'], width: 250, height: 300 },
  { src: img('2_v2.png'), alt: 'Холодильник для молочной продукции', categories: ['dairy'], width: 250, height: 300 },
  { src: img('3_v2.png'), alt: 'Холодильник для рыбы', categories: ['fish'], width: 250, height: 300 },
  {
    src: img('4_v2.png'),
    alt: 'Стеллаж для продуктов',
    categories: ['grocery', 'grocery1', 'grocery2', 'grocery3'],
    width: 250, height: 300
  },
];