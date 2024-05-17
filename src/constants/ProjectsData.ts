/**
 * Represents a tag for a project.
 */
export type ProjectTag =
    | "blockchain"
    | "webdev"
    | "webscraping"
    | "datascience"
    // | "code-hunter"
    // | "undertale-3d";

/**
 * Represents the type of call-to-action (CTA).
 */
export type CtaType = "product" | "repository" | "store" | "video";

/**
 * Represents a call-to-action (CTA) item.
 */
export type Cta = {
    type: CtaType;
    text: string;
    href: string;
};

/**
 * Represents the type of device used in a project.
 */
export type DeviceType = "laptop" | "smartphone";

/**
 * Represents data specific to a laptop.
 */
export type LaptopData = {
    type: "laptop";
};

/**
 * Represents data specific to a smartphone.
 */
export type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

/**
 * Represents data about the device used in a project.
 */
export type DeviceData = {
    type: DeviceType;
    texture: string;
    textureCount: number;
} & (LaptopData | SmartphoneData);

/**
 * Represents data about a project.
 */
export type ProjectData = {
    refName: ProjectTag;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

/**
 * Complete list of Project data.
 */
export const PROJECTS: ProjectData[] = [
    {
        refName: "blockchain",
        title: "BlockChain",
        isTeam: false,
        description: [
            "Developed 3 decentralized social media web applications using React, CSS, Bootstrap, and web3.js/Ethers for integrating Ethereum.",
            'Reduced costs by 40% using an Ethereum smart contract to automate supply chain management processes..',
            "Built a private blockchain using Hyperledger Fabric 1.0 that enhanced data security and reduced risk exposure by 93%.",
            "Conceptualized software licenses on the blockchain to discourage piracy by enabling a secondary peer-to-peer marketplace, which allowed 8.6K developers to accept cryptocurrencies."
        ],
        tags: ["React", "Rust","Web3","smart Contract","Etherium", "Solana"],
        cta: [
            // {
            //     text: "Visit the WebSite",
            //     type: "product",
            //     href: "https://disteroby.github.io/unimiibo/",
            // },
            // {
            //     text: "See the Source Code",
            //     type: "repository",
            //     href: "https://github.com/disteroby/unimiibo",
            // },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_undertale3d.jpg",
           
        },
    },
    {
        refName: "webdev",
        title: "Web Development",
        isTeam: false,
        description: [
            "Developed front-end code using HTML, CSS, JavaScript, jQuery to create a responsive web application that works across 29 devices, including desktops and tablets.",
            "Created an interactive map for a real estate companys website that allowed 7K users to search by neighborhood and get real-time feedback about a property.",
            "Increased daily traffic from 35% to 80% by redesigning existing websites to improve user experience and incorporated SEO techniques.",
            "Increased sales by an average of over 20% annually through optimizing performance and delivery of resources using Webpack.",
        ],
        tags: ["react", "Vue", "Angular", "Laravel", "Django","Express"],
        device: {
            type: "laptop",
            textureCount: 3,
         
            texture: "texture_unimiibo.jpg",
        },
    },
     {
        refName: "webscraping",
        title: "Web Scraping",
        isTeam: false,
        description: [
            "Develop scripts to extract data from multiple websites and maintain the data pipelines ",
            "Implement web scraping solutions to extract data from various websites and store them in databases .",
            "Analyze data from websites, identify patterns and trends, and present them in easy-to-understand reports ",
            "Developed web scraping solutions to collect data from various websites and stored them in databases .",
        ],
        tags: ["Web scraping","Python","Selinium","Automation","Google Colab"],
        cta: [
            // {
            //     text: "Gameplay Video",
            //     type: "video",
            //     href: "https://www.youtube.com/watch?v=noz2mGBLV-4",
            // },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
             texture: "web_scraping.jpg",
        },
    },
    {
        refName: "datascience",
        title: "Data Science",
        isTeam: false,
        description: [
            "Skilled and ambitious data scientist with a strong mathematics background (machine learning, statistics, linear algebra, optimization methods, econometrics, mathematical analysis, deep learning).",
            "Key areas of technical expertise covers Python, Machine Learning, PyTorch, Computer Vision.",
            "Depth of knowledge: obtained a deeper understanding of computer vision tasks",
            "Experienced in building statistical models and implementing machine learning algorithms in Python and Java.",
        ],
        tags: ["Data process","Python","Data Analysis","Json","Excel","Data Chart"],
        cta: [
            // {
            //     text: "Gameplay Video",
            //     type: "video",
            //     href: "https://www.youtube.com/watch?v=noz2mGBLV-4",
            // },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "data_science.jpg",
        },
    },
    // {
    //     refName: "motivapp",
    //     title: "MotivApp",
    //     isTeam: false,
    //     description: [
    //         "Introducing MotivApp, a project that revolutionizes personal development!",
    //         "MotivApp stands as a testament to innovation, designed to empower individuals in their journey towards self-improvement. It serves as a comprehensive application aimed at helping users stay committed to their goals and aspirations.",
    //         "Whether it's quitting smoking, enhancing academic performance, hitting the gym regularly, saving money, or managing weight, MotivApp offers a diverse array of tools tailored to meet diverse needs. It embodies a fusion of technology and motivation, providing users with the support they need to turn aspirations into achievements.",
    //         "Available on the Android Play Store, MotivApp has garnered widespread acclaim, marked by an array of positive reviews and testimonials. With its intuitive interface and robust feature set, MotivApp emerges as a reliable companion on the path to personal growth and success. Experience the power of motivation at your fingertips with MotivApp.",
    //     ],
    //     tags: ["android", "first-project"],
    //     cta: [
    //         {
    //             text: "Go to Play Store",
    //             type: "store",
    //             href: "https://play.google.com/store/apps/details?id=distefano.roberto.motivapp",
    //         },
    //         {
    //             text: "Promotional Video",
    //             type: "video",
    //             href: "https://www.youtube.com/watch?v=iI5p9j6cgUk",
    //         },
    //     ],
    //     device: {
    //         type: "smartphone",
    //         deviceOrientation: "portrait",
    //         textureCount: 3,
    //         texture: "texture_motivapp.jpg",
    //     },
    // },
    // {
    //     refName: "slide-run",
    //     title: "Slide Run",
    //     isTeam: false,
    //     description: [
    //         "Introducing Slide Run, the ultimate arcade adventure for your smartphone. Embark on an endless race where the goal is to navigate through a labyrinth of walls with lightning-fast reflexes.",
    //         "Engage in exhilarating competition with friends and rivals worldwide through the online leaderboard. See who reigns supreme, dominating the global ranks with unparalleled skill and precision.",
    //         "With over 15 captivating skins available, Slide Run offers customization options to personalize your marble. From sleek classics to rare finds, each skin is meticulously crafted to suit your style. Collect coins as you dash through the game to unlock a treasure trove of skins, elevating your marble to legendary status.",
    //         "Are you ready to seize the legendary marble and conquer the labyrinth? Slide into action and test your mettle with Slide Run!",
    //     ],
    //     tags: ["unity", "arcade-game"],
    //     cta: [
    //         {
    //             text: "Gameplay Video",
    //             type: "video",
    //             href: "https://youtu.be/yORUsGCqQpw",
    //         },
    //     ],
    //     device: {
    //         type: "smartphone",
    //         deviceOrientation: "landscape",
    //         textureCount: 3,
    //         texture: "texture_slide-run.jpg",
    //     },
    // },
    // {
    //     refName: "mind-blooming",
    //     title: "Mind Blooming",
    //     isTeam: false,
    //     description: [
    //         "Enter the realm of mental wellness with Mind Blooming,  an innovative initiative from the University of Milano-Bicocca's Psychology and Computer Science departments, aims to democratize access to psychological support",
    //         "Mind Blooming heralds a new era in mental health care by offering remote pathways for the treatment of various psychological disorders. Designed to combat afflictions such as anxiety, depression, burnout, psychosomatic disorders, sleep disturbances, and self-destructive thoughts, the application serves as a beacon of hope for those in need.",
    //         "Upon launch, users begin with a thorough questionnaire to identify prevalent psychological disorders. Week by week, Mind Blooming provides personalized lessons and exercises to empower users in reclaiming mental well-being.",
    //         "This visionary project, the focus of my bachelor thesis, exemplifies the intersection of psychology and technology, reshaping the landscape of mental health care for generations to come.",
    //     ],
    //     tags: ["flutter", "university-project", "bachelor-thesis"],
    //     device: {
    //         type: "smartphone",
    //         deviceOrientation: "portrait",
    //         textureCount: 3,
    //         texture: "texture_mind-blooming.jpg",
    //     },
    // },
    
    
   
];
