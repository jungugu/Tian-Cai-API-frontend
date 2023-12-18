import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '糯米工作室出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Tian Cai API',
          title: 'Tian Cai API',
          href: 'https://github.com/jungugu/Tian-Cai-API-SDK',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/jungugu?tab=repositories',
          blankTarget: true,
        },
        {
          key: 'Tian Cai API',
          title: 'Tian Cai API',
          href: 'https://github.com/jungugu/Tian-Cai-API-SDK',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
