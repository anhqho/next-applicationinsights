import React from 'react'
import App, { Container, AppContext } from 'next/app'
import { withApplicationInsights } from '../../../dist';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withApplicationInsights({ 
  instrumentationKey: 'e59928a0-1de7-443d-bb4d-72aa5fd39132'
})(MyApp)