export type TopicCategory =
  | "foundations"
  | "defi"
  | "frontier"
  | "culture"
  | "manual";
export type TopicLevel = "initiate" | "operator" | "architect";
export type GlowColor = "cyan" | "magenta" | "violet" | "amber" | "green";

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface ExploreLink {
  label: string;
  url: string;
  note: string;
}

export interface TopicSection {
  heading: string;
  paragraphs: string[]; // plain text; **bold** and `code` inline markup supported
}

export interface Topic {
  slug: string;
  title: string;
  kana: string; // katakana/kanji accent rendered beside the title
  tagline: string;
  category: TopicCategory;
  level: TopicLevel;
  readingMinutes: number;
  glow: GlowColor;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  quiz: QuizQuestion[];
  explore: ExploreLink[];
}

export interface GlossaryEntry {
  term: string;
  kana?: string;
  definition: string;
  related?: string[]; // slugs of related topics
}

export interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  body: string;
  glow: GlowColor;
  era: "cypherpunk" | "genesis" | "expansion" | "merge" | "horizon";
}
