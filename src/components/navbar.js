/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import {
  EuiAvatar,
  EuiButtonEmpty,
  EuiContextMenu,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPopover,
} from '@elastic/eui';
import Account from './account';

const Navbar = ({ crumbs, isCloud, isIntegrations }) => {
  const router = useRouter();
  if (typeof HTMLElement !== `undefined`) {
    return (
      <>
        <EuiHeader
          theme="dark"
          sections={[
            {
              items: [
                <EuiHeaderLogo iconType="logoElastic">Elastic</EuiHeaderLogo>,
              ],
              borders: 'none',
            },
            {
              items: [
                <EuiHeaderSectionItemButton flush="both">
                  <Account />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton flush="both">
                  <EuiAvatar color="#25282f" iconType="cheer" name="account" />
                </EuiHeaderSectionItemButton>,
                <EuiHeaderSectionItemButton
                  key="user"
                  aria-label="Account menu">
                  <EuiAvatar size="s" name="Else Lane" color="#06bfb4" />
                </EuiHeaderSectionItemButton>,
              ],
              borders: 'none',
            },
          ]}
        />
        <EuiHeader
          sections={[
            {
              items: isCloud
                ? []
                : [
                    <EuiHeaderSectionItemButton
                      aria-label="menu navigation"
                      flush="both">
                      <EuiIcon type="menu" />
                    </EuiHeaderSectionItemButton>,
                    <EuiHeaderSectionItemButton
                      aria-label="menu navigation"
                      flush="both">
                      <EuiAvatar name="Elastic Space" size="s" type="space" />
                    </EuiHeaderSectionItemButton>,
                  ],
              breadcrumbs: crumbs,
            },
            {
              items: isIntegrations
                ? [
                    <EuiButtonEmpty
                      className="s-tour-4"
                      size="s"
                      iconType="indexOpen"
                      onClick={() =>
                        router.push('/8.4/integrations/browse/security')
                      }>
                      Add integrations
                    </EuiButtonEmpty>,
                  ]
                : [],
            },
          ]}
        />
      </>
    );
  } else {
    return true;
  }
};

export default Navbar;
