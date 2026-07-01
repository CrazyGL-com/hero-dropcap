import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import CrazyGLWrapper, { loadGoogleFont, useHeroReady } from '@crazygl/core';
import metadata from './metadata.json';
import './style.css';
const W = { '100': '100', '200': '200', '300': '300', '400': '400', '500': '500', '600': '600', '700': '700', '800': '800', '900': '900' };
function DropCapHero(props) {
    const { body = '', dropCapColor = '#ffd86b', dropCapSize = 5, dropCapLines = 3, textColor = '#e8e9ec', fontSize = 24, headingFontFamily = 'Playfair Display', headingFontWeight = '500', lineHeight = 1.5, transparentBackground = false, bgColor = '#0d1018', } = props;
    const weight = W[String(headingFontWeight)] ?? '500';
    useHeroReady(props);
    React.useEffect(() => { if (!headingFontFamily || headingFontFamily === 'Inherit')
        return; try {
        loadGoogleFont(headingFontFamily, { weights: ['400', '500', '600', '700', '800', '900'] });
    }
    catch { /* */ } }, [headingFontFamily]);
    const text = String(body || '').trim();
    const first = text.charAt(0) || ' ';
    const rest = text.slice(1);
    const ff = headingFontFamily && headingFontFamily !== 'Inherit' ? `"${headingFontFamily}", Georgia, serif` : 'Georgia, serif';
    return (_jsxs(_Fragment, { children: [_jsx("crazygl-stage", { style: { background: transparentBackground ? 'transparent' : bgColor } }), _jsx("crazygl-content", { children: _jsx("div", { className: "crazygl-dcp-wrap", style: { fontFamily: ff }, children: _jsxs("p", { className: "crazygl-dcp-body", style: { color: textColor, fontSize: `${Math.max(12, fontSize)}px`, fontWeight: weight, lineHeight }, children: [_jsx("span", { className: "crazygl-dcp-cap", style: { color: dropCapColor, fontFamily: ff, fontSize: `${dropCapSize}em`, lineHeight: 0.82 }, "data-lines": dropCapLines, children: first }), rest] }) }) })] }));
}
export default function DropCap(props) { return _jsx(CrazyGLWrapper, { hero: DropCapHero, metadata: metadata, ...props }); }
export { metadata };
