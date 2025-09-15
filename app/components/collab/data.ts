export interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const cards: CardData[] = [

  {
    id: 1,
    image: "/flow-images/collab/signup.png",
    title: "Signup & Onboarding",
    description: "To begin using the Virtual Assistance platform, users must first sign up and create their account. Account Creation: Provide basic details such as name, email, and password.\nVerification: Email or mobile verification ensures secure access.\nOnboarding: Guided walkthrough introduces key features and sets up the first-time experience."
  },
  {
    id: 2,
    image: "/flow-images/collab/integ2.png",
    title: "Project Creation",
    description: "The first step for any integration begins with creating a new project in the Virtual Assistance dashboard from https://landing-test.core.vretail.space/ .   Project Details: Enter the project name, domain, and basic info.\nUnique Credentials: A unique Project ID and secret credentials are generated.\nCentralized Management: Each project can be individually tracked, managed, and customized."
  },
  {
    id: 3,
    image: "/flow-images/collab/integ.png",
    title: "Integration Snippet",
    description: "Once the project is created, the platform provides an integration script snippet that must be added to your website's index.html file.  Script Tag: Includes the unique Project ID and connection URL.\nSeamless Embedding: Insert the snippet just before </body> in index.html.\nActivation: Once added, the snippet activates the Virtual Assistance features for the project.\nFlexibility: Supports multiple environments (staging, production) with different project IDs."
  }
  ,
  {
    id: 1,
    image: "/flow-images/collab/landing.png",
    title: " Visitor Landing Page ",
    description:
      "The Landing Page serves as the entry point for users exploring a specific project. It showcases the project’s branding and provides an immersive Virtual Tour Experience, allowing users to engage with the property",
  },
  {
    id: 4,
    image: "/flow-images/collab/callnchat.png",
    title: "Assistance Options",
    description:
      "Users can initiate communication through floating action buttons available on the screen. Options include video call, voice/text chat, and AI assistant support, making it easier to connect instantly while browsing the project."
  },
  {
    id: 5,
    image: "/flow-images/collab/notice.png",
    title: "Important Notice",
    description: "Before starting a call or video session, users are shown an important notice ensuring transparency, privacy, and security during the connection. Confidentiality Assured: Expert’s access is limited only to the active browser session, without ability to view other system parts.\nControlled Access: User remains in full control; access is restricted to support tasks and can be revoked instantly at any point.\nSecurity and Compliance: Adherence to highest security standards ensures protection of user’s data and privacy throughout the process.\nUser Assurance: Builds trust by clearly communicating limitations and safeguards before support begins."
  },

  {
    id: 6,
    image: "/flow-images/collab/visitor.png",
    title: "User Interaction and Support Connection Interface",
    description:
      "This interface allows users to enter optional details (name, email, mobile) to connect with a Sales Person . After submission, the system ensures a smooth transition to the specialist.also provides access to nearby amenities like Connectivity, Shopping Malls, and more, offering additional information while users wait for assistance.",
  },
  {
    id: 7,
    image: "/flow-images/collab/welcome.png",
    title: "Connect with Sales Expert",
    description:
      "When a user initiates a call, they are welcomed by the Virtual Assistance Portal. The interface introduces the assigned sales expert, and prompts the user to enable camera and microphone permissions for a personalized video/voice experience."
  },
  {
    id: 8,
    image: "/flow-images/collab/wait.png",
    title: "Waiting for Connection",
    description:
      "After enabling access, the portal transitions into a waiting screen. The system informs the user that the request is being connected to an available account manager. This ensures a smooth transition while maintaining engagement."
  },
  {
    id: 9,
    image: "/flow-images/collab/settings.png",
    title: "Call Settings",
    description: "Once call or chat gets connect setting popup will be visible. \n  Users can control their privacy and device preferences with easy toggles for microphone and camera access. Microphone Toggle: Instantly mute or unmute audio input.\nCamera Toggle: Switch video stream on or off as needed.\n User Control: Empowers participants to adjust their presence dynamically. \n Seamless Access: Settings are available in-call also without disrupting the ongoing session."
  },
  {
    id: 10,
    image: "/flow-images/collab/video&chat.png",
    title: "Call and Chat ",
    description:
      "A live chat support option is available for immediate assistance, and there are controls for video, audio, settings. The setup offers an interactive experience for users exploring the property, with support available throughout the tour.",
  },
  {
    id: 11,
    image: "/flow-images/collab/pin.png",
    title: "Secure Project Access",
    description:
      "Some projects require secure entry. Users are prompted to enter a unique PIN provided by the project owner. Once verified, they gain full access to explore and interact with the project’s features, ensuring restricted content is only accessible to authorized visitors."
  },
  {
    id: 12,
    image: "/flow-images/collab/feedback.png",
    title: "Feedback Form",
    description: "At the end of each call or video session, users are prompted with a feedback form to rate their experience and share comments for service improvement.  Rating System: Quick star-based or emoji ratings to capture satisfaction level.\nComments: Optional text input to provide specific suggestions, concerns, or highlights.\nService Evaluation: Helps track agent performance, call quality, and overall support effectiveness.\nContinuous Improvement: Collected feedback is analyzed to refine future interactions and enhance customer satisfaction."
  }
];
