import type { Lang } from '../config';

export type FaqItem = { q: string; a: string };
export type Post = {
  slug: string;
  img: string;
  imgAlt: Record<Lang, string>;
  date: string; // ISO
  dateLabel: Record<Lang, string>;
  title: Record<Lang, string>;
  h1: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  metaDescription: Record<Lang, string>;
  body: Record<Lang, string>; // HTML
  faq: Record<Lang, FaqItem[]>;
};

// 🚩 DRAFT(client): starter guide articles for launch. Copy is written by us to
// establish topical authority; expand with real projects/photos over time.
export const posts: Post[] = [
  {
    slug: 'material-kabinet-dapur',
    img: 'kitchen-wood.jpg',
    imgAlt: {
      en: 'Different kitchen cabinet materials — HOMADE Kajang',
      ms: 'Pelbagai material kabinet dapur — HOMADE Kajang',
    },
    date: '2026-01-15',
    dateLabel: { en: '15 January 2026', ms: '15 Januari 2026' },
    title: {
      en: 'Kitchen Cabinet Materials in Malaysia: A Simple Guide (2026) | HOMADE',
      ms: 'Material Kabinet Dapur di Malaysia: Panduan Ringkas (2026) | HOMADE',
    },
    h1: {
      en: 'Kitchen cabinet materials in Malaysia: which one is right for you?',
      ms: 'Material kabinet dapur di Malaysia: mana satu sesuai untuk anda?',
    },
    excerpt: {
      en: 'Melamine, laminate, HPL, plywood, marine plywood or stainless steel — a plain-English guide to the common cabinet materials and where each works best in a Malaysian kitchen.',
      ms: 'Melamine, laminate, HPL, plywood, marine plywood atau keluli tahan karat — panduan mudah material kabinet biasa dan di mana setiap satu paling sesuai untuk dapur Malaysia.',
    },
    metaDescription: {
      en: 'A simple guide to kitchen cabinet materials in Malaysia — melamine, laminate, HPL, plywood, marine plywood & stainless steel — and which suits our humid climate. By HOMADE, Kajang.',
      ms: 'Panduan mudah material kabinet dapur di Malaysia — melamine, laminate, HPL, plywood, marine plywood & keluli tahan karat — dan mana sesuai untuk iklim lembap kita. Oleh HOMADE, Kajang.',
    },
    body: {
      en: `<p>Choosing the right material is the single biggest decision when planning kitchen cabinets. It affects how your cabinets look, how long they last in Malaysia's humidity, and how much you pay. Here is a plain guide to the materials we work with at HOMADE in Kajang.</p>
<h2>The carcass (body) vs the door</h2>
<p>A cabinet has two parts: the <strong>carcass</strong> (the box) and the <strong>door panel</strong> (what you see and touch). They are often made from different materials — for example a plywood carcass with a melamine or laminate door.</p>
<h2>Common cabinet materials</h2>
<h3>Melamine (melamine-faced board)</h3>
<p>An affordable, everyday finish bonded onto particleboard or MDF. Good range of colours and woodgrains, easy to clean. Best for dry areas and budget-conscious projects.</p>
<h3>Laminate & HPL</h3>
<p>High-pressure laminate is tougher and more scratch- and moisture-resistant than basic melamine, with a wide choice of finishes. A popular middle-ground for door fronts.</p>
<h3>Plywood & marine plywood</h3>
<p>Plywood is stronger and holds screws and hinges better than particleboard. <strong>Marine plywood</strong> resists moisture best — a smart choice for the sink and wet zones in our climate.</p>
<h3>Stainless steel</h3>
<p>Fully waterproof, hygienic and extremely durable. Our FORMOSA line includes stainless steel kitchen cabinets built for demanding, humid kitchens.</p>
<h2>Which should you choose?</h2>
<p>For most Klang Valley homes we recommend a plywood carcass (marine plywood at wet zones) with laminate or melamine doors, or stainless steel where durability matters most. Tell us your space and budget on WhatsApp and we will spec the right mix.</p>`,
      ms: `<p>Memilih material yang betul ialah keputusan paling besar ketika merancang kabinet dapur. Ia mempengaruhi rupa kabinet, jangka hayat dalam iklim lembap Malaysia, dan kos anda. Berikut panduan mudah material yang kami gunakan di HOMADE, Kajang.</p>
<h2>Kotak (carcass) vs pintu</h2>
<p>Kabinet ada dua bahagian: <strong>carcass</strong> (kotak) dan <strong>panel pintu</strong> (yang anda lihat dan sentuh). Selalunya kedua-duanya guna material berbeza — contohnya carcass plywood dengan pintu melamine atau laminate.</p>
<h2>Material kabinet yang biasa</h2>
<h3>Melamine</h3>
<p>Kemasan harian yang berpatutan, dilekatkan pada particleboard atau MDF. Banyak pilihan warna dan ira kayu, mudah dibersih. Sesuai untuk kawasan kering dan bajet terkawal.</p>
<h3>Laminate & HPL</h3>
<p>High-pressure laminate lebih lasak serta tahan calar dan lembap berbanding melamine biasa, dengan banyak pilihan kemasan. Pilihan pertengahan yang popular untuk muka pintu.</p>
<h3>Plywood & marine plywood</h3>
<p>Plywood lebih kukuh dan memegang skru serta engsel lebih baik daripada particleboard. <strong>Marine plywood</strong> paling tahan lembap — pilihan bijak untuk kawasan sinki dan zon basah dalam iklim kita.</p>
<h3>Keluli tahan karat</h3>
<p>Kalis air sepenuhnya, higienik dan sangat tahan lama. Lini FORMOSA kami termasuk kabinet dapur keluli tahan karat yang dibina untuk dapur lembap dan sibuk.</p>
<h2>Mana satu patut dipilih?</h2>
<p>Untuk kebanyakan rumah di Lembah Klang, kami cadangkan carcass plywood (marine plywood di zon basah) dengan pintu laminate atau melamine, atau keluli tahan karat jika ketahanan paling penting. Beritahu kami ruang dan bajet anda di WhatsApp dan kami bantu tentukan gabungan yang sesuai.</p>`,
    },
    faq: {
      en: [
        { q: 'What is the most durable kitchen cabinet material in Malaysia?', a: 'For humidity, marine plywood and stainless steel last best. Marine plywood resists moisture at wet zones, while stainless steel is fully waterproof and hygienic.' },
        { q: 'Is melamine or plywood better for cabinets?', a: 'Plywood is stronger and holds hinges better, so it is ideal for the carcass; melamine is a cost-effective door finish. Many kitchens combine a plywood carcass with melamine or laminate doors.' },
        { q: 'Does HOMADE make stainless steel kitchen cabinets?', a: 'Yes. Our FORMOSA line includes stainless steel kitchen cabinets built for demanding, humid Malaysian kitchens. WhatsApp us at 012-231 0118 for details.' },
      ],
      ms: [
        { q: 'Apakah material kabinet dapur paling tahan lama di Malaysia?', a: 'Untuk iklim lembap, marine plywood dan keluli tahan karat paling tahan. Marine plywood tahan lembap di zon basah, manakala keluli tahan karat kalis air sepenuhnya dan higienik.' },
        { q: 'Melamine atau plywood lebih baik untuk kabinet?', a: 'Plywood lebih kukuh dan memegang engsel lebih baik, sesuai untuk carcass; melamine ialah kemasan pintu yang menjimatkan. Banyak dapur menggabungkan carcass plywood dengan pintu melamine atau laminate.' },
        { q: 'Adakah HOMADE membuat kabinet dapur keluli tahan karat?', a: 'Ya. Lini FORMOSA kami termasuk kabinet dapur keluli tahan karat untuk dapur Malaysia yang lembap dan sibuk. WhatsApp kami di 012-231 0118 untuk maklumat.' },
      ],
    },
  },
  {
    slug: 'melamine-vs-plywood',
    img: 'cabinet-door.jpg',
    imgAlt: {
      en: 'Melamine vs plywood cabinet doors — HOMADE Kajang',
      ms: 'Pintu kabinet melamine vs plywood — HOMADE Kajang',
    },
    date: '2026-01-22',
    dateLabel: { en: '22 January 2026', ms: '22 Januari 2026' },
    title: {
      en: 'Melamine vs Plywood for Kitchen Cabinets (2026) | HOMADE',
      ms: 'Melamine vs Plywood untuk Kabinet Dapur (2026) | HOMADE',
    },
    h1: {
      en: 'Melamine vs plywood: which is better for your kitchen cabinets?',
      ms: 'Melamine vs plywood: mana lebih baik untuk kabinet dapur anda?',
    },
    excerpt: {
      en: 'The most common cabinet question in Malaysia. We compare melamine and plywood on strength, moisture resistance, looks and cost — and explain why they are not really rivals.',
      ms: 'Soalan kabinet paling biasa di Malaysia. Kami banding melamine dan plywood dari segi kekuatan, ketahanan lembap, rupa dan kos — serta jelaskan kenapa ia bukan sebenarnya pesaing.',
    },
    metaDescription: {
      en: 'Melamine vs plywood for kitchen cabinets in Malaysia — a clear comparison of strength, moisture resistance, finish and price, from HOMADE cabinet maker in Kajang.',
      ms: 'Melamine vs plywood untuk kabinet dapur di Malaysia — perbandingan jelas kekuatan, ketahanan lembap, kemasan dan harga, dari HOMADE pembuat kabinet di Kajang.',
    },
    body: {
      en: `<p>"Melamine or plywood?" is the question we hear most from Kajang homeowners. The short answer: they do different jobs, and the best kitchens often use both.</p>
<h2>They are not the same kind of thing</h2>
<p><strong>Plywood</strong> is a structural board — it forms the <em>carcass</em> (the box). <strong>Melamine</strong> is a surface finish bonded onto a board (often particleboard/MDF) — usually used for the <em>door</em> or as a finished panel.</p>
<h2>Head to head</h2>
<table>
<thead><tr><th>Factor</th><th>Melamine (on board)</th><th>Plywood</th></tr></thead>
<tbody>
<tr><td>Strength / screw hold</td><td>Moderate</td><td>Stronger</td></tr>
<tr><td>Moisture resistance</td><td>Basic (better with HPL)</td><td>Good — best with marine plywood</td></tr>
<tr><td>Finishes / colours</td><td>Wide range</td><td>Needs a laminate/veneer face</td></tr>
<tr><td>Cost</td><td>More affordable</td><td>Higher</td></tr>
</tbody>
</table>
<h2>Our recommendation</h2>
<p>For durability in Malaysian humidity, use a <strong>plywood carcass</strong> — marine plywood around the sink — and pair it with <strong>melamine or laminate doors</strong> for the look and budget you want. If you need maximum water resistance and hygiene, ask about our stainless steel cabinets.</p>
<p>Want help deciding for your space? WhatsApp us and we will recommend the right build.</p>`,
      ms: `<p>"Melamine atau plywood?" ialah soalan paling kerap kami terima daripada pemilik rumah di Kajang. Jawapan ringkas: kedua-duanya buat kerja berbeza, dan dapur terbaik selalu guna kedua-duanya.</p>
<h2>Ia bukan benda yang sama</h2>
<p><strong>Plywood</strong> ialah papan struktur — ia membentuk <em>carcass</em> (kotak). <strong>Melamine</strong> ialah kemasan permukaan yang dilekatkan pada papan (selalunya particleboard/MDF) — biasanya untuk <em>pintu</em> atau panel siap.</p>
<h2>Perbandingan</h2>
<table>
<thead><tr><th>Faktor</th><th>Melamine (atas papan)</th><th>Plywood</th></tr></thead>
<tbody>
<tr><td>Kekuatan / pegangan skru</td><td>Sederhana</td><td>Lebih kukuh</td></tr>
<tr><td>Ketahanan lembap</td><td>Asas (lebih baik dengan HPL)</td><td>Baik — terbaik dengan marine plywood</td></tr>
<tr><td>Kemasan / warna</td><td>Banyak pilihan</td><td>Perlu muka laminate/veneer</td></tr>
<tr><td>Kos</td><td>Lebih berpatutan</td><td>Lebih tinggi</td></tr>
</tbody>
</table>
<h2>Cadangan kami</h2>
<p>Untuk ketahanan dalam iklim lembap Malaysia, guna <strong>carcass plywood</strong> — marine plywood di sekitar sinki — dan gandingkan dengan <strong>pintu melamine atau laminate</strong> mengikut rupa dan bajet yang anda mahu. Jika perlukan ketahanan air dan higien maksimum, tanya kami tentang kabinet keluli tahan karat.</p>
<p>Mahu bantuan memilih untuk ruang anda? WhatsApp kami dan kami cadangkan binaan yang sesuai.</p>`,
    },
    faq: {
      en: [
        { q: 'Is plywood worth the extra cost over melamine board?', a: 'For the carcass, yes — plywood is stronger, holds hinges better and resists moisture better, which matters for long-term durability in Malaysia. Doors can still be melamine to manage cost.' },
        { q: 'Can melamine cabinets survive Malaysian humidity?', a: 'Melamine works well in dry areas. For wet zones near the sink, marine plywood or stainless steel is a safer choice.' },
      ],
      ms: [
        { q: 'Berbaloikah plywood dengan kos tambahan berbanding papan melamine?', a: 'Untuk carcass, ya — plywood lebih kukuh, memegang engsel lebih baik dan lebih tahan lembap, penting untuk ketahanan jangka panjang di Malaysia. Pintu masih boleh guna melamine untuk kawal kos.' },
        { q: 'Bolehkah kabinet melamine tahan iklim lembap Malaysia?', a: 'Melamine sesuai untuk kawasan kering. Untuk zon basah berhampiran sinki, marine plywood atau keluli tahan karat lebih selamat.' },
      ],
    },
  },
  {
    slug: 'cara-kira-harga-kabinet-dapur',
    img: 'kitchen-premium.jpg',
    imgAlt: {
      en: 'How kitchen cabinet pricing is calculated — HOMADE Kajang',
      ms: 'Cara harga kabinet dapur dikira — HOMADE Kajang',
    },
    date: '2026-01-29',
    dateLabel: { en: '29 January 2026', ms: '29 Januari 2026' },
    title: {
      en: 'How Kitchen Cabinet Pricing Works in Malaysia (Per Foot) | HOMADE',
      ms: 'Cara Kira Harga Kabinet Dapur di Malaysia (Per Kaki) | HOMADE',
    },
    h1: {
      en: 'How is kitchen cabinet pricing calculated in Malaysia?',
      ms: 'Bagaimana harga kabinet dapur dikira di Malaysia?',
    },
    excerpt: {
      en: 'Cabinets are usually priced per foot run. We explain what goes into the price — material, doors, accessories and layout — so you can budget with confidence.',
      ms: 'Kabinet biasanya diharga per kaki (per foot run). Kami jelaskan apa yang menentukan harga — material, pintu, aksesori dan susun atur — supaya anda boleh bajet dengan yakin.',
    },
    metaDescription: {
      en: 'How kitchen cabinet pricing works in Malaysia — the per-foot-run method and the factors (material, doors, accessories) that move the price. Get a quote from HOMADE, Kajang.',
      ms: 'Cara kira harga kabinet dapur di Malaysia — kaedah per kaki dan faktor (material, pintu, aksesori) yang mempengaruhi harga. Dapatkan sebut harga dari HOMADE, Kajang.',
    },
    body: {
      en: `<p>Most cabinet makers in Malaysia quote by the <strong>foot run</strong> — the length of cabinetry along the wall, measured in feet, split into top and bottom cabinets. Here is what actually drives the number.</p>
<h2>The per-foot-run method</h2>
<p>Your total length (e.g. 10 feet of bottom + 8 feet of top) is multiplied by a rate per foot. The rate depends mainly on the material and door choice.</p>
<h2>What moves the price</h2>
<ul>
<li><strong>Carcass material</strong> — particleboard vs plywood vs marine plywood vs stainless steel.</li>
<li><strong>Door finish</strong> — melamine, laminate/HPL, 4G/5G glass, or solid.</li>
<li><strong>Accessories</strong> — soft-close hinges, drawer systems, pull-outs, tall units.</li>
<li><strong>Worktop</strong> — solid surface, quartz or granite (often quoted separately).</li>
<li><strong>Layout complexity</strong> — islands, custom heights and special corners.</li>
</ul>
<h2>How to budget</h2>
<p>Decide your material and door finish first — that sets the base rate. Then add accessories and worktop. A simple, well-built kitchen costs less than a premium island layout, but both should use durable materials at wet zones.</p>
<p>We keep exact prices off the website so quotes stay accurate to your real measurements. Send us your kitchen size on WhatsApp (012-231 0118) for a tailored quote.</p>`,
      ms: `<p>Kebanyakan pembuat kabinet di Malaysia beri sebut harga secara <strong>per kaki (foot run)</strong> — panjang kabinet di sepanjang dinding, diukur dalam kaki, dibahagi kepada kabinet atas dan bawah. Berikut apa yang sebenarnya menentukan angka itu.</p>
<h2>Kaedah per kaki</h2>
<p>Jumlah panjang anda (cth. 10 kaki bawah + 8 kaki atas) didarab dengan kadar per kaki. Kadar bergantung terutamanya pada pilihan material dan pintu.</p>
<h2>Apa yang mempengaruhi harga</h2>
<ul>
<li><strong>Material carcass</strong> — particleboard vs plywood vs marine plywood vs keluli tahan karat.</li>
<li><strong>Kemasan pintu</strong> — melamine, laminate/HPL, kaca 4G/5G, atau padu.</li>
<li><strong>Aksesori</strong> — engsel soft-close, sistem laci, pull-out, unit tinggi.</li>
<li><strong>Worktop</strong> — solid surface, quartz atau granit (selalu diharga berasingan).</li>
<li><strong>Kerumitan susun atur</strong> — island, ketinggian khas dan sudut istimewa.</li>
</ul>
<h2>Cara bajet</h2>
<p>Tentukan material dan kemasan pintu dahulu — itu menetapkan kadar asas. Kemudian tambah aksesori dan worktop. Dapur ringkas yang kukuh lebih murah daripada susun atur island premium, tetapi kedua-duanya patut guna material tahan lama di zon basah.</p>
<p>Kami tidak letak harga tepat di laman web supaya sebut harga kekal tepat dengan ukuran sebenar anda. Hantar saiz dapur anda di WhatsApp (012-231 0118) untuk sebut harga khusus.</p>`,
    },
    faq: {
      en: [
        { q: 'How are kitchen cabinets priced in Malaysia?', a: 'Usually per foot run — the length of top and bottom cabinets in feet, multiplied by a rate that depends on material, door finish and accessories.' },
        { q: 'Why does HOMADE not list fixed prices online?', a: 'Every kitchen has different measurements, materials and accessories. A tailored quote based on your real layout is far more accurate than a generic price. WhatsApp us for one.' },
      ],
      ms: [
        { q: 'Bagaimana harga kabinet dapur dikira di Malaysia?', a: 'Biasanya per kaki — panjang kabinet atas dan bawah dalam kaki, didarab dengan kadar yang bergantung pada material, kemasan pintu dan aksesori.' },
        { q: 'Kenapa HOMADE tidak senaraikan harga tetap dalam talian?', a: 'Setiap dapur ada ukuran, material dan aksesori berbeza. Sebut harga khusus berdasarkan susun atur sebenar anda jauh lebih tepat berbanding harga umum. WhatsApp kami untuk sebut harga.' },
      ],
    },
  },
  {
    slug: 'rekaan-kabinet-dapur-terkini',
    img: 'kitchen-1.jpg',
    imgAlt: {
      en: 'Latest kitchen cabinet design ideas — HOMADE Kajang',
      ms: 'Idea rekaan kabinet dapur terkini — HOMADE Kajang',
    },
    date: '2026-02-05',
    dateLabel: { en: '5 February 2026', ms: '5 Februari 2026' },
    title: {
      en: 'Latest Kitchen Cabinet Design Ideas for 2026 | HOMADE Kajang',
      ms: 'Idea Rekaan Kabinet Dapur Terkini 2026 | HOMADE Kajang',
    },
    h1: {
      en: 'Latest kitchen cabinet design ideas for Malaysian homes',
      ms: 'Idea rekaan kabinet dapur terkini untuk rumah Malaysia',
    },
    excerpt: {
      en: 'Handleless fronts, warm woodgrains, islands and stainless steel — the cabinet looks trending in Malaysian kitchens in 2026, and how to make them practical.',
      ms: 'Muka tanpa pemegang, ira kayu hangat, island dan keluli tahan karat — rupa kabinet yang popular dalam dapur Malaysia pada 2026, dan cara menjadikannya praktikal.',
    },
    metaDescription: {
      en: 'Latest kitchen cabinet design ideas for 2026 in Malaysia — handleless fronts, woodgrain, islands & stainless steel — with practical tips from HOMADE cabinet maker in Kajang.',
      ms: 'Idea rekaan kabinet dapur terkini 2026 di Malaysia — muka tanpa pemegang, ira kayu, island & keluli tahan karat — dengan tip praktikal dari HOMADE pembuat kabinet di Kajang.',
    },
    body: {
      en: `<p>Trends come and go, but a good kitchen balances looks with how you actually cook. Here are the cabinet styles we are building most for Klang Valley homes in 2026.</p>
<h2>1. Handleless, clean fronts</h2>
<p>Handleless doors with J-profiles or push-to-open give a calm, modern look and are easy to wipe down.</p>
<h2>2. Warm woodgrains</h2>
<p>Woodgrain laminates add warmth against white or dark cabinetry — a popular contrast for open-plan homes.</p>
<h2>3. Islands & breakfast counters</h2>
<p>If you have the space, an island adds prep area and seating. Pair it with plenty of drawers for real storage.</p>
<h2>4. Stainless steel accents</h2>
<p>Our FORMOSA stainless steel cabinets suit wet zones and busy kitchens — durable, hygienic and increasingly used as a design feature, not just a utility.</p>
<h2>Make it practical</h2>
<p>Whatever the look, use durable materials at the sink, plan your work triangle, and choose good hinges and drawer runners.</p>
<p>Planning a refresh? WhatsApp us your ideas and space and we will help you spec it.</p>`,
      ms: `<p>Trend datang dan pergi, tetapi dapur yang baik mengimbangi rupa dengan cara anda memasak sebenarnya. Berikut gaya kabinet yang paling banyak kami bina untuk rumah Lembah Klang pada 2026.</p>
<h2>1. Muka bersih tanpa pemegang</h2>
<p>Pintu tanpa pemegang dengan profil-J atau push-to-open memberi rupa tenang dan moden serta mudah dilap.</p>
<h2>2. Ira kayu hangat</h2>
<p>Laminate ira kayu menambah kehangatan berlawanan dengan kabinet putih atau gelap — kontras popular untuk rumah konsep terbuka.</p>
<h2>3. Island & kaunter sarapan</h2>
<p>Jika ada ruang, island menambah kawasan penyediaan dan tempat duduk. Gandingkan dengan banyak laci untuk penyimpanan sebenar.</p>
<h2>4. Sentuhan keluli tahan karat</h2>
<p>Kabinet keluli tahan karat FORMOSA kami sesuai untuk zon basah dan dapur sibuk — tahan lama, higienik dan semakin digunakan sebagai elemen reka bentuk, bukan sekadar utiliti.</p>
<h2>Jadikan ia praktikal</h2>
<p>Apa pun rupanya, guna material tahan lama di sinki, rancang segi tiga kerja, dan pilih engsel serta runner laci yang baik.</p>
<p>Merancang pengubahsuaian? WhatsApp kami idea dan ruang anda dan kami bantu tentukan.</p>`,
    },
    faq: {
      en: [
        { q: 'What kitchen cabinet style is popular in Malaysia in 2026?', a: 'Handleless fronts, warm woodgrain laminates, islands with drawers, and stainless steel at wet zones are the most requested looks this year.' },
        { q: 'Are stainless steel kitchen cabinets only for commercial kitchens?', a: 'No. They are increasingly used in homes for their durability and hygiene, especially in humid areas, and can look sleek as a design feature.' },
      ],
      ms: [
        { q: 'Gaya kabinet dapur apa yang popular di Malaysia pada 2026?', a: 'Muka tanpa pemegang, laminate ira kayu hangat, island dengan laci, dan keluli tahan karat di zon basah ialah rupa paling diminati tahun ini.' },
        { q: 'Adakah kabinet dapur keluli tahan karat hanya untuk dapur komersial?', a: 'Tidak. Ia semakin digunakan di rumah kerana tahan lama dan higienik, terutamanya di kawasan lembap, dan boleh kelihatan kemas sebagai elemen reka bentuk.' },
      ],
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
