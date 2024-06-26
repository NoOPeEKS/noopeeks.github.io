// gitprofile.config.js

const config = {
  github: {
    username: 'NoOPeEKS', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['battleship-tqs'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'arnau-berenguer-jimenez',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://noopeeks.github.io',
    phone: '',
    email: 'arnauapps@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1UkTd91YTwkrp9kgRkNElKMe3fU3dz7-L', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'Python',
    'Java',
    'PHP',
    'Laravel',
    'Go',
    'Vue.js',
    'JavaScript',
    'React.js',
    'MySQL',
    'MongoDB',
    'TailwindCSS',
    'Docker',  
  ],
  experiences: [
    {
      company: 'Eurecat - Technology Research Centre',
      position: 'Software & Machine Learning Engineer',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://eurecat.org/',
    },
    {
      company: 'Bon Preu S.A.U',
      position: 'Charcuterie',
      from: 'August 2022',
      to: 'January 2023',
      companyLink: 'https://bonpreuesclat.cat',
    },
  ],
   certifications: [
    {
      name: 'Advanced Certificate in English C1',
      body: 'Cambridge CEFR C1 Level',
      year: 'June 2019',
      link: 'https://www.cambridgeenglish.org/'
    },
  ], 
  education: [
    {
      institution: 'Universitat Autònoma de Barcelona',
      degree: 'Computer Engineering Degree',
      from: '2020',
      to: '2025',
    },
    {
      institution: 'Academica High School',
      degree: 'High School',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'DataNvim',
      description:
        'A fully-featured batteries-included Neovim distribution for the world of Data Science. Prepared to run code and interact with Jupyter Notebooks without ever leaving your terminal.',
      imageUrl: 'https://static-00.iconduck.com/assets.00/apps-neovim-icon-2048x2048-21jvoi4h.png',
      link: 'https://github.com/NoOPeEKS/DataNvim',
    },
    {
      title: 'Decidim Deployment Guide',
      description:
        'A free and open-source guide for deploying a dockerized production-ready Decidim instance with automated scripts!',
      imageUrl: 'https://tecnopolitica.net/sites/default/files/styles/centered_760/public/Screenshot%202021-11-25%20at%2015-24-11%20Decidim.png?itok=GXBUZ4eS',
      link: 'https://github.com/NoOPeEKS/decidim-deployment-guide',
    },
    {
      title: 'LaraZillow',
      description:
        'A real estate listing marketplace app based on Zillow. Created using PHP & Laravel on the backend and VueJS on the frontend.',
      imageUrl: 'https://onesolutionsweb.com/wp-content/uploads/2021/05/langlogosArtboard-1-1.jpg',
      link: 'https://github.com/NoOPeEKS/laravel-inertia-listing-app',
    },
    {
      title: 'Background.rm',
      description:
        'A simple web application to erase image backgrounds using Cloudinary API. Built with Svelte.',
      imageUrl: 'https://shershen08.github.io/sveltejsnews/img/23617963.png',
      link: 'https://background-rm.netlify.app',
    },
    
  ],
  // Display blog posts from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};
export default config;
