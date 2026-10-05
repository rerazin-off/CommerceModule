import { memo } from 'react';
import type { ReactNode, CSSProperties } from 'react'
import classes from './Button.module.scss';

type Mods = Record<string, boolean | string | undefined>

function classNames(
  cls: string,
  mods: Mods,
  additional: (string | undefined)[],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(' ');
}

interface ButtonProps {
  className?: string;
  colorText?: string;
  bgColor: 'blue' | 'pink' | 'purple' | 'white';
  type:
    | 'type1'
    | 'type1v2'
    | 'type2'
    | 'marker'
    | 'marker2'
    | 'back_arrow'
    | 'gallery'
    | 'meditation';
  children?: ReactNode;
  imageSrc?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    colorText,
    type,
    bgColor,
    imageSrc,
    height,
    width,
    onClick,
  } = props;

  const isMarker = type === 'marker';

  return (
    <button
      onClick={onClick}
      className={classNames(classes.Button, { [classes.marker]: isMarker }, [
        className,
        classes[type],
        classes[bgColor],
      ])}
      style={{
        color: colorText,
        width: isMarker ? undefined : width,
        height: isMarker ? undefined : height,
      }}
    >
      {isMarker ? (
        <>
          {imageSrc && (
            <div className={classes.item}>
              <img
                className={classNames(classes.icon, {}, [classes[bgColor]])}
                src={imageSrc}
                alt="marker-icon"
                width="48"
                height="48"
              />

              {children}
            </div>
          )}
        </>
      ) : (
        children
      )}
    </button>
  );
});
