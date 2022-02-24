import type { LinksFunction } from "remix";
import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { getPosts } from "~/utils/airtable-client";
import Markdown from 'markdown-to-jsx';

import stylesUrl from "~/styles/blog.css";


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return await getPosts();
};

export default function Index() {
  const posts = useLoaderData<any[]>();
  return (
   [
   <div className="page-container">
     <div className="card">
       <h1 style={{textAlign: 'center'}}>📰 Blog 📰</h1>
      </div>
      {posts.map((entry) => {
        return <div className="card">
          <h2 id={entry.id}>{entry.title}</h2>
          <h3>{entry.date}</h3>
          <p><Markdown>{entry.content}</Markdown></p>
        </div>
      })}
    </div>,
    <div className="home"><a href="/">🏠</a></div>
   ]
  );
};
