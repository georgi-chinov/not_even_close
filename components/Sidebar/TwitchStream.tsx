import { memo, useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '../Common/Button'

const ReactTwitchEmbedVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false,
})

const videoWidth = 400
const videoHeight = videoWidth * (9 / 16)
const videoWithChatHeight = videoHeight + 500

function TwitchStreamComponent() {
  const [isTwitchLoaded, setIsTwitchLoaded] = useState(false)
  const [isChatExpanded, setChatExpanded] = useState(false)

  const onPlay = useCallback(() => setIsTwitchLoaded(true), [setIsTwitchLoaded])

  return (
    <div className={`${isTwitchLoaded ? '' : 'hidden'}`}>
      <ReactTwitchEmbedVideo
        layout={isChatExpanded ? 'video-with-chat' : 'video'}
        channel="ayije"
        width={videoWidth}
        height={isChatExpanded ? videoWithChatHeight : videoHeight}
        muted
        onPlay={onPlay}
      />
      <div className="flex flex-col items-center">
        <Button
          short
          onClick={() => setChatExpanded(!isChatExpanded)}
          className="rounded-t-none"
        >
          {isChatExpanded ? 'Hide' : 'Show'} chat
        </Button>
      </div>
      <div className="border-2 my-4 dark:border-gray-600 grow" />
    </div>
  )
}

export const TwitchStream = memo(TwitchStreamComponent)
