import React from 'react';
import './style.css';
import { Snapshare } from '@thezano/react-snapshare';
export default function App() {
  return (
    <div>
      <Snapshare
        dataShareUrl="https://dev.closequest.com/"
        stickerAssetURL="https://kit.snapchat.com/ckweb/test/image.png"
      />
    </div>
  );
}
