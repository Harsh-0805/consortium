import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface IProps extends LinkProps {
  children: ReactNode
  className?: string
}

const NoScrollLink = ({ children, href, passHref, className }: IProps): JSX.Element => (
  <Link href={href} passHref={passHref} scroll={false} className={className}>
    {children}
  </Link>
)

export default NoScrollLink