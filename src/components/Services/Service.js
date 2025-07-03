import React, { useState } from 'react';
import './Service.css';
import MakeupIcon from "./Images/download.jpg";
import HaircareIcon from "./Images/download (1).jpg";
import FacialIcon from "./Images/facial.webp";
import WaxingIcon from "./Images/download (2).jpg";
import MehandiIcon from "./Images/download (3).jpg";
import ThreadingIcon from "./Images/threading.jpg";
import NailIcon from "./Images/nail.jpg";
import ManiIcon from "./Images/manipedi.jpg";
import StitchingIcon from "./Images/stitching.jpg";
import PackageIcon from "./Images/package.jpeg";


const Service = () => {
const categories = [
  {
    name: 'Make UP',
    icon: <img src={MakeupIcon} alt="Makeup" className="icon" />,
    subcategories: [
      { name: 'Party Makeup', count: 3, icon: '✨' },
      { name: 'Engagement Makeup', count: 3, icon: '💖' },
      { name: 'Bridal Makeup', count: 1, icon: '👰' }
    ]
  },
  {
    name: 'Haircare',
    icon: <img src={HaircareIcon} alt="Haircare" className="icon" />,
    subcategories: [
      { name: 'Haircut', count: 1, icon: '✂️' },
      { name: 'Hair Wash', count: 1, icon: '🚿' },
      { name: 'Hair Coloring', count: 1, icon: '🎨' }
    ]
  },
  {
    name: 'Facial',
    icon: <img src={FacialIcon} alt="Facial" className="icon" />,
    subcategories: [
      { name: 'All Type Skin Facials', count: 0, icon: '🌿' },
      { name: 'Dry Skin Facials', count: 0, icon: '💧' },
      { name: 'Oily Skin Facials', count: 0, icon: '🛢️' },
      { name: 'Anti Aging Skin Facials', count: 0, icon: '🕰️' }
    ]
  },
  {
    name: 'Waxing',
    icon: <img src={WaxingIcon} alt="Waxing" className="icon" />,
    subcategories: [
      { name: 'Honey Waxing', count: 0, icon: '🍯' },
      { name: 'Fruit Wax', count: 0, icon: '🍓' },
      { name: 'Sugar Wax (Sugaring)', count: 0, icon: '🍬' },
      { name: 'Chocolate Wax', count: 0, icon: '🍫' }
    ]
  },
  {
  name: 'Mehandi',
  icon: <img src={MehandiIcon} alt="Mehandi" className="icon" />,
  subcategories: [
    { name: 'Bridal Mehandi', count: 0, icon: '👰‍♀️' },
    { name: 'Arabic Mehandi', count: 0, icon: '🕌' },
    { name: 'Kids Mehandi', count: 0, icon: '🧒' }
  ]
},
{
  name: 'Threading',
  icon: <img src={ThreadingIcon} alt="Threading" className="icon" />,
  subcategories: [
    { name: 'Eyebrow Threading', count: 0, icon: '👁️' },
    { name: 'Upper Lip Threading', count: 0, icon: '👄' },
    { name: 'Full Face Threading', count: 0, icon: '😊' }
  ]
},
{
  name: 'Nail Art',
  icon: <img src={NailIcon} alt="Nail" className="icon" />,
  subcategories: [
    { name: 'Basic Nail Art', count: 0, icon: '🎨' },
    { name: 'Gel Nail Art', count: 0, icon: '💧' },
    { name: 'Bridal Nail Art', count: 0, icon: '👰‍♀️' }
  ]
},
{
  name: 'Mani & Pedi',
  icon: <img src={ManiIcon} alt="Mani" className="icon" />,
  subcategories: [
    { name: 'Manicure', count: 0, icon: '💅' },
    { name: 'Pedicure', count: 0, icon: '🦶' },
    { name: 'Mani Pedi Combo', count: 0, icon: '🧖‍♀️' }
  ]
},
{
  name: 'Stitching',
  icon: <img src={StitchingIcon} alt="Stitching" className="icon" />,
  subcategories: [
    { name: 'Aari Work', count: 0, icon: '🪡' },
    { name: 'Embroidery', count: 0, icon: '🧵' },
    { name: 'Blouse Stitching', count: 0, icon: '👚' },
    { name: 'Dress Alteration', count: 0, icon: '✂️' }
  ]
},
{
  name: 'Package Deals',
  icon: <img src={PackageIcon} alt="Package" className="icon" />,
  subcategories: [
    { name: 'Classic Skin Package', count: 0, icon: '🧖‍♀️' },
    { name: 'Prime Skin Package', count: 0, icon: '🌟' },
    { name: 'Wax Package', count: 0, icon: '🕯️' },
    { name: 'Hair Package', count: 0, icon: '💇‍♀️' }
  ]
}



];


  const [selectedMainCategory, setSelectedMainCategory] = useState(categories[0].name);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Luxury Engagement Make Up',
      category: 'Engagement Makeup',
      duration: '120 MINS',
      originalPrice: 7999,
      discountedPrice: 3999,
      discount: '50% Off',
      image: 'https://www.homesalon.in/product/1703942812birthday-party_anniversary.jpg',
      details: {
        steps: [
          'HD Base Engagement Makeup',
          'Hair Styling for Engagement',
          'Light Saree Draping',
          'Makeup Artist On-site'
        ],
        advances: [
          'Eyelashes included',
          'Basic eye makeup – shimmer/nude shades',
          'Kryolan/PAC products used',
          'Compact & contouring',
          'Saree pinning & minor accessories setup',
          'Touchup kit not included',
          'Only 1 hair style included',
          'No body makeup included'
        ]
      }
    },
    {
      id: 2,
      title: 'HD Party Makeup',
      category: 'Party Makeup',
      duration: '120 MINS',
      originalPrice: 10198,
      discountedPrice: 5099,
      discount: '50% Off',
      image: 'https://www.homesalon.in/product/1703926529makeup-_2-person_.jpg',
      details: {
        steps: [
          'Full HD Party Makeup Base',
          'Hair Curling or Straightening',
          'Makeup Setting Spray',
          'On-site touch-up'
        ],
        advances: [
          'Includes lashes & lens (optional)',
          'HD finish base with MAC products',
          'Bold lip color selection',
          '1 designer hair style included',
          'Dress help excluded',
          'Extra style costs additional',
          'Suitable for night parties',
          'Only 1 revision allowed'
        ]
      }
    },
    {
      id: 3,
      title: 'Party Makeup (Basic)',
      category: 'Party Makeup',
      duration: '90 MINS',
      originalPrice: 3999,
      discountedPrice: 1799,
      discount: '55% Off',
      image: 'https://www.homesalon.in/product/1703926108makeup-_1-person_.jpg',
      details: {
        steps: [
          'Basic Party Base Makeup',
          'Hair Blow Dry or Ponytail',
          'Makeup for face only',
          'In-home artist service'
        ],
        advances: [
          'Eyelashes NOT included',
          'Lightweight foundation & lipstick',
          'Simple compact coverage',
          'Basic eye shadow only',
          'Hair style options are limited',
          'No accessories included',
          'Only 1 dress change allowed',
          'Travel extra beyond 10km'
        ]
      }
    },
    {
      id: 4,
      title: 'Premium Bridal Makeup',
      category: 'Bridal Makeup',
      duration: '120 MINS',
      originalPrice: 12999,
      discountedPrice: 6999,
      discount: '46% Off',
      image: 'https://www.homesalon.in/product/1703953479premium-hd-bridal-makeup.jpg',
      details: {
        steps: [
          'Luxury Advance Bridal Make up',
          'Advance Hair Do',
          'Dress/Saree Draping',
          'Professional Makeup Artist'
        ],
        advances: [
          'Advance Bridal Make up',
          'Eyelashes are included',
          'Advance eye make up : Smokey/Cut crease/Glitter',
          'Advance Hair Do',
          'Crimping/ Fancy Bun / Fancy Braid',
          'Saree/Dupatta/Dress Draping is not included',
          'Brands included are PAC , Forever52 , Kryolan ,etc',
          'Accessories available on chargeable basis'
        ]
      }
    },
    {
      id: 5,
      title: 'Steps Hair Cut',
      category: 'Haircut',
      duration: '40 MINS',
      originalPrice: 899,
      discountedPrice: 549,
      discount: '40% Off',
      image: 'https://www.homesalon.in/product/1703840634step-cut_outter.jpg',
      details: {
        steps: ['Hair Consultation', 'Haircut', 'Blow dry finish'],
        advances: ['All face shapes supported', 'Layered or straight', 'Home service available']
      }
    },
    {
      id: 6,
      title: 'Organic Hair Wash',
      category: 'Hair Wash',
      duration: '20 MINS',
      originalPrice: 299,
      discountedPrice: 199,
      discount: '33% Off',
      image: 'https://www.homesalon.in/product/170385931320231229_192211_0000.png',
      details: {
        steps: ['Scalp Massage', 'Shampoo & Conditioner', 'Hair Dry'],
        advances: ['Sulfate-free shampoo', 'No added chemicals', 'Towel dry included']
      }
    },
      {
      id: 7,
      title: 'Organic Hair Wash',
      category: 'Hair Coloring',
      duration: '60 MINS',
      originalPrice: 3999,
      discountedPrice: 1999,
      discount: '50% Off',
      image: 'https://www.homesalon.in/product/1703861387signature-highlight_streaks-medium-_below-neck_.jpg',
      details: {
        steps: ['Hair size : Medium ( Upto elbow )', 'Shades: Black,Darkest Brown, Brown, Light Brown'],
        advances: ['Hair should be washed and dry before taking hair color service', 'For optimum results hair should have been washed max a day prior','Hair wash & Blow dry are not a part of the service', 'Hair should be washed with normal water 45 min post application']
      }
    },
    {
  id: 8,
  title: 'Glow Facial Treatment',
  category: 'All Type Skin Facials',
  duration: '45 MINS',
  originalPrice: 1299,
  discountedPrice: 799,
  discount: '38% Off',
  image: 'https://www.homesalon.in/product/1703433823vlcc_anti-tan_facial-min.jpg',
  details: {
    steps: [
      'Cleansing',
      'Exfoliation',
      'Steam & Blackhead Removal',
      'Face Massage & Pack'
    ],
    advances: [
      'Suitable for all skin types',
      'Removes tan & dead skin',
      'Brightens complexion',
      'Uses branded products'
    ]
  }
},
{
  id: 9,
  title: 'Blossom Kochhar Diamond Facial',
  category: 'Dry Skin Facials',
  duration: '45 MINS',
  originalPrice: 1599,
  discountedPrice: 898,
  discount: '44% Off',
  image: 'https://www.homesalon.in/product/1703522314cheryl_s_tan_clear_facial-min.jpg',
  details: {
    steps: [
     'Blossom Kochhar Five Step Facial',
      'Enhancement Of Natural Glow',
      'Suitable For Dry Skin Types'
    ],
    advances: [
    'Penetrates deeply into the skin & cures underlying skin problems',
    'Perfect for any special occasion,wedding, party'
    ]
  }
},
{
  id: 10,
  title: 'Oily Skin Detox Facial',
  category: 'Oily Skin Facials',
  duration: '50 MINS',
  originalPrice: 1399,
  discountedPrice: 899,
  discount: '36% Off',
  image: 'https://www.homesalon.in/product/1703578068lotus_radiant_pearl_facial-min.jpg',
  details: {
    steps: [
      'Oil-Control Cleanser',
      'Exfoliating Scrub',
      'Charcoal Mask',
      'Pore Tightening Toner'
    ],
    advances: [
      'Balances sebum production',
      'Prevents breakouts',
      'Cleanses deep pores',
      'Best for acne-prone skin'
    ]
  }
},
{
  id: 11,
  title: 'Anti-Aging Gold Facial',
  category: 'Anti Aging Skin Facials',
  duration: '75 MINS',
  originalPrice: 1799,
  discountedPrice: 1199,
  discount: '33% Off',
  image: 'https://www.homesalon.in/product/1703522697vedic_line_for_herbal_beauty_bio_white_-_dry_skin_-min.jpg',
  details: {
    steps: [
      'Gold Cleanser',
      'Collagen Massage',
      'Firming Face Mask',
      'Eye Serum Application'
    ],
    advances: [
      'Reduces fine lines',
      'Improves skin elasticity',
      'Boosts radiance',
      'Ideal for mature skin'
    ]
  }
},
{
  id: 12,
  title: 'Honey Waxing – Full Arms',
  category: 'Honey Waxing',
  duration: '30 MINS',
  originalPrice: 499,
  discountedPrice: 349,
  discount: '30% Off',
  image: 'https://www.homesalon.in/product/1703684924classic-honey-choco-wax.jpg',
  details: {
    steps: [
      'Pre-wax cleansing',
      'Application of warm honey wax',
      'Hair removal with strips',
      'Soothing gel post-wax'
    ],
    advances: [
      'Gentle on skin',
      'Removes tan',
      'Long-lasting smoothness',
      'Trained professionals'
    ]
  }
},
{
  id: 13,
  title: 'Fruit Wax – Half Legs',
  category: 'Fruit Wax',
  duration: '25 MINS',
  originalPrice: 599,
  discountedPrice: 399,
  discount: '33% Off',
  image: 'https://www.homesalon.in/product/1703691302chin-with-rica-brazilian_1.jpg',
  details: {
    steps: [
      'Fruit enzyme pre-treatment',
      'Waxing with fruit wax',
      'Hair removal and cleanup',
      'Moisturizing lotion finish'
    ],
    advances: [
      'Fragrance-based soft wax',
      'Ideal for sensitive skin',
      'Reduces redness',
      'Fruity aroma therapy included'
    ]
  }
},
{
  id: 14,
  title: 'Chocolate Wax – Full Legs',
  category: 'Chocolate Wax',
  duration: '40 MINS',
  originalPrice: 899,
  discountedPrice: 599,
  discount: '33% Off',
  image: 'https://www.homesalon.in/product/1703688354half-back-with-rica-wax.jpg',
  details: {
    steps: [
      'Cleansing and preparation',
      'Application of chocolate wax',
      'Hair removal with minimal pain',
      'Aftercare balm'
    ],
    advances: [
      'Minimizes ingrown hair',
      'Rich in cocoa & antioxidants',
      'Less painful experience',
      'Smooth & shiny finish'
    ]
  }
},
{
  id: 15,
  title: 'Sugar Wax (Sugaring) – Bikini Line',
  category: 'Sugar Wax (Sugaring)',
  duration: '35 MINS',
  originalPrice: 999,
  discountedPrice: 699,
  discount: '30% Off',
  image: 'https://www.homesalon.in/product/1703691008full-body-wax-with-rica.jpg',
  details: {
    steps: [
      'Sanitizing area',
      'Application of sugaring paste',
      'Gentle pulling technique',
      'Soothing cold compress'
    ],
    advances: [
      'Natural ingredients',
      'Less painful than hot wax',
      'Reusable sugar paste',
      'Perfect for sensitive zones'
    ]
  }
},
{
  id: 16,
  title: 'Bridal Mehandi - Full Hand',
  category: 'Bridal Mehandi',
  duration: '90 MINS',
  originalPrice: 1999,
  discountedPrice: 1499,
  discount: '25% Off',
  image: 'https://www.fashioncronical.com/wp-content/uploads/2024/11/Best-bridal-mehndi-designs-cover-1-1.webp',
  details: {
    steps: ['Front and back hand design', 'Intricate bridal patterns', 'Custom name writing'],
    advances: ['100% natural henna', 'Dark stain guarantee', 'On-site application']
  }
},
{
  id: 17,
  title: 'Arabic Mehandi - Both Hands',
  category: 'Arabic Mehandi',
  duration: '60 MINS',
  originalPrice: 999,
  discountedPrice: 699,
  discount: '30% Off',
  image: 'https://i.pinimg.com/originals/98/13/5e/98135e3d64f498229928cd3285a108e2.jpg',
  details: {
    steps: ['Simple floral and leafy designs', 'Quick dry application'],
    advances: ['Minimal design', 'Suitable for casual & festive events']
  }
},
{
  id: 18,
  title: 'Kids Mehandi - Front Hand',
  category: 'Kids Mehandi',
  duration: '30 MINS',
  originalPrice: 399,
  discountedPrice: 299,
  discount: '25% Off',
  image: 'https://i.ytimg.com/vi/B-FMRch1DCU/maxresdefault.jpg',
  details: {
    steps: ['Cute patterns for kids', 'Fast application'],
    advances: ['No chemicals', 'Gentle on skin']
  }
},
// Threading Services
{
  id: 19,
  title: 'Eyebrow Threading',
  category: 'Eyebrow Threading',
  duration: '10 MINS',
  originalPrice: 99,
  discountedPrice: 59,
  discount: '40% Off',
  image: 'https://www.homesalon.in/product/1724607269eye-brows.jpg',
  details: {
    steps: ['Cleanse area', 'Precision threading', 'Soothing gel'],
    advances: ['Expert shaping', 'Minimal pain', 'No chemicals']
  }
},
{
  id: 20,
  title: 'Upper Lip Threading',
  category: 'Upper Lip Threading',
  duration: '10 MINS',
  originalPrice: 79,
  discountedPrice: 49,
  discount: '38% Off',
  image: 'https://www.homesalon.in/product/1724607478upper_lips_threading.jpg',
  details: {
    steps: ['Threading', 'Cooling gel'],
    advances: ['Quick & painless', 'No redness', 'Clean finish']
  }
},
{
  id: 21,
  title: 'Full Face Threading',
  category: 'Full Face Threading',
  duration: '25 MINS',
  originalPrice: 299,
  discountedPrice: 199,
  discount: '33% Off',
  image: 'https://www.homesalon.in/product/1724607555full-face.jpg',
  details: {
    steps: ['Eyebrow, upper lip, forehead, chin', 'Post-thread cooling gel'],
    advances: ['Even skin tone', 'Removes fine facial hair']
  }
},

// Nail Art Services
{
  id: 22,
  title: 'Basic Nail Art',
  category: 'Basic Nail Art',
  duration: '30 MINS',
  originalPrice: 499,
  discountedPrice: 299,
  discount: '40% Off',
  image: 'https://www.minounails.in/wp-content/uploads/2024/08/b3c9fc50d7-930x620.jpg',
  details: {
    steps: ['Nail shaping', 'Base coat', 'Art design', 'Top coat'],
    advances: ['Quick dry polish', '2-finger design', 'Festive ready']
  }
},
{
  id: 23,
  title: 'Gel Nail Art',
  category: 'Gel Nail Art',
  duration: '60 MINS',
  originalPrice: 999,
  discountedPrice: 699,
  discount: '30% Off',
  image: 'https://i.pinimg.com/474x/53/72/26/5372262a3bfb7f3cd41479f3b7f6e472.jpg',
  details: {
    steps: ['Gel base', 'UV drying', 'Detailed designs'],
    advances: ['Long-lasting', 'Glossy finish', 'Multiple colors']
  }
},
{
  id: 24,
  title: 'Bridal Nail Art',
  category: 'Bridal Nail Art',
  duration: '75 MINS',
  originalPrice: 1499,
  discountedPrice: 999,
  discount: '33% Off',
  image: 'https://cdn0.weddingwire.in/article/8676/3_2/1280/jpg/96768-nail-art-designs.jpeg',
  details: {
    steps: ['Advanced design', 'Accessories added', 'Sealant coat'],
    advances: ['Intricate bridal motifs', 'Stones/glitter available', 'Lasts up to 2 weeks']
  }
},
{
  id: 25,
  title: 'Classic Manicure',
  category: 'Manicure',
  duration: '40 MINS',
  originalPrice: 499,
  discountedPrice: 299,
  discount: '40% Off',
  image: 'https://www.homesalon.in/product/1703775025outer_o3_-manicure-magnifying-charm.jpg',
  details: {
    steps: ['Hand soak', 'Nail trimming & shaping', 'Cuticle care', 'Polish application'],
    advances: ['Brighter hands', 'Relaxing massage', 'Quick dry polish']
  }
},
{
  id: 26,
  title: 'Classic Pedicure',
  category: 'Pedicure',
  duration: '50 MINS',
  originalPrice: 699,
  discountedPrice: 449,
  discount: '36% Off',
  image: 'https://www.homesalon.in/product/1703774003outer_sara_pedicure_pampering.jpg',
  details: {
    steps: ['Foot soak', 'Scrub & exfoliation', 'Nail trimming & shaping', 'Polish application'],
    advances: ['Removes dead skin', 'Smooth heels', 'Anti-tan scrub']
  }
},
{
  id: 27,
  title: 'O3+ Bubblegum Mani - Pedi',
  category: 'Mani Pedi Combo',
  duration: '90 MINS',
  originalPrice: 1199,
  discountedPrice: 799,
  discount: '33% Off',
  image: 'https://www.homesalon.in/product/1703753914o3_-pedicure-luxury-care.jpg',
  details: {
    steps: ['Full manicure + pedicure session', 'Massage, soak & polish'],
    advances: ['Full hand & foot care', 'Combo savings', 'Refreshing feel']
  }
},
{
  id: 28,
  title: 'Traditional Aari Work',
  category: 'Aari Work',
  duration: '3 DAYS',
  originalPrice: 1999,
  discountedPrice: 1499,
  discount: '25% Off',
  image: 'https://5.imimg.com/data5/FN/WA/RQ/SELLER-9549927/aari-work-course-500x500.jpg',
  details: {
    steps: ['Design consultation', 'Hand aari stitching', 'Final touchups'],
    advances: ['Fine threadwork', 'Beads & stones optional', 'Custom patterns']
  }
},
{
  id: 29,
  title: 'Designer Embroidery Work',
  category: 'Embroidery',
  duration: '4 DAYS',
  originalPrice: 2499,
  discountedPrice: 1899,
  discount: '24% Off',
  image: 'https://www.luxurionworld.com/cdn/shop/articles/aari-work-the-most-intricate-threadwork-895186.jpg?v=1673066773',
  details: {
    steps: ['Pattern selection', 'Thread & mirror work', 'Finishing and pressing'],
    advances: ['Colorful threads', 'Hand or machine done', 'Custom motifs available']
  }
},
{
  id: 30,
  title: 'Custom Blouse Stitching',
  category: 'Blouse Stitching',
  duration: '2 DAYS',
  originalPrice: 899,
  discountedPrice: 649,
  discount: '28% Off',
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/448728654/RX/XL/FB/13618299/celebrity-designer-blouse-500x500.jpg',
  details: {
    steps: ['Measurement', 'Stitching', 'Hook & padding work'],
    advances: ['Lining included', 'Neck & sleeve pattern choice', 'Home fitting available']
  }
},
{
  id: 31,
  title: 'Dress Alteration Service',
  category: 'Dress Alteration',
  duration: '1 DAY',
  originalPrice: 499,
  discountedPrice: 349,
  discount: '30% Off',
  image: 'https://content.jdmagicbox.com/comp/def_content/tailors/shutterstock-147651662-tailors-1-w1j93.jpg',
  details: {
    steps: ['Measurement check', 'Marking & cutting', 'Restitching & finishing'],
    advances: ['Same day delivery', 'Tight/loose adjustments', 'Available for all outfits']
  }
},
{
  id: 32,
  title: 'VLCC Facial Package',
  category: 'Classic Skin Package',
  duration: '90 MINS',
  originalPrice: 799,
  discountedPrice: 1599,
  discount: '50% Off',
  image: 'https://www.homesalon.in/product/1703314374classy-vlcc-fruit-clean-up_tightening-clean-up-_-under-arms-with-honey-choco-wax-_-shapeup-_-5-min-head-massage-_499_.jpg',
  details: {
    steps: ['Clean-Up', 'Basic Facial', 'Neck Massage'],
    advances: ['Improves texture', 'Removes tan', 'Glowing skin']
  }
},
{
  id: 33,
  title: 'Prime Skin Package',
  category: 'Prime Skin Package',
  duration: '120 MINS',
  originalPrice: 2999,
  discountedPrice: 1799,
  discount: '40% Off',
  image: 'https://www.homesalon.in/product/1703318554hair-spa-treatment-by-calix-organic-hair-spa-_up-to-shoulder_-_-d-tan_bleach-_face-_-neck_-_-classic-honey-choco-wax-_full-arms-_-underarms-_-shapeup_--_999_.jpg',
  details: {
    steps: ['Premium Facial', 'Face Pack', 'De-tan treatment'],
    advances: ['Deep cleansing', 'Hydrating skin care', 'Branded products used']
  }
},
{
  id: 34,
  title: 'Full Body Wax Package',
  category: 'Wax Package',
  duration: '90 MINS',
  originalPrice: 1499,
  discountedPrice: 999,
  discount: '33% Off',
  image: 'https://www.homesalon.in/product/1703404776full-arms_-half-legs-_-underarms-with-choco-honey-wax-_-shapeup-_-5-min-head-massage---_499_.jpg',
  details: {
    steps: ['Arms Waxing', 'Legs Waxing', 'Underarms Waxing'],
    advances: ['Honey wax used', 'Smooth finish', 'Skin-friendly']
  }
},
{
  id: 35,
  title: 'Hair Care Package',
  category: 'Hair Package',
  duration: '75 MINS',
  originalPrice: 1599,
  discountedPrice: 1099,
  discount: '31% Off',
  image: 'https://www.homesalon.in/product/1703404955relaxi_1.jpg',
  details: {
    steps: ['Haircut', 'Hair Spa', 'Blow Dry'],
    advances: ['Reduces hair fall', 'Shiny finish', 'Deep nourishment']
  }
}


   
  ];

const isMainCategorySelected = categories.some(
  cat => cat.name === selectedCategory
);

 const filteredServices = services.filter(service => {
  if (isMainCategorySelected) {
    const selectedMainCat = categories.find(cat => cat.name === selectedCategory);
    return selectedMainCat?.subcategories?.some(sub => sub.name === service.category);
  } else {
    return service.category === selectedCategory;
  }
});


  return (
    <div className="makeup-page">
       {/* ✅ Mobile layout */}
  <div className="mobile-category-wrapper">
    <div className="mobile-main-categories">
      {categories.map(cat => (
        <div
          key={cat.name}
          className={`main-cat-btn ${selectedMainCategory === cat.name ? 'active' : ''}`}
          onClick={() => {
            setSelectedMainCategory(cat.name);
            setSelectedCategory(cat.name);
          }}
        >
          {cat.icon} {cat.name}
        </div>
      ))}
    </div>

    <div className="mobile-sub-categories">
      {categories
        .find(cat => cat.name === selectedMainCategory)
        ?.subcategories.map(sub => (
          <div
            key={sub.name}
            className={`sub-cat-btn ${selectedCategory === sub.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(sub.name)}
          >
            {sub.name}
          </div>
        ))}
    </div>
  </div>

      <div className="layout">
 <aside className="sidebar">
  <ul className="category-list">
    {categories.map(cat => (
      <div key={cat.name} className="category-group">
        <li
          className={`category-item ${selectedCategory === cat.name ? 'selected' : ''}`}
          onClick={() => {
            setSelectedMainCategory(cat.name);
            setSelectedCategory(cat.name);
          }}
        >
          <span className="icon">{cat.icon}</span>
          <span>{cat.name}</span>
        </li>

        {cat.subcategories.map(sub => (
          <li
            key={sub.name}
            className={`subcategory-item ${selectedCategory === sub.name ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(sub.name)}
          >
            <span className="icon">{sub.icon}</span>
            <span>
              {sub.name} (
              {services.filter(service => service.category === sub.name).length}
              )
            </span>
          </li>
        ))}
      </div>
    ))}
  </ul>
</aside>



        <main className="service-cards">
          {filteredServices.map(service => (
            <div key={service.id} className="card">
              <div className="card-image">
                <img src={service.image} alt={service.title} />
                <div className="duration-badge">🕐 {service.duration}</div>
                <div className="discount-badge">{service.discount}</div>
              </div>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <div className="price-row">
                  <span className="price">₹{service.discountedPrice.toLocaleString()}</span>
                  <span className="original">₹{service.originalPrice.toLocaleString()}</span>
                  <span className="discount-text">{service.discount}</span>
                </div>
                <div className="button-row">
                  <button className="book-btn">Book Now</button>
                  <button className="view-btn" onClick={() => setSelectedService(service)}>👁️ VIEW DETAILS</button>
                </div>
              </div>
            </div>
          ))}

          {selectedService && (
            <div className="modal-overlay" onClick={() => setSelectedService(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedService(null)}>×</button>
                <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
                <h2>{selectedService.title}</h2>
                <div className="modal-price-row">
                  <span className="modal-discounted">₹{selectedService.discountedPrice.toLocaleString()}</span>
                  <span className="modal-original">₹{selectedService.originalPrice.toLocaleString()}</span>
                  <span className="modal-discount">{selectedService.discount}</span>
                </div>
                <button className="modal-book-btn">Book Now</button>
                <div className="modal-section">
                  <h3>What's Included</h3>
                  <div className="modal-subsection">
                    <h4>4 Step Process</h4>
                    <ul>
                      {selectedService.details?.steps.map((item, idx) => (
                        <li key={idx}>✅ {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="modal-subsection">
                    <h4>Advances</h4>
                    <ul>
                      {selectedService.details?.advances.map((item, idx) => (
                        <li key={idx}>✅ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Service;
