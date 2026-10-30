// Real figures from the September 2026 money-system audit of my own agent system (SEVEN).
export const AUDIT = {
  ventures: 40,
  posts: 1003,
  leads: 2090,
  mailableLeads: 0,
  testRevenue: "$590.97",
  testOrders: 10,
  realRevenue: "$0.00",
};

export type BoardRow = {
  label: string;
  says: string;
  truth: string;
};

// What the dashboard reported for each incident, and what was actually happening.
export const INCIDENT_ROWS: BoardRow[] = [
  { label: "payment webhook", says: "200 OK", truth: "never fired once" },
  { label: "launch gate", says: "healthy", truth: "47 blocks, 3 passes" },
  { label: "build loop", says: "running", truth: "3 weeks, no output" },
  { label: "scheduler", says: "balanced", truth: "a third starved" },
  { label: "fulfilment", says: "delivered", truth: "sent the sales page" },
];

export type Incident = {
  title: string;
  body: string;
  fix: string;
};

// Section titles match the post-mortem's own headings.
export const INCIDENTS: Incident[] = [
  {
    title: "The money rail that had never once fired",
    body: "Webhook on the wrong service, registered in test mode, with an empty signing secret and no dedupe. The endpoint stayed up the whole time.",
    fix: "webhook_rail",
  },
  {
    title: "The gate that fails closed and deadlocks everything",
    body: "When the judging model returned 429s, every judgement became a rejection. The gate blocked 47 launches and passed 3. The logs showed a busy, green system.",
    fix: "gates",
  },
  {
    title: "The loop that ran for three weeks and produced nothing",
    body: "Every health check passed, because health checks ask whether it ran. Nobody asked whether running it changed anything.",
    fix: "staleness",
  },
  {
    title: "The tunable that was secretly an off-switch",
    body: "One number quietly starved a third of the system of budget. No error was ever raised.",
    fix: "attention",
  },
  {
    title: "Delivering the sales page to the person who just bought it",
    body: "The fulfilment bug that stays invisible until someone has actually paid you.",
    fix: "delivery",
  },
];

// Table of contents of the paid post-mortem, as written in the document.
export const POSTMORTEM_TOC = [
  "The money rail that had never once fired",
  "The gate that fails closed and deadlocks everything",
  "The loop that ran for three weeks and produced nothing",
  "The tunable that was secretly an off-switch",
  "Delivering the sales page to the person who just bought it",
  "The pattern behind all five",
];
