import styled from "styled-components";

import { Button, Layout } from "antd";

export const CounterButton = styled(Button)`
  width: 15%;
  height: 45%;
  background: #f4f4f4;
  border: none;
`;

export const CounterButtonsWrapper = styled(Layout)`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
