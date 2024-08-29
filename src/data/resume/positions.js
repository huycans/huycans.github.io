const positions = [
  {
    company: "Amazon",
    position: "Frontend Engineer",
    daterange: "August 2022 - Present",
    link: "https://www.amazon.com/",
    projects: [
      {
        name: "Frontend Monorepo UI Library",
        points: [
          "Maintained an NX monorepo frontend UI library used by 12 product teams inside Amazon Co-Branded Credit Cards Payments organization, facilitating building React-based modern web applications inside Amazon ecosystem",
          "Implemented enhancements to monorepo's building and testing processes, reducing build time by 60%, thereby improving developer experience and raising productivity for all client teams",
          "Led an org-wide campaign to update legacy unit tests by identifying gaps in codebase, writing a best practice guide, and holding educational sessions for clients, leading to an increase in overall code quality of clients' codebase",
          "Created and maintained documentation of the monorepo, including internal wikis and system design documents, to improve client's onboarding, development, and troubleshooting experience",
          "Ensured high level of operational excellence through monthly oncall activities to support the team's clients by keeping CI/CD pipelines healthy"
        ]
      },
      {
        name: "Secured Solution to Display Sensitive Data",
        points: [
          "Implemented cross-domain, iframe based solution to securely render retail customer’s personal data, isolating critical content against a compromised host and protecting content against Cross-site scripting (XSS) attacks",
          "Designed and built a Software Development Kit (SDK) package that includes ready-to-use APIs to facilitate client teams onboarding and integrating the security solution in their applications",
          "Devised async loading mechanism using Promises and Callbacks to allow data fetching and iframe assets fetching flows, helping reducing latency of security solution by 30% as compared to a non-async solution"
        ]
      }
    ]
  },
  {
    company: "Ameriprise",
    position: "Frontend Engineer",
    daterange: "August 2021 - Present",
    link: "https://www.ameriprise.com/",
    projects: [
      {
        name: "Riversource Financial Advisor Tools",
        points: [
          "Built suite of three financial planning calculators as Single Page Application (SPA) using React, HTML, CSS/SCSS, Typescript",
          "Handled internal state management following Redux architecture using Redux Toolkit; client-side routing managed using React Router",
          "Designed and built a library of reusable and highly customizable HTML form elements such as text input, checkbox, dropdown, etc. with custom validation and event handlers using React Context",
          "Built user-friendly UI for the SPA using responsive Flexbox design layouts and developed reusable styles using SCSS",
          "Developed report generation solution that allows clients to receive PDF report of financial calculation results instantly",
          "Implement interactive graphical interface using D3 graphic library so that user’s input are immediately reflected in calculation results",
          "Involved in various phases of the software development life cycle, such as requirements analysis, design, implementation, and maintenance in an Agile Scrum environment "
        ]
      },
      {
        name: "Columbiathreadneedleus.com Enhancements",
        points: [
          "Increased traffic to client’s target web content by 34% by implement new interactive homepage carousel slides using React and PostCSS",
          "Maintained and organized online web content and layout using Bloomreach backend CMS",
          "Enhanced mutual funds subscription function allowing users to specify which newsletters they want to subscribe to"
        ]
      }
    ]
  }
];

export default positions;
