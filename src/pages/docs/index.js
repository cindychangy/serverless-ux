/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import {
  EuiText,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiTitle,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiPopover,
  EuiHorizontalRule,
} from '@elastic/eui';

const DocsPage = () => {
  const [isStackOpen, setStack] = useState(false);
  const [isSecondaryOpen, setSecondary] = useState(false);
  const [currentStack, setCurrentStack] = useState('8.6');
  const [currentSecondary, setCurrentSecondary] = useState('1.x');

  const onStackClick = () => {
    setStack(!isStackOpen);
  };

  const closeStack = () => {
    setStack(false);
  };

  const onSecondaryClick = () => {
    setSecondary(!isSecondaryOpen);
  };

  const closeSecondary = () => {
    setSecondary(false);
  };

  const getIconType = version => {
    return version === currentStack || version === currentSecondary
      ? 'check'
      : 'empty';
  };

  const stackButton = (
    <EuiButton
      iconType="arrowDown"
      iconSide="right"
      onClick={onStackClick}
      color="text"
      css={css`
        background: #e6f1fa;
        font-weight: 600;
      `}>
      Stack: {currentStack}
    </EuiButton>
  );

  const secondaryButton = (
    <EuiButton
      iconType="arrowDown"
      iconSide="right"
      onClick={onSecondaryClick}
      color="text"
      css={css`
        font-weight: 600;
      `}>
      Java: {currentSecondary}
    </EuiButton>
  );

  const stackItems = [
    <EuiContextMenuItem
      key="8.7"
      icon={getIconType('8.7')}
      onClick={() => {
        closeStack();
        setCurrentStack('8.7');
      }}>
      8.7
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="8.6"
      icon={getIconType('8.6')}
      iconSide="left"
      onClick={() => {
        closeStack();
        setCurrentStack('8.6');
      }}>
      8.6
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="8.5"
      icon={getIconType('8.5')}
      onClick={() => {
        closeStack();
        setCurrentStack('8.5');
      }}>
      8.5
    </EuiContextMenuItem>,
    <EuiHorizontalRule margin="none" />,
    <EuiContextMenuItem
      key="all"
      onClick={() => {
        closeSecondary();
      }}>
      <EuiButtonEmpty size="none">All versions</EuiButtonEmpty>
    </EuiContextMenuItem>,
  ];

  const secondaryItems = [
    <EuiContextMenuItem
      key="1.x"
      icon={getIconType('1.x')}
      onClick={() => {
        closeSecondary();
        setCurrentSecondary('1.x');
      }}>
      1.x
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="2.x"
      icon={getIconType('2.x')}
      onClick={() => {
        closeSecondary();
        setCurrentSecondary('2.x');
      }}>
      2.x
    </EuiContextMenuItem>,
    <EuiContextMenuItem
      key="3.x"
      icon={getIconType('3.x')}
      onClick={() => {
        closeSecondary();
        setCurrentSecondary('3.x');
      }}>
      3.x
    </EuiContextMenuItem>,
    <EuiHorizontalRule margin="none" />,
    <EuiContextMenuItem
      key="all"
      onClick={() => {
        closeStack();
      }}>
      <EuiButtonEmpty size="s">All versions</EuiButtonEmpty>
    </EuiContextMenuItem>,
  ];

  if (typeof HTMLElement !== `undefined`) {
    return (
      <div
        css={css`
          margin: auto;
          width: 450px;
          margin-top: 150px;
        `}>
        <EuiTitle
          size="s"
          css={css`
            margin-bottom: 40px;
          `}>
          <h4>Docs Versioning Example</h4>
        </EuiTitle>
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiPopover
              id="stack options"
              button={stackButton}
              isOpen={isStackOpen}
              closePopover={closeStack}
              panelPaddingSize="xs"
              anchorPosition="downLeft">
              <EuiContextMenuPanel size="s" items={stackItems} />
            </EuiPopover>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiText
              color="#D3DAE6"
              css={css`
                font-size: 24px;
                font-weight: 200;
              `}>
              <p> /</p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiPopover
              id="stack options"
              button={secondaryButton}
              isOpen={isSecondaryOpen}
              closePopover={closeSecondary}
              panelPaddingSize="xs"
              anchorPosition="downLeft">
              <EuiContextMenuPanel size="s" items={secondaryItems} />
            </EuiPopover>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  } else {
    return true;
  }
};

export default DocsPage;
