import React from "react";
type TypeProps = {
    alt: string;
    bgColor: string;
    className: string;
    fontColor: string;
    height: number;
    id: string;
    text: string;
    style: React.CSSProperties;
    width: number;
    onClick: () => void;
    onMount: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onUnMount: () => void;
};
type ImgProps = {
    alt: string;
    className?: string;
    id?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    src: string;
    style?: React.CSSProperties;
};
declare const FakeImg: {
    ({ alt, bgColor, className, fontColor, height, id, text, style, width, onClick, onMount, onMouseEnter, onMouseLeave, onUnMount, }: TypeProps): React.DetailedReactHTMLElement<ImgProps, HTMLElement>;
    defaultProps: {
        bgColor: string;
        fontColor: string;
    };
};
export default FakeImg;
