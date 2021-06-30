import styled from "styled-components";

export const Wrapper = styled.div`
  .ais-SearchBox-input {
    width: 100%;
    height: 46px;
    font-size: 18px;
    color: var(--text);
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 70px;
    border: 1px solid var(--text);
    border-radius: var(--border);
    &::placeholder {
      color: var(--text);
    }
    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-item {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const Input = styled.input``;
