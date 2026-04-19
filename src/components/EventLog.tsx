interface HabitEvent {
  type: string;
  note: string;
  impact: {
    happiness: number;
    health: number;
  };
}

const typeIcons: Record<string, string> = {
  alcohol: "\uD83C\uDF7A",
  sleep: "\uD83D\uDE34",
  exercise: "\uD83C\uDFCB\uFE0F",
  diet: "\uD83E\uDD57",
  water: "\uD83D\uDCA7",
};

export default function EventLog({ events }: { events: HabitEvent[] }) {
  return (
    <div className="w-full space-y-2">
      <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
        Today&apos;s Events
      </h3>
      {events.map((event, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800"
        >
          <span className="text-xl">{typeIcons[event.type] || "\u2753"}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-zinc-300">{event.note}</p>
            <div className="flex gap-3 mt-1">
              <span
                className={`text-xs font-mono ${event.impact.happiness < 0 ? "text-red-400" : "text-green-400"}`}
              >
                {event.impact.happiness > 0 ? "+" : ""}
                {event.impact.happiness} happy
              </span>
              <span
                className={`text-xs font-mono ${event.impact.health < 0 ? "text-red-400" : "text-green-400"}`}
              >
                {event.impact.health > 0 ? "+" : ""}
                {event.impact.health} health
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
