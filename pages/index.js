
/*
Copyright (c) 2018-2020 Uber Technologies, Inc.
This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
/* global process */

import * as React from 'react';
import {Block} from 'baseui/block';
import {Button} from 'baseui/button';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {StyledLink as Link} from 'baseui/link';
import {H1, H2} from '../components/markdown-elements';
import {Card, StyledBody} from 'baseui/card';
import {Tag} from 'baseui/tag';
import {withStyle} from 'baseui';
import { i18n, Linki18, withTranslation } from '../i18n'


import Layout from '../components/layout';

import Markdown from '../components/markdown-elements';

const MinHeightBody = withStyle(StyledBody, {
    minHeight: '150px',
});

const cardOverrides = {
    Root: {
        style: ({$theme}) => ({
            marginLeft: $theme.sizing.scale600,
            marginRight: $theme.sizing.scale600,
            marginTop: $theme.sizing.scale500,
            width: '300px',
        }),
    },
};


const Index = (props) => (
    <Layout
        toggleDirection={props.toggleDirection}
        toggleTheme={props.toggleTheme}
    >
        <Block
            marginTop={['scale100', 'scale400', 'scale800']}
            display="block"
            $as="a"
            // href={BlogPosts[0].path}
            overrides={{
                Block: {
                    style: ({$theme}) => ({
                        textDecoration: 'none',
                        ':focus': {
                            outline: `3px solid ${$theme.colors.accent}`,
                            outlineOffset: '5px',
                        },
                    }),
                },
            }}
        >
            <Tag kind="positive" closeable={false}>
                New
            </Tag>
            <Block color="contentPrimary" display="inline-block" font="font250">
             TITLE
            </Block>
        </Block>
        <H1>Base Web React UI Framework</H1>
        <Markdown.p>
            Base Web is a foundation for initiating, evolving, and unifying web
            products.
        </Markdown.p>
        <Block
            display="flex"
            marginLeft="-16px"
            marginRight="-16px"
            overrides={{
                Block: {
                    style: ({$theme}) => ({
                        flexWrap: 'wrap',
                        [$theme.mediaQuery.small]: {
                            flexWrap: 'nowrap',
                        },
                    }),
                },
            }}
        >
            <Card title="Setup Base Web" overrides={cardOverrides}>
                <MinHeightBody>
                    Base Web is distributed as an npm package. As Base Web is built on top
                    of a CSS-in-JS engine, all you need is the dependencies from npm.
                </MinHeightBody>
                <Button
                    $as="a"
                    href="/getting-started/setup"
                    overrides={{
                        BaseButton: {
                            style: ({$theme}) => ({
                                boxSizing: 'border-box',
                                width: '100%',
                            }),
                        },
                    }}
                >
                    Setup Base Web
                </Button>
            </Card>

            <Card title="Learning Base Web" overrides={cardOverrides}>
                <MinHeightBody>
                    Probably the best way to learn Base Web is by start building an
                    application using it. On this page, you’ll find a simple and a more
                    complex app built using Base Web.
                </MinHeightBody>
                <Button
                    $as="a"
                    href="/getting-started/learn"
                    overrides={{
                        BaseButton: {
                            style: ({$theme}) => ({
                                boxSizing: 'border-box',
                                width: '100%',
                            }),
                        },
                    }}
                >
                    Learn more
                </Button>
            </Card>
        </Block>
        <H2>Components</H2>
        <Markdown.p>
            Base Web provides a robust suite of components out of the box. These
            include complex, ready to use components such as the{' '}
            <Link href="/components/datepicker">Datepicker</Link> and low-level
            composable primitives, such as <Link href="/components/layer">Layer</Link>
            .
        </Markdown.p>
        <Markdown.p>
            For an overview of everything that we offer, check out the{` `}
            <Link href="/components">component gallery</Link>.
        </Markdown.p>
        <H2>Extensibility</H2>
        <Markdown.p>
            Through the{' '}
            <Link href="/guides/understanding-overrides">Overrides API</Link> and{' '}
            <Link href="/guides/theming">configurable Themes</Link>, Base Web provides
            you with an extreme level of customization. No matter if you want to
            modify a component in one place only, or you want to build your design
            system on top of Base Web, we have the options for you.
        </Markdown.p>
        <H2>Built-in Accessibility</H2>
        <Markdown.p>
            Base Web does the heavy lifting for you—components are built with
            accessibility being a first-class citizen.
        </Markdown.p>
        <H2>Performance</H2>
        <Markdown.p>
            Styletron is the CSS-in-JS engine powering Base Web. Based on{' '}
            <Link href="https://ryantsao.com/blog/virtual-css-with-styletron">
                our benchmarks
            </Link>
            , this is one of the fastest solutions.
        </Markdown.p>
        <H2>Figma Communities</H2>
        <Markdown.p>
            You can find all the Base Web components on{' '}
            <Link href="https://baseweb.design/blog/base-figma-community/">
                Figma Communities
            </Link>
            .This should help your design team adopt Base Web, while engineers can use
            the React implementation.
        </Markdown.p>

    </Layout>
);
Index.getInitialProps = async () => {

    return {
        namespacesRequired: ['common'],

    }
}

export default withTranslation('common')(Index)