import styled from "@emotion/styled";

export const StyledModal = styled.div<{
  isVisible: boolean;
  width?: number;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;

  ${({ isVisible, theme }) =>
    isVisible && `background-color: ${theme.colors.box.overlay}`};

  transition: 0.2s;

  & > div {
    max-width: calc(100% - 40px);
    max-height: calc(100% - 40px);
    min-width: 240px;
    ${({ width }) => (width ? `width: ${width}px;` : "")};

    background-color: ${({ theme }) => theme.colors.box.background + ""};
    border-radius: ${({ theme }) => theme.variables.radius[2]};
    border: 1px solid ${({ theme }) => theme.colors.box.border[2] + ""};
    box-shadow: 0 30px 60px 0 ${({ theme }) => theme.colors.box.shadow[1] + ""};

    overflow: hidden;

    display: flex;
    flex-direction: column;

    transition: opacity 0.2s, transform 0.3s cubic-bezier(0.17, 0.67, 0.19, 1);

    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
    transform: ${({ isVisible }) => (isVisible ? "scale(1) " : "scale(0.8)")};
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 54px;
  padding: 0 16px;
  column-gap: 12px;

  background-color: ${({ theme }) => theme.colors.box.foreground[1] + ""};
  border-top: 1px solid ${({ theme }) => theme.colors.box.border[2] + ""};
`;

export const StyledTemplate = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > div:nth-of-type(1) {
    padding: 50px 20px 10px 20px;
    word-break: keep-all;
    white-space: pre-wrap;
  }

  & > div:nth-of-type(2) {
    padding: 0 20px 30px 20px;
    overflow: auto;
  }
`;
