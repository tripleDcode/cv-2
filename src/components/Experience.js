import React from 'react';
import { Link } from 'react-router-dom'
import './Experience.css';
import CVEntry from './CVEntry';
import EduEntry from './EduEntry';

function Experience() {
  const experiences = [
    {
      title: 'Digital Content Executive',
      location: 'RKW Limited | Stoke, Stoke-on-Trent',
      dates: 'July 2024 - Present',
      responsibilities: [
        'Uploading product content using RKW’s PIM (Product Information Management system) whilst ensuring product content appears to best in class standard across a portfolio of branded websites. Ensuring all written product content is created with SEO in mind.',
        'Maintaining product video content on branded You Tube channels as well as blog and recipe content across the websites.',
        'Creating website landing pages to support campaigns, promotional periods and new product launches.',
        'Uploading and maintaining products on multiple TikTok shops, as well as overseeing product stock levels allocated to the shop forecast.',
        'Merchandising products on category pages to enhance UX and increase sales conversion.',
        'Performing regular on-site product content audits ensuring content is up to date and correct.',
        'Creating and managing promotional discount codes to support product promotions across the websites.',
        'Working with RKW’s website platform provider on web development projects, technical troubleshooting issues and every day and IT ticket queries.',
        'Creating promotional artwork for new product launches and marketing campaigns using Canva for use across websites.',
      ],
    },
    {
      title: 'Parcel Sorter',
      location: 'FEDEX | Chesterton, Newcastle-under-Lyme',
      dates: 'June 2023 - December 2023',
      responsibilities: [
        'I organized parcels for processing and transferred them from delivery vans to designated areas.',
        'Relocated sorted parcels to appropriate loading bays.',
        'Collaborated with both small and large teams and communicated with managers and colleges to optimize workflow efficiency and achieve targets.',
        'Frequently operated a pump truck to transport numerous and large parcels across the facility.',
        'Worked full time over the summer between study breaks; asked to return part time during study due to good performance.',
      ],
    },
    {
      title: 'Digital Marketing Assistant (Part Time)',
      location: 'Xerital Limited | Cobridge, Stoke-on-Trent',
      dates: 'Semtember 2020 - November 2022',
      responsibilities: [
        'Continuation of full time role below, on an ad-hoc basis as required, whilst studying full time at Keele University.',
      ],
    },
    {
      title: 'Digital Marketing Assistant (Full Time)',
      location: 'Xerital Limited | Cobridge, Stoke-on-Trent',
      dates: 'Semtember 2017 - September 2020',
      responsibilities: [
        'Managed, planned, and executed the design phase of various company websites.',
        'www.fotoceramic.co.uk – I used WordPress to replace an outdated site, improving customer conversion through optimized design and navigation.',
        'www.sadlergreen.com – I created a secure e-commerce system, allowing customized ceramic memorial plaque orders with variable pricing adjustments and trade account functionalities. I setup a customised form for customers to apply for trade status, which allowed the sites controller to approve and change account stats with ease. ',
        'www.hightemperaturebarcodes.com – I developed this website using WordPress to cater to the specific needs of the sanitaryware industry. I included detailed product descriptions, application areas, and customization options, allowing clients to order bespoke barcodes for various industrial uses. The clean, user-friendly design enhances navigation and helps convert visitors into customers through informative content and an easy-to-use contact form.',
        'I directed and implemented marketing & PPC campaigns across all social media platforms, significantly enhancing brand awareness.',
        'I created a YouTube channel that has achieved over 160,000 views across 9 videos.',
        'I delivered good customer service by handling orders, customizations, and enquiries via email, phone, and in-person interactions.',
        'Managed payments through Worldpay and Xero.',
        'Creation of the brand guidelines, a comprehensive document to detail all the colour schemes and logos across the business.',
        'Assisted in various operational areas, including sorting customer orders, creating and editing memorial plaques, stock management, and general administration.',
      ],
    },
    {
      title: 'Digital Marketing Apprentice',
      location: 'Xerital Limited | Cobridge, Stoke-on-Trent',
      dates: 'Semtember 2016 - September 2017',
      responsibilities: [
        'Digital Marketing of new and existing products to clients using online tools such as web design, development, and social media.',
        'Identified and implemented new product development opportunities.',
        'Edited and printed images for photo plaques, murals, and ceramic transfers.',
        'Checked, sorted, and interleaved coated paper to fulfil customer orders.',
      ],
    }
  ];

  const educations = [
    {
      title: 'BSc (Hons) Computer Science',
      location: 'Keele University',
      dates: 'Semptember 2020 - June 2024',
      responsibilities: [
        'Completeing modules in computer science to earn 360 credits over 4 years',
      ] 
    },
    {
      title: 'Digital Marketing Level 3',
      location: '3aaa | Hanley, Stoke-on-Trent',
      dates: 'September 2016 – September 2017',
      responsibilities: [
        'Gained foundational knowledge of digital marketing and applied it practically during my placement at Xerital (FotoCeramic).'
      ]
    },

    {
      title: 'A-Levels',
      location: 'St Thomas More Catholic College | Longton, Stoke-on-Trent',
      dates: 'September 2014 - July 2016',
      responsibilities: [
        'Double ICT: DD'
      ]
    }
  ]

  return (
    <>
    <div className='experience-header'>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/contact'>
        <button>Contact</button>
      </Link>
    </div>
    <div className='experience-container'>
      <h1>DANIEL DAVIES</h1>
      <h2>
        <mark style={{ backgroundColor: '#3498db' }}>Web Development</mark> |{' '}
        <mark style={{ backgroundColor: '#1abc9c' }}>Digital Content</mark>
      </h2>
      <div className='experience-email'>
        <i className='fa-solid fa-envelope' style={{ color: 'black' }}></i>
        <p>E-Mail: danieldavies2203@gmail.com</p>
      </div>
      <div className='experience-phone'>
        <i className='fa-solid fa-phone' style={{ color: 'black' }}></i>
        <p>Phone Number: 07383560716</p>
      </div>

      <h3>EXPERIENCE</h3>
      <hr></hr>
      {experiences.map((experience, index) => (
        <CVEntry
          key={index}
          title={experience.title}
          location={experience.location}
          dates={experience.dates}
          responsibilities={experience.responsibilities}
        />
      ))}

      <h3>EDUCATION</h3>
      <hr></hr>
      {educations.map((education, index) => (
        <EduEntry
          key={index}
          title={education.title}
          location={education.location}
          dates={education.dates}
          responsibilities={education.responsibilities}
        />
      ))}
    </div>
    </>
  );
}

export default Experience;
