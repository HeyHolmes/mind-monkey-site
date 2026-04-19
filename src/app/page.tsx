import habitsData from "@/data/habits.json";
import DistressedMonkey from "@/components/DistressedMonkey";
import StatBar from "@/components/StatBar";
import EventLog from "@/components/EventLog";

export default function Home() {
  const { state, history } = habitsData;
  const todayEvents = history[history.length - 1]?.events ?? [];

  const statusLabel =
    state.monkey_happiness < 20
      ? "Mind Monkey is hurting"
      : state.monkey_happiness < 50
        ? "Mind Monkey is struggling"
        : state.monkey_happiness < 80
          ? "Mind Monkey is okay"
          : "Mind Monkey is thriving!";

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#0a0a0a] px-4 py-8">
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
          Mind Monkey
        </h1>
        <p className="text-xs font-mono text-zinc-500 mt-1">
          tamagotchi for your brain
        </p>
      </div>

      {/* Status badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-red-950/50 text-red-400 border border-red-900/50">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          {statusLabel}
        </span>
      </div>

      {/* Monkey scene */}
      <div className="relative mb-8">
        <DistressedMonkey happiness={state.monkey_happiness} />

        {/* Speech bubble */}
        <div className="absolute -right-4 top-4 bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-300 max-w-[120px]">
          <p>I&apos;m hurting...</p>
          <div className="absolute -left-2 top-4 w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent border-r-zinc-800" />
        </div>
      </div>

      {/* Stat bars */}
      <div className="w-full max-w-sm space-y-4 mb-8">
        <StatBar
          label="Happiness"
          value={state.monkey_happiness}
          color="#ff6b9d"
        />
        <StatBar label="Health" value={state.monkey_health} color="#44ff88" />

        {/* Streak */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Streak
          </span>
          <span className="text-sm font-mono text-zinc-400">
            {state.streak_days} days
          </span>
        </div>
      </div>

      {/* Event log */}
      <div className="w-full max-w-sm mb-8">
        <EventLog events={todayEvents} />
      </div>

      {/* Footer */}
      <footer className="text-center mt-auto pt-8 pb-4">
        <p className="text-[10px] font-mono text-zinc-600">
          mymindmonkey.com
        </p>
      </footer>
    </div>
  );
}
