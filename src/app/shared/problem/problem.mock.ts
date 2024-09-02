import { Problem } from "./problem";

export const problemsMock: Problem[] = [
  {
    id: '1',
    title: 'How to add a component multiple times in React JSX?',
    description: `Im trying to do something like the following in React JSX (where ObjectRow is a separate component):
    <div class="mockup-code">
    <pre data-prefix="$"><code>
      for (var i=0; i < numrows; i++) {
      } 
    </code></pre>
    </div>
    I realize and understand why this isn't valid JSX, since JSX maps to function calls. However, coming from template land and being new to JSX, I am unsure how I would achieve the above (adding a component multiple times).`,
    createdAt: new Date().toString(),
    updatedAt: null,
    createdBy: {
      id: 1,
      displayName: 'John Doe',
      userImage:'img/anon.png',
    },
    solved: false,
    verifiers: [{
      id: 100,
      displayName: 'Elon Musk',
      userImage:'img/anon.png',
    }],
    chat: [],
    solutions: [{
      description: `You can use an array to store the components and then render them in the JSX. Here is an example:
      <div class="mockup-code">
      <pre data-prefix="$"><code>
        const rows = [];
        for (var i=0; i < numrows; i++) {
          rows.push(<ObjectRow key={i} />);
        }
        return <div>{rows}</div>;
      </code></pre>
      </div>`,
      createdAt: new Date().toString(),
      createdBy: {
        id: 20,
        displayName: 'Jane Doe',
        userImage:'img/anon.png'
      }
    }],
    reward: 100,
    deadline: new Date().setMonth(new Date().getMonth() + 1),
  },
  {
    id: '2',
    title: 'Building Hydroelectric BTC Farm',
    description: `Hi Everyone, I've been brought in to help build a BTC mining farm next to a hydroelectric plant. The owner has an extra capacity of 10MW and wants to get into mining. I've begun my research but wanted to reach out to the community as a sounding board.

The power is basically free so let's call it $.015/Kw. He wants to invest $1M upfront to get things rolling. The short-term goal is to mine 1 BTC/Month and scale from there. Right now I'm leaning towards the Antspace HW5 along with 45 Antminer S21 XP Hyd. This will get us over 1 BTC/Month and will get us enough Hash to get pooled with Foundry USA.

Questions:

Thoughts on the HW5 w/ S21 XP Hyd?

Thoughts on the Antspace HK3 vs. HW5 for hydro cooling?

Thoughts on using Foundry USA Pool vs/ Solo Mining

Thank you,`,
    createdAt: new Date(),
    updatedAt: null,
    createdBy: {
      id: 1,
      displayName: 'Trevalution1',
      userImage:'img/anon.png'
    },
    solved: false,
    chat: [],
    solutions: [],
    reward: 100,
    verifiers: [],
  },
];