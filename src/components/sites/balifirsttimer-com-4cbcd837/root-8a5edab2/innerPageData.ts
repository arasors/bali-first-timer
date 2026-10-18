import { ASSET_ROOT, PHONE_DISPLAY, services } from "./data";

export type InnerPageSection = {
  title: string;
  body: string;
};

export type InnerPageContent = {
  path: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  introTitle: string;
  intro: string;
  highlights: string[];
  sections: InnerPageSection[];
};

const serviceDetails: Record<
  string,
  { summary: string; highlights: string[]; sections: InnerPageSection[] }
> = {
  "personal-itinerary": {
    summary:
      "A practical day-by-day Bali itinerary shaped around your dates, interests, pace and travel group.",
    highlights: ["Built around your pace", "Clear daily structure", "Local recommendations"],
    sections: [
      {
        title: "A plan that leaves room to enjoy Bali",
        body: "We balance travel time, rest, meals and experiences so your first trip feels considered rather than crowded. Tell us what matters most and we will help turn the wish list into realistic days.",
      },
      {
        title: "Know what happens next",
        body: "Recommendations, reservations and open decisions are explained clearly. You can see what is confirmed, what still needs a choice and where a flexible option makes more sense.",
      },
    ],
  },
  "waterfall-hunting": {
    summary:
      "Guided waterfall days for active couples and families, with routes matched to the group and current conditions.",
    highlights: ["Dedicated local guide", "Fitness-matched routes", "Weather-aware decisions"],
    sections: [
      {
        title: "Bali's wilder side, planned responsibly",
        body: "Waterfall routes can range from easy jungle walks to longer stair and cliff-side approaches. We discuss the group, footwear, comfort level and current conditions before confirming a route.",
      },
      {
        title: "Who it suits",
        body: "Waterfall hunting is designed for active travellers and is not recommended for children under eight. Weather and water conditions always influence the final go or no-go decision.",
      },
    ],
  },
  "culinary-hunting": {
    summary:
      "A Bali food route built around your appetite, from local legends and night markets to destination dining.",
    highlights: ["Local favourites", "Group-ready reservations", "Flexible cuisine choices"],
    sections: [
      {
        title: "Tell us what you actually enjoy",
        body: "Choose traditional Balinese dishes, night markets, seafood, barbecue, coffee, brunch or a mix. Stops are selected around your group and how the food experience fits the rest of the day.",
      },
      {
        title: "Less guesswork at mealtime",
        body: "We help narrow down the long list of Bali restaurants and plan useful reservations, so couples and families spend less time searching when everyone is already hungry.",
      },
    ],
  },
  "bali-activities": {
    summary:
      "ATV, rafting, surfing, cycling and other Bali activities organised around your itinerary and comfort level.",
    highlights: ["Activity matching", "Timing built into the day", "Clear booking details"],
    sections: [
      {
        title: "Choose the energy level",
        body: "Whether you want one memorable activity or several active days, we help compare travel time, start times and group suitability before anything is added to the plan.",
      },
      {
        title: "Details before you arrive",
        body: "Meeting points, required clothing, expected duration and transfer considerations are clarified in advance so the activity does not disrupt the rest of the trip.",
      },
    ],
  },
  "temple-culture": {
    summary:
      "Temple, water-palace and cultural visits paced for travellers discovering Bali for the first time.",
    highlights: ["Respectful local context", "Realistic travel time", "Culture with breathing room"],
    sections: [
      {
        title: "More than a photo stop",
        body: "A cultural day should make sense geographically and give you enough time to understand the place. We help group compatible stops and explain practical etiquette before you go.",
      },
      {
        title: "Balanced with the rest of the trip",
        body: "Temple visits can be combined with springs, terraces, markets or a relaxed meal without turning the day into a race across the island.",
      },
    ],
  },
  "ubud-jungle": {
    summary:
      "Ubud and central Bali experiences combining forest, craft, food and a slower inland rhythm.",
    highlights: ["Ubud-first route planning", "Jungle and craft stops", "Flexible half or full days"],
    sections: [
      {
        title: "Build an Ubud day that connects",
        body: "Central Bali can involve more travel than it appears on a map. We group compatible locations, leave space for traffic and protect the quieter moments that make Ubud worth visiting.",
      },
      {
        title: "Mix nature, craft and food",
        body: "Forest walks, artisan markets, terraces, temples and restaurants can be combined around what your group values most rather than following a fixed tour template.",
      },
    ],
  },
  "lakes-hot-springs": {
    summary:
      "Highland views, crater lakes and hot-spring stops for a cooler, slower side of Bali.",
    highlights: ["Highland pacing", "Scenic rest stops", "Family-friendly options"],
    sections: [
      {
        title: "A change of climate and pace",
        body: "Bali's higher regions feel different from the southern coast. We help plan the longer drives, cooler weather and the right number of stops for a comfortable day.",
      },
      {
        title: "Make the journey part of the day",
        body: "Viewpoints, local meals and optional hot springs can turn a long transfer into a varied route without overloading the schedule.",
      },
    ],
  },
  "beaches-beach-clubs": {
    summary:
      "A coast and beach-club plan matched to your preferred atmosphere, timing and part of the island.",
    highlights: ["Coast matched to your stay", "Sunset-aware timing", "Couple and family options"],
    sections: [
      {
        title: "Not every coast feels the same",
        body: "Calm swimming, surf energy, dramatic cliffs and sunset clubs belong to different parts of Bali. We help choose what fits the trip instead of sending everyone to the same beach.",
      },
      {
        title: "Plan around the best hours",
        body: "Traffic, tides, sunset and reservation times affect the experience. A simple timing decision can make a beach day much easier for first-time visitors.",
      },
    ],
  },
  "local-food-trails": {
    summary:
      "Babi guling, bebek betutu, night markets and local favourites selected for curious first-time visitors.",
    highlights: ["Balinese classics", "Local market stops", "Appetite-led pacing"],
    sections: [
      {
        title: "Start with the flavours you want to try",
        body: "We shape the route around specific dishes or a broader introduction to Balinese food, with clear expectations about setting, spice and the pace of each stop.",
      },
      {
        title: "Food that fits the day",
        body: "A local lunch, market snack or evening feast can be placed where it makes geographical sense, saving unnecessary travel and leaving room to enjoy the meal.",
      },
    ],
  },
  "cafe-brunch-trails": {
    summary:
      "Bali coffee, brunch and lighter food stops woven naturally into your day.",
    highlights: ["Coffee and brunch", "Lighter options", "Neighbourhood-based picks"],
    sections: [
      {
        title: "Good food without crossing the island",
        body: "Bali has an endless cafe list. We focus on places that suit your route, group and preferred style so a meal supports the day instead of consuming it.",
      },
      {
        title: "A useful mix of local and international",
        body: "Fresh breakfasts, quality coffee and lighter options can sit alongside Balinese flavours, particularly for families or longer stays that benefit from variety.",
      },
    ],
  },
  "markets-shopping": {
    summary:
      "Artisan markets, practical shopping and local finds chosen around your route and interests.",
    highlights: ["Artisan markets", "Local craft", "Efficient shopping stops"],
    sections: [
      {
        title: "Know where to look",
        body: "From woven goods and craft markets to modern shopping centres, the right stop depends on what you want and where you are staying. We narrow the options before you lose half a day browsing maps.",
      },
      {
        title: "Combine shopping with nearby experiences",
        body: "A market or retail stop works best when it is placed alongside nearby food, culture or transfer plans rather than treated as a separate cross-island journey.",
      },
    ],
  },
  "family-friendly-bali": {
    summary:
      "Bali days planned with realistic travel time, flexible stops and the needs of families in mind.",
    highlights: ["Age-aware activities", "Rest built into the day", "Flexible backup options"],
    sections: [
      {
        title: "A pace the whole family can enjoy",
        body: "We consider children's ages, meal timing, heat, transfers and energy levels when shaping each day. A shorter, smoother plan often creates a better family memory than a longer checklist.",
      },
      {
        title: "Clear suitability before booking",
        body: "Where an activity has age, fitness or safety considerations, we flag them early and suggest an alternative that still feels special for the group.",
      },
    ],
  },
};

const experiencePages: InnerPageContent[] = services.map((service) => {
  const detail = serviceDetails[service.slug];

  return {
    path: `experiences/${service.slug}`,
    eyebrow: "Bali First Timer experience",
    title: service.label,
    summary: detail.summary,
    image: service.image,
    imageAlt: service.imageAlt,
    introTitle: "Designed around your first Bali trip",
    intro:
      "Share your dates, where you plan to stay, who is travelling and what kind of day feels right. We will help place this experience into a realistic route and explain the details before you decide.",
    highlights: detail.highlights,
    sections: detail.sections,
  };
});

const corporatePages: InnerPageContent[] = [
  {
    path: "experiences",
    eyebrow: "Explore Bali your way",
    title: "First-timer experiences, planned properly.",
    summary:
      "Personal itineraries, waterfall adventures, food hunts and Bali activities shaped around your travel style.",
    image: `${ASSET_ROOT}/jungle-atv.jpg`,
    imageAlt: "Travellers on an ATV experience in the Bali jungle",
    introTitle: "Less research, more of the trip",
    intro:
      "Bali can feel endless when you are planning from abroad. We help narrow the options, connect compatible places and build days that respect travel time, group energy and the experiences you care about.",
    highlights: ["Personal itinerary help", "Nature and culture", "Food and activity planning"],
    sections: [
      {
        title: "Start with your travel style",
        body: "A couple, a family and a group of friends may love the same island in very different ways. We begin with pace, comfort and priorities before suggesting specific stops.",
      },
      {
        title: "Keep the plan clear",
        body: "You will know which parts are recommendations, which require booking and which can stay flexible until you are on the island.",
      },
    ],
  },
  {
    path: "destinations",
    eyebrow: "Bali, beyond the checklist",
    title: "Choose the right side of the island for the day you want.",
    summary:
      "Coast, jungle, highlands, temples, markets and food neighbourhoods connected into practical Bali routes.",
    image: `${ASSET_ROOT}/monkey-forest-ubud.jpg`,
    imageAlt: "Visitor at the Sacred Monkey Forest in Ubud",
    introTitle: "Distance on the map is not the whole story",
    intro:
      "Bali traffic, terrain and the time of day can change how a route feels. We help connect places that belong together and avoid spending the best hours of your holiday moving between opposite ends of the island.",
    highlights: ["Ubud and central Bali", "South-coast days", "Highlands and waterfalls"],
    sections: [
      {
        title: "Build days by area",
        body: "Temples, waterfalls, markets, beaches and restaurants are easier to enjoy when they are grouped geographically. This keeps transfers sensible and gives each stop enough time.",
      },
      {
        title: "Match the destination to the mood",
        body: "Some days call for early starts and active trails; others work better as slow lunches and sunset views. We help create that rhythm across the trip.",
      },
    ],
  },
  {
    path: "about",
    eyebrow: "Local insight, clear planning",
    title: "Bali guidance made for first-time visitors.",
    summary:
      "Bali First Timer helps couples, families and groups turn an overwhelming Bali wish list into a clear, personal plan.",
    image: `${ASSET_ROOT}/hero-bali.jpg`,
    imageAlt: "Sacred spring and temple setting in Bali",
    introTitle: "A local partner before you land",
    intro:
      "Our approach is simple: listen carefully, recommend honestly and communicate what is confirmed, what is flexible and what needs a decision. The goal is not to fill every hour; it is to make your first Bali trip feel easier and more memorable.",
    highlights: ["Straightforward communication", "Transparent recommendations", "Plans built around people"],
    sections: [
      {
        title: "No generic tour-package thinking",
        body: "We shape recommendations around the people travelling, their interests and their pace. A good itinerary should feel like your holiday, not a copy of someone else's checklist.",
      },
      {
        title: "Honesty is part of the service",
        body: "If a day is too full, a route is inefficient or conditions make an activity unsuitable, we will say so and help find a better option.",
      },
    ],
  },
  {
    path: "contact",
    eyebrow: "Start with a conversation",
    title: "Tell us the shape of your Bali trip.",
    summary: `Message Bali First Timer on WhatsApp at ${PHONE_DISPLAY} to discuss dates, travellers and the experiences on your wish list.`,
    image: `${ASSET_ROOT}/family-crater-lake.jpg`,
    imageAlt: "Family enjoying calm water on a Bali trip",
    introTitle: "Real questions, not a generic reply",
    intro:
      "Share when you are travelling, where you expect to stay, who is coming and the experiences you are considering. WhatsApp is the quickest way to begin and keep the planning conversation in one place.",
    highlights: [PHONE_DISPLAY, "WhatsApp-first planning", "Bali, Indonesia"],
    sections: [
      {
        title: "What should you send?",
        body: "Dates or trip length, number of travellers, children's ages where relevant, preferred pace, accommodation area if known and a short wish list are enough for a useful first conversation.",
      },
      {
        title: "What happens next?",
        body: "We will ask practical follow-up questions, clarify priorities and explain which services or experiences can fit the trip before anything is confirmed.",
      },
    ],
  },
];

export const innerPages = [...corporatePages, ...experiencePages];

export function getInnerPage(path: string) {
  return innerPages.find((page) => page.path === path);
}
