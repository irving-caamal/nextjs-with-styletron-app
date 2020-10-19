// @flow
import * as React from 'react';
import {
    createThemedStyled,
    createThemedUseStyletron,
    createThemedWithStyle,
    BaseProvider,
    DarkTheme,
    DarkThemeMove,
    LightTheme,
    LightThemeMove,
} from 'baseui';

import { appWithTranslation } from '../i18n'
import App from 'next/app';
import {Provider as StyletronProvider} from 'styletron-react';
import {Block} from 'baseui/block';
import Router from 'next/router';
//import type {AppProps} from 'next/app';
//import type {NextPage, NextPageContext} from 'next';

import {styletron, debug} from '../helpers/styletron';
// $FlowFixMe
//import {trackPageView} from '../helpers/ga';
import DirectionContext from '../components/direction-context';

const breakpoints = {
    small: 670,
    medium: 920,
    large: 1280,
};

const ResponsiveTheme = Object.keys(breakpoints).reduce(
    (acc, key) => {
        acc.mediaQuery[
            key
            ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
        return acc;
    },
    {
        breakpoints,
        mediaQuery: {},
    },
);

const themes = {
    LightTheme: {...LightTheme, ...ResponsiveTheme},
    LightThemeMove: {...LightThemeMove, ...ResponsiveTheme},
    DarkTheme: {...DarkTheme, ...ResponsiveTheme},
    DarkThemeMove: {...DarkThemeMove, ...ResponsiveTheme},
};

export const themedStyled = createThemedStyled();
export const themedWithStyle = createThemedWithStyle();
export const themedUseStyletron = createThemedUseStyletron(LightTheme);

const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';
const LIGHT_MEDIA_QUERY = '(prefers-color-scheme: light)';

const blockProps = {
    color: 'contentPrimary',
    backgroundColor: 'backgroundPrimary',
    maxWidth: '100vw',
    minHeight: '100vh',
    overflow: 'hidden',
};

class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            theme: themes.LightTheme,
            direction: 'ltr',
        };
        // $FlowFixMe
        // this.mediaQueryListener = this.mediaQueryListener.bind(this);
    }

    static async getInitialProps({
                                     Component,
                                     ctx,
                                 }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {path: ctx.asPath, pageProps};
    }

    setThemeStyle(theme) {
        localStorage.setItem('docs-theme', theme);
    }

    toggleTheme() {
        const theme = this.getThemeStyle();

        if (theme === 'dark') {
            this.setThemeStyle('light');
        } else {
            this.setThemeStyle('dark');
        }

        this.setTheme();
    }

    toggleDirection() {
        if (this.state.direction === 'rtl') {
            this.setState({
                direction: 'ltr',
                theme: {...this.state.theme, direction: 'ltr'},
            });
            if (document.body) {
                document.body.dir = 'ltr';
            }
        } else {
            this.setState({
                direction: 'rtl',
                theme: {...this.state.theme, direction: 'rtl'},
            });
            if (document.body) {
                document.body.dir = 'rtl';
            }
        }
    }
    render() {
        const { Component, pageProps, path } = this.props
        return (
            <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
                <BaseProvider theme={this.state.theme}>
                    <DirectionContext.Provider value={this.state.direction}>
                        <Component
                            {...pageProps}
                            path={path}
                            toggleTheme={this.toggleTheme.bind(this)}
                            toggleDirection={this.toggleDirection.bind(this)}
                        />
                    </DirectionContext.Provider>
                </BaseProvider>
            </StyletronProvider>
        )
    }
}
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)