/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  EuiFlexItem,
  EuiHorizontalRule,
  EuiAvatar,
  EuiText,
  EuiButtonEmpty,
  EuiPanel,
  EuiFlexGroup,
  EuiPopover,
} from '@elastic/eui';

const Account = ({ showGuideLink }) => {
  const router = useRouter();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  return (
    <EuiPopover
      anchorPosition="downRight"
      button={
        <EuiAvatar
          color="#25282f"
          iconType="help"
          name="account"
          onClick={() => setIsAccountOpen(!isAccountOpen)}
        />
      }
      closePopover={() => setIsAccountOpen(false)}
      isOpen={isAccountOpen}
      panelPaddingSize="none">
      <EuiPanel paddingSize="s" style={{ width: '225px', overflow: 'hidden' }}>
        <EuiFlexGroup
          style={{ marginTop: 0, paddingLeft: '8px', paddingRight: '8px' }}>
          <EuiFlexItem>
            <EuiText size="s">
              <h4>Help</h4>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText textAlign="right" size="s">
              <h4>v 8.2.1</h4>
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiHorizontalRule
          margin="s"
          style={{ width: '245px', marginLeft: '-16px', marginBottom: '20px' }}
        />
        <EuiFlexGroup
          direction="column"
          alignItems="flexStart"
          style={{ paddingLeft: '12px', paddingBottom: '15px' }}>
          {showGuideLink && (
            <EuiButtonEmpty onClick={() => router.push('/8.6/guided-setup')}>
              Guided setup onboarding
            </EuiButtonEmpty>
          )}
          <EuiButtonEmpty href="#">Kibana documentation</EuiButtonEmpty>
          <EuiButtonEmpty href="#">Ask Elastic</EuiButtonEmpty>
          <EuiButtonEmpty href="#">Give Feedback</EuiButtonEmpty>
          <EuiButtonEmpty href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="euiIcon euiIcon--medium euiIcon--inherit euiButtonContent__icon"
              focusable="false"
              role="img"
              aria-hidden="true">
              <path d="M16 0C7.164 0 0 7.343 0 16.4c0 7.248 4.584 13.394 10.942 15.562.8.15 1.092-.356 1.092-.789 0-.39-.014-1.684-.022-3.053-4.45.991-5.39-1.934-5.39-1.934-.728-1.894-1.776-2.398-1.776-2.398-1.454-1.017.11-.997.11-.997 1.606.114 2.452 1.69 2.452 1.69 1.428 2.506 3.746 1.781 4.656 1.36.146-1.056.56-1.78 1.016-2.19-3.552-.414-7.288-1.821-7.288-8.105 0-1.792.624-3.254 1.646-4.402-.164-.416-.714-2.085.158-4.342 0 0 1.341-.44 4.4 1.681A14.882 14.882 0 0116 7.932c1.36.006 2.728.188 4.006.553 3.053-2.124 4.396-1.681 4.396-1.681.875 2.259.325 3.926.16 4.34 1.026 1.148 1.645 2.61 1.645 4.402 0 6.3-3.742 7.687-7.307 8.094.577.508 1.086 1.505 1.086 3.035 0 2.192-.021 3.96-.021 4.5 0 .437.29.947 1.101.787C27.42 29.79 32 23.644 32 16.4 32 7.343 24.836 0 16 0z"></path>
            </svg>
            &nbsp;Open an issue in Github
          </EuiButtonEmpty>
        </EuiFlexGroup>
      </EuiPanel>
    </EuiPopover>
  );
};

export default Account;
