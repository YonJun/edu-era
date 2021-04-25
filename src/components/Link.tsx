import { useRouter } from 'next/router';
import { default as NextLink } from 'next/link';
import { LinkProps as NexLinkProps } from 'next/link';
import React, { Children, FC } from 'react';

type LinkProps = NexLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    activeClassName?: string;
    children: JSX.Element;
  };

const Link: FC<LinkProps> = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter();

  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href || asPath === props.as ? `${childClassName} ${activeClassName ?? ''}`.trim() : childClassName;

  return (
    <NextLink {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </NextLink>
  );
};
export default Link;
