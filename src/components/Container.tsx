import type React from "react";
import type { ReactNode } from "react";

type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

export const Container: React.FC<{
  children: ReactNode,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
  paddingHorizontal?: number
  paddingVertical?: number
}> = ({ children, justifyContent, alignItems, paddingHorizontal, paddingVertical }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: justifyContent,
        alignItems: alignItems,
        paddingInline: `${paddingHorizontal}%`,
        paddingBlock: `${paddingVertical}rem`,
      }}
    >
      {children}
    </div>
  )
}