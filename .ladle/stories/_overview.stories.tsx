/**
 * @description color
 * テーマと色トークンの一覧
 */

import * as React from 'react'
import '../../src/index.css'
import { Box, A, Text, Br, Ul, Li } from '../../src'
import { Github } from 'lucide-react'

export const Index = () => {
  return (
    <Box data-theme="default" data-color-mode="light">
      <Text as="h1">Ruil</Text>

      <Text mt="8">
        Ruil - Reah UI Library は、ReactでUIデザインを行うためのライブラリです。
        <Br />
        <Br />
        <A c="teal" _hover={{ opacity: 0.8 }} fw="bold" href="https://panda-css.com/" target="_blank">
          Panda CSS
        </A>{' '}
        で作成したデザインシステムと{' '}
        <A c="teal" _hover={{ opacity: 0.8 }} fw="bold" href="https://www.radix-ui.com/" target="_blank">
          Radix UI
        </A>{' '}
        のコンポーネントを組み合わせたヘッドレスなUIライブラリであり、
        <Ul my="4" listStyleType="circle" pl="8">
          <Li>自由度の高いデザインシステム</Li>
          <Li>アクセシビリティの高い汎用UI</Li>
          <Li>型システムによる安全で快適なマークアップ体験</Li>
        </Ul>
        これらをゼロランタイムで利用することができます。
        <Br />
        <Br />
        基本的なスタイリングやテーマは{' '}
        <A c="teal" _hover={{ opacity: 0.8 }} fw="bold" href="https://ui.shadcn.com" target="_blank">
          shadcn/ui
        </A>{' '}
        をベースにしており、 shadcn/uiと同様にファイルを直接ソースコードに追加し、
        用途に応じてコードを変更して使うことを想定しています。
        （カスタマイズを容易にするため、npmパッケージとしては用いません。）
      </Text>

      <A
        href="https://github.com/shimahi/ruil"
        d="flex"
        ai="center"
        gap="1"
        mt="8"
        fz="md"
        fw="bold"
        target="_blank"
        _hover={{ c: 'foregroundAlpha' }}
      >
        <Text>GitHub</Text>
        <Github size="20" />
      </A>
    </Box>
  )
}
