"use client";

import { useEffect } from "react";
import { markRead } from "@/lib/progress";

/** Invisible: marks a topic as read once it has been open for a few seconds. */
export default function ProgressMarker({ slug }: { slug: string }) {
  useEffect(() => {
    const id = setTimeout(() => markRead(slug), 5000);
    return () => clearTimeout(id);
  }, [slug]);
  return null;
}
