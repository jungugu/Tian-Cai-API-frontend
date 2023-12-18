import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import {Card, Col, Row, theme} from 'antd';
import React from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {
  const { useToken } = theme;

  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '16px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        了解更多 {'>'}
      </a>
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用 Tian Cai API
          </div>
          <p
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            Tian Cai API 开放平台是一个多功能、可定制化的接口平台，为开发者、企业和个人提供全方位的技术支持和服务。无论您是想将您的产品整合到我们的平台上，还是利用我们的API构建自己的应用程序，都能轻松实现。
          </p>
          <Row gutter={[16, 16]}>
            <Col span={12} >
              <Card title="SDK🔔️">
                为了方便开发者集成接口到自己的代码中，平台提供了客户端SDK，使调用接口变得更加简单和便捷
              </Card>
            </Col>
            <Col span={12} >
              <Card title="简洁高效🔔️">
                稳定、安全、高效的接口调用服务，帮助您实现更快速、便捷的开发和调用体验
              </Card>
            </Col>

            <Col span={12} >
              <Card title="开发者文档和技术支持🔔️">
                平台提供了详细的开发者文档和技术支持，帮助开发者快速接入和发布接口，解决遇到的问题和困难
              </Card>
            </Col>
            <Col span={12} >
              <Card title="在线调试功能🔔️">
                您可以在平台上进行接口在线调试，快速验证接口的功能和效果，节省了开发调试的时间和工作量
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
