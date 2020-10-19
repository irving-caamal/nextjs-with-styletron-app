import * as React from "react";
import {
    AppNavBar,
    setItemActive
} from "baseui/app-nav-bar";
import {
    ChevronDown,
    Delete,
    Overflow,
    Upload
} from "baseui/icon";
import Footer from "../components/Footer";
import {Block} from "baseui/block";
import Link from "next/link";
import {styled} from "baseui";
export default function Layout({ children }) {
    const [mainItems, setMainItems] = React.useState([
        { icon: Upload, label: "Main A" },
        {
            active: true,
            icon: ChevronDown,
            label: "Main B",
            navExitIcon: Delete,
            children: [
                { icon: Upload, label: "Secondary A" },
                { icon: Upload, label: "Secondary B" }
            ]
        }
    ]);
    const StyledLink = styled('a', ({$theme}) => ({
        textDecoration: 'none',
        color: $theme.colors.contentPrimary,
        display: 'inline-block',
        cursor: 'pointer',
        marginLeft: '32px',
        ':first-child': {
            marginLeft: '0',
        },
        ':focus': {
            outline: `3px solid ${$theme.colors.accent}`,
            outlineOffset: '3px',
        },
        ':hover': {
            color: $theme.colors.primary,
            textDecoration: 'none',
        },
    }));
    return   (
        <React.Fragment>
            <AppNavBar
                title="Title"
                mainItems={mainItems}
                onMainItemSelect={item => {
                    setMainItems(prev => setItemActive(prev, item));
                }}
                username="Umka Marshmallow"
                usernameSubtitle="5 Stars"
                userItems={[
                    { icon: Overflow, label: "User A" },
                    { icon: Overflow, label: "User B" }
                ]}
                onUserItemSelect={item => console.log(item)}
            />
            <Block paddingBottom="scale900">
                <StyledLink href="https://github.com/uber/baseweb" target="_blank">
                    GitHub
                </StyledLink>
                <StyledLink href="https://twitter.com/BaseWebReact" target="_blank">
                    Twitter
                </StyledLink>
                <StyledLink
                    href="https://join.slack.com/t/baseui/shared_invite/zt-5f1s4d10-1D2uywAECAG50m64PTH9cw"
                    target="_blank"
                >
                    Slack Chat room
                </StyledLink>
                <StyledLink
                    href="https://github.com/uber/baseweb/releases"
                    target="_blank"
                >
                    Changelog
                </StyledLink>
                <Link href="/blog">
                    <StyledLink href="/blog">Blog</StyledLink>
                </Link>
            </Block>
            <Footer />
        </React.Fragment>
    )
}
