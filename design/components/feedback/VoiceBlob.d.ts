import * as React from 'react';
export interface VoiceBlobProps {
  /** idle (low dome) | listening | speaking (tallest, brightest) */
  state?: 'idle' | 'listening' | 'speaking';
  size?: number;
}
export function VoiceBlob(props: VoiceBlobProps): JSX.Element;
