export interface Product {
  id: number;
  catId: number;
  image : URL;
  name: string;
  price: string;
  description: string;
  rating : string;
  link : URL;
}
 
export const products = [
  {
    id: 1,
    catId : 1,
    image : "https://m.media-amazon.com/images/I/51AnvJO2c2L._AC_UL320_.jpg",
    name: 'CRISAN',
    price: '68.99 $',
    description: '16 oz CRISAN Extreme Hair Strengthening Hair Care Oil',
    rating : '4',
    link: "https://www.amazon.com/Extreme-Hair-Strengthening-Care-Oil/dp/B085ZSFVRC/ref=sr_1_1_sspa?keywords=products&qid=1656054092&sr=8-1-spons&psc=1&smid=A3R9H2VC2QYHQF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU0xDUVhOMkU0OUtMJmVuY3J5cHRlZElkPUEwNTUyMTA4WFVGS1dRNlJXRVY2JmVuY3J5cHRlZEFkSWQ9QTEwNDgxODMxOUxIWFNPMjE5OVQ4JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  },
  {
    id: 2,
    catId:1,
    image : "https://m.media-amazon.com/images/I/81NLDa0pJxL._AC_UL320_.jpg",
    name: 'Germ Guardian',
    price: '216.10 $',
    description: 'Germ Guardian AC4825 22” 3-in-1 True HEPA Filter Air Purifier for Home, Full Room, UV-C Light Kills Germs, Filters Allergies, Smoke, Dust, Pet Dander, Odors, 3-Yr Wty, GermGuardian, Grey 2-Pck',
    rating : '4.5',
    link: "https://www.amazon.com/GermGuardian-Purifier-Sanitizer-Allergens-Guardian/dp/B074Q3QWTY/ref=sr_1_2?keywords=products&qid=1656054092&sr=8-2"
  },
  {
    id: 3,
    catId:2,
    image : "https://m.media-amazon.com/images/I/81KDCe9p+4L._AC_UL320_.jpg",
    name: 'Rubbermaid Commercial',
    price: '68.99 $',
    description: 'Rubbermaid Commercial Products Tilt Dump Truck, 450 lbs 1/2 Cubic Yard Heavy Load Capacity with Wheels, Trash Recycling Cart, Black',
    rating : '4.5',
    link: "https://www.amazon.com/Rubbermaid-Commercial-Polyethylene-Capacity-FG9T1300BLA/dp/B004W7T2UG/ref=sr_1_3?keywords=products&qid=1656054092&sr=8-3"
  },
  {
    id: 4,
    catId:2,
    image : "https://m.media-amazon.com/images/I/7129NxSDGHL._AC_UL320_.jpg",
    name: 'AMIKA',
    price: '28.00 $',
    description: 'dream routine overnight hydrating hair treatment, 100ml | amika',
    rating : '5',
    link: "https://www.amazon.com/Extreme-Hair-Strengthening-Care-Oil/dp/B085ZSFVRC/ref=sr_1_1_sspa?keywords=products&qid=1656054092&sr=8-1-spons&psc=1&smid=A3R9H2VC2QYHQF&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU0xDUVhOMkU0OUtMJmVuY3J5cHRlZElkPUEwNTUyMTA4WFVGS1dRNlJXRVY2JmVuY3J5cHRlZEFkSWQ9QTEwNDgxODMxOUxIWFNPMjE5OVQ4JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
  },
  {
    id: 5,
    catId:2,
    image : "https://m.media-amazon.com/images/I/711hHl4sxgL._AC_UL320_.jpg",
    name: 'Daiwa Felicity Foot Massager',
    price: '188.00 $',
    description: 'Daiwa Felicity Foot Massager Vibration for Blood Circulation Booster Foot Vibe Pro Uses Infrared Heat Therapy',
    rating : '4.5',
    link: "https://www.amazon.com/Daiwa-Felicity-Massager-Vibration-Circulation/dp/B074PCJVP1/ref=sr_1_5?keywords=products&qid=1656054092&sr=8-5"
  },
  {
    id: 6,
    catId:3,
    image : "https://m.media-amazon.com/images/I/91cKga+d1YL._AC_UL320_.jpg",
    name: 'GermGuardian AC5250PT',
    price: '229.88 $',
    description: 'GermGuardian AC5250PT 28” 3-in-1 Large Room Air Purifier, Pet Pure HEPA Filter, UVC Sanitizer, Home Air Cleaner Traps Allergens for Pet Dander,Smoke, Odors, Mold, Dust, Germs,Energy Star Germ Guardian',
    rating : '4.5',
    link: "https://www.amazon.com/GermGuardian-AC5250PT-Sanitizer-Allergens-Guardian/dp/B01KX50GLO/ref=sr_1_6?keywords=products&qid=1656054092&sr=8-6"
  },
  {
    id: 7,
    catId:3,
    image : "https://m.media-amazon.com/images/I/71rE4Ul3-0L._AC_UL320_.jpg",
    name: 'Wow Dream Coat',
    price: '28.00 $',
    description: 'Color Wow Dream Coat Supernatural Spray – Multi-award-winning anti-frizz spray keeps hair frizz-free for days no matter the weather with moisture-repellant anti-humidity technology; glass hair results',
    rating : '4.5',
    link: "https://www.amazon.com/Color-Dream-Supernatural-Spray-Multi-award-winning/dp/B073CWSQ51/ref=sr_1_7?keywords=products&qid=1656054092&sr=8-7"
  },
  {
    id: 8,
    catId:4,
    image : "https://m.media-amazon.com/images/I/71vruBxKCaL._AC_UL320_.jpg",
    name: 'Oral-B 7500',
    price: '134.99 $',
    description: 'Oral-B 7500 Electric Toothbrush with Replacement Brush Heads and Travel Case, Rose Gold',
    rating : '4.5',
    link: "https://www.amazon.com/Oral-B-Rechargeable-Electric-Toothbrush-Powered/dp/B076N73Y8F/ref=sr_1_8?keywords=products&qid=1656054092&sr=8-8"
  },
  {
    id: 9,
    catId:4,
    image : "https://m.media-amazon.com/images/I/61WO14bFi3L._AC_UL320_.jpg",
    name: 'Oribe',
    price: '182.00 $',
    description: 'Oribe Gold Lust Repair & Restore Conditioner',
    rating : '4.5',
    link: "https://www.amazon.com/ORIBE-Gold-Repair-Restore-Conditioner/dp/B07XW38TTG/ref=sr_1_9?keywords=products&qid=1656054092&sr=8-9"
  },
  {
    id: 10,
    catId:4,
    image : "https://m.media-amazon.com/images/I/61EvKJbVqzL._AC_UL320_.jpg",
    name: 'Mebak',
    price: '99.99 $',
    description: 'Massage Gun Deep Tissue Percussion Muscle Massage Gun for Athletes,Electric Massagers Gun for Neck Back Shoulder Foot Body Pain Relief,Handheld Sports Massager Fascia Gun',
    rating : '4.5',
    link: "https://www.amazon.com/Percussion-Relaxation-Rechargeable-Brushless-Mebak/dp/B086XCB1QP/ref=sr_1_11?keywords=products&qid=1656054092&sr=8-11"
  },
]
  

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/