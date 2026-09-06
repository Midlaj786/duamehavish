// Base URL resolution for dynamic environments (Local Dev, GitHub Pages, Custom Domains)
const BASE = import.meta.env.BASE_URL ? (import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`) : './';

// Master Collection of all 18 child photographs of Dua Mehavish with curated metadata, editorial stories, and classic handwritten notes
export const photos = [
  {
    id: 1,
    src: `${BASE}photos/pathu-1.jpeg`,
    altSrc: `${BASE}photos/pathu 1.jpeg`,
    title: 'Sunlight & Smiles',
    subtitle: 'Chapter I — Pure Wonder',
    date: 'Autumn • Golden Hour',
    category: 'Portraits',
    aspect: '0.75',
    featured: true,
    annotation: 'A radiant smile when the afternoon sun hits just right ✨',
    description: 'A captivating editorial portrait showcasing pure warmth, natural light, and Dua Mehavish’s boundless joy.'
  },
  {
    id: 2,
    src: `${BASE}photos/pathu-2.jpeg`,
    altSrc: `${BASE}photos/pathu 2.jpeg`,
    title: 'Innocence & Wonder',
    subtitle: 'Chapter I — Pure Wonder',
    date: 'Spring Morning',
    category: 'Storybook',
    aspect: '0.67',
    featured: true,
    annotation: 'Eyes filled with curiosity and quiet wonder 🌿',
    description: 'Soft shadows and gentle highlights frame the tender gaze and effortless grace of Dua Mehavish.'
  },
  {
    id: 3,
    src: `${BASE}photos/pathu-3.jpeg`,
    altSrc: `${BASE}photos/pathu 3.jpeg`,
    title: 'Meadow Whispers',
    subtitle: 'Chapter II — Sunlit Moments',
    date: 'Summer Afternoon',
    category: 'Candid',
    aspect: '0.69',
    featured: true,
    annotation: 'Listening to the sweet summer breeze in the open meadow 🍃',
    description: 'An organic candid moment capturing Dua’s total immersion in play, untouched by time.'
  },
  {
    id: 4,
    src: `${BASE}photos/pathu-4.jpeg`,
    altSrc: `${BASE}photos/pathu 4.jpeg`,
    title: 'Summer Breeze & Petals',
    subtitle: 'Chapter II — Sunlit Moments',
    date: 'Summer Twilight',
    category: 'Candid',
    aspect: '0.68',
    featured: false,
    annotation: 'A gentle scene straight out of a classic fairytale 🌸',
    description: 'Framed in golden tones, this portrait of Dua Mehavish radiates pure happiness and nostalgic beauty.'
  },
  {
    id: 5,
    src: `${BASE}photos/pathu-5.jpeg`,
    altSrc: `${BASE}photos/pathu 5.jpeg`,
    title: 'Unfiltered Joy',
    subtitle: 'Chapter II — Sunlit Moments',
    date: 'May Afternoon',
    category: 'Portraits',
    aspect: '0.69',
    featured: true,
    annotation: 'The sweetest laugh that brightens the whole room ❤️',
    description: 'A joyful freeze-frame in time where Dua’s laughter lights up the entire world.'
  },
  {
    id: 6,
    src: `${BASE}photos/pathu-6.jpeg`,
    altSrc: `${BASE}photos/pathu 6.jpeg`,
    title: 'Laughter in Motion',
    subtitle: 'Chapter III — Timeless Smiles',
    date: 'Golden Hour',
    category: 'Candid',
    aspect: '0.68',
    featured: false,
    annotation: 'Chasing the warm evening light before dusk ✨',
    description: 'Dynamic composition capturing spontaneous movement, authentic laughter, and innocence.'
  },
  {
    id: 7,
    src: `${BASE}photos/pathu-7.jpeg`,
    altSrc: `${BASE}photos/pathu 7.jpeg`,
    title: 'The Little Explorer',
    subtitle: 'Chapter III — Timeless Smiles',
    date: 'July Sunshine',
    category: 'Storybook',
    aspect: '0.75',
    featured: false,
    annotation: 'Discovering secret little treasures in the garden 🦋',
    description: 'Editorial storytelling imagery reflecting Dua’s adventurous heart and quiet determination.'
  },
  {
    id: 8,
    src: `${BASE}photos/pathu-8.jpeg`,
    altSrc: `${BASE}photos/pathu 8.jpeg`,
    title: 'Dreamer’s Pause',
    subtitle: 'Chapter III — Timeless Smiles',
    date: 'September Twilight',
    category: 'Portraits',
    aspect: '0.64',
    featured: false,
    annotation: 'Lost in a small, gentle daylight daydream 🕊️',
    description: 'Soft focus and rich texture evoke a sense of quiet introspection and warmth.'
  },
  {
    id: 9,
    src: `${BASE}photos/pathu-9.jpeg`,
    altSrc: `${BASE}photos/pathu 9.jpeg`,
    title: 'Serenity & Grace',
    subtitle: 'Chapter III — Timeless Smiles',
    date: 'October Breeze',
    category: 'Portraits',
    aspect: '0.67',
    featured: false,
    annotation: 'Calm elegance and pure soul in a bustling world 🌿',
    description: 'Minimalist editorial composition focused on delicate features and tranquil expressions.'
  },
  {
    id: 10,
    src: `${BASE}photos/pathu-10.jpeg`,
    altSrc: `${BASE}photos/pathu 10.jpeg`,
    title: 'Spark of Wonder',
    subtitle: 'Chapter IV — Whisper of Dreams',
    date: 'Early Dawn',
    category: 'Candid',
    aspect: '0.56',
    featured: false,
    annotation: 'When everything looks like magic through precious eyes 🪄',
    description: 'Capturing wide-eyed amazement and the magical lens through which children view the world.'
  },
  {
    id: 11,
    src: `${BASE}photos/pathu-11.jpeg`,
    altSrc: `${BASE}photos/pathu 11.jpeg`,
    title: 'Quiet Sunset Gaze',
    subtitle: 'Chapter IV — Whisper of Dreams',
    date: 'Warm Dusk',
    category: 'Storybook',
    aspect: '0.56',
    featured: false,
    annotation: 'So peaceful, timeless, and softly glowing 🌙',
    description: 'Moody, warm lighting with timeless film-like color grading and depth.'
  },
  {
    id: 12,
    src: `${BASE}photos/pathu-12.jpeg`,
    altSrc: `${BASE}photos/pathu 12.jpeg`,
    title: 'Timeless Golden Glance',
    subtitle: 'Chapter IV — Whisper of Dreams',
    date: 'Golden Glow',
    category: 'Portraits',
    aspect: '0.56',
    featured: false,
    annotation: 'Memories carved in soft golden light 💫',
    description: 'A rich portrait emphasizing natural skin tones, deep contrast, and emotional depth.'
  },
  {
    id: 13,
    src: `${BASE}photos/pathu-13.jpeg`,
    altSrc: `${BASE}photos/pathu 13.jpeg`,
    title: 'Golden Radiance Portrait',
    subtitle: 'Chapter I — Pure Wonder',
    date: 'First Light',
    category: 'Golden Light',
    aspect: '0.46',
    featured: true,
    annotation: 'Pure childhood magic bathed in radiant sun 👑',
    description: 'A breathtaking full-length composition filled with rich warmth, light, and soul.'
  },
  {
    id: 14,
    src: `${BASE}photos/pathu-14.jpeg`,
    altSrc: `${BASE}photos/pathu 14.jpeg`,
    title: 'Velvet Sunbeams',
    subtitle: 'Chapter V — Eternal Memories',
    date: 'Late Afternoon',
    category: 'Candid',
    aspect: '0.67',
    featured: false,
    annotation: 'Sunbeams dancing through soft afternoon shadows ☀️',
    description: 'Subtle light play creating an ethereal atmosphere around Dua’s candid smile.'
  },
  {
    id: 15,
    src: `${BASE}photos/pathu-15.jpeg`,
    altSrc: `${BASE}photos/pathu 15.jpeg`,
    title: 'Gentle Warmth & Love',
    subtitle: 'Chapter V — Eternal Memories',
    date: 'Warm Sunset',
    category: 'Storybook',
    aspect: '0.67',
    featured: true,
    annotation: 'Holding onto these precious little moments forever 💛',
    description: 'Heartwarming portrait evoking nostalgia, parental love, and precious memories of Dua Mehavish.'
  },
  {
    id: 16,
    src: `${BASE}photos/pathu-16.jpeg`,
    altSrc: `${BASE}photos/pathu 16.jpeg`,
    title: 'Fairytale Melody',
    subtitle: 'Chapter V — Eternal Memories',
    date: 'Summer Glow',
    category: 'Golden Light',
    aspect: '0.67',
    featured: false,
    annotation: 'An illustration straight out of a classic children’s storybook 📖',
    description: 'Soft pastel hues and beautiful bokeh complement Dua’s radiant smile.'
  },
  {
    id: 17,
    src: `${BASE}photos/pathu-17.jpeg`,
    altSrc: `${BASE}photos/pathu 17.jpeg`,
    title: 'Forever Dua',
    subtitle: 'Grand Finale — Timeless Love',
    date: 'Twilight',
    category: 'Storybook',
    aspect: '0.67',
    featured: true,
    annotation: 'May her heart always remain this joyful and free 🕊️✨',
    description: 'A grand finale portrait capturing peace, joy, and the eternal spirit of Dua Mehavish.'
  },
  {
    id: 18,
    src: `${BASE}photos/pathu-18.jpeg`,
    altSrc: `${BASE}photos/pathu 18.jpeg`,
    title: 'The Crown Portrait',
    subtitle: 'Chapter I — Pure Wonder',
    date: 'Golden Dawn',
    category: 'Portraits',
    aspect: '1.09',
    featured: true,
    annotation: 'Dua Mehavish’s radiant signature master portrait 👑✨',
    description: 'The crowning hero portrait of Dua Mehavish, capturing pure wonder and eternal elegance.'
  }
];

export const storyChapters = [
  {
    number: '01',
    title: 'Pure Wonder',
    description: 'Where every glance of Dua Mehavish holds an unwritten fairytale and every breath is full of magic.',
    photos: [18, 1, 2, 13]
  },
  {
    number: '02',
    title: 'Sunlit Moments',
    description: 'Golden afternoons spent chasing butterflies, feeling the grass underfoot, and laughing with the breeze.',
    photos: [3, 4, 5]
  },
  {
    number: '03',
    title: 'Timeless Smiles',
    description: 'Memories frozen in golden light, preserved like pressed flowers between the pages of an antique book.',
    photos: [6, 7, 8, 9]
  },
  {
    number: '04',
    title: 'Whisper of Dreams',
    description: 'Quiet thoughts, soft twilight rays, and the gentle beauty of childhood innocence.',
    photos: [10, 11, 12, 14]
  },
  {
    number: '05',
    title: 'Eternal Love',
    description: 'The final chapter that never ends — because Dua’s childhood lives in our hearts forever.',
    photos: [15, 16, 17]
  }
];
