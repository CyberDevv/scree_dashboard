import tw from 'twin.macro';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

const ActiveLink = ({ children, activeClassName, ...props }) => {
   const { asPath } = useRouter();
   const child = Children.only(children);
   const childClassName = child.props.className || '';

   // pages/index.js will be matched via props.href
   // pages/about.js will be matched via props.href
   // pages/[slug].js will be matched via props.as
   const className =
      asPath === props.href || asPath === props.as
         ? `${childClassName} ${activeClassName}`.trim()
         : childClassName;

   return (
      <NavItem className={className}>
         <Link {...props}>
            {/* {React.cloneElement(child, {
               className: className || null,
            })} */}
            {children}
         </Link>
      </NavItem>
   );
};

ActiveLink.propTypes = {
   activeClassName: PropTypes.string.isRequired,
};

// Tailwind Styles
const NavItem = tw.div`pl-6 py-[1.1rem] relative cursor-pointer`;

export default ActiveLink;
