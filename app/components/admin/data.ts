interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  features: Array<string>;
}

export const cards: CardData[] = [
  {
    id: 1,
    image: "/flow-images/admin/login-admin.png",
    title: "Admin Login",
    description: "Secure login for administrators with email and password.",
    features: [
      "Protected with JWT",
      "Forgot password option",
      "Role-based access",
    ],
  },
  {
    id: 2,
    image: "/flow-images/admin/dashboard/dashboard.png",
    title: "Admin Dashboard",
    description:
      "Get a detailed overview of session activity, project engagement, and team performance in one unified dashboard.",
    features: [
      "Track total session time, number of sessions(Chats & Calls)",
      "View website traffic overview with website users and active Vretail users for different time ranges.",
      "Interactive global heatmap of user activity",
      "Analyze top locations by views, average time spent, and conversions",
      "Breakdown of traffic by operating systems (Windows, Android, iOS, etc.)",
      "Account Manager analytics with average ratings and call/chat statistics",
      "Highlight repeated user feedback and interaction hotspots",
      "Statistics of Top visited pages by time ranges and user engagement by time of day",
    ],
  },
  {
    id: 3,
    image: "/flow-images/admin/projects/all-projects-tabs.png",
    title: "All Projects",
    description:
      "User can view and manage all projects in a paginated board or list layout.",
    features: [
      "Search and filter projects",
      "Toggle view: Board/List",
      "Sort by newest/oldest",
      "See project stats: calls, chats, seats",
    ],
  },
  {
    id: 4,
    image: "/flow-images/admin/projects/create-project.png",
    title: "Create Project",
    description:
      "User can create a new project by uploading  brand image, name, brand url, brand description, and currency for payment.",
    features: [],
  },
  {
    id: 5,
    image: "/flow-images/admin/projects/project-detail.png",
    title: "Project Details",
    description:
      "User can view selected project and edit project details like name, description, and image only.",
    features: [],
  },
  {
    id: 6,
    image: "/flow-images/admin/account managers/am-tab.png",
    title: "Account Manager Tab",
    description:
      "User can view, search, and manage all Account Managers of specific project ",
    features: [
      "Paginated List view of all Account Managers",
      "Search Account Managers by name or email",
      "Edit or delete individual AM details",
      "Assign multiple projects per AM",
      "Download full list of AMs of specific project",
      "Bulk upload AMs with one click",
    ],
  },
  {
    id: 7,
    image: "/flow-images/admin/account managers/am-create.png",
    title: "Create Account Manager",
    description:
      "Admin can add new Account Managers by uploading a profile image (max 5 MB), entering name, email, description, city, employee ID, assign created project and mode (Call, Chat, or Both), and setting a password manually or auto-generating it.",
    features: [],
  },

  {
    id: 8,
    image: "/flow-images/admin/seats/seat-tab.png",
    title: "Seat Management",
    description:
      "Custom allocation of available seats to Account Managers (AMs) by seat type for a particular project.",
    features: [
      "View total, allocated & unallocated seats",
      "Allocate or deallocate Call, Chat, or Call & Chat seats to AMs based on requirement",
    ],
  },
  {
    id: 9,
    image: "/flow-images/admin/chat and tags/chat-tags.png",
    title: "Chats and Tags Management",
    description:
      "Manage premade chat sentences and tagging for better session handling and classification which can be used by AM in session with visitor.",
    features: ["Project-specific chat and tag create, edit and delete"],
  },
  {
    id: 10,
    image: "/flow-images/admin/custom offers/custom-offer.png",
    title: "Custom Offers",
    description:
      "Create and manage promotional offers with custom titles, images, and descriptions for each project.",
    features: [
      "Add custom promotional offers with image, title, subtitle, and description",
      "Choose offer type: Pricing or Discount",
      "Live preview of the offer design",
      "Edit or delete existing offers easily",
      "Display multiple offers under categorized tabs",
      "Character counter for title, subtitle, and description",
      "Project-specific offer configuration",
    ],
  },
  {
    id: 11,
    image: "/flow-images/admin/analytics/am-analytics.png",
    title: "Account Manager Performance Analytics",
    description:
      "Track detailed call/chat performance metrics for each Account Manager over a selected time range.",
    features: [
      "KPIs: total calls, chats, ratings, and time spent",
      "Compare performance of different AMs",
      "Filters by AM and custom time ranges",
      "Export data for reporting or audit",
      "Highlights top performers and underperformers",
      "Shows inbound/outbound call/chat breakdown",
      "Performance gauge (positive vs negative ratings)",
    ],
  },
  {
    id: 12,
    image: "/flow-images/admin/analytics/visitor-analytics.png",
    title: "Visitor Interaction Analytics",
    description:
      "View detailed logs of user interactions including chats, video calls, and request sources.",
    features: [
      "Tracks user name, email, date/time, and interaction type",
      "Records source (chat or video call) and notes",
      "Calendar filter to select custom date range",
      "View interaction status and comments",
      "Exportable table format for external analysis",
      "Ideal for lead analysis and customer service tracking",
      "Project-specific interaction logging",
    ],
  },
  {
    id: 13,
    image: "/flow-images/admin/customize widget/image.png",
    title: "Customize Widget",
    description:
      "Personalize the visitor side embedded widget's appearance and behavior to match your brand and project preferences.",
    features: [
      "Customize background and text colors of widget",
      "Project-specific widget customization",
      "Change widget position and appearance settings",
    ],
  },
  {
    id: 14,
    image: "/flow-images/admin/subscription/all-subscription-tab.png",
    title: "All Subscriptions Overview",
    description:
      "View and manage all active and inactive subscriptions across multiple projects from a centralized interface.",
    features: [
      "Displays subscription status: Active or Inactive",
      "Shows subscription type: Monthly or Quarterly",
      "Lists subscription plan: business-pro or enterprise",
      "Search bar to filter subscriptions quickly by project name",
      "Clickable 'Subscription Details' button for in-depth info",
    ],
  },
  {
    id: 15,
    image: "/flow-images/admin/subscription/subscription-detail.png",
    title: "Subscription Management",
    description:
      "View detailed subscription info and perform actions such as starting, renewing, or stopping a subscription.",
    features: [
      "Displays complete subscription details including cycle, status, and next payment date",
      "Show countdown of days left until next renewal (e.g. 3607 days left)",
      "Manage subscription actions: Start, Stop, and Renew",
      "View payment details: subscriber, payment cycle, payment date",
      "Breakdown of total seats allocated",
      "Clear visualization of seat distribution: call, chat, and hybrid",
      "Subscription status indicator (e.g., Active)",
      "recent payment logs (if any)",
      "Project-specific subscription insights",
    ],
  },
  {
    id: 16,
    image: "/flow-images/admin/help and support/ticket-support-tab.png",
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
    image: "/flow-images/admin/help and support/ticket-detail.png",
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
  {
    id: 18,
    image: "/flow-images/admin/profile/admin-settings.png",
    title: "Admin Settings",
    description: "Admin can set new password through Admin Settings page.",
    features: [],
  },
];
