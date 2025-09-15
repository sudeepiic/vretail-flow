export interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  features: Array<string>;
}

export const cards: CardData[] = [
  {
    id: 1,
    image: "/flow-images/am/login-page.png",
    title: "Login",
    description: "Secure login for Account Manager with email and password.",
    features: [
      "Protected with JWT",
      "Forgot password option",
      "Role-based access",
    ],
  },
  {
    id: 2,
    image: "/flow-images/am/project-selection.png",
    title: "Project Selection",
    description:
      "Account Managers can select any one of the projects assigned by Admin ",
    features: [
      "View all assigned projects",
      "Check Totals Seats in Project",
      "See project status (Active/Inactive)",
    ],
  },
  {
    id: 3,
    image: "/flow-images/am/seat-selection.png",
    title: "Seat Selection",
    description:
      "Account Managers can select available Chat, Call, or Call & Chat seats. Seats are marked as Selected or Unavailable, and choices are confirmed using the Confirm Seat button.",
    features: [],
  },

  {
    id: 4,
    image: "/flow-images/am/main-dashboard.png",
    title: "Dashboard",
    description:
      "Centralized Dashboard for Account Manager to view and manage visitor sessions.",
    features: [
      "View real-time online visitors with info like browser, platform, and location",
      "Set AM mode to filter Call Only, Chat Only or Call & Chat Only sessions",
      "Send chat or call invites to online visitors",
      "Ban unwanted visitors from further sessions",
      "Toggle between Active, Inactive, and All visitors",
      "Filter Online Visitor by specific time",
      "View Selected Visitor previous Session History(Call and Chat), Location on Map, Session tags assigned by AM (Created by Admin), Visitor Basic Info",
      "AM can ban or unban visitors from further sessions for any sensible reasons",
      "Get real time Notification about sessions conducted by other AM for the selected project",
      "View Detail Session History in History Tab",
      "View real time visitor's help request details",
      "Accept visitor's help request for a requested type session",
      "Link to copy Project Url ",
    ],
  },
  {
    id: 5,
    image: "/flow-images/am/custom-invite.png",
    title: "Custom Invite",
    description:
      "Send custom invites to Visitors for a session on desired time and date over email",
    features: ["Pin Protect Custom Invite Session for Selective Projects"],
  },
  {
    id: 6,
    image: "/flow-images/am/send-note.png",
    title: "Dashboard",
    description: "Send Quick Notes to Selected Visitor in real time  ",
    features: [],
  },

  {
    id: 7,
    image: "/flow-images/am/vault.png",
    title: "Dashboard",
    description: "Upload Documents to Vault for Detail Analysis ",
    features: [],
  },

  {
    id: 8,
    image: "/flow-images/am/sessionDashboard.png",
    title: "Session Started Dashboard",
    description: "AM can start a call or chat session with the visitor",
    features: [
      "Interactive window with normal and full screen view of the showcase product can be controlled by AM during live session ",
      "Mute, unmute, Video On/off, Disconnect Session, Take or Give Control of product viewing can be done by AM during live session",
      "All the current session visitor Information like name, email, phone number, location, session history, special notes, call duration can be seen in the Dashboard",
      "Chat with the visitor in real time using the chat widget",
      "Update Visitor Info ",
    ],
  },
  {
    id: 9,
    image: "/flow-images/am/offers.png",
    title: "Custom Offers",
    description:
      "AM can send custom offers to visitor in real time during live session",
    features: [],
  },
  {
    id: 10,
    image: "/flow-images/am/gridNote.png",
    title: "Table Notes",
    description:
      "AM can use table notes to send quick notes in table view to visitor in real time during live session",
    features: [],
  },
  {
    id: 11,
    image: "/flow-images/am/visitor-feedback.png",
    title: "Visitor Feedback",
    description: "Options to save feedback of visitor at session end",
    features: [],
  },
  {
    id: 12,
    image: "/flow-images/am/join-modals.png",
    title: "Attention Modals",
    description:
      "Displays important alerts such as Account Manager login from another device, poor network connection, or when a visitor joins another session.",
    features: [],
  },

  {
    id: 13,
    image: "/flow-images/am/analytics.png",
    title: "Analytics",
    description:
      "Provides detailed insights into visitor interactions, including total calls, chats, and invites, along with performance metrics like positive and negative ratings. Includes time range filters and export options.",
    features: [
      "Track total calls, chats, and invites",
      "Measure positive and negative ratings",
      "Filter analytics by time range",
      "Export visitor session data",
    ],
  },
  {
    id: 14,
    image: "/flow-images/am/invites.png",
    title: "Invitations",
    description:
      "Lists all invitations sent to visitors. Account Managers can view details, export data, and search for specific invites by visitor name.",
    features: [
      "View list of all invites",
      "Filter by Date Range",
      "Search invites by visitor name",
      "Export invitation data",
      "Check status of sent invites",
    ],
  },
  {
    id: 15,
    image: "/flow-images/am/faq.png",
    title: "FAQ",
    description:
      "Provides visitors with quick answers to common questions in an easy-to-access format.",
    features: [
      "List of common visitor questions",
      "Quick answers for easy access",
      "Categorized FAQs",
      "Search within FAQs",
    ],
  },

  {
    id: 16,
    image: "/flow-images/am/ticket-page.png",
    title: "Support Tickets Panel",
    description:
      "Track, filter, and create support tickets for issues, feedback, or feature requests",
    features: [
      "Create new tickets with attachments",
      "Set priority and type for each ticket",
      "Filter by ticket status, type, or priority",
      "View all tickets or just your own",
      "Paginated ticket listing with search by ticket id",
    ],
  },
  {
    id: 17,
    image: "/flow-images/am/ticket-detail-page.png",
    title: "Ticket Conversation View",
    description:
      "Engage in ongoing ticket conversations with image/file attachments, and track ticket status and updates.",
    features: [
      "Detailed ticket view with metadata",
      "Message threads with timestamps",
      "Image and file attachments in chat",
      "Ticket type, description, and priority clearly shown",
      "View recently created tickets on the side panel",
      "Status updates visible on the ticket detail page",
    ],
  },
];
