import styled from 'styled-components';

import background from '../images/backdrop.jpg';

export default styled.div`
    background-image: url(${background});
    background-size: cover;
    filter: blur(2px);
    height: 100%;
    width: 100%;
    position: fixed;
    background-position: center;
    z-index: -1;
`;