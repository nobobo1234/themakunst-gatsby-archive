import styled from 'styled-components';

export default styled.img.attrs(props => ({
    src: props.src
}))`
    height: 100%;
    display: block;
`;