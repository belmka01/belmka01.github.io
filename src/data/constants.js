export const Bio = {
  name: "Fathi BELMKADEM",
  roles: [
    "Cyber Security Engineer",
    "AI/ML Security Specialist",
    "Software Engineer",
  ],
  description:
    "I am a Cyber Security Engineer with a focus on Zero Trust architecture and automated threat response. I am currently an MSc. AI candidate at Universität Passau bridging the gap between security operations and scalable machine learning pipelines. I specialize in secure AI-powered applications, LLMOps, and cloud-native architecture.",
  github: "https://github.com/fathi-belmkadem",
  resume:
    "https://drive.google.com/file/d/your-resume-link/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/fathi-belmkadem-6a9004198/",
  twitter: "https://twitter.com/fathi_belmkadem",
  insta: "https://www.instagram.com/fathi_belmkadem/",
  facebook: "https://www.facebook.com/fathi.belmkadem/",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C#",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Dart",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",
      },
      {
        name: "Assembly",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/assembly/assembly-original.svg",
      },
    ],
  },
  {
    title: "Cybersecurity Tools",
    skills: [
      {
        name: "Metasploit",
        image: "https://www.metasploit.com/favicon.ico",
      },
      {
        name: "Burp Suite",
        image: "https://portswigger.net/favicon.ico",
      },
      {
        name: "Nmap",
        image: "https://nmap.org/favicon.ico",
      },
      {
        name: "Nuclei",
        image: "https://nuclei.projectdiscovery.io/favicon.ico",
      },
      {
        name: "OSINT",
        image: "https://osintframework.com/favicon.ico",
      },
      {
        name: "Empire",
        image: "https://github.com/EmpireProject/Empire/favicon.ico",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      {
        name: "TensorFlow",
        image: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      },
      {
        name: "PyTorch",
        image: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
      },
      {
        name: "OpenAI API",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      },
      {
        name: "Scikit-learn",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "OpenCV",
        image: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black.png",
      },
      {
        name: "Pandas",
        image: "https://pandas.pydata.org/static/img/pandas_white.svg",
      },
      {
        name: "NumPy",
        image: "https://numpy.org/images/logo.svg",
      },
      {
        name: "Hugging Face",
        image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "InfluxDB",
        image: "https://www.influxdata.com/favicon.ico",
      },
      {
        name: "Git",
        image: "https://git-scm.com/favicon.ico",
      },
      {
        name: "Docker",
        image: "https://www.docker.com/favicon.ico",
      },
      {
        name: "Kubernetes",
        image: "https://kubernetes.io/favicon.ico",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Outfai: AI-Powered Fashion Assistant",
    date: "03/2025 - Ongoing",
    description:
      "Architected a production-grade mobile assistant using React Native (Expo) and Google Vertex AI, delivering personalized styling recommendations via automated image analysis and NLP. Engineered a scalable serverless backend on Supabase, reducing API response latency by 45%. Integrated vector databases for fine-tuned RAG workflows.",
    image: "/outfai_logo.png",
    tags: [
      "React Native",
      "Vertex AI",
      "Supabase",
      "LLMs",
      "RAG",
    ],
    category: "AI/ML",
    github: "https://github.com/fathi-belmkadem/outfai-app",
    webapp: "https://outfai-demo.netlify.app/",
  },
  {
    id: 2,
    title: "Kinetrack: Physiotherapy SaaS CRM",
    date: "08/2025 - 10/2025",
    description:
      "Architected a scalable multi-tenant SaaS platform managing 500+ patient profiles. Engineered automated clinical modules for invoicing and scheduling, reducing administrative overhead by 35%. Built a real-time analytics dashboard using React and D3.js. Automated deployment pipelines via GitHub Actions and Docker.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    tags: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "SaaS",
    ],
    category: "Full Stack Development",
    github: "https://github.com/fathi-belmkadem/kinetrack",
    webapp: "https://kinetrack-demo.netlify.app/",
  },
  {
    id: 3,
    title: "AI-Driven Automated Penetration Testing",
    date: "02/2024 - 07/2024",
    description:
      "Architected an autonomous AI-driven penetration testing system using Reinforcement Learning and Deep Learning, achieving a 92% accuracy rate in identifying exploitable vulnerabilities. Orchestrated automated security testing pipelines via Docker and GitLab CI/CD.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    tags: [
      "Python",
      "AI/ML",
      "Penetration Testing",
      "Docker",
      "GitLab CI/CD",
    ],
    category: "AI/ML",
    github: "https://github.com/fathi-belmkadem/ai-pentesting-tool",
    webapp: "https://ai-pentesting-demo.netlify.app/",
  },
  {
    id: 4,
    title: "MITRE ATT&CK Framework in SOAR",
    date: "09/2023 - 01/2024",
    description:
      "Integrated the MITRE ATT&CK framework into a SOAR platform, improving threat response efficiency by 45%. Automated OSquery data collection and parsing using Python and the ELK Stack. Engineered 20+ custom detection rules.",
    image: "/SOAR.png",
    tags: [
      "MITRE ATT&CK",
      "SOAR",
      "OSquery",
      "ELK Stack",
      "Python",
    ],
    category: "Cybersecurity",
    github: "https://github.com/fathi-belmkadem/attack-soar-integration",
    webapp: "https://attack-soar-demo.netlify.app/",
  },
  {
    id: 5,
    title: "Enterprise WAF Implementation",
    date: "01/2023 - 05/2023",
    description:
      "Deployed a high-availability Web Application Firewall (WAF) using ModSecurity as a reverse proxy, securing containerized microservices within a Kubernetes cluster. Configured custom OWASP Core Rule Sets to mitigate SQLi and XSS vectors, reducing attacks by 70%.",
    image: "/WAF.png",
    tags: [
      "ModSecurity",
      "Kubernetes",
      "Helm",
      "OWASP",
      "Docker",
    ],
    category: "Cybersecurity",
    github: "https://github.com/fathi-belmkadem/web-application-firewall",
    webapp: "https://waf-demo.netlify.app/",
  },
  {
    id: 6,
    title: "IoT Meteorology Station Dashboard",
    date: "10/2022 - 01/2023",
    description:
      "Prototyped a real-time monitoring application to visualize meteorological data from LoRaWAN sensors, handling high-throughput time-series data with InfluxDB. Developed a high-performance API using FastAPI to serve processed sensor data to a Flutter mobile frontend.",
    image: "/meteorology_app.png",
    tags: [
      "Flutter",
      "InfluxDB",
      "LoRaWAN",
      "FastAPI",
      "IoT",
    ],
    category: "Mobile App",
    github: "https://github.com/fathi-belmkadem/mobile-project",
    webapp: "https://meteorology-app-demo.netlify.app/",
  },
  {
    id: 7,
    title: "Network Traffic Surveillance",
    date: "06/2022 - 08/2022",
    description:
      "Developed Deep Learning models for real-time network traffic surveillance, improving the identification of anomalous patterns and DDoS signatures by 25%. Integrated ML-based traffic analysis tools into existing VPC Security Groups.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    tags: [
      "Deep Learning",
      "Network Security",
      "Traffic Analysis",
      "Python",
    ],
    category: "AI/ML",
    github: "https://github.com/fathi-belmkadem/network-traffic-surveillance",
    webapp: "https://traffic-surveillance-demo.netlify.app/",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Cybersecurity & DevOps, Working Student",
    company: "Skymatic GmbH",
    date: "02/2026 - Present",
    location: "Bonn, Germany (Remote)",
    img: "https://cryptomator.org/img/logo.png",
    description: [
      "Deployed and configured Wazuh SIEM on a Kubernetes (K8s) cluster, establishing centralized security monitoring.",
      "Performing regular Penetration Testing to identify and patch security gaps in the production environment.",
      "Contributing to the security lifecycle of Cryptomator and Cryptomator Hub by implementing DevSecOps best practices.",
    ],
    skills: ["SIEM", "Kubernetes", "DevSecOps", "Penetration Testing"],
  },
  {
    id: 2,
    title: "Network Security Engineer",
    company: "Orange TN",
    date: "10/2024 - 05/2025",
    location: "Tunis, Tunisia",
    img: "/Orange_S.A.-Logo.wine.png",
    description: [
      "Automated network security audits and traffic filtering tasks using Python, reducing manual configuration time by 40%.",
      "Engineered robust infrastructure security by deploying Fortinet, Juniper SRX, and Cisco WAF policies.",
      "Optimized B2B secure connectivity by architecting VPN infrastructures via MPLS and L2VPN, ensuring 99.9% uptime.",
      "Streamlined incident response by integrating real-time alerting systems with SIEM logs and Wireshark analysis."
    ],
    skills: ["Network Security", "Python", "Fortinet", "Juniper", "VPN", "SIEM"],
  },
  {
    id: 3,
    title: "Penetration Tester Intern",
    company: "RiskImmune",
    date: "02/2024 - 07/2024",
    location: "Tunis, Tunisia (Hybrid)",
    img: "/Responsible_cyber.jpg",
    description: [
      "Architected an autonomous AI-driven penetration testing system using RL and DL, achieving a 92% accuracy rate.",
      "Orchestrated automated security testing pipelines via Docker and GitLab CI/CD, accelerating assessments by 50%.",
      "Secured automated scanning workflows by implementing RBAC and IAM protocols, ensuring Zero Trust compliance."
    ],
    skills: ["AI/ML", "Penetration Testing", "Docker", "GitLab CI/CD", "Zero Trust"],
  },
  {
    id: 4,
    title: "Part-Time Tutor (Security Engineering Focus)",
    company: "6NLG",
    date: "09/2023 - 01/2024",
    location: "Tunis, Tunisia (Hybrid)",
    img: "/SOAR.png",
    description: [
      "Integrated the MITRE ATT&CK framework into a SOAR platform, improving threat response efficiency by 45%.",
      "Automated OSquery data collection and parsing using Python and the ELK Stack, increasing visibility by 60%.",
      "Engineered 20+ custom detection rules for complex attack vectors, reducing MTTR by 20%."
    ],
    skills: ["MITRE ATT&CK", "SOAR", "OSquery", "ELK Stack", "Python"],
  },
  {
    id: 5,
    title: "AI Security Intern",
    company: "INOTEQIA",
    date: "06/2023 - 08/2023",
    location: "Tunis, Tunisia",
    img: "/cytekia_logo.jpg",
    description: [
      "Implemented Scikit-learn based machine learning models within a Cuckoo Sandbox environment, enhancing evasive malware detection by 30%.",
      "Scaled the analysis environment using Docker containers, allowing for 3x higher throughput of malware samples."
    ],
    skills: ["Machine Learning", "Cuckoo Sandbox", "Docker", "Python", "Malware Analysis"],
  },
  {
    id: 6,
    title: "Network Surveillance Intern",
    company: "ANCS",
    date: "06/2022 - 08/2022",
    location: "Tunis, Tunisia",
    img: "/ANCS_logo.jpg",
    description: [
      "Developed Deep Learning models for real-time network traffic surveillance, improving the identification of anomalous patterns by 25%.",
      "Integrated ML-based traffic analysis tools into existing VPC Security Groups, reducing incident identification time by 40%.",
      "Modernized network defense protocols by formulating automated mitigation strategies."
    ],
    skills: ["Deep Learning", "Network Security", "Traffic Analysis", "Python"],
  },
];

export const education = [
  {
    id: 1,
    school: "Universität Passau",
    degree: "Master of Science – Artificial Intelligence",
    date: "10/2025 - Present",
    location: "Passau, Germany",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/University_of_Passau_logo.svg/1200px-University_of_Passau_logo.svg.png",
    description: "Courses: Mathematics for AI, LLMOps, Deep Learning, Machine Learning, Software Development, Natural Language Processing (NLP), Cloud Computing.",
  },
  {
    id: 2,
    school: "Higher School of Communication of Tunis - SUP'COM",
    degree: "Engineering Diploma – Telecommunication: Cyber Security and Defence",
    date: "09/2021 - 10/2024",
    location: "Ariana, Tunisia",
    img: "/Supcom_logo.jpg",
    description: "Courses: Ethical Hacking and Penetration Testing, Blockchain, Cyber Infrastructures Protection, Intrusion Detection, IoT, Cloud Computing Security, Application Security.",
  },
  {
    id: 3,
    school: "Preparatory School for Engineering of El Manar – IPEIEM",
    degree: "Pre-Engineering Studies (Math & Physics)",
    date: "09/2019 - 06/2021",
    location: "Tunis, Tunisia",
    img: "/institut-preparatoire-aux-etudes-dingenieurs-d-el-manar.png",
    description: "National Rank: 127/1500",
  }
];

export const certificates = [
  {
    id: 1,
    name: "IC2 - CyberSecurity Certified (CC)",
    issuer: "IC2",
    date: "Apr 2024",
    credential: "CC-2024-001",
  },
  {
    id: 2,
    name: "SCRUMstudy – Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    date: "Mar 2024",
    credential: "SFC-2024-002",
  },
  {
    id: 3,
    name: "TryHackMe – Jr Pentester",
    issuer: "TryHackMe",
    date: "Mar 2023",
    credential: "THM-JP-2023-003",
  },
  {
    id: 4,
    name: "Linux Professional Institute – LPIC-102",
    issuer: "Linux Professional Institute",
    date: "Dec 2021",
    credential: "LPIC-102-2021-004",
  },
];
