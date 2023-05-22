import { ReactNode } from 'react';
import Header from '../Header/Header';

interface PageLayoutProps {
  children?: ReactNode;
  hasHeader?: boolean;
  className?: string;
}

const PageLayout = ({ children, hasHeader = true }: PageLayoutProps) => {
  return (
    <>
      <header>
        <title>Memorise</title>
        <meta name="description" content="Memorise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main>
        {hasHeader && <>{hasHeader && <Header />}</>}
        {children}
      </main>
    </>
  );
};

export default PageLayout;
