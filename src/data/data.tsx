import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background.png';
import porfolioImage4 from '../images/portfolio/donations.jpg';
import porfolioImage2 from '../images/portfolio/galileo.jpg';
import porfolioImage5 from '../images/portfolio/github-actions.jpg';
import porfolioImage3 from '../images/portfolio/osiris.jpg';
// import porfolioImage6 from '../images/portfolio/web-app.jpg';
import porfolioImage1 from '../images/portfolio/yoda.jpg';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Home,
  HomepageMeta,
  PortfolioItem,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'Developer Portfolio',
  description: 'React portfolio template built with react and next js',
};

export const SectionId = {
  Home: 'home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const homeData: Home = {
  imageSrc: heroImage,
  name: `I'm Dinesh.`,
  description: (
    <>
<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
  I work with <strong className="text-stone-100">Cloudstier Solutions Pvt Ltd</strong> as a{' '}
  <strong className="text-stone-100">Flutter Developer</strong>. Building complex, reusable code to solve challenging problems 
  and benefit consumers is what excites me. My enthusiasm lies in crafting sophisticated and maintainable code. 
  Developing user-focused, high-performing, and scalable mobile solutions is part of my experience.
</p>


    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      As a <strong>software engineer</strong>, I am passionate about creating elegant, maintainable code that solves complex problems and delivers value to users. With proficiency in a variety of technologies, including <strong>Flutter, Dart, NodeJS, and TypeScript</strong>, I have experience developing scalable, performant, and user-friendly mobile solutions.

    </>
  ),
  aboutItems: [
    {label: 'Location', text: 'Tirupattur,TamilNadu,India', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'India', Icon: FlagIcon},
    {label: 'Interests', text: 'Learning new technologies', Icon: SparklesIcon},
    {label: 'Study', text: 'Priyadarshini Engineering College,Affiliated with Anna University, Chennai.', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cloudstier Solutions PVT LTD', Icon: BuildingOffice2Icon},
  ],
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NembooBill',
    description: `
  
NembooBill streamlines billing with Bluetooth thermal printers, perfect for restaurants and small shops.
 
• Effortless Setup: Use just an Android mobile and a Bluetooth printer to start billing—no computer needed.
• Cloud Sync: Manage multiple shops or devices with automatic cloud synchronization.
• Cost-Effective: Reduce costs and save space with a compact, mobile-based solution.
• Easy Configuration: Sync products, sales transactions, and configure tax settings, including GST.

    `,
    url: 'https://play.google.com/store/apps/details?id=com.cloudstier.nemboobill',
    image: porfolioImage2,
  },

  {
    title: 'SV Groups ',
    description:
     `
     Discover your perfect home with SV Groups - your go-to app for house and apartment sale listings.
 
Enquiry Made Easy: Register and inquire about house details with a user-friendly enquiry form.
Dedicated Follow-Up: Enjoy seamless follow-up and record maintenance for future reference.
Professional Assistance: Get help from our experienced team, who will track the status and provide all necessary information regarding your enquiry.
     
     
     ` 

    ,
    url: 'https://play.google.com/store/apps/details?id=com.cloudstier.svhousing',
    image: porfolioImage4,
  },
  {
    title: 'OneClick - Home Services',
    description: `
    
    Through our OneClick app, you can book at home services - to home repairs & maintenance, such as AC servicing, electrician, plumber & carpenter. The complete list of home services is as follows:

Repairs: Electricians, Plumbers, Carpenters etc.,

Cleaning and Pest Control: Home Deep Cleaning, Pest Control, Bathroom Cleaning, Sofa Cleaning, Kitchen Cleaning, Carpet Cleaning, Car Cleaning

Home Projects: Home Painters, Mason works, Packers and Movers

Promises quality services at competitive price.

OneClick is a user-friendly app, easy to raise and track user service requests.

App Features:
Multiple easy ways to raise a service request.
Quick turnaround on any service request.
Clear dashboard to track the request status.
Convenient and secure payments
Get notified with latest updates
Customer Feedback’s on services.
`,
    url: 'https://play.google.com/store/apps/details?id=com.cloudstier.oneclick',
    image: porfolioImage3,
  },

  {
    title: 'Cloud MMS',
    description:  `
    Multi-business management with a single app.
Seamless onboarding for businesses and customers.
Easy configuration of features based on business needs.
Efficient management of transactions for goods/services and payments.
Transparent transactions to enhance customer relationships.
Credit collection management with reminders and notifications.
Tracking and highlighting customers with outstanding credit.
Immediate access to transaction history.
Bluetooth printing for billing and mini-statements.
Advanced reporting for products and services, providing valuable analytics.
    
    `,
     url: 'https://play.google.com/store/apps/details?id=com.cloudstier.materialmanagement',
    image: porfolioImage5,
  },
  {
    title: 'Cloud Chit',
    description:
      `
      Your gateway to seamless access to chit details and comprehensive insights into chit company operations. Our app, with user-friendly credentials granted by chit companies, empowers you to explore a wealth of information.

Stay updated with real-time chit participation, company details, overall chit progress, and transaction histories. Effortlessly navigate chit schedules to stay informed about upcoming events.

Experience a transparent and interactive platform that fosters community engagement in chit-related activities. Manage your chit portfolio with ease, ensuring you have all the information you need at your fingertips.

Whether you're a participant or interested in chit-company operations, our app offers a seamless and intuitive interface for a comprehensive understanding of the chit ecosystem.

Join us in financial empowerment and transparency. Download the app now and unlock a world of chit-related insights!
      
      
      `,
    url: 'https://play.google.com/store/apps/details?id=com.cloudstier.cloudchits',
    image: porfolioImage1,
  },

  // {
  //   title: 'Customer Web App',
  //   description: `
  //   The customer web application stands as a public web portal, providing a user-friendly interface for individuals seeking to initiate current bookings or plan future reservations without the need for an account. This platform caters to the convenience of guests, allowing them to effortlessly create bookings in real-time and schedule future reservations through the intuitive web portal. By eliminating the requirement for user accounts, the portal ensures a seamless and accessible experience for customers, enhancing their ability to engage with the booking process effortlessly. This customer-centric approach not only simplifies immediate bookings but also encourages individuals to plan and schedule their future reservations with ease, contributing to a streamlined and user-friendly booking experience.`,
  //   url: 'https://app.careem.com',
  //   image: porfolioImage6,
  // },
];

export const education: TimelineItem[] = [
  {
    date: '2018 - 2022',
    location: 'Priyadarshini Engineering College,Affiliated with Anna University, Chennai.',
    title: 'BE - Computer Science Engineering',
    content: (
      <p>
        {/* <strong style={{color: '#f97316 !important'}}>Skills:</strong> React.js · Next.js · Node.js · TypeScript · */}
        {/* Redux.js · Redux Thunk · Gitlab · Git · Ant Design · GitHub{' '} */}
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Tirupatture, TamilNadu, India',
    title: 'Mobile Application Devloper',
    content: (
      <p>
        <strong style={{color: '#f97316 !important'}}>Skills:</strong> Flutter · Dart · SQLite · Git ·
          Software Deployment · Agile Methodologies · CloudFlare D1 Database · Swagger · Azure DevOps
         · GitHub Desktop· Hono Web FrameWork · TypeScript  
         · Postmen API platform
         ' Good Knowledge of · Python · Flask · HTML · CSS  
      </p>
    ),
  },
  // {
  //   date: 'August 2021 - June 2022',
  //   location: 'Lahore, Punjab Pakistan',
  //   title: 'Software Engineer at Munch:ON',
  //   content: (
  //     <p>
  //       Munch:ON was a product-based business that offered meal services in KSA and the UAE. I worked on this product's
  //       web application to maintain it and add a lot of new features including favourite meals, adding items to the cart
  //       and placing order from cart, in-app tutorials and many others.
  //       <span style={{display: 'block', marginTop: '10px'}}>
  //         <strong style={{color: '#f97316 !important'}}>Skills:</strong> jQuery · Tailwind CSS · TypeScript · React.js ·
  //         GitHub · Redux.js · Node.js · Next.js · Cascading Style Sheets (CSS) · Bootstrap · JavaScript · Redux Thunk{' '}
  //       </span>
  //     </p>
  //   ),
  // },
];

export const testimonial: TestimonialSection = {
  imageSrc: '',
  testimonials: [
    {
      href: 'https://www.linkedin.com/in/selcukkizilkaya/',
      name: 'Selcuk Kizilkaya',
      text: 'Fazal demonstrates a strong focus on achieving outcomes and skillfully navigating through numerous challenges. Despite encountering several obstacles, he adeptly resolved each issue by engaging in collaborative discussions with team members, ensuring he could progress and successfully reach the intended goals.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/yasar1/',
      name: 'Yasar Rahman',
      text: 'Fazal demonstrated a commendable ability to work independently, delivering a high-quality final product with meticulous attention to detail.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/vimbaimidzi/',
      name: 'Vimbai Beverly Midzi',
      text: `Fazal's work was instrumental in making sure I had the foundations for a donations CMS. Before this, there was an overdependency on engineering support that was very difficult to secure. He listened to my needs and made edits where necessary to make it more usable to me.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/azan-ibrar-9b03a3202/',
      name: 'Azan Ibrar',
      text: `You're an outstanding engineer, and an even more remarkable friend. Your constant support and willingness to help other falcons make a significant impact. Thanks for all the fantastic contributions you bring to the table!`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/zaid-iqbal-702b55150/',
      name: 'Zaid Iqbal',
      text: `Thanks for being a supportive colleague.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/sumran-waheed/',
      name: 'Samran Waheed',
      text: `I want to highlight the outstanding collaboration with Fazal on our recent project. As the Back-End Developer, I worked closely with Fazal, who handled the Front-End tasks.

      Fazal's quick and efficient Front-End work greatly contributed to our project's success. His clear communication and proactive approach ensured seamless collaboration. Despite facing challenges on the Back-End, Fazal consistently provided valuable support, pushing the project forward.
      
      I commend Fazal for his dedication, proficiency, and positive attitude. Working with him was a pleasure, and I look forward to future collaborations.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/hamza-sohail1/',
      name: 'Hamza Sohail',
      text: `Thank you, Fazal, for always being so supportive and helpful with any kind of technical issue. You possesses great knowledge and the ability to share it with others. Thanks for dedicating your time to guide and support me and many others.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      href: 'https://www.linkedin.com/in/mohsin-khalid-a25669218/',
      name: 'Mohsin Khalid',
      text: `I would like to praise Fazal for always supporting me and guiding me during the start of my career. Your dedication and creativity are truly inspiring. Thank you for always helping me about the little details and overall structure of how things work at Careem.`,
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: (
    <>
      <strong style={{color: 'rgba(249, 115, 22, 1) !important'}}>Reach out</strong> to me through the following social
      links, and let's make things happen! 🚀.Looking forward to connecting with you! 🌟
    </>
  ),
  items: [
    {
      type: ContactType.Email,
      text: 'usernamedinee@gmail.com',
      href: 'usernamedinee@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'TamilNadu,India',
      href: 'https://maps.app.goo.gl/oF18UiPC2T5Nc7Rm9',
    },
    {
      type: ContactType.Instagram,
      text: '@ig_dinee',
      href: 'https://www.instagram.com/ig_dinee',
    },
    {
      type: ContactType.Github,
      text: 'whitedart',
      href: 'https://github.com/whitedart',
    },
  ],
};

export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/whitedart'},
  // {label: 'FaceBook', Icon: FacebookIcon, href: 'https://www.facebook.com/FazalJoyia0786?mibextid=ZbWKwL'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dinesh-p-t-354886320/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/fazal_joyia.js/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Fazal__Joyia'},
];
