const info = {
  profile: {
    name: 'David Higuita',
    position: 'FrontEnd Developer',
    image: require('./images/profile.png')
  },
  contact: {
    items: [
      {
        classIcon: 'email',
        classFa: 'fa fa-envelope',
        href: null,
        label: 'david.higuita.75@gmail.com'
      },
      {
        classIcon: 'linkedin',
        classFa: 'fa fa-linkedin',
        href: 'https://www.linkedin.com/in/david-higuita-873bb293/',
        label: 'david-higuita-873bb293'
      },
      {
        classIcon: 'github',
        classFa: 'fa fa-github',
        href: 'https://github.com/davidhiguita',
        label: 'davidhiguita'
      },
      {
        classIcon: 'twitter',
        classFa: 'fa fa-twitter',
        href: 'https://twitter.com/dhv_xvx',
        label: '@dhv_xvx'
      }
    ]
  },
  education: {
    items: [
      {
        title: 'Basic School',
        institution: 'Educational Institution Federico Angel',
        date: '1997 - 2001'
      },
      {
        title: 'High School',
        institution: 'Educational Institution José María Bernal',
        date: '2002 - 2007'
      },
      {
        title: 'Bioengineer',
        institution: 'University of Antioquia',
        date: '2008 - 2014'
      },
      {
        title: 'Specialist in mobile application development on android',
        institution: 'University of Antioquia',
        date: 'Jul 2016 - Dec 2016'
      }
    ]
  },
  languages: {
    items: [
      {
        label: 'Spanish',
        'level': 'Native'
      },
      {
        label: 'English',
        'level': 'Middle'
      }
    ]
  },
  interests: {
    items: [
      {
        label: 'Software Development'
      },
      {
        label: 'Reading'
      },
      {
        label: 'Guitar'
      }
    ]
  },
  summary: {
    description: `
      I am a Full Stack Javascript Developer, self-taught. My skills have been learning
      following tutorials, video tutorials, documentation of technologies among other things.
      I mainly use javascript technologies such as ReactJS, Mongodb, Express.
      I'm taking experience using React Native for the development of mobile applications,
      since I've been developing an app in a start up for four months, the app is called Mobi.
      I have also explored to a lesser extent Vue.js, since being aware of new technologies
      and tools exist in the world of Javascript seems to me indispensable.
      Due to my professional training (not totally focused on programming by the university)
      I have been totally self-taught, so I was able to develop two web applications for
      a research group from the university from which I graduated, the University of Antioquia,
      which for confidentiality I can not mention, besides that they are of internal use.
      The only thing I can mention is that they were apps developed only with jquery on
      the front, due to group demands, and real-time apps using socke.io.

      I am Bioengineer, passionate about programming. Always curious to learn and see
      what comes out new that can improve the quality of my code and apps. I love
      sharing what I know, learning from others and contributing what I can.
      My learning has been a little dynamic, as I started in the web development
      world using jquery and django in the backend; that's about a year and a half ago,
      but since I met Node.js and all the power of Javascript I was fascinated and started
      to investigate and investigate, which ended up delighted by the development with this
      language in the frontend and backend. I tried a time Angular.js and although I liked
      the proposal of components seemed a little cumbersome, then I tried Angular 2, which
      I really did not like, because I felt that I lost a little freedom in development.
      Finally I tried React.js and I am completely happy to use this library, because I
      feel more advances and more taste for frontend development, besides I have already
      more than nine months of experience developing with React Native.
    `
  },
  experiences: {
    items: [
      {
        position: 'Javascript Fullstack Developer',
        company: 'Sapco',
        time: 'Dec 2016 - May 2017',
        description: `
          A team developed an app called Mobi (for Android) using
          React Native for mobile app. For another developments (like web platforms)
          was used (by another partners) Angular.js
        `
      },
      {
        position: 'Javascript Fullstack Developer',
        company: 'Research Group GIBIC of University of Antioquia',
        time: 'Dec 2015 - Sep 2016',
        description: `
          I was who developed some web applications (backend and frontend) that
          group needed. An app was used to make control over their scientists articles
          to be more clear all information. Another app was being developed to use with
          some of their devices and show information on real time.
        `
      },
      {
        position: 'Apps developer for medical visualization',
        company: 'Research Group GIBIC of University of Antioquia',
        time: 'Nov de 2014 - Nov 2015',
        description: `
          I updating their web site and helping with web and desktop software
          development.
        `
      }
    ]
  },
  projects: {
    intro: 'These are a bit projects where I have been.',
    items: [
      {
        name: 'Mobi',
        description: `
          Mobile app (for android) used to make control about many details
          of the vehicles. For example to know when vehicles must being carried
          for mechanican review, payments...
          Actually this app isn't being updated and company doesn't support it.
        `
      },
      {
        name: 'Open Canasta',
        description: `
          This is a web app to allow to people reserve some products directly from
          country people and help them to avoid that they lose money or their products.
          Actually is under development.
        `
      }
    ]
  },
  skills: {
    items: [
      {
        title: 'Javascript',
        percentage: '80%'
      },
      {
        title: 'Css',
        percentage: '65%'
      },
      {
        title: 'React.js',
        percentage: '80%'
      },
      {
        title: 'Node.js',
        percentage: '78%'
      },
      {
        title: 'React Native',
        percentage: '65%'
      }
    ]
  }
};

export default info;
