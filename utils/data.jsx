import { AppConfig } from "@/config/AppConfig";

export const marqueeTexts = [
  { img: "/img/partner/p1.png" },
  { img: "/img/partner/p2.png" },
  { img: "/img/partner/p3.png" },
  { img: "/img/partner/p4.png" },
  { img: "/img/partner/p5.png" },
  { img: "/img/partner/p6.png" },
  { img: "/img/partner/p7.png" },
  { img: "/img/partner/p8.png" },
];

export const industriesSection = {
  industryItems: [
    {
      icon: "/img/industries/fintech.webp",
      name: "Fintech",
    },
    {
      icon: "/img/industries/healthcare.webp",
      name: "Healthcare",
    },
    {
      icon: "/img/industries/commerce.webp",
      name: "E-commerce",
    },
    {
      icon: "/img/industries/gaming.webp",
      name: "Gaming",
    },
    {
      icon: "/img/industries/retail.webp",
      name: "Retail",
    },
    {
      icon: "/img/industries/automotive.webp",
      name: "Automotive",
    },
    {
      icon: "/img/industries/legal.webp",
      name: "Legal",
    },
    {
      icon: "/img/industries/food.webp",
      name: "Food & Beverage",
    },
    {
      icon: "/img/industries/real.webp",
      name: "Real Estate",
    },
    {
      icon: "/img/industries/education.webp",
      name: "Education",
    },
    {
      icon: "/img/industries/manufacturing.webp",
      name: "Manufacturing",
    },
    {
      icon: "/img/industries/energy.webp",
      name: "Energy & Utilities",
    },
    {
      icon: "/img/industries/media.webp",
      name: "Media & Entertainment",
    },
    {
      icon: "/img/industries/tele.webp",
      name: "Telecommunications",
    },
    {
      icon: "/img/industries/finance.webp",
      name: "Finance & Insurance",
    },
    {
      icon: "/img/industries/transport.webp",
      name: "Logistics & Transportation",
    },
    {
      icon: "/img/industries/goverment.webp",
      name: "Government & Public Sector",
    },
  ],
  header: (
    <>
      Our Expertise Across <span class="text-primary">Multiple </span>{" "}
      Industries
    </>
  ),
  description:
    "With extensive experience across a variety of sectors, Apptage’s solutions are designed to meet the specific challenges and goals of each industry. No matter your sector, we’ve got the tools and expertise to deliver results.",
};

export const journeySection = {
  header: (
    <>
      Let’s Build Your <br /> Next Big Win{" "}
      <span class="text-primary">Together</span>
    </>
  ),
  description:
    "Great products don’t just happen — they’re designed, built, and scaled with the right partner. At Apptage, we make sure your ideas don’t stay ideas. ✨ Ready to launch faster, smarter, and stronger?",
  extraLink: (
    <>
      Want to see your business succeed at scale?{" "}
      <strong>Let’s start building your future today</strong>.
    </>
  ),
  cta: [
    { title: "Book Your Free Strategy Call" },
    { title: `Call Us: ${AppConfig.tel}`, variant: "outline" },
  ],
};

export const technologiesSection = {
  header: (
    <>
      Harness the Power of <span class="text-primary"> the Best</span>{" "}
      Technologies
    </>
  ),
  description: (
    <>
      Our team at Apptage uses a combination of <b>cutting-edge technologies</b>{" "}
      to create powerful, scalable, and secure solutions. From mobile apps to
      cloud-based infrastructures, we ensure that your product is not only
      functional but <b>designed for performance</b> and <b>growth</b>.
    </>
  ),
  cta: { title: " Let’s talk" },
  categories: [
    {
      id: "mobile",
      name: "Mobile Apps",
      technologies: [
        {
          group: "iOS",
          items: [
            {
              id: "swift",
              name: "Swift",
              img: "/img/technologies/swift.webp",
            },
            {
              id: "uikit",
              name: "UI Kit",
              img: "/img/technologies/uikit.webp",
            },
            {
              id: "rxswift",
              name: "RxSwift",
              img: "/img/technologies/rxswift.webp",
            },
            {
              id: "combine",
              name: "Combine",
              img: "/img/technologies/combine-swift.webp",
            },
            {
              id: "mvvm1",
              name: "MVVM",
              img: "/img/technologies/mvm.webp",
            },
            {
              id: "alamofire",
              name: "Alamofire",
              img: "/img/technologies/alamofire.webp",
            },
            {
              id: "coredata",
              name: "Core Data",
              img: "/img/technologies/core-data.webp",
            },
          ],
        },
        {
          group: "Android",
          items: [
            {
              id: "kotlin",
              name: "Kotlin",
              img: "/img/technologies/kotline.webp",
            },
            {
              id: "mvvm1",
              name: "MVVM",
              img: "/img/technologies/mvm.webp",
            },
            {
              id: "java",
              name: "Java",
              img: "/img/technologies/java.webp",
            },
            {
              id: "RxJava",
              name: "RxJava",
              img: "/img/technologies/java.webp",
            },
            {
              id: "retrofit",
              name: "Retrofit",
              img: "/img/technologies/retrofit.webp",
            },
            {
              id: "jetpack",
              name: "Jetpack",
              img: "/img/technologies/jetpack.webp",
            },
          ],
        },
      ],
    },
    {
      id: "web",
      name: "Web Platform",
      technologies: [
        {
          group: "Frontend",
          items: [
            {
              id: "React js",
              name: "React js",
              img: "/img/technologies/react.webp",
            },
            {
              id: "Next.Js",
              name: "Next.Js",
              img: "/img/technologies/nextjs.webp",
            },
            {
              id: "Angular",
              name: "Angular",
              img: "/img/technologies/angular.webp",
            },
            {
              id: "Vue",
              name: "Vue js",
              img: "/img/technologies/vuejs.webp",
            },
            {
              id: "Typescript",
              name: "Typescript",
              img: "/img/technologies/typescript.webp",
            },
            {
              id: "Html5",
              name: "Html5",
              img: "/img/technologies/html.webp",
            },
            {
              id: "CSS",
              name: "CSS",
              img: "/img/technologies/css3.webp",
            },
            {
              id: "javascript",
              name: "javascript",
              img: "/img/technologies/javascript.webp",
            },
            {
              id: "GraphQl",
              name: "GraphQl",
              img: "/img/technologies/graphicql.webp",
            },
            {
              id: "Apollo",
              name: "Apollo",
              img: "/img/technologies/apollo.webp",
            },
          ],
        },
        {
          group: "Backend",
          items: [
            {
              id: "Node js",
              name: "Nodejs",
              img: "/img/technologies/nodejs.webp",
            },
            {
              id: "Python",
              name: "Python",
              img: "/img/technologies/python.webp",
            },
            {
              id: "scala",
              name: "Scala",
              img: "/img/technologies/scala.webp",
            },
            {
              id: "Php",
              name: "Php",
              img: "/img/technologies/php.webp",
            },
            {
              id: "Spring",
              name: "Spring",
              img: "/img/technologies/spring.webp",
            },
            {
              id: ".Net",
              name: ".Net",
              img: "/img/technologies/dotnet.webp",
            },
            {
              id: "Laravel",
              name: "Laravel",
              img: "/img/technologies/laravel.webp",
            },
          ],
        },
        {
          group: "CMS",
          items: [
            {
              id: "Wordpress",
              name: "Wordpress",
              img: "/img/technologies/wordpress.webp",
            },
            {
              id: "Magento",
              name: "Magento",
              img: "/img/technologies/megento.webp",
            },
            {
              id: "Shopify",
              name: "Shopify",
              img: "/img/technologies/shopify.webp",
            },
            {
              id: "Contentful",
              name: "Contentful",
              img: "/img/technologies/contentfull.webp",
            },
          ],
        },
      ],
    },
    {
      id: "cross",
      name: "Cross Platform",
      technologies: [
        {
          group: "React",
          items: [
            {
              id: "Redux",
              name: "Redux",
              img: "/img/technologies/redux.webp",
            },
            {
              id: "Mobx",
              name: "Mobx",
              img: "/img/technologies/mobx.webp",
            },
            {
              id: "RxJS",
              name: "RxJS",
              img: "/img/technologies/rxjs.webp",
            },
            {
              id: "Redux Thunk ",
              name: "Redux Thunk ",
              img: "/img/technologies/redux.webp",
            },
          ],
        },
        {
          group: "Flutter",
          items: [
            {
              id: "Bloc",
              name: "Bloc",
              img: "/img/technologies/block.webp",
            },
            {
              id: "Dart",
              name: "Dart",
              img: "/img/technologies/dart.webp",
            },
            {
              id: "MVVM",
              name: "MVVM",
              img: "/img/technologies/mvvm.webp",
            },
            {
              id: "Rx Dart",
              name: "Rx Dart",
              img: "/img/technologies/dart.webp",
            },
          ],
        },
      ],
    },
    {
      id: "games",
      name: "Games",
      technologies: [
        {
          group: "Engines",
          items: [
            {
              id: "Unreal",
              name: "Unreal",
              img: "/img/technologies/unreal.webp",
            },
            {
              id: "Unity",
              name: "Unity",
              img: "/img/technologies/unity.webp",
            },
            {
              id: "Gadot",
              name: "Gadot",
              img: "/img/technologies/gadot.webp",
            },
            {
              id: "Cryengine",
              name: "Cryengine",
              img: "/img/technologies/cryengine.webp",
            },
          ],
        },
        {
          group: "Servers",
          items: [
            {
              id: "nakama",
              name: "nakama",
              img: "/img/technologies/nakama.webp",
            },
            {
              id: "photon",
              name: "photon",
              img: "/img/technologies/photon.webp",
            },
            {
              id: "AWS",
              name: "AWS",
              img: "/img/technologies/aws.webp",
            },
          ],
        },
      ],
    },
    {
      id: "database",
      name: "Data Base",
      technologies: [
        {
          group: "Database",
          items: [
            {
              id: "mongoDB",
              name: "mongoDB",
              img: "/img/technologies/mongodb.webp",
            },
            {
              id: "mysql",
              name: "mysql",
              img: "/img/technologies/mysql.webp",
            },
            {
              id: "Dynamodb",
              name: "Dynamodb",
              img: "/img/technologies/dynomodb.webp",
            },
            {
              id: "IBM",
              name: "IBM",
              img: "/img/technologies/ibm.webp",
            },
            {
              id: "Redis",
              name: "Redis",
              img: "/img/technologies/redis.webp",
            },
            {
              id: "Elasticsearch",
              name: "Elasticsearch",
              img: "/img/technologies/elasticsearch.webp",
            },
          ],
        },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & Devops",
      technologies: [
        {
          group: "DevOps",
          items: [
            {
              id: "Nginx",
              name: "Nginx",
              img: "/img/technologies/nginx.webp",
            },
            {
              id: "Docker",
              name: "Docker",
              img: "/img/technologies/docker.webp",
            },
            {
              id: "Kubernetes",
              name: "Kubernetes",
              img: "/img/technologies/kubernetes.webp",
            },
            {
              id: "Gradle",
              name: "Gradle",
              img: "/img/technologies/gradles.webp",
            },
          ],
        },
        {
          group: "Cloud",
          items: [
            {
              id: "aws",
              name: "AWS",
              img: "/img/technologies/aws.webp",
            },
            {
              id: "appium",
              name: "Appium",
              img: "/img/technologies/appium.webp",
            },
            {
              id: "azure",
              name: "Azure",
              img: "/img/technologies/azure.webp",
            },
            {
              id: "rackspace",
              name: "Rackspace",
              img: "/img/technologies/rackspace.webp",
            },
            {
              id: "linode",
              name: "Linode",
              img: "/img/technologies/linode.webp",
            },
            {
              id: "firebase",
              name: "Firebase",
              img: "/img/technologies/firebase.webp",
            },
            {
              id: "oracle",
              name: "Oracle Cloud",
              img: "/img/technologies/oracle.webp",
            },
            {
              id: "heroku",
              name: "Heroku",
              img: "/img/technologies/heroku.webp",
            },
          ],
        },
      ],
    },
  ],
};

export const journeyAboutSection = {
  header: (
    <>
      Ready to Start? Let's Talk About Your{" "}
      <span class="text-primary">Next Project</span>
    </>
  ),
  description:
    "At Apptage, we don’t just build—we collaborate, innovate, and evolve. Let’s discuss how we can take your business to the next level with custom digital solutions that drive real results.",
  cta: [
    { title: "Book Your Free Strategy Call" },
    { title: `Call Us: ${AppConfig.tel}`, variant: "outlineF" },
  ],
};

export const faqSection = {
  faqs: [
    {
      id: 1,
      question: "What makes Apptage different?",
      answer: `We don’t just deliver digital products—we create experiences that drive results. With customized strategies, innovative designs, and cutting-edge technology, we focus on solving your business challenges while delivering tangible results.`,
    },
    {
      id: 2,
      question: "How do you ensure the success of a digital project?",
      answer: `We take the time to truly understand your business, your goals, and your audience. Through detailed consulting, strategy planning, and user feedback, we ensure every project is aligned with your objectives and built to scale.`,
    },
    {
      id: 3,
      question: "What industries do you specialize in?",
      answer: `Apptage has helped businesses across fintech, healthcare, e-commerce, gaming, and more. We specialize in delivering innovative digital solutions tailored to your industry, ensuring that your product is both cutting-edge and market-relevant.`,
    },
    {
      id: 4,
      question: "Can you help me with a product launch or marketing strategy?",
      answer: `Absolutely! Our product launch consulting and digital marketing services ensure that your new product or service enters the market with a bang. From strategy to execution, we help you drive visibility, engagement, and growth from day one.`,
    },
  ],
};

export const awardsItems = [
  {
    id: 1,
    rating: 4.9,
    logo: "/img/home/dr-rush.svg",
    url: "https://www.designrush.com/agency/profile/apptage",
    logoColor: "text-teal-400",
    description:
      "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  },
  // {
  //   id: 2,
  //   rating: 4.9,
  //   logo: "/img/home/rf-firm.svg",
  //   logoColor: "text-purple-400",
  //   description:
  //     "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  // },
  {
    id: 3,
    rating: 4.9,
    logo: "/img/home/gd-firm.svg",
    url: "https://www.goodfirms.co/company/apptage",
    logoColor: "text-blue-400",
    description:
      "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  },
  // {
  //   id: 4,
  //   rating: 4.9,
  //   logo: "/img/home/app-firm.svg",
  //   logoColor: "text-pink-400",
  //   description:
  //     "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  // },
  {
    id: 3,
    rating: 4.9,
    logo: "/img/home/clutch-co.svg",
    url: "https://clutch.co/profile/apptage",
    logoColor: "text-blue-400",
    description:
      "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  },
  {
    id: 2,
    rating: 4.9,
    logo: "/img/home/trust-pilot.svg",
    url: "https://www.trustpilot.com/review/apptage.com",
    logoColor: "text-purple-400",
    description:
      "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  },
  {
    id: 4,
    rating: 4.9,
    logo: "/img/home/upcity.svg",
    url: "https://upcity.com/profiles/apptage",
    logoColor: "text-pink-400",
    description:
      "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  },

  {
    id: 4,
    rating: 4.9,
    logo: "/img/home/g2-logo.svg",
    url: "https://www.g2.com/products/apptage/reviews",
    logoColor: "text-pink-400",
    description:
      "At Apptage, we are committed to delivering top-quality solutions that exceed client expectations worldwide. Our consistently high ratings from trusted platforms reflect our dedication to innovation, reliability, and exceptional customer service.",
  },
];
