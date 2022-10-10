import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from './styles/app.css';
import { Toaster } from 'react-hot-toast'

// import tailwind styles
export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export async function loader(){
  return json({
    ENV:{
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_TOKEN: process.env.SUPABASE_TOKEN,
    }
  });
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Entrevista - Quaddro",
  viewport: "width=device-width,initial-scale=1",
});

// stylesheet


export default function App() {
  const { ENV } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        
          
          <Outlet />
          <Toaster/>
          <ScrollRestoration />

          <Scripts />
          <LiveReload />
      
      </body>
    </html>
  );
}
function Document({
  children,
  title
}:{
  children:React.ReactNode,
  title:string
}){
  return(
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        {title ? <title>{title}</title> : null}
        <Meta/>
      </head>|
      <body>
        {children}
        <ScrollRestoration/>
        <Scripts/>
        {process.env.NODE_ENV ==="development" && <LiveReload/>
        }
      </body>
    </html>
  )
}

function Layout({children}:React.PropsWithChildren<{}>){
    return(
      <article>{children}</article>
    )
}

export function CatchBoundary(){
  let caught= useCatch();
  let message;

  switch(caught.status){
    case 404:
      message=<p> Essa página não existe no site!Porfavor volte</p>
      break;
    
    default:
      throw new Error(caught.data || caught.statusText)
  }


  return(
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )

}