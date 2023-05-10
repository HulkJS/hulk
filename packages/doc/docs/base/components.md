# 构建组件库文档

### 介绍

antmjs Doc 可以支持移动端组件库和 PC 端组件库，两种方式的需要执行不同的操作

### PC 组件库

#### 案例代码文件

- 路径：案例代码和文档 md 文件须要再文件同层级
- 命名：文件必须以`demo`为开头前缀，后续为`[a-z\-]`
  同一个 md 文档内要避免命名冲突
- 类型：支持`.tsx`、`.jsx`三中文件类型, 暂时只支持`react`
- 代码：案例代码必须有默认导出的组件，即 `export default`

```markdown
├── docs
├── components.md
├── demo-button.tsx
```

#### md 文件中引用案例代码

如上文件 components.md 中使用，真实使用中必须带上空行和换行符

```markdown
::: demo-buttona :::
```

> 需要注意的是，要先创建案例代码文件，再设置引入标识

下面是一个简单 react 的 `toast` 组件案例展示

::: demo-button :::

下面是一个简单 vue 的 `toast` 组件案例展示

::: demo-buttona :::

### 组件库的 i8n

配置文件`antm.config下配置`配置`doc.demoCode.container.react`，即组件案例公共的容器组件
下面是模拟 i18n 组件的简单实现，全局变量`__LANGE__`当前文档切换的语言

```typescript
import React from 'react'

let langCache = ''

export default function Index({ children }) {
  if (window['__LANGE__'] && window['__LANGE__'] !== langCache) {
    const I18nMap = {
      CN: {
        点击Toast: '点击Toast',
        点击按钮: '点击按钮',
        操作成功: '操作成功',
      },
      EN: {
        点击Toast: 'click Toast',
        点击按钮: 'click button',
        操作成功: 'operate success',
      },
    }
    window['$L'] = I18nMap[window['__LANGE__']]
  }

  return <div>{children}</div>
}
```

### 移动端组件库

主要配置如下

- `url`: 分为开发环境和生产环境
- `noMate`: 没有映射关系的 url 的时候，设置重定向
- `transform`: 定义映射规则

```ts
export default defineConfig({
  docs: {
    simulator: {
      url: {
        development: 'http://10.254.9.214:10086',
        production: '/vantui/main/mobile.html',
      },
      transform: (url) => `#/pages/${url}/index`,
      noMate: {
        urls: [
          'quickstart',
          'custom-style',
          'home',
          'theme',
          'use-in-react',
          'contributing',
          'v2-to-v3',
          'comments',
          'premium',
        ],
        redirect: '#/pages/dashboard/index',
      },
    },
  },
})
```