import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import NavBar from './NavBar';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`;

export default ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Container>
            <NavBar siteTitle={data.site.siteMetadata.title} />
            {children}
        </Container>
    );
};
