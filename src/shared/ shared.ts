export interface IProject {
  id?: string | number;
  category: 'front' | 'back';
  title: string;
  btnColor?: string;
  subtitle: string;
  chips: IChips[];
}

export interface IAbout {
  id?: string | number;
  title: string;
  content: string;
  overlay: string;
}

export interface IChips {
  colors: string;
  title: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    category: 'front',
    title: 'Insta-Vue',
    btnColor: 'green',
    subtitle: `          <p>A minimalistic Instagram clone</p>
            made with:<br />`,
    chips: [
      {
        colors: 'green lighten-2',
        title: 'Vue',
      },
      {
        colors: 'red lighten-1',
        title: 'Firebase',
      },
      {
        colors: 'green',
        title: 'Quasar',
      },
    ],
  },

  {
    id: 2,
    category: 'front',
    title: 'VanillaJS SPA',
    btnColor: 'yellow accent-5',
    subtitle: ` <p>A frameworkless SPA</p>
            made with:<br />`,
    chips: [
      {
        colors: 'orange darken-2',
        title: 'JQuery',
      },
      {
        colors: 'amber darken-1',
        title: 'Handlebars',
      },
    ],
  },

  {
    id: 3,
    category: 'front',
    title: 'ECommerce React',
    btnColor: 'light-blue darken-4',
    subtitle: ` <p>A simple E-commerce site with react & stripe.</p>
        <br>
        made with:<br />`,
    chips: [
      {
        colors: 'light-blue darken-1',
        title: 'React',
      },
      {
        colors: 'light-blue darken-3',
        title: 'CommerceJS',
      },
      {
        colors: 'grey darken-2',
        title: 'Material UI',
      },
    ],
  },

  {
    id: 4,
    category: 'front',
    title: 'Rack Chat',
    btnColor: 'light-blue darken-4',
    subtitle: `<p>React Slack Chat clone</p>
            made with:<br />`,
    chips: [
      {
        colors: 'red lighten-1',
        title: 'Firebase',
      },
      {
        colors: 'light-blue darken-1',
        title: 'React',
      },
      {
        colors: 'grey lighten-1',
        title: 'Semantic UI React',
      },
    ],
  },

  {
    id: 5,
    category: 'front',
    title: 'Svelte<br>Portfolio',
    btnColor: 'yellow darken-4',
    subtitle: `<p>You're on it right now.</p>
            made with:<br />`,
    chips: [
      {
        colors: 'amber darken-2',
        title: 'Svelte',
      },
      {
        colors: 'red lighten-1',
        title: 'Svelte-SPA-Router',
      },
      {
        colors: 'indigo darken-1',
        title: 'Svelte-Materialify',
      },
    ],
  },

  {
    id: 6,
    category: 'front',
    title: 'Vue-C',
    btnColor: 'green',
    subtitle: `<p> Whatsapp clone testing Quasar</p>
            made with:<br />`,
    chips: [
      {
        colors: 'green lighten-2',
        title: 'Vue',
      },
      {
        colors: 'red lighten-1',
        title: 'Firebase',
      },
      {
        colors: 'green',
        title: 'Quasar',
      },
    ],
  },

  {
    id: 7,
    category: 'back',
    title: 'Golang Api',
    btnColor: 'blue lighten-2',
    subtitle: `<p>Microservices and api's created with:</p>
            <br />`,
    chips: [
      {
        colors: 'blue lighten-2',
        title: 'Golang',
      },
      {
        colors: 'yellow darken-3',
        title: 'beevo',
      },
      {
        colors: 'blue-grey',
        title: 'Gin',
      },
      {
        colors: 'blue-grey darken-2',
        title: 'Mux',
      },
    ],
  },

  {
    id: 9,
    category: 'back',
    title: 'NestJS Api',
    btnColor: 'red darken-2',
    subtitle: `<p> Where do you think this is coming from?</p>
            made with:<br />`,
    chips: [
      {
        colors: 'red darken-2',
        title: 'Nest.js',
      },
      {
        colors: 'blue darken-1',
        title: 'Typescript',
      },
    ],
  },

  {
    id: 10,
    category: 'back',
    title: 'MERN<br>Template',
    btnColor: 'light-blue accent-2',
    subtitle: `<p>A Use ready template for Mern apps</p>
			<br/>
			made with:<br/>`,
    chips: [
      {
        colors: 'green accent-4',
        title: 'Mongo',
      },
      {
        colors: 'yellow darken-3',
        title: 'Express',
      },
      {
        colors: 'green darken-2',
        title: 'Node.js',
      },
    ],
  },

  {
    id: 12,
    category: 'back',
    title: 'Haskell Api',
    btnColor: 'light-blue darken-4',
    subtitle: `<p>A simple Api using snap</p>
			<br/>
			made with:<br/>`,
    chips: [
      {
        colors: 'light-blue darken-3',
        title: 'Snap',
      },
      {
        colors: 'grey darken-1',
        title: 'Snap Templates',
      },
    ],
  },

  {
    id: 13,
    category: 'back',
    title: 'Rust Api',
    btnColor: 'light-blue darken-4',
    subtitle: `<p>One of the many byproducts of my love for Rust</p>
			made with:<br/>`,
    chips: [
      {
        colors: 'orange darken-4',
        title: 'Tokio',
      },
    ],
  },

  {
    id: 14,
    category: 'back',
    title: 'RoR<br>Microservice',
    btnColor: 'light-blue darken-4',
    subtitle: `<p>Little things are prettier than a Rails Microservice.</p>
			made with:<br/>`,
    chips: [
      {
        colors: 'red darken-2',
        title: 'Ruby on Rails',
      },
      {
        colors: 'red darken-1',
        title: 'Action Cable',
      },
    ],
  },
];

export const myInfo = [
  {
    id: 1,
    overlay: 'About',
    title: 'Me',
    content: `My name is Alvaro Guzman,
             I'm a self taught Software Developer, I'm currenyly located in Dominican Republic. <br>
             I plainly just love coding and enjoy a good challenge, Game Dev hobbiest  👾.
						 passionate reader!.
						 `,
  },
  {
    id: 2,
    overlay: 'Front-End',
    title: 'Front',
    content: `I'm a self-proclaimed hardcore Javascript lover,
            name a front-end framework/library and rest assured I've used the technology.
            From Vanilla JS to React, Svelte, Angular, Vue or even GopherJs, gotta love that pixel perfect finish 👨‍💻 .
            `,
  },
  {
    id: 3,
    overlay: 'Back-End',
    title: 'Back',
    content: `I might be partial about my love for JS, but I never limit myself to a single framework, library or even Language.
            Those technologys that have a soft spot in my heart are:
            Rust, Golang, Haskell, Ruby.
              If I continue the list it wont fit...
            `,
  },
];
