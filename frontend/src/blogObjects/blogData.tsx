export const blogPosts = [
  {
    id: 1,
    author: "Jane Simiyu",
    date: "2020-02-14",
    title: "Mpesa Connect!",
    content: "It all started in a cramped cyber café in Umoja. Jane Simiyu, then a freelance developer, noticed how many clients struggled to manage their M-Pesa payments while running small businesses. Many were spending hours manually tracking transactions, often using outdated notebooks or calling Safaricom support for statements. Jane teamed up with her former classmate Brian, who was skilled in backend APIs, and together they built Mpesa Connect. It was a lightweight API integration that slashed transaction fees by bundling payments into batches and syncing them with a user-friendly dashboard. Initially, they approached boda boda unions with the pitch, offering free trials to gain trust. Word spread rapidly within the small business community. Local hardware shops, salons, and mitumba sellers started using the app. Their turning point came when a popular financial blogger wrote about them, skyrocketing signups overnight. Now used by over 40,000 SMEs across Kenya, Mpesa Connect recently signed a pilot partnership with Safaricom and is integrating with accounting software to make bookkeeping seamless for micro-enterprises. Jane says her dream is to expand across East Africa and become the 'PayPal for Africa's informal economy'.",
    likes: 18,
    comments: 2,
    commentsList: [
      { username: "wambui123", text: "This is such a brilliant idea!" },
      { username: "dev_kevin", text: "Impressed by the Safaricom pilot, well done!" }
    ]
  },
  {
    id: 2,
    author: "Daniel Kiprono",
    date: "2019-08-03",
    title: "Twiga Harvest",
    content: "Daniel grew up in Eldoret, where he constantly witnessed piles of unsold produce rot in markets before it could reach consumers. He knew that farmers were hardworking, but poor logistics and middlemen were eating into their profits. In 2019, after studying logistics management, he and his cousin created Twiga Harvest—a platform that directly connected rural farmers with urban greengrocers. At first, they faced ridicule and skepticism from traditional brokers who felt threatened by this new model. They persisted, launching a beta version in Uasin Gishu County. They used simple USSD codes for farmers to log their produce and location. Greengrocers in Nairobi could see available stock and book deliveries in advance. With time, they developed a routing system that grouped orders geographically, cutting transport costs by 40%. Farmers started reporting better prices and more consistent income. They even partnered with local SACCOs to enable mobile credit services. Today, Twiga Harvest moves over 12,000 kilos of produce weekly and has expanded to Kisumu, Mombasa, and is eyeing Rwanda as its first international move.",
    likes: 34,
    comments: 6,
    commentsList: [
      { username: "farmerjoe", text: "I love the farmer-first approach!" },
      { username: "citygrocer", text: "We use this in Nairobi. A game changer!" }
    ]
  },
  {
    id: 3,
    author: "Aisha Mwikali",
    date: "2021-03-10",
    title: "AfyaBora Health",
    content: "When the pandemic struck, Aisha Mwikali was completing her final year of medical school and volunteering at rural clinics in Kitui. She was shocked at how these facilities lacked basic inventory like gloves and antibiotics, and how long it took to restock them. She began speaking to her friends in tech and soon launched AfyaBora Health. The platform allowed rural clinics to log inventory in real-time and automatically notify central stores when stock was low. They received a tiny grant from a local NGO and launched in just five clinics. Nurses loved it. They no longer had to fill endless paper forms or chase the county officials for supplies. AfyaBora’s second phase introduced a dashboard that tracked delivery delays, stockouts, and expiry dates. Aisha’s team began training health workers in digital literacy and included a feedback tool to report counterfeit medicine. Within two years, they were being used in over six counties. The platform drew attention from the WHO and Gates Foundation, who funded expansion and integration with national health databases. AfyaBora is now part of Kenya’s digital health transformation plan.",
    likes: 51,
    comments: 11,
    commentsList: [
      { username: "nursefaith", text: "Such a critical tool for rural clinics." },
      { username: "mkenya_health", text: "Glad to see youth solving real problems!" },
      { username: "doc_kamau", text: "I've seen AfyaBora in action—amazing!" }
    ]
  },
  {
    id: 10,
    author: "Kelvin Otieno",
    date: "2020-07-21",
    title: "ShuleYangu",
    content: "Growing up in Kibra, Kelvin noticed that many of his classmates dropped out or failed exams because their parents were unaware of their performance until it was too late. As a computer science student, he decided to do something about it. He built ShuleYangu, an app where teachers upload student scores and send weekly SMS summaries to parents. The project began with three public primary schools, where Kelvin personally trained teachers. Initially, there was resistance. Some educators feared being monitored, while parents worried about SMS charges. However, once results showed improved attendance and performance, the app gained popularity. It was recognized by the Safaricom Foundation and featured in a TV documentary about youth innovation. With more donor support, ShuleYangu expanded its features to include exam reminders, parent-teacher communication, and even basic career guidance prompts for Class 8 students. It now serves over 200 schools and aims to reach 1,000 by next year.",
    likes: 22,
    comments: 5,
    commentsList: [
      { username: "parent_kibra", text: "My child’s performance improved, thank you!" },
      { username: "teacher_njeri", text: "Easy to use and helpful for teachers." }
    ]
  },
  {
    id: 4,
    author: "Mercy Wambui",
    date: "2022-01-04",
    title: "MamaFix",
    content: "Mercy had spent too many days frustrated by unreliable fundis—some never showed up, others overcharged, and few were trained professionally. She realized the biggest pain was not the work, but trust. So she created MamaFix—a mobile platform that verified and trained female artisans in plumbing, electricals, and tiling. She started small, identifying five women in Githurai, paid for their technical certification, and coached them on customer service and professionalism. With a basic website and WhatsApp business account, she began linking them to clients in Nairobi. Word spread. Women clients in particular felt safer working with female fundis. Over time, she added more artisans, launched a mobile app, and started collecting reviews and job histories. MamaFix now has over 120 trained artisans, 60% of them single mothers. It’s not just a business—it’s a movement that’s restoring dignity to blue-collar work and challenging gender stereotypes. They've begun working with vocational colleges to create a formal training pipeline and plan to expand to Mombasa and Kisii soon.",
    likes: 44,
    comments: 7,
    commentsList: [
      { username: "nairobi_mama", text: "I finally found a great electrician here!" },
      { username: "handy_rose", text: "Proud to be one of the fundis on this platform." },
      { username: "homeowner_ke", text: "Reliable and safe. Great concept!" }
    ]
  },
  {
    id: 5,
    author: "Brian Kamau",
    date: "2021-11-28",
    title: "DigiFarm Insight",
    content: "Brian's family owned land in Nyandarua, but no matter how hard they worked, yields remained low. While studying data science, he decided to investigate. He realized that poor weather prediction and crop disease were major issues. He began building DigiFarm Insight—a platform that used satellite data, local weather sensors, and AI models to help farmers predict yield, irrigation timing, and disease risk. The MVP was built during a hackathon and caught the attention of KALRO. They helped him test it in Nakuru with 50 farmers. Within a season, participating farmers reported a 30% yield increase. Brian didn’t stop there. He created a dashboard for extension officers, developed Swahili and Kikuyu versions of the app, and integrated voice alerts for illiterate users. His biggest challenge was building trust—many farmers feared being tracked or tricked. But through village barazas and demo plots, he gained acceptance. Today, DigiFarm Insight has grown into a vital decision-making tool for thousands of farmers, especially in maize and horticulture belts.",
    likes: 29,
    comments: 3,
    commentsList: [
      { username: "maize_master", text: "Yields went up thanks to this tool!" },
      { username: "tech_farmer", text: "AI in farming is the future. Good job!" }
    ]
  },
  {
    id: 6,
    author: "Faith Nyongesa",
    date: "2018-10-11",
    title: "HustleHub Kenya",
    content: "Faith Nyongesa was laid off from her finance job in 2018 and turned to online writing. After struggling through the murky world of freelance platforms, she created a blog to share her journey. The blog exploded in popularity. Recognizing the need, she built HustleHub Kenya—a platform to guide youth on how to monetize their skills online. Starting with just 10 how-to articles and a few YouTube tutorials, the site evolved into a comprehensive online ecosystem. It now features certified micro-courses, mentorship circles, and an active job board linking to platforms like Fiverr and Upwork. Faith began hosting free webinars and visiting universities to mentor final-year students. With donor support, she opened a digital skills lab in Kakamega. The site now boasts over 5,000 trained youth and success stories ranging from data analysts to virtual assistants. Faith’s mission is simple: “If you have internet, you have opportunity.”",
    likes: 60,
    comments: 14,
    commentsList: [
      { username: "ke_writer", text: "I got my first gig thanks to HustleHub!" },
      { username: "sidehustlequeen", text: "Faith’s story is truly inspiring." },
      { username: "student_maina", text: "Used their courses to start freelancing." }
    ]
  },
  {
    id: 7,
    author: "Moses Kimani",
    date: "2020-05-18",
    title: "GreenMove Mobility",
    content: "Stuck in Mombasa traffic one day, Moses Kimani stared at the black smoke belching from a tuk-tuk in front of him. That moment sparked an idea: what if tuk-tuks were electric? Moses, a mechanical engineer, began sketching designs. With two friends, they built the first GreenMove tuk-tuk using salvaged parts and solar batteries. They struggled with regulations, funding, and public skepticism. But their determination paid off when they were accepted into a UN clean mobility accelerator. They used the funds to manufacture 10 units and built a mobile app that allowed clients to hail tuk-tuks and track emissions saved. Their drivers—mostly young men from low-income areas—received technical and financial training. GreenMove now operates a small but growing fleet in Kilifi and Mombasa. They’ve launched battery swap stations, and their model is being studied by universities as a case study for green urban transport in Africa.",
    likes: 37,
    comments: 8,
    commentsList: [
      { username: "eco_warrior", text: "Finally a clean option for city transport!" },
      { username: "solar_mama", text: "Love the use of solar power!" }
    ]
  },
  {
    id: 8,
    author: "Linet Ochieng",
    date: "2022-04-30",
    title: "WatotoReads",
    content: "Linet always loved stories. As a rural teacher in Kisumu, she noticed her students struggled to read—not due to lack of intelligence, but lack of materials. Books were expensive and scarce. So she began storytelling sessions under a mango tree every Saturday. Parents joined in, and children began looking forward to it. With support from local NGOs, Linet built WatotoReads, a digital library of Swahili and English storybooks with illustrations and voice narration. She partnered with local authors to create culturally relevant content and launched an app that works offline. With donor funding, she distributed tablets to public ECDE centers. Teachers reported better reading engagement and retention. Linet now conducts workshops for teachers on creative reading methods and is developing content in Luo and Luhya languages. Her mission is to ensure no child grows up without the magic of books.",
    likes: 19,
    comments: 1,
    commentsList: [
      { username: "mama_kisumu", text: "My child loves the storybooks on the app!" },
      { username: "teacher_lynn", text: "A great literacy tool for ECDEs." }
    ]
  },
  {
    id: 9,
    author: "Tony Muriithi",
    date: "2019-06-15",
    title: "JuaKaliNet",
    content: "Tony's father was a brilliant welder but always struggled to find consistent work. Clients would often forget him after a job, and marketing was non-existent. Tony built JuaKaliNet—an online platform that allowed informal artisans to create profiles, display past work, receive client reviews, and get jobs directly. He started with 15 artisans in Gikomba, photographing their work and uploading it manually. Over time, he automated the system and introduced a WhatsApp bot for users without smartphones. JuaKaliNet grew quickly, attracting carpenters, plumbers, painters, and masons. It introduced a verified badge system to reward consistent quality. The platform now serves over 1,000 artisans and has helped many secure long-term contracts with construction firms. Tony is working on integrating digital payments and a savings feature for artisans to help them build financial security.",
    likes: 48,
    comments: 9,
    commentsList: [
      { username: "carpenter_ben", text: "I get weekly clients through JuaKaliNet!" },
      { username: "diy_client", text: "Love supporting local artisans here." }
    ]
  }
];
