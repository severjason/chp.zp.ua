import * as img1 from '../img/img1.jpg';
import * as img2 from '../img/img2.jpg';
import * as img3 from '../img/img3.jpg';
import * as greeLogo from '../img/logos/gree.png';
import * as kentatsuLogo from '../img/logos/kentatsu.png';
import * as mitsubishiLogo from '../img/logos/mitsubishi.png';
import * as sakataLogo from '../img/logos/sakata.jpg';

import { ChpState } from '../interfaces';

const data: ChpState = {
  images: [
    {
      right: true,
      src: img1,
      desc: 'air conditioner chp.zp.ua',
      text: `Насладись Приятной Прохладой в Течение Жаркого Лета!`,
    },
    {
      imageClass: 'chp-image-mountain',
      right: false,
      src: img2,
      desc: 'air conditioner in bedroom chp.zp.ua',
      text: `Почувствуй Преимущество Комфортной Температуры в Вашем Доме!`,
    },
    {
      imageClass: 'chp-image-maintenance',
      right: true,
      src: img3,
      desc: 'air conditioner with remote control chp.zp.ua',
      text: `Качественные Решения Вопросов Кондиционирования Воздуха`,
    },
  ],
  services: {
    title: 'Услуги',
    texts: [
      'Монтаж, обслуживание и ремонт кондиционеров, ' +
      'систем кондиционирования и вентиляции (в том числе чистка наружных и внутренних блоков, ' +
      'дозаправка фреоном и т.п.)',
      'Проектирование систем кондиционирования и вентиляции',
      'Ремонт холодильного и торгово-технического оборудования',
    ]
  },
  goods: {
    title: 'Товары',
    texts: [
      'Бытовые кондиционеры Mitsubishi Electric, Gree, Kentatsu, Sakata',
      'Системы кондиционирования и вентиляции Mitsubishi Electric, Gree, Kentatsu, Sakata',
      'Холодильные и морозильные камеры "под ключ" (до 300 куб.м.);',
    ]
  },
  partners: [
    {
      title: 'Gree',
      logo: greeLogo,
    },
    {
      title: 'Kentatsu',
      logo: kentatsuLogo,
    },
    {
      title: 'Mitsubishi Electric',
      logo: mitsubishiLogo,
    },
    {
      title: 'Sakata',
      logo: sakataLogo,
    },
  ]
};

export default data;