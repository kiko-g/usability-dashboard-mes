import React from 'react'

type Props = {
  className?: string
}

export default function MatomoIcon({ className }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={20} height={20} className={className}>
      <script />
      <script />
      <image
        width={20}
        height={20}
        href="data:image/png;base64,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 OjUwKzAwOjAwbO1hGgAAAABJRU5ErkJggg=="
      />
    </svg>
  )
}
