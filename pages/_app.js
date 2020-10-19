import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../styletron'
import { appWithTranslation } from '../i18n'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <Component {...pageProps} />
      </StyletronProvider>
    )
  }
}
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)