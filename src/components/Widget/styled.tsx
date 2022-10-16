import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  width: 375px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) =>
    theme.theme || `"Work Sans", "Inter var", sans-serif`};
  position: relative;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  font-weight: 500;
  align-items: center;
`;

export const InputWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem;
  background: ${({ theme }) => theme.inputBackground};
  margin-top: 1rem;
`;

export const MaxHalfBtn = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.interactive};
  border-radius: ${({ theme }) => theme.buttonRadius};
  color: ${({ theme }) => theme.subText};
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.25rem;

  :hover {
    opacity: 0.8;
  }
`;

export const BalanceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SettingBtn = styled.button`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.buttonRadius};
  width: 2.25rem;
  height: 2.25rem;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.subText};

  :hover {
    background: ${({ theme }) => theme.inputBackground};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const SwitchBtn = styled(SettingBtn)`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.inputBackground};

  :hover {
    opacity: 0.8;
  }
`;

export const AccountBalance = styled.div`
  gap: 4px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.subText};
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.inputBackground};
  outline: none;
  border: none;
  color: ${({ theme }) => theme.text};

  :disabled {
    cursor: not-allowed;
  }
`;

export const SelectTokenBtn = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.interactive};
  border-radius: ${({ theme }) => theme.buttonRadius};
  padding: 0.375rem 0 0.375rem 0.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.subText};
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const MiddleRow = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const MiddleLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.buttonRadius};
  width: 100%;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem;
  background: ${({ theme }) => theme.primary};
  cursor: pointer;

  :disabled {
    background: #292929;
    color: ${({ theme }) => theme.subText};
  }

  :active {
    transform: scale(0.99);
  }
`;

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`;

export const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;

export const Rate = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.subText};
`;
