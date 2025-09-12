export interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const cards: CardData[] = [
  {
    id: 1,
    image: "/flow-images/am/login-page.png",
    title: "Login ",
    description: "Secure login for Account-Manager with email and password",
  },
  {
    id: 2,
    image: "/flow-images/am/project-selection.png",
    title: "Project Selection",
    description:
      "This Project Selection page lets account-manager choose from available projects before entering the workspace. Each project card displays name seat availability and status with navigation controls to browse between projects",
  },
  {
    id: 3,
    image: "/flow-images/am/seat-selection.png",
    title: "Seat Selection",
    description:
      'The process begins with the Seat Selection phase, where Account Managers see available Chat, Call, and Call & Chat seats. Seats are marked as Selected or Unavailable, and they confirm their choice using the Confirm Seat button."',
  },
  {
    id: 4,
    image: "/flow-images/am/main-dashboard.png",
    title: "Dashboard",
    description:
      "The main dashboard allows account managers to see all online visitors in real time. They can send  invites, view the visitor’s location. The dashboard also includes a Help Request tab to view assistance requests from visitors and provides the ability to block unwanted visitors.",
  },
  {
    id: 5,
    image: "/flow-images/am/call&chat.png",
    title: "Live Chat and Dashboard Interaction",
    description:
      "This interactive interface allows seamless management of live chat & call of visitor sessions. Key features include real-time communication, session duration tracking. Administrators can manage user tags, session history, and notes for personalized interactions. The dashboard offers control options, allowing admins to take control of the session and show brochures and amenities. A notification panel keeps track of updates and user interactions.",
  },
  {
    id: 6,
    image: "/flow-images/am/custom-invite.png",
    title: "Custom-Invite",
    description:
      "The Custom Invite Page, accessible from the main dashboard, allows account managers to send personalized  invitations by entering a visitor’s email address.",
  },
  {
    id: 7,
    image: "/flow-images/am/analytics.png",
    title: "Analytics",
    description:
      "The Analytics Page provides account managers with detailed insights into visitor interactions. It lists visitor details, including total calls, total chats, and total invites including performance metrics like  positive ratings and  negative ratings. The filter option allows users to customize the time range for viewing analytics . Account managers can also export the details of all connected visitor sessions for reporting and further analysis.",
  },
  {
    id: 8,
    image: "/flow-images/am/invites.png",
    title: "Invitations",
    description:
      "The Page lists all invitations sent to visitors. Account managers can view invitation details and export . This interface includes a search that allows users to search for specific invites based on user name",
  },
  {
    id: 9,
    image: "/flow-images/am/faq.png",
    title: "Faq ",
    description:
      "The FAQ Page provides visitors with quick answers to common questions",
  },
  {
    id: 10,
    image: "/flow-images/am/ticket.png",
    title: "Tickets ",
    description:
      "The Ticket Page allows account-manager to view and manage support tickets. It includes features for tracking existing tickets by priority (High, Medium, Low) and their status, as well as creating new tickets by specifying the issue type, setting the priority, and adding detailed information about the problem.",
  },
  {
    id: 11,
    image: "/flow-images/am/ticket.png",
    title: "Ticket Management and Collaboration Interface ",
    description:
      "This interface facilitates efficient ticket resolution by allowing support agents and admins to manage and track support tickets. It displays key ticket details such as priority and status, and includes a space for real-time conversations between the support team and admin. This communication ensures smooth collaboration to discuss issues and resolve tickets promptly.",
  },
];
