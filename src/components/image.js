import styled from 'styled-components';

export default styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: 100%;
`;