import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'What are you waiting for? Try it!',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/jumper-image-1.png`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'ethrik.xyz',
  description: 'Swap with Jumper!',
  openGraph: {
    title: 'ethrik.xyz',
    description: 'Swap with Jumper!',
    images: [`${NEXT_PUBLIC_URL}/jumper-image-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>ethrik.xyz</h1>
    </>
  );
}
