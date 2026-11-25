import { Box } from '@rocket.chat/fuselage';
import type * as UiKit from '@rocket.chat/ui-kit';
import type { ReactNode } from 'react';

export const messageBlockWidth = 'var(--rcx-message-block-width-fixed, 368px)';

const cappedTypes: readonly string[] = ['image', 'video', 'preview', 'info_card', 'file'];

/** Whether a top-level block of a message should be capped to the message block width. */
export const cappedInMessage = (block: UiKit.LayoutBlock): boolean => cappedTypes.includes(block.type);

export const MessageBlockWidth = ({ children }: { children: ReactNode }) => (
	<Box className='rcx-uikit-message-block' width='full' maxWidth={messageBlockWidth}>
		{children}
	</Box>
);
