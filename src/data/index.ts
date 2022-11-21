import img1 from 'img/img1.jpg';
import img2 from 'img/img2.jpg';
import img3 from 'img/img3.jpg';
import greeLogo from 'img/logos/gree.png';
import kentatsuLogo from 'img/logos/kentatsu.png';
import mitsubishiLogo from 'img/logos/mitsubishi.png';
import sakataLogo from 'img/logos/sakata.jpg';

import { ChpState } from 'interfaces';

const data: ChpState = {
  images: [
    {
      right: true,
      src: img1,
      desc: 'air conditioner chp.zp.ua',
      text: `Насолоджуйся Приємною Прохолодою Спекотним Літом!`,
    },
    {
      imageClass: 'chp-image-mountain',
      right: false,
      src: img2,
      desc: 'air conditioner in bedroom chp.zp.ua',
      text: `Відчуй Перевагу Комфортної Температури у Вашому Домі!`,
    },
    {
      imageClass: 'chp-image-maintenance',
      right: true,
      src: img3,
      desc: 'air conditioner with remote control chp.zp.ua',
      text: `Якісні Рішення Питань Кондиціонування Повітря`,
    },
  ],
  services: {
    title: 'Послуги',
    texts: [
      'Монтаж, обслуговування та ремонт кондиціонерів, ' +
      'систем кондиціонування і вентиляції (зокрема чищення зовнішніх і внутрішніх блоків, ' +
      'дозаправка фреоном тощо).',
      'Проектування систем кондиціонування та вентиляції',
      'Ремонт холодильного та торгово-технічного обладнання',
    ]
  },
  goods: {
    title: 'Товари',
    texts: [
      'Побутові кондиціонери Mitsubishi Electric, Gree, Kentatsu, Sakata',
      'Системи кондиціонування та вентиляції Mitsubishi Electric, Gree, Kentatsu, Sakata',
      'Холодильні та морозильні камери "під ключ" (до 300 куб.м.);',
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