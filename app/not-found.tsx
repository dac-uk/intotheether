import Link from "next/link";
import GlitchText from "@/components/GlitchText";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-jp text-sm tracking-[0.5em] text-neon-magenta">
        信号消失
      </p>
      <h1 className="mt-4 font-display text-6xl font-black text-ice">
        <GlitchText text="404" className="neon-cyan" />
      </h1>
      <p className="mt-4 max-w-md font-mono text-sm text-fog">
        This address holds no contract. The signal you&apos;re chasing was
        never deployed — or it self-destructed.
      </p>
      <Link
        href="/"
        className="mt-8 border border-neon-cyan px-6 py-3 font-display text-xs tracking-[0.25em] text-neon-cyan transition-colors hover:bg-neon-cyan hover:text-void"
      >
        ◂ RETURN TO THE ETHER
      </Link>
    </div>
  );
}
