import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';
import BackgroundImage from '../components/backgroundImage';
import Info from '../components/info';

const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <BackgroundImage />
        <HomeContainer>
            <Title>Thema Kunst</Title>
            <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae mi diam. Cras eget tristique massa, eget consectetur diam. Quisque fringilla quam tempor, sollicitudin nisl nec, rhoncus mi. Sed congue et justo eu blandit. Nulla facilisi. Sed malesuada, magna nec tempor consectetur, diam eros varius urna, id lobortis purus est.</Info>
        </HomeContainer>
    </Layout>
);

export default IndexPage;
