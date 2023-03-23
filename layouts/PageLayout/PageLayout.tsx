import React, { FC, ReactNode } from 'react';
import { withBem } from 'utils/bem';
import MeProvider from 'lib-client/providers/Me';

type Props = {
    children: ReactNode;
    noPaddingTop?: boolean;
};

const PageLayout: FC<Props> = ({ children, noPaddingTop = false }) => {
    const b = withBem('page-layout');

    return (
        <MeProvider>
            <div className={b()}>
                {/* <Navbar /> */}
                <div className={b('navbar-placeholder')} />

                <main className={b('content', { 'no-padding-top': noPaddingTop })}>
                    {/* Views (page) level loading and error handling */}
                    {children}
                </main>

                {/* <Footer /> */}
            </div>
        </MeProvider>
    );
};

export default PageLayout;
