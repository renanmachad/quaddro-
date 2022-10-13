import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import styles from './styles/app.css';
import { Toaster } from 'react-hot-toast'

// import tailwind styles
export function links() {
  return [{ rel: "stylesheet", href: styles }]
}



export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Entrevista - Quaddro",
  viewport: "width=device-width,initial-scale=1",
});

// stylesheet


export default function App() {
  
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
      <article className="flex items-center justify-center ">{children}</article>
    )
}

export function CatchBoundary(){
  let caught= useCatch();
  let message;

  switch(caught.status){
    case 404:
      message=<p> Essa página não existe no site!Porfavor volte</p>
      break;
    case 500:
      message= <p>Um erro ocorreu com o site, aguarde!</p>
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