"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/types";

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const rank =
      pct === 100
        ? "ARCHITECT — flawless decode"
        : pct >= 75
          ? "OPERATOR — signal received"
          : pct >= 50
            ? "INITIATE — partial sync"
            : "STATIC — re-run the transmission";
    return (
      <div className="cyber-panel p-6 text-center">
        <p className="font-jp text-xs text-fog">診断完了 — diagnostic complete</p>
        <p className="mt-3 font-display text-4xl neon-cyan">
          {score}/{questions.length}
        </p>
        <p className="mt-2 font-display text-sm tracking-widest neon-magenta">
          {rank}
        </p>
        <button
          onClick={restart}
          className="mt-5 border border-line px-5 py-2 font-display text-xs tracking-widest text-fog transition-colors hover:border-neon-cyan hover:text-neon-cyan"
        >
          ⟲ RE-RUN
        </button>
      </div>
    );
  }

  return (
    <div className="cyber-panel p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-jp text-xs text-fog">知識試験 — knowledge check</p>
        <p className="font-mono text-xs text-fog">
          {current + 1} / {questions.length}
        </p>
      </div>
      <div className="mb-4 h-1 w-full bg-line">
        <div
          className="h-1 bg-neon-cyan transition-all duration-300"
          style={{ width: `${((current + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>
      <p className="mb-5 text-sm leading-relaxed text-ice">{q.question}</p>
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          let cls =
            "border-line text-fog hover:border-neon-cyan hover:text-ice";
          if (selected !== null) {
            if (i === q.answerIndex)
              cls = "border-neon-green text-neon-green";
            else if (i === selected)
              cls = "border-neon-magenta text-neon-magenta";
            else cls = "border-line text-fog/50";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`block w-full border px-4 py-3 text-left font-mono text-xs leading-relaxed transition-colors ${cls}`}
            >
              <span className="mr-2 opacity-60">
                {String.fromCharCode(65 + i)} ▸
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-4 flicker-in">
          <p className="border-l-2 border-neon-cyan bg-panel px-4 py-3 text-xs leading-relaxed text-fog">
            {q.explanation}
          </p>
          <button
            onClick={next}
            className="mt-4 border border-neon-cyan px-5 py-2 font-display text-xs tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-void"
          >
            {current + 1 >= questions.length ? "RESULTS ▸" : "NEXT ▸"}
          </button>
        </div>
      )}
    </div>
  );
}
