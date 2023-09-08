import { FC, DetailedHTMLProps, HTMLAttributes, RefObject } from 'react';
import classNames from 'classnames';
import { IconClipboard, Text } from 'components/UI';

import style from './index.module.scss';

interface OutputboxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nodeRef: RefObject<HTMLDivElement> ;
  onCopy: () => void;
}

export const Outputbox: FC<OutputboxProps> = ({ nodeRef, className, onCopy, ...props }) => {
  return (
    <div className={style.wrapper} onClick={onCopy}>
      <div
        {...props}
        ref={nodeRef} role='button'
        className={classNames(style.outputbox, className)}
      />
      <div className={style.outputbox__plate} />
      <div className={style.outputbox__hint}>
        <IconClipboard size={48} />
        <Text mode='white'>Click this box <br /> anywhere to copy</Text>
      </div>
    </div>
  );
};