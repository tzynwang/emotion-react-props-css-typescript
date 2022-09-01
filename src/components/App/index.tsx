import React, { memo } from 'react';
import foxSrc from '@Assets/sunguk-kim-tIfrzHxhPYQ-unsplash.jpg';

function App(): React.ReactElement {
  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        '@media (min-width: 720px)': {
          flexDirection: 'row',
        },
      }}
    >
      <div css={{ position: 'relative' }}>
        <img
          src={foxSrc}
          alt="fox"
          css={{
            display: 'block',
            maxHeight: '80vh',
            minHeight: '400px',
            objectFit: 'cover',
          }}
        />
        <div
          css={{
            position: 'absolute',
            right: '4px',
            bottom: '4px',
            color: '#fff',
          }}
        >
          Photo by{' '}
          <a
            href="https://unsplash.com/@sunyu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Sunguk Kim
          </a>{' '}
          on{' '}
          <a
            href="https://unsplash.com/s/photos/fox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </div>
      </div>

      <div css={{ flex: '1 1 auto' }}>
        <h1
          css={{
            '@media (max-width: 719px)': {
              textAlign: 'center',
            },
          }}
        >
          How to enable <code>@emotion/react</code> <code>css</code> props in
          typescript react project
        </h1>
        <ol>
          <li>
            initialize a react project with <code>npx create-react-app</code>{' '}
            with <code>--template typescript</code>
          </li>
          <li>
            <code>cd</code> into the project, run <code>npm run eject</code>
          </li>
          <li>
            set <code>jsxImportSource</code> to <code>@emotion/react</code> in{' '}
            <code>tsconfig.json</code>,{' '}
            <a
              href="https://gist.github.com/tzynwang/668d403570df5be34f28638865f68b6f#file-emotion-react-typescript-tsconfig-json"
              target="_blank"
              rel="noreferrer"
            >
              sample code
            </a>
          </li>
          <li>
            install package <code>@emotion/babel-preset-css-prop</code>
          </li>
          <li>
            add <code>@emotion/babel-preset-css-prop</code> into{' '}
            <code>config/webpack.config.js</code>,{' '}
            <a
              href="https://gist.github.com/tzynwang/668d403570df5be34f28638865f68b6f#file-emotion-react-typescript-webpack-config-js"
              target="_blank"
              rel="noreferrer"
            >
              sample code
            </a>
          </li>
          <li>done (ง๑ •̀_•́)ง</li>
        </ol>
      </div>
    </div>
  );
}

export default memo(App);
