import { Metadata } from "next";
import TitleComponent from "../components/title";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software Engineer at Xero.",
};

export default function page() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-10">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <TitleComponent
          title="Ticker Tracker"
          link="https://www.reddit.com/r/PersonalFinanceNZ/comments/nfys7y/tracking_your_whole_portfolio_made_easier/"
        />
        <p>
          Ticker Tracker is a full-stack portfolio tracking application that has
          over 650 signups and 10,000 sessions. It is a place where users can
          aggregate all of their investments into one location. It is built
          using React, Redux, Typescript, and SCSS for the frontend, Yahoo
          Finance for the financial data, Fixer for the foreign currency rates,
          and Firebase to host the backend/database.
        </p>
        <hr />
        <TitleComponent
          title="Album Listen List"
          link="https://www.reddit.com/r/truespotify/comments/18omr84/i_built_a_website_to_keep_track_of_all_the_albums/"
        />
        <p>
          Album Listen List is a full-stack web application that has over 450
          signups and 4,500 page views. It is a place where users can aggregate
          all of the albums they plan to listen to, rate their favourites, and
          share their list with friends. It is built using React, Typescript,
          and Tailwind for the frontend, and Firebase to host the
          backend/database.
        </p>
        <hr />
        <TitleComponent
          title="Piano Theory"
          link="https://www.pianotheory.app/"
        />
        <p>
          Piano Theory is a frontend web app with over 500 unique visitor. It's
          a place where users can learn how to play various chords and scales
          using a virtual piano. It is built using React, Typescript, Tailwind,
          and Redux Toolkit.
        </p>
      </div>
    </section>
  );
}
