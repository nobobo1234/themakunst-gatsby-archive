import styled from 'styled-components';
import Select from '../Select';

export default styled.div`
    height: 8rem;
    width: 100%;
    background-color: purple;
    display: flex;
    align-items: center;
    padding: .5rem;

    & > *:not(:last-child) {
        margin-right: 1rem;
    }

    & > ${Select} {
        width: 12rem;
        font-family: inherit;
        font-size: 1.2rem;
    }
`;