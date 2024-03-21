import Entity from '../../assets/images/planning-schedule 2.png';
import Administration from '../../assets/images/work-with-the-best 1.png';
import Accounting from '../../assets/images/stock-broker 1.png';
import Shared from '../../assets/images/best-in-class 1.png';
import Payroll from '../../assets/images/trading 1.png';
import Technical from '../../assets/images/code-version-control 1.png';

const servicesapi = [
  {
    id: 1,
    headding: 'ENTITY SETUP & MANAGEMENT',
    description: "Our experts are here to assist you Manage your organization's setup and post setup services. Choose from the wide range of setup management options RADEE8 has to offer.",

    image: Entity,
    id2: 'Entity',
    innerHead: [
      {
        id: 1.0,
        innerhead: 'Company Setup Advisory Services',
        link: '/explore#company',
      },
      {
        id: 1.1,
        innerhead: 'Real Estate Solutions',
        link: '/explore#real',
      },
      {
        id: 1.2,
        innerhead: 'Entity Registration and Amendment Solutions',
        link: '/explore#registration',
      },
      {
        id: 1.3,
        innerhead: 'Statutory Services',
        link: '/explore#statutory',
      },
      {
        id: 1.4,
        innerhead: 'Fiduciary Services',
        link: '/explore#fiduciary',
      },
    ],
  },
  {
    id: 2,
    headding: 'ADMINISTRATION & FACILITIES MANAGEMENT',
    description: 'Aspects like budgeting and compliance, maintenance and security ensure the efficient functioning of your organisation. RADEE8 takes care of s trategic planning, or day-to-day operations, while you can giving you time to focus on other important things.',

    image: Administration,
    id2: 'Administration',

    innerHead: [
      {
        id: 2.0,
        innerhead: 'Vendor Management',
        link: '/explore#vendor',
      },
      {
        id: 2.1,
        innerhead: 'Travel Management',
        link: '/explore#teavel',
      },
      {
        id: 2.2,
        innerhead: 'Event Management',
        link: '/explore#event',
      },
      {
        id: 2.3,
        innerhead: 'Facilities Management ',
        link: '/explore#facilitiesmanage',
      },
    ],
  },
  {
    id: 3,
    headding: 'ACCOUNTING & TAXATION',
    description: 'We take care of systematic recording, analysis, and reporting of financial transactions, ensuring accurate and transparent financial information. We are also focused on complying with tax regulations, minimizing tax liabilities, and optimizing tax strategies to enhance overall financial efficiency of your organisation.',

    image: Accounting,
    id2: 'Accounting',
    innerHead: [
      {
        id: 3.0,
        innerhead: 'Books of Accounts',
        link: '/explore#books',
      },
      {
        id: 3.1,
        innerhead: 'Monthly and Yearly P&L (Profit and Loss) and Balance Sheet',
        link: '/explore#balancesheet',
      },
      {
        id: 3.2,
        innerhead: 'Expense Management',
        link: '/explore#expanse',
      },
      {
        id: 3.3,
        innerhead: 'Accounts Audits',
        link: '/explore#accountaudits',
      },
      {
        id: 3.4,
        innerhead: 'Taxation',
        link: '/explore#taxtion',
      },
    ],
  },
  {
    id: 4,
    headding: 'SHARED HUMAN RESOURCES',
    description: 'If managing various aspects of Human Resources are proving to be a challange for your organization, let us take care of this problem for you. we proivde end-to-end Human Resources solutions.',
    image: Shared,
    id2: 'Shared',
    innerHead: [
      {
        id: 4.0,
        innerhead: 'Recruitment',
        link: '/explore#recruitment',
      },
      {
        id: 4.1,
        innerhead: 'HR Services',
        link: '/explore#hrservices',
      },
      {
        id: 4.2,
        innerhead: 'Learning and Development',
        link: '/explore#learningdev',
      },
    ],
  },
  {
    id: 5,
    headding: 'PAYROLL SERVICES',
    description: 'Payroll Service Management is a crucial aspect of administration, RADEE8 has you covered on calculating wages, handling deductions, and ensuring compliance with tax regulations.',

    image: Payroll,
    id2: 'Payroll',
    innerHead: [
      {
        id: 5.0,
        innerhead: 'Transactional Payroll',
        link: '/explore#trpayroll',
      },
      {
        id: 5.1,
        innerhead: 'Statutory Compliances',
        link: '/explore#statutory',
      },
      {
        id: 5.2,
        innerhead: 'Salary Structuring',
        link: '/explore#salarystructuring',
      },
      {
        id: 5.3,
        innerhead: 'Other Related Services',
        link: '/explore#relatedservice',
      },
      {
        id: 5.4,
        innerhead: 'Payroll Portal Automation',
        link: '/explore#payrollportal',
      },
    ],
  },
  {
    id: 6,
    headding: 'TECHNICAL & SOFTWARE COMPLIANCE',
    description: 'Get us onboard and RADEE8 will ensure that your organisation has the highest standard of safeguarding data, mitigating risks, and promoting efficient operations. Companies often establish protocols, conduct regular audits, and employ monitoring tools to verify and maintain technical and software compliance.',

    image: Technical,
    id2: 'Technical',

    innerHead: [
      {
        id: 6.0,
        innerhead: 'Excellence in Software Development',
        link: '/explore#softwaredevelop',
      },
      {
        id: 6.1,
        innerhead: 'Diverse Skill Sets for Varied Challenges ',
        link: '/explore#diverse',
      },
      {
        id: 6.2,
        innerhead: 'UX Designs and UI Development',
        link: '/explore#uidevelopment',
      },
      {
        id: 6.3,
        innerhead: 'A World of QA Expertise',
        link: '/explore#QAworld',
      },
      {
        id: 6.4,
        innerhead: 'Virtual DevOps Team',
        link: '/explore#devopsteam',
      },
      {
        id: 6.5,
        innerhead: 'SOC, ISO, HIPAA, etc. - Documentation, Compliance Tracking, and Readiness, Audit Preparedness',
        link: '/explore#auditpreparedness',
      },
    ],
  },
];

export default servicesapi;
