import classNames from 'classnames';

import style from './HeaderLink.module.scss';

type HeaderLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  isActive: boolean;
};

const HeaderLink = (props: HeaderLinkProps) => {
  const { href, className, children, isActive, ...otherProps } = props;
  const linkClassNames = classNames(style.HeaderLink, className, {
    [style.isActive]: isActive,
  });
  return (
    <a href={href} className={linkClassNames} {...otherProps}>
      {children}
    </a>
  );
};

export default HeaderLink;
