import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)
    Router.events.on("routeChangeStart", (url) => {
      console.log(`Loading: ${url}`);
      document.body.classList.add("body-page-transition");
      ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
      );
    });
    
    Router.events.on("routeChangeComplete", () => {
      ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
      document.body.classList.remove("body-page-transition");
    });
    
    Router.events.on("routeChangeError", () => {
      ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
      document.body.classList.remove("body-page-transition");
    });
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}
