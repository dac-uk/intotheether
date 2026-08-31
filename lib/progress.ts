"use client";

/** Client-side progress: read articles + quiz results in localStorage.
 *  No accounts, no server — sovereignty extends to your learning data. */

export interface QuizResult {
  score: number;
  total: number;
  passed: boolean;
  at: number;
}

export interface Progress {
  read: Record<string, number>; // slug -> timestamp
  quiz: Record<string, QuizResult>; // slug -> best result
}

const KEY = "ite-progress-v1";
export const PROGRESS_EVENT = "ite-progress";

const empty: Progress = { read: {}, quiz: {} };

export function getProgress(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    const p = JSON.parse(raw) as Progress;
    return { read: p.read ?? {}, quiz: p.quiz ?? {} };
  } catch {
    return empty;
  }
}

function save(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
    window.dispatchEvent(new Event(PROGRESS_EVENT));
  } catch {
    // storage unavailable — degrade silently
  }
}

export function markRead(slug: string) {
  const p = getProgress();
  if (p.read[slug]) return;
  p.read[slug] = Date.now();
  save(p);
}

export function recordQuiz(slug: string, score: number, total: number) {
  const p = getProgress();
  const passed = score >= Math.ceil(total * 0.75);
  const prev = p.quiz[slug];
  // keep the best score
  if (!prev || score > prev.score) {
    p.quiz[slug] = { score, total, passed, at: Date.now() };
    save(p);
  }
}

export type Rank = "INITIATE" | "OPERATOR" | "ARCHITECT";

export function passedCount(p: Progress): number {
  return Object.values(p.quiz).filter((q) => q.passed).length;
}

export function rankFor(passed: number, totalTopics: number): Rank {
  if (totalTopics > 0 && passed >= totalTopics) return "ARCHITECT";
  if (passed >= Math.ceil(totalTopics / 3)) return "OPERATOR";
  return "INITIATE";
}

export const rankGlyph: Record<Rank, string> = {
  INITIATE: "◈",
  OPERATOR: "◈◈",
  ARCHITECT: "◈◈◈",
};
