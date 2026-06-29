export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: Section[];
}

type Section =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export const posts: BlogPost[] = [
  {
    slug: "5-signs-your-gut-is-unhealthy",
    title: "5 Signs Your Gut is Unhealthy (And What to Do About It)",
    excerpt: "Bloating, brain fog, constant fatigue — your gut might be screaming for help. Here's how to tell and what to actually do about it.",
    date: "June 20, 2026",
    readTime: "5 min read",
    category: "Gut Health",
    sections: [
      {
        type: "paragraph",
        text: "Most people don't connect their gut to their energy levels, mood, or even their weight. But your gut is essentially your second brain — and when it's off, everything else is off too.",
      },
      { type: "heading", text: "1. You're Bloated After Almost Every Meal" },
      {
        type: "paragraph",
        text: "Occasional bloating is normal. But if you're bloated after every meal — even small ones — your gut bacteria are likely imbalanced. This is called dysbiosis, and it means the bad bacteria are outnumbering the good ones, producing excess gas as they ferment your food.",
      },
      { type: "heading", text: "2. You're Always Tired, Even After Sleeping" },
      {
        type: "paragraph",
        text: "About 90% of your serotonin (the feel-good hormone) is produced in your gut. When your gut lining is damaged or inflamed, serotonin production tanks — and so does your energy. If you wake up tired no matter how much you sleep, start looking at what you're eating.",
      },
      { type: "heading", text: "3. You Have Skin Problems" },
      {
        type: "paragraph",
        text: "Acne, eczema, and rashes that don't respond to creams are often a gut problem in disguise. When your gut lining is leaky, toxins enter your bloodstream and your skin becomes the exit route. Heal the gut, clear the skin.",
      },
      { type: "heading", text: "4. You're Constantly Getting Sick" },
      {
        type: "paragraph",
        text: "70% of your immune system lives in your gut. If you catch every cold that goes around, your gut health is likely the culprit. A healthy gut microbiome is your first line of defence against viruses and bacteria.",
      },
      { type: "heading", text: "5. You Have Frequent Mood Swings or Anxiety" },
      {
        type: "paragraph",
        text: "The gut-brain axis is real. An unhealthy gut directly impacts your mental health. Studies show that gut bacteria influence anxiety, depression, and stress responses. Fix your gut, and you might just fix your mood.",
      },
      { type: "heading", text: "What to Do About It" },
      {
        type: "list",
        items: [
          "Eat more fermented foods — curd, idli, dosa, kimchi",
          "Cut down on ultra-processed food and refined sugar",
          "Eat slowly and chew your food properly",
          "Stay hydrated — aim for 2.5–3 litres of water daily",
          "Get 7–8 hours of sleep consistently",
          "Download our free Gut Health Blueprint for a complete healing plan",
        ],
      },
      {
        type: "paragraph",
        text: "Your gut didn't get unhealthy overnight, and it won't heal overnight. But with the right habits, most people see noticeable improvements in 2–4 weeks.",
      },
    ],
  },
  {
    slug: "how-to-lose-weight-without-starving",
    title: "How to Lose Weight Without Starving: A Coach's Guide",
    excerpt: "Crash diets don't work. Here's the sustainable approach that actually gets results — no starvation, no misery.",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Weight Loss",
    sections: [
      {
        type: "paragraph",
        text: "Every year, millions of people go on crash diets, lose some weight, gain it all back, and repeat the cycle. The fitness industry profits from this cycle. We don't. Here's what actually works.",
      },
      { type: "heading", text: "Why Crash Diets Always Fail" },
      {
        type: "paragraph",
        text: "When you drastically cut calories, your body panics. It drops your metabolism, breaks down muscle for fuel, and triggers intense cravings. You might lose weight for 2 weeks — but then your body fights back harder than ever. This is called metabolic adaptation, and it's why you regain everything plus more.",
      },
      { type: "heading", text: "The Simple Truth About Fat Loss" },
      {
        type: "paragraph",
        text: "Fat loss comes down to one thing: being in a calorie deficit over time. But how you create that deficit matters enormously. A 300–400 calorie daily deficit is sustainable. A 1000 calorie deficit is not. Slow and steady genuinely wins this race.",
      },
      { type: "heading", text: "What to Eat (And What to Stop Eating)" },
      {
        type: "list",
        items: [
          "Prioritise protein — dal, paneer, eggs, chicken, fish. Protein keeps you full and preserves muscle",
          "Fill half your plate with vegetables at every meal",
          "Eat whole grains over refined — brown rice, roti, oats over white rice and maida",
          "Cut liquid calories — soft drinks, fruit juices, and packaged drinks are the silent killers",
          "Stop eating out of boredom. Eat when hungry, stop when 80% full",
        ],
      },
      { type: "heading", text: "The Role of Exercise" },
      {
        type: "paragraph",
        text: "Exercise is not for burning calories — it's for building muscle, improving metabolism, and making you feel incredible. You cannot out-run a bad diet. But combining a slight calorie deficit with strength training is the most powerful fat loss combination in existence.",
      },
      { type: "heading", text: "The One Thing Most People Miss" },
      {
        type: "paragraph",
        text: "Sleep. When you don't sleep enough, your hunger hormones (ghrelin and leptin) go haywire. You crave sugar, you overeat, and your fat cells become resistant to releasing stored fat. 7–8 hours is non-negotiable if you're serious about losing weight.",
      },
      { type: "heading", text: "A Simple Starting Point" },
      {
        type: "list",
        items: [
          "Calculate your maintenance calories (body weight in kg × 30)",
          "Eat 300–400 calories below that",
          "Get 1.6–2g of protein per kg of body weight daily",
          "Walk 8,000–10,000 steps a day",
          "Lift weights 3× a week",
          "Sleep 7–8 hours",
        ],
      },
      {
        type: "paragraph",
        text: "That's it. No magic, no supplements, no extreme diets. Just consistency with the basics — applied over months, not days.",
      },
    ],
  },
  {
    slug: "why-most-fitness-plans-fail",
    title: "Why Most Fitness Plans Fail (And How to Fix Yours)",
    excerpt: "Started strong and fell off within 3 weeks? You're not lazy — your plan was just wrong. Here's what to do differently.",
    date: "June 10, 2026",
    readTime: "4 min read",
    category: "Fitness",
    sections: [
      {
        type: "paragraph",
        text: "The gym gets packed every January. By February, it's empty again. This isn't a motivation problem — it's a planning problem. Here's why most fitness plans fail and exactly how to fix yours.",
      },
      { type: "heading", text: "Reason 1: The Plan is Too Intense From Day One" },
      {
        type: "paragraph",
        text: "Going from zero to six days a week at the gym is not a plan — it's a recipe for burnout and injury. Your body needs time to adapt. Starting with 3 days a week and building from there is not the lazy option, it's the smart option.",
      },
      { type: "heading", text: "Reason 2: No Clear Goal" },
      {
        type: "paragraph",
        text: "'Get fit' is not a goal. 'Lose 8 kg in 16 weeks' is a goal. 'Do 10 pull-ups by October' is a goal. Without a specific, measurable target, you have no way to track progress — and when you can't see progress, you quit.",
      },
      { type: "heading", text: "Reason 3: Relying on Motivation Instead of Systems" },
      {
        type: "paragraph",
        text: "Motivation is unreliable. It peaks on Monday and crashes by Thursday. Successful people don't rely on motivation — they build systems. Laying out your gym clothes the night before, scheduling workouts like meetings, having a fixed workout time — these are systems. Build systems, not willpower.",
      },
      { type: "heading", text: "Reason 4: No Accountability" },
      {
        type: "paragraph",
        text: "When you only answer to yourself, it's easy to skip. When someone else is watching your progress — a coach, a friend, a training partner — suddenly missing becomes uncomfortable. Accountability is one of the most underrated tools in fitness.",
      },
      { type: "heading", text: "Reason 5: The Diet Isn't Aligned With the Goal" },
      {
        type: "paragraph",
        text: "You can't out-train a bad diet. Training hard while eating poorly is like filling a leaky bucket. If your nutrition isn't supporting your goal, your efforts in the gym will always be limited.",
      },
      { type: "heading", text: "How to Fix Your Plan Right Now" },
      {
        type: "list",
        items: [
          "Set one specific, measurable goal with a deadline",
          "Start with 3 workouts a week — add more only when it feels easy",
          "Schedule your workouts in your calendar like meetings",
          "Find an accountability partner or hire a coach",
          "Sort your nutrition before optimising your training",
          "Track your progress weekly — weight, photos, strength numbers",
        ],
      },
      {
        type: "paragraph",
        text: "Fitness is simple. Not easy — but simple. The people who succeed aren't more talented or more motivated. They just have better systems and better support. If you want both, that's exactly what we offer at FIX YOUR BODY.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
