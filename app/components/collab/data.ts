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
    image: "/flow-images/collab/main.png",
    title: "Virtual Experience ",
    description:
      "The Page provides users with a fully interactive project walkthrough. User can explore sections such as Overview, Highlights, Amenities, Interior Units, Brochure, Vicinity, and Access Roads. Along with project exploration, users have the option to connect with sales person through real-time video and audio chat, ensuring personalized guidance while browsing.",
  },
  {
    id: 3,
    image: "/flow-images/collab/visitor.png",
    title: "User Interaction and Support Connection Interface",
    description:
      "This interface allows users to enter optional details (name, email, mobile) to connect with a Sales Person . After submission, the system ensures a smooth transition to the specialist.also provides access to nearby amenities like Connectivity, Shopping Malls, and more, offering additional information while users wait for assistance.",
  },
  {
    id: 4,
    image: "/flow-images/collab/video&chat.png",
    title: "Call and Chat ",
    description:
      "A live chat support option is available for immediate assistance, and there are controls for video, audio, settings. The setup offers an interactive experience for users exploring the property, with support available throughout the tour.",
  },
  {
    id: 5,
    image: "/flow-images/collab/amenities.png",
    title: "Interactive Virtual Property Tour with Live Support ",
    description:
      "This Interface shows a virtual property tour interface, allowing users to explore different areas of the property, such as the Lift Lobby and various levels like the Ground Level, Clubhouse, and Podium Level. The platform provides navigation options for users to access detailed sections like the property Overview, Highlights, Interior Unit. It also offers information about the Vicinity and Access Roads. A live chat support feature is available for real-time assistance.",
  },
  {
    id: 6,
    image: "/flow-images/collab/map.png",
    title: "Interactive Virtual Property Tour with Live Support ",
    description:
      "This interactive 3D view allows easy exploration of the property and its surroundings. users can navigate through different sections like amenities, interior units, and access roads, gaining a detailed understanding of the property layout and its connectivity.",
  },
];
