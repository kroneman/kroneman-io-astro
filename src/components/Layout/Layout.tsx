import React from 'react';
import classNames from 'classnames';

import style from './Layout.module.scss';

type BodyProsp = React.ComponentProps<'body'>;
const Body = (props: BodyProps) => {
    const { children, className } = props;
    const bodyClassName = classNames(style.Body, className);

    return <body className={bodyClassName}>{children}</body >
}

type MainProps = React.ComponentProps<'main'>;
const Main = (props: MainProps) => {
    const { children, className } = props;
    const mainClassName = classNames(style.Main, className);

    return <main className={mainClassName}>{children}</main>
}

type FooterProps = React.ComponentProps<'footer'>;
const Footer = (props: FooterProps) => {
    const { children, className } = props;
    const footerClassName = classNames(style.Footer, className);

    return <footer className={footerClassName}>{children}</footer>
}

export default {
    Body,
    Main,
    Footer
};