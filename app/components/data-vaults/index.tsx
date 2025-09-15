import React from "react";
interface CardData {
    id: number;
    image: string;
    title: string;
    description: string;
    subinfo?: string;
    mainTitle?: string;
}

const cards: CardData[] = [
    {
        id: 1,
        image: "/flow-images/data-vaults/login.png",
        title: "Login to Your Account",
        description: "This is your secure gateway to the platform.",
        subinfo: "First :Enter your email and password to get started.\nForgot your password? : Click “Forgot Password” to reset it quickly.\nUse the eye icon : to show or hide your password while typing.",
    },
    {
        id: 2,
        image: "/flow-images/data-vaults/calls_ov.png",
        title: "Sales Conversations Report",
        mainTitle: "Overview Page",
        description:
            "Get a clear overview of your team’s call performance.",
        subinfo: "Filters (Year, Month, Week): Adjust the timeline to see reports for any period. \n AI Analytics Overview: A snapshot of all calls and their outcomes. \n Calls Overview: Track total calls, relevant vs irrelevant, national vs international, and connection rates. \n Duration Overview: See total talk time, average duration, and how much time was spent on relevant vs irrelevant calls.            "
    },
    {
        id: 3,
        image: "/flow-images/data-vaults/call_met.png",
        title: "Calls Metrics",
        description: " Dive deeper into the quality of your calls.",
        subinfo: " Call Categories: View total calls split into Positive, Negative, Neutral, Irrelevant, and <30 Second Calls.\n Interactive Filters: Select a category (e.g., Negative Calls) to instantly see detailed reasons behind them. \n Point-wise Breakdown: Get insights like poor communication, lack of clarity, pricing dissatisfaction, confusing info, or unmet customer needs — along with their percentage share."
    },
    {
        id: 4,
        image: "/flow-images/data-vaults/agents_stat.png",
        title: "Sales Agent Stats",
        description: "Compare how each sales agent is performing.",
        subinfo: "Agent-wise Breakdown: View relevant vs irrelevant calls for each agent.\n Performance Insights: Identify top-performing agents with higher relevant calls.\n Training Needs: Spot agents handling more irrelevant calls to focus on improvement.\n Quick Comparison: Instantly compare performance across the entire team."
    },
    {
        id: 5,
        image: "/flow-images/data-vaults/key_den.png",
        title: "Keywords Density",
        description: "See which words customers use most across different sentiments.",
        subinfo: "Positive Sentiments: Spot words linked to interest and excitement like pricing, location, and availability.\n Negative Sentiments: Identify pain points such as budget, process, and under-construction concerns.\n Neutral Sentiments: Track frequently used but balanced terms like privacy, flats, and possession.\n Quick Insight: Understand customer mindset at a glance — what excites them, what worries them, and what they simply inquire about."
    },
    {
        id: 6,
        image: "/flow-images/data-vaults/areas_to.png",
        title: "Areas for Improvement",
        description: "Identify gaps that need attention to boost efficiency and customer satisfaction.",
        subinfo: "Communication Clarity: Ensure information is clear, simple, and jargon-free.\n Response Time: Reduce delays in handling queries and follow-ups.\n Pricing Transparency: Share clear cost details to avoid confusion.\n Customer Support: Provide consistent assistance across channels."
    },
    {
        id: 7,
        image: "/flow-images/data-vaults/rec.png",
        title: "Recurring Issues & Customer Demands",
        description: "Track repeated challenges and evolving expectations from customers.",
        subinfo: "Recurring Issues: Common obstacles like slow callbacks, incomplete details, and delayed responses.\n Customer Demands: Requests for competitive pricing, timely updates, personalized property suggestions, and transparent processes.\n Actionable Insight: Prioritize fixes and align offerings with customer needs."
    },
    {
        id: 8,
        image: "/flow-images/data-vaults/call_lysis.png",
        title: "Call Analysis",
        description: "Deep dive into sales calls with performance scores, sentiment tagging, and actionable insights.",
        subinfo: "Call Categories: Review high-quality calls with positive outcomes or explore weaker ones to spot gaps.\n Key Metrics: Track performance percentage, duration, sentiment breakdown, and overall quality.\n Call Insights: Understand decision drivers like budget, family involvement, or possession timelines.\n Reasons & Scoring: Transparent breakdown of why a call scored high or low — clarity, helpfulness, missed opportunities.\n Visual Tools: Performance dials, sentiment meters, audio playback, and detailed breakdown sections.\n Filters: Switch between week, month, or year to analyze different sets of calls and evolving patterns."
    },
    {
        id: 9,
        image: "/flow-images/data-vaults/sales.png",
        title: "Sales Agents Performance Report",
        description: "Comprehensive view of how each sales agent and the overall team is performing.",
        subinfo: "Calls Overview: Monitor total, relevant, irrelevant, positive, negative, and neutral calls per agent.\n Performance Insights: Spot agent strengths (product knowledge, polite communication, proactive follow-up) and improvement areas (clarity, needs assessment, query handling).\n Rankings: Agents are evaluated and ranked from Good to Very Poor based on performance scores.\n Key Phrases: Popular customer topics like pricing, room configuration, booking, investment, and budgets.\n Dynamic Filters: Update reports by week, month, or year to compare performance across time."
    },
    {
        id: 10,
        image: "/flow-images/data-vaults/datav+.png",
        title: "Data Vault+ Granular Analysis",
        description: "Zoom into individual calls to uncover customer preferences, intent, and agent performance.",
        subinfo: "Call Drill-Down: Select a salesperson and review their specific call recordings and transcripts.\n Customer Preferences: Track detailed interests like budget ranges, configurations, facing, balcony, and layout needs.\n Customer Profiles: Identify patterns — well-informed buyers, online researchers, or first-time explorers.\n Purchase Intent: Distinguish between end-use buyers vs. investors for sharper targeting.\n Insights: Spot advanced customer behaviors such as proactive research, demand for transparency, or emphasis on comfort and aesthetics."
    }
    ,
    {
        id: 11,
        image: "/flow-images/data-vaults/rec_issue.png",
        title: "Top Recurring Issues",
        description: "Uncover frequent obstacles faced by sales teams, with drill-downs per agent or time period.",
        subinfo: "Issue Categories: Track common concerns like Pricing, Property Availability, Budget Limits, or Communication Gaps.\n Salesperson Profiles: See recurring issues tied to individual agents with their performance metrics.\n Call Summaries: Quick breakdowns of customer queries, objections, and how the salesperson responded.\n Key Insights: Identify budget-sensitive buyers, interest in specific unit types, or missed opportunities.\n Filters & Trends: Switch views by week, month, or year to track shifts in recurring issues over time."
    },
    {
        id: 12,
        image: "/flow-images/data-vaults/leads.png",
        title: "Lead Division",
        description: "AI categorizes all incoming leads into Hot, Mild, Lost, and Recall buckets for better prioritization and follow-up.",
        subinfo: "Categorization Buckets: Hot (ready to visit or buy), Mild (interested but budget/location/config mismatch), Lost (dropped or disqualified), Recall (interested but pending callback)\nCall Insights: Each bucket includes top reasons for categorization such as pricing concerns, property availability, or delayed decisions\nLead Profiles: Displays customer details with sentiment tag, budget preferences, and property type interest\nDynamic Filters: Year, month, week, and project filters refresh categorized lead data instantly"
    },
    {
        id: 13,
        image: "/flow-images/data-vaults/create_camp.png",
        title: "Campaign Creation Modal",
        description: "Easily build personalized campaigns to target selected leads through WhatsApp and email.",
        subinfo: "Campaign Setup: Select lead category/subtype and preferred communication channel (WhatsApp, Email, or both).\nPersonalization: Auto-fetches lead details (name, issues, interests) to customize campaign copy.\nPreview Option: Shows how your message will look in WhatsApp and email before launching."
    },
    {
        id: 14,
        image: "/flow-images/data-vaults/ai_playground.png",
        title: "AI Playground",
        description: "Generate compelling ad and campaign content with AI, customized to audience preferences.",
        subinfo: "Content Generation: AI drafts ad copies tailored to selected lead type and category\nCustomizable Tones: Choose from witty, bold, casual, promotional, or formal tones\nThemes: Align messaging with property type, budget, or location focus\nPreview: Instantly see how AI-generated content fits into WhatsApp and email templates\nSmart Targeting: Ensures ads resonate with customer interests like budget sensitivity, family involvement, or investment goals"
    },
    {
        id: 15,
        image: "/flow-images/data-vaults/campaign_dashboard.png",
        title: "Campaign Dashboard",
        description: "Centralized view of all campaigns with real-time status tracking and quick actions.",
        subinfo: "Campaign States: View campaigns under Ready, In-Progress, and Completed tabs\nQuick Actions: Start or monitor campaigns directly from the dashboard\nProgress Tracking: Visual indicators show campaign movement across states\nSeamless Navigation: One-click access to campaign details and lead management"
    },
    {
        id: 16,
        image: "/flow-images/data-vaults/add_leads_popup.png",
        title: "Leads Grouping & Addition",
        description: "Add new leads to ongoing or upcoming campaigns with categorized segmentation for smarter targeting.",
        subinfo: "Lead Categories: Hot, Mild, Lost, Recall for quick assignment\nEasy Integration: Add leads manually or import in bulk\nContextual Placement: Leads added are directly linked to selected campaigns\nSmart Suggestions: AI hints for where each lead fits best"
    },
    {
        id: 17,
        image: "/flow-images/data-vaults/message_preview.png",
        title: "Message Preview",
        description: "Preview personalized messages or emails before sending them to leads within campaigns.",
        subinfo: "Personalization Check: See how the content adapts to lead details\nLead-Specific View: Open message preview directly from the leads box\nMulti-Channel: Supports both SMS and email preview\nFinal Review: Edit and confirm before campaign starts sending"
    },
    {
        id: 18,
        image: "/flow-images/data-vaults/campaign_performance.png",
        title: "Campaign Performance Dashboard",
        description: "Track how campaigns and leads are performing with detailed engagement metrics and smart filters.",
        subinfo: "Performance Metrics: Total Reach, Sent, Delivered, Failed, Pending, Opened, and Clicked rates\nTime Filters: View campaign results for last week, last 3 months, etc.\nProject Filters: Analyze performance project-wise to identify top-performing campaigns\nData Insights: Helps sales teams measure effectiveness of outreach and optimize follow-ups"
    },
    {
        id: 19,
        image: "/flow-images/data-vaults/lead_agr.png",
        title: "Leads Overview",
        description: "Visualize all AI-categorized leads in a circular chart with a detailed breakdown on the side.",
        subinfo: "Categorization: Hot, Mild, Recall, and Lost leads distribution\nCircular Graph: Quick snapshot of how leads are segmented\nDetailed View: Right panel shows total leads with individual category counts\nSmart Insights: AI-powered division helps sales prioritize outreach"
    },
    {
        id: 20,
        image: "/flow-images/data-vaults/camp_grth.png",
        title: "Campaign Growth",
        description: "Compare campaign outcomes with side-by-side metrics in a bar chart view.",
        subinfo: "Engagement Metrics: Read, Clicked, and Delivered shown together\nBar Visualization: Easy comparison of campaign performance over time\nGrowth Tracking: Highlights successful campaigns and weaker areas\nDynamic Updates: Data changes with applied filters (weekly, monthly, project-wise)"
    },
    {
        id: 21,
        image: "/flow-images/data-vaults/ad_perf.png",
        title: "Ads Performance",
        description: "Measure how ad campaigns perform across WhatsApp and Email channels with clear visual segmentation.",
        subinfo: "Half-Circular Graph: Displays performance distribution\nChannels: Separate insights for WhatsApp and Email campaigns\nKey Metrics: Clicked, Delivered, and Opened stats for each channel\nActionable Insights: Identify which platform drives better engagement"
    },
    {
        id: 22,
        image: "/flow-images/data-vaults/proj_perf.png",
        title: "Project Performance",
        description: "Track campaign effectiveness for each project with detailed message flow analysis.",
        subinfo: "Line Graph: Plots message counts project-wise over time\nMetrics Tracked: Clicked, Delivered, and Read messages\nProject-Wise Comparison: See how different projects perform against each other\nOptimization Insights: Helps teams focus efforts on high-performing projects"
    }


];

const DataVault: React.FC = () => {
    return (
        <div className="w-full px-[10rem] mx-auto  space-y-12 pt-4">
            <div className="cards-wrapper">
                {cards.map((card, idx) => {
                    const imageOnLeft = idx % 2 === 0;
                    return (
                        <div key={card.id} className="flex flex-col md:flex-row items-center p-3  justify-between bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 mb-14">
                            <div className={`card-content flex w-full ${imageOnLeft ? '' : 'flex-row-reverse'}`}>
                                <div className="card-image-wrapper w-[60%] m-4 group">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="card-image transition-transform duration-300 ease-in-out mx-auto cursor-pointer"
                                    />
                                </div>
                                <div className="card-text w-[40%] m-4 flex flex-col justify-center mx-auto">
                                    <h3 className=" text-3xl font-bold  text-violet-700 ">{card.title}</h3>
                                    <p className="card-description">{card.description}</p>
                                    {card.subinfo && (
                                        <ul className=" list-inside mt-4">
                                            {card.subinfo.split('\n').map((line, i) => {
                                                const [label, ...rest] = line.split(":");
                                                return (
                                                    <li key={i} className="subinfo mt-2">
                                                        <strong>{label}:</strong> {rest.join(":")}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DataVault;
