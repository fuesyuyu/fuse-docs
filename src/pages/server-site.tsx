import React from 'react';
import Layout from '@theme/Layout';

const features = [
  { title: '高性能 API 服务', desc: '基于 Node.js/Express 或 Nginx 反向代理，支持 REST 与 WebSocket。' },
  { title: '安全与鉴权', desc: '支持 JWT、API Key、HTTPS、IP 白名单与基础限流。' },
  { title: '可观测性', desc: '内置健康检查、日志追踪、错误告警与部署监控建议。' },
];

export default function ServerSite(): JSX.Element {
  return (
    <Layout title="服务器网站" description="一个可快速上线的服务器网站模板页面">
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '3rem 1rem' }}>
        <h1>服务器网站模板</h1>
        <p>
          这是一个基础的“服务器网站”示例页面，你可以把它作为企业官网、开发者入口或 API 门户的起点。
        </p>

        <section>
          <h2>核心能力</h2>
          <ul>
            {features.map((item) => (
              <li key={item.title} style={{ marginBottom: '0.75rem' }}>
                <strong>{item.title}</strong>：{item.desc}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>推荐上线步骤</h2>
          <ol>
            <li>准备域名与 HTTPS 证书（例如 Let’s Encrypt）。</li>
            <li>部署应用到云服务器（Docker + PM2/systemd）。</li>
            <li>接入 Nginx 反向代理并启用 Gzip/缓存。</li>
            <li>配置监控（日志、CPU/内存、告警通知）。</li>
          </ol>
        </section>
      </main>
    </Layout>
  );
}
