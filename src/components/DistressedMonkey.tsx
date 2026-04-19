"use client";

export default function DistressedMonkey({
  happiness,
}: {
  happiness: number;
}) {
  const isVerySad = happiness < 20;

  return (
    <div className="relative flex items-center justify-center">
      {/* Steam puffs from the brain */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="steam-puff absolute -left-8 top-0 w-4 h-4 rounded-full bg-orange-400/60 blur-sm" />
        <div className="steam-puff-delayed absolute left-0 -top-2 w-5 h-5 rounded-full bg-red-400/50 blur-sm" />
        <div className="steam-puff-delayed-2 absolute left-8 top-0 w-3.5 h-3.5 rounded-full bg-orange-300/50 blur-sm" />
      </div>

      <div className={`monkey-float ${isVerySad ? "monkey-shake" : ""}`}>
        <svg
          viewBox="0 0 200 240"
          width="200"
          height="240"
          className="monkey-glow"
        >
          {/* Brain base */}
          <ellipse
            cx="100"
            cy="180"
            rx="70"
            ry="45"
            fill="#e8a0bf"
            stroke="#d4749e"
            strokeWidth="2"
          />
          {/* Brain folds */}
          <path
            d="M50 175 Q65 160 80 175 Q95 160 110 175 Q125 160 140 175"
            fill="none"
            stroke="#d4749e"
            strokeWidth="2"
          />
          <path
            d="M55 190 Q70 175 85 190 Q100 175 115 190 Q130 175 145 190"
            fill="none"
            stroke="#d4749e"
            strokeWidth="2"
          />
          {/* Brain overheated overlay */}
          <ellipse
            cx="100"
            cy="180"
            rx="70"
            ry="45"
            fill="rgba(255, 80, 50, 0.15)"
          />

          {/* Monkey body */}
          <ellipse cx="100" cy="130" rx="32" ry="28" fill="#ff8fbf" />
          {/* Monkey head */}
          <circle cx="100" cy="90" r="30" fill="#ff6b9d" />
          {/* Inner face */}
          <circle cx="100" cy="95" r="20" fill="#ffb3d1" />
          {/* Ears */}
          <circle cx="68" cy="80" r="12" fill="#ff6b9d" />
          <circle cx="68" cy="80" r="7" fill="#ffb3d1" />
          <circle cx="132" cy="80" r="12" fill="#ff6b9d" />
          <circle cx="132" cy="80" r="7" fill="#ffb3d1" />

          {/* Sad eyes — closed/squinting */}
          <path
            d="M88 88 Q92 94 96 88"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M104 88 Q108 94 112 88"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Eyebrows — worried */}
          <path
            d="M86 82 Q90 78 96 82"
            fill="none"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M104 82 Q110 78 114 82"
            fill="none"
            stroke="#333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Frown */}
          <path
            d="M92 104 Q100 98 108 104"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Tears */}
          <circle cx="89" cy="96" r="2.5" fill="#6b8bff" className="tear" />
          <circle
            cx="111"
            cy="96"
            r="2.5"
            fill="#6b8bff"
            className="tear-delayed"
          />

          {/* Arms drooping */}
          <path
            d="M68 130 Q55 145 52 155"
            fill="none"
            stroke="#ff6b9d"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M132 130 Q145 145 148 155"
            fill="none"
            stroke="#ff6b9d"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Tail drooping */}
          <path
            d="M100 158 Q130 170 125 195"
            fill="none"
            stroke="#ff6b9d"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
