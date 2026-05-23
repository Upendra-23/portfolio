export const profile = {
  name: "Modem Upendra",
  initials: "MU",
  role: "Associate Software Engineer",
  company: "BNP Paribas",
  location: "Chennai, Tamil Nadu, India",
  email: "upendra200223@gmail.com",
  github: "https://github.com/Upendra-23",
  linkedin: "https://linkedin.com/in/upendramodem",
  summary:
    "Full Stack Developer with 2+ years of experience building scalable and maintainable enterprise applications. Strong backend-focused engineering experience with Java, Spring Boot, microservices, messaging systems, and enterprise integration platforms. Experienced in developing enterprise banking applications and integration workflows using the Spring ecosystem and messaging platforms. Passionate about backend engineering, distributed systems, low-level design, and scalable architectures.",

  highlights: [
    { label: "Experience", value: "2+ Years", icon: "briefcase" },
    {
      label: "Tech Stack",
      value: "Java · Spring Boot · Microservices",
      icon: "code",
    },
    {
      label: "Domain",
      value: "Enterprise Banking & Integration",
      icon: "building",
    },
    {
      label: "Focus",
      value: "Distributed Systems & Scalable Architecture",
      icon: "zap",
    },
  ],

  experience: [
    {
      company: "BNP Paribas",
      role: "Associate Software Engineer",
      period: "Jun 2024 – Present",
      responsibilities: [
        "Built AI-powered developer automation solutions using OpenCode agents and MCP tools to streamline Jira-to-PR workflows and automate SonarQube, Nexus, and Fortify issue remediation.",
        "Developed ACH Respay processing applications for EPN transaction consolidation and CFT-based client updates.",
        "Built backend applications to process BNY Electronic Check Register files and identify cross-border transactions for compliance reporting.",
        "Developed a dynamic query framework using the OpenSearch Java client with aggregation and export support.",
        "Built a centralized dashboard for monitoring and managing Camel routes and Apache NiFi process groups.",
        "Developed Apache NiFi data pipelines for Elasticsearch loading with parallel processing, validation, and reconciliation.",
        "Implemented an Authorization Server with Client Credentials flow for secure authentication across NAR applications.",
      ],
    },
    {
      company: "BNP Paribas",
      role: "Student Intern",
      period: "Jan 2024 – Jun 2024",
      responsibilities: [
        "Migrated two legacy applications from Java 8 to Java 17 and Spring Boot 1.4/2.4 to 3.20, achieving obsolescence scores of 4.5/5 and 4.8/5.",
        "Delivered permanent JDK 17 font rendering fix, eliminating manual font file copies on every minor update.",
        "Improved code coverage from 37% to 84% (51 to 123 unit tests).",
      ],
    },
    {
      company: "GeeksforGeeks",
      role: "Technical Content Writer Intern",
      period: "Oct 2022 – Apr 2023",
      responsibilities: [
        "Created engaging content on Data Structures, Algorithms, OS, and Networking for students and developers.",
        "Researched, reviewed, and published articles on DSA topics catering to a wide audience.",
      ],
    },
  ],

  honors: [
    {
      title: "BNP Paribas ISPL Hackathon",
      issuer: "BNP Paribas",
      date: "Feb 2026",
      description: "Won the Hackathon",
      badge: "🏆",
    },
  ],

  certifications: [
    {
      title: "Big Data Computing",
      issuer: "NPTEL",
      date: "Nov 2022",
    },
    {
      title: "Cloud Computing and Distributed Systems",
      issuer: "NPTEL",
      date: "Jun 2023",
    },
    {
      title: "Claude Code: AI-Assisted Development",
      issuer: "Udemy",
      date: "Mar 2026",
    },
  ],

  skills: {
    AI: ["Spring AI", "MCP", "OpenCode", "Claude Code"],
    Languages: ["Java", "SQL", "C++"],
    "Backend Development": [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "OAuth2",
      "Camunda",
    ],
    "Integration & Messaging": ["Apache Camel", "IBM MQ", "Kafka"],
    Databases: ["Oracle", "MSSQL", "Elasticsearch", "OpenSearch"],
    Frontend: ["HTML", "CSS", "Javascript", "Angular"],
    "Architecture & Design": [
      "System Design",
      "Low-Level Design",
      "OOP",
      "Design Patterns",
    ],
    "Tools & Platforms": ["Git", "Maven", "Tomcat", "Apache NiFi"],
  },

  projects: [
    {
      title: "BBank",
      description:
        "Developed a microservices-based banking application with Spring Cloud Config, Eureka service discovery, OpenFeign communication, Resilience4j fault tolerance, and Keycloak/OAuth2 security with full observability.",
      tech: ["Java", "Spring Boot", "OAuth2", "Spring Cloud", "Grafana", "RabbitMQ", "Docker"],
    },
    {
      title: "Payment Gateway System",
      description:
        "Designed a scalable payment gateway with transaction processing, fraud detection, and multi-currency support.",
      tech: ["Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Ride Sharing Application",
      description:
        "Built a ride-sharing platform backend with real-time driver matching, fare calculation, and trip management.",
      tech: ["Spring Boot", "Microservices", "System Design"],
    },
    {
      title: "Notification System",
      description:
        "Enterprise notification service supporting email, SMS, and push notifications with templating and retry logic.",
      tech: ["Spring Boot", "Apache Camel", "IBM MQ"],
    },
    {
      title: "Parking Lot System",
      description:
        "LLD-based parking lot management system supporting multiple floors, vehicle types, and dynamic pricing.",
      tech: ["Java", "OOP", "Design Patterns"],
    },
    {
      title: "ATM Machine Design",
      description:
        "Low-level design of an ATM system with cash dispensing, deposit, balance inquiry, and PIN management.",
      tech: ["Java", "LLD", "OOP"],
    },
    {
      title: "Order Management Workflow System",
      description:
        "State machine-driven order lifecycle management with status transitions, validation, and event handling.",
      tech: ["Spring State Machine", "Spring Boot", "Microservices"],
    },
    {
      title: "Vending Machine System",
      description:
        "LLD implementation of a vending machine with inventory management, payment processing, and change dispensing.",
      tech: ["Java", "OOP", "Design Patterns"],
    },
    {
      title: "Coffee Machine System",
      description:
        "Designed a coffee machine system supporting multiple beverage types, ingredient management, and concurrent requests.",
      tech: ["Java", "OOP", "Concurrency"],
    },
    {
      title: "Token Bucket Rate Limiter",
      description:
        "Implemented a token bucket rate-limiting algorithm for API throttling with configurable capacity and refill rates.",
      tech: ["Java", "System Design", "Concurrency"],
    },
    {
      title: "Smart GPS Vehicle Speed Controller",
      description:
        "IEEE research project — geo-fencing algorithm to automatically limit vehicle speed based on GPS zone identification.",
      tech: ["IEEE", "Geo-fencing", "IoT"],
    },
  ],

  publications: [
    {
      title:
        "Smart GPS Based Vehicle Speed Limit Controller on Zone Identification Using Geo-Fencing Algorithm",
      venue: "Institute of Electrical and Electronics Engineers - IEEE",
      venueShort: "IEEE - 2024",
      year: 2024,
      focus: "Geo-fencing and intelligent vehicle systems",
      url: "https://ieeexplore.ieee.org/document/10511421",
    },
    {
      title:
        "IoT Based Integration of RFID Wireless Payments via GSM-GPRS Networks",
      venue:
        "Proceedings of the International Conference on Innovative Computing & Communication (ICICC 2024)",
      venueShort: "ICICC 2024",
      year: 2024,
      focus: "IoT and wireless payment systems",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5022925",
    },
  ],

  education: [
    {
      institution: "SRM Institute of Science and Technology",
      location: "",
      degree: "Bachelor of Technology - BTech, Computer Science",
      period: "2020 – 2024",
      grade: "9.3/10",
    },
    {
      institution: "Sri Chaitanya College of Education",
      location: "",
      degree: "Intermediate, MPC",
      period: "2018 – 2020",
      grade: "96%",
    },
    {
      institution: "Sri Chaitanya Techno School",
      location: "",
      degree: "SSC",
      period: "2017 – 2018",
      grade: "10/10",
    },
  ],

  profiles: [
    {
      platform: "LeetCode",
      username: "Upendra_71",
      url: "https://leetcode.com/u/Upendra_71/",
      description:
        "Solved <strong>900+</strong> problems with a contest rating of <strong>1761</strong>.",
    },
    {
      platform: "GitHub",
      username: "Upendra-23",
      url: "https://github.com/Upendra-23",
      description:
        "Backend projects and system design implementations in Java and Spring Boot.",
    },
    {
      platform: "Resume",
      username: "View Resume",
      url: "https://drive.google.com/file/d/1hUHiVNYzFM7iNxyF3zsVF-L-jKLWie9P/view",
      description:
        "Experience, education, and technical skills across backend engineering and enterprise integration.",
    },
  ],

  interests: [
    "Backend Engineering",
    "Distributed Systems",
    "Scalable Architecture",
    "Enterprise Integration",
    "Messaging Systems",
    "System Design",
    "Microservices",
    "Workflow Engines",
    "Search Platforms",
  ],
};
