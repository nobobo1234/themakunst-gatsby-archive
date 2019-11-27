import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Title from '../components/Title';
import BackgroundImage from '../components/BackgroundImage';
import Info from '../components/Info';

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
