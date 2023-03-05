import React from 'react';
import classNames from 'classnames';

import style from './Layout.module.scss';

type MainProps = React.ComponentProps<'main'>;
const Main = (props: MainProps) => {
    const { children, className } = props;
    const mainClassName = classNames(style.Main, className);

    return <main className={mainClassName}>{children}</main>
}

export default {
    Main
};