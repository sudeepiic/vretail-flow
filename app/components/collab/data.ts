export interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const cards: CardData[] = [
  {
    id: 1,
    image: "/flow-images/collab/landing.png",
    title: " Visitor Landing Page ",
    description:
      "The Landing Page serves as the entry point for users exploring a specific project. It showcases the project’s branding and provides an immersive Virtual Tour Experience, allowing users to engage with the property",
  },
  {
    id: 2,
    image: "/flow-images/collab/callnchat.png",
    title: "Assistance Options",
    description:
      "Users can initiate communication through floating action buttons available on the screen. Options include video call, voice/text chat, and AI assistant support, making it easier to connect instantly while browsing the project."
  },
  {
    id: 3,
    image: "/flow-images/collab/welcome.png",
    title: "Connect with Sales Expert",
    description:
      "When a user initiates a call, they are welcomed by the Virtual Assistance Portal. The interface introduces the assigned sales expert, and prompts the user to enable camera and microphone permissions for a personalized video/voice experience."
  },
  {
    id: 4,
    image: "/flow-images/collab/wait.png",
    title: "Waiting for Connection",
    description:
      "After enabling access, the portal transitions into a waiting screen. The system informs the user that the request is being connected to an available account manager. This ensures a smooth transition while maintaining engagement."
  },

  {
    id: 5,
    image: "/flow-images/collab/visitor.png",
    title: "User Interaction and Support Connection Interface",
    description:
      "This interface allows users to enter optional details (name, email, mobile) to connect with a Sales Person . After submission, the system ensures a smooth transition to the specialist.also provides access to nearby amenities like Connectivity, Shopping Malls, and more, offering additional information while users wait for assistance.",
  },
  {
    id: 6,
    image: "/flow-images/collab/video&chat.png",
    title: "Call and Chat ",
    description:
      "A live chat support option is available for immediate assistance, and there are controls for video, audio, settings. The setup offers an interactive experience for users exploring the property, with support available throughout the tour.",
  },
  {
    id: 7,
    image: "/flow-images/collab/main.png",
    title: "Virtual Experience ",
    description:
      "The Page provides users with a fully interactive project walkthrough. User can explore sections such as Overview, Highlights, Amenities, Interior Units, Brochure, Vicinity, and Access Roads. Along with project exploration, users have the option to connect with sales person through real-time video and audio chat, ensuring personalized guidance while browsing.",
  },
  {
    id: 8,
    image: "/flow-images/collab/amenities.png",
    title: "Interactive Virtual Property Tour with Live Support ",
    description:
      "This Interface shows a virtual property tour interface, allowing users to explore different areas of the property, such as the Lift Lobby and various levels like the Ground Level, Clubhouse, and Podium Level. The platform provides navigation options for users to access detailed sections like the property Overview, Highlights, Interior Unit. It also offers information about the Vicinity and Access Roads. A live chat support feature is available for real-time assistance.",
  },
  {
    id: 10,
    image: "/flow-images/collab/pin.png",
    title: "Secure Project Access",
    description:
      "Some projects require secure entry. Users are prompted to enter a unique PIN provided by the project owner. Once verified, they gain full access to explore and interact with the project’s features, ensuring restricted content is only accessible to authorized visitors."
  }
];
