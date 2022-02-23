import type { LinksFunction } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="page-container">
      <div className="card">
        <h1>🤠 Howdy, my name is Maxwell</h1>
        <p>I'm hacker, a maker, and a full-time jokester. Welcome to my very professional site.</p>
      </div>
      <div className="card">
        <h2>👋 About Me:</h2>
        <p>
          I'm passionate about developer velocity. In my day job I'm part of the <a href="https://www.amazon.com/hz/wishlist/intro">wishlist team at Amazon</a>
          where I gravitate towards devops projects. In my previous role at <a href="https://www.epic.com">Epic Systems</a> I built developer tools.
        </p>
        <p>
          I'm concerned that many engineers waste their time dealing with needlessly complex tools; building and rebuilding
          software that already exists. I want to find solutions that help engineers focus on solving
          problems that matter, not problems that have already been solved.
        </p>
      </div>
      <div className="card">
        <h2>🗞 Blog:</h2>
        <p><a href="blog">This way</a></p>
      </div>
      <div className="card">
        <h2>🔨 What I'm Hacking on:</h2>
        <p>
          <ul>
            <li>Remix</li>
            <li>NorthFlank</li>
            <li>AirTable</li>
            <li>Docker</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
