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
  EuiLink,
  EuiAccordion,
  EuiSkeletonRectangle,
  EuiHorizontalRule,
  EuiSkeletonText,
  EuiSpacer,
} from '@elastic/eui';

const DocsPage = () => {
  const [isStackOpen, setStack] = useState(false);
  const [isSecondaryOpen, setSecondary] = useState(false);
  const [currentStack, setCurrentStack] = useState('8.6');
  const [currentSecondary, setCurrentSecondary] = useState('1.x');
  const [secondaryVersioning, setSecondaryVersioning] = useState(false);

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
          background: #fff;
          height: 100vh;
          width: 100vw;
        `}>
        <div
          css={css`
            margin: auto;
            width: 1350px;
            margin-top: 150px;
          `}>
          <EuiFlexGroup alignItems="flexStart">
            <EuiFlexItem
              grow={false}
              css={css`
                width: 250px;
                padding-top: 5px;
              `}>
              <EuiAccordion
                initialIsOpen={true}
                id="Observability Guide"
                forceState="open"
                onClick={() => setSecondaryVersioning(!secondaryVersioning)}
                buttonContent={
                  <EuiText size="s">
                    <h4>Observability Guide</h4>
                  </EuiText>
                }>
                <EuiLink
                  size="s"
                  color="subdued"
                  css={css`
                    padding: 10px 0 0 25px;
                  `}
                  onClick={() => setSecondaryVersioning(!secondaryVersioning)}>
                  Java Agent
                </EuiLink>
              </EuiAccordion>
            </EuiFlexItem>
            <EuiFlexItem
              grow={2}
              css={css`
                padding: 0 30px;
              `}>
              <EuiTitle size="l">
                <h1>What is Elastic Observability</h1>
              </EuiTitle>
              <EuiSpacer size="m" />
              <EuiSkeletonText size="s" lines="4" />
            </EuiFlexItem>
            <EuiFlexItem grow={1}>
              <EuiSpacer size="s" />
              {/* START VERSIONING DROPDOWNS */}
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

                {!!secondaryVersioning && (
                  <>
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
                  </>
                )}
              </EuiFlexGroup>
              {/* END VERSIONING DROPDOWNS */}
              <EuiSpacer size="xxl" />
              <EuiTitle size="xs">
                <h4>On this page</h4>
              </EuiTitle>
              <EuiSpacer size="m" />
              <div
                css={css`
                  border-left: 2px solid #cecece;
                  padding-left: 20px;
                  margin-left: 6px;
                `}>
                <EuiText size="s" color="subdued">
                  What is Observability?
                </EuiText>
              </div>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </div>
    );
  } else {
    return true;
  }
};

export default DocsPage;
