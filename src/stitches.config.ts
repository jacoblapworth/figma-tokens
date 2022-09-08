// stitches.config.ts
import { createStitches } from '@stitches/react';

const globalTokens = {
  colors: {
    white: '#FFFFFF',
    background: '#FFFFFF',
    blue: '#18a0fb',
    gray50: 'var(--theme-colors-gray-50, #FAFAFA)',
    gray100: 'var(--theme-colors-gray-100, #f5f5f5)',
    gray200: 'var(--theme-colors-gray-200, #eeeeee)',
    gray300: 'var(--theme-colors-gray-300, #e0e0e0)',
    gray400: 'var(--theme-colors-gray-400, #bdbdbd)',
    gray500: 'var(--theme-colors-gray-500, #9e9e9e)',
    gray600: 'var(--theme-colors-gray-600, #757575)',
    gray700: 'var(--theme-colors-gray-700, #616161)',
    gray800: 'var(--theme-colors-gray-800, #424242)',
    gray900: 'var(--theme-colors-gray-900, #2C2C2C)',
    gray950: 'var(--theme-colors-gray-950, #222222)',
    primary50: 'var(--theme-colors-brand-50, #F5FBFF)',
    primary100: 'var(--theme-colors-brand-100, #E1F3FF)',
    primary300: 'var(--theme-colors-brand-300, #90CDF4)',
    primary400: 'var(--theme-colors-brand-300, #3CB1FF)',
    primary500: 'var(--theme-colors-brand-500, #18A0FB)',
    red500: 'var(--red, #f24822)',
    red100: 'var(--red-100, #fff5f5)',
    shadow: 'hsla(206,22%,7%,.15)',
  },
  radii: {
    sm: '2px',
    lg: '4px',
    full: '999px',
  },
};

export const stitchesInstance = createStitches({
  theme: {
    fonts: {
      sans: 'Inter, sans-serif',
      mono: 'JetBrainsMono, monospace',
    },
    fontSizes: {
      xxsmall: '10px',
      xsmall: '11px',
      small: '12px',
    },
    fontWeights: {
      normal: 300,
      bold: 500,
    },
    colors: {
      bgDefault: 'var(--figma-color-bg)',
      contextMenuBackground: 'var(--figma-color-bg-menu)',
      contextMenuForeground: 'var(--figma-color-text-menu)',
      contextMenuForegroundMuted: 'var(--figma-color-text-menu-secondary)',
      contextMenuForegroundDisabled: 'var(--figma-color-text-menu-disabled)',
      contextMenuSeperator: 'var(--figma-color-border-menu)',
      contextMenuBorder: 'var(--figma-color-border-menu)',
      loadingScreenFg: '#FFFFFF',
      loadingScreenFgMuted: '#CECECE',
      loadingScreenBg: '#141414',
      text: 'var(--figma-color-text)',
      fgDefault: 'var(--figma-color-text)',
      textMuted: 'var(--figma-color-text-secondary)',
      textSubtle: 'var(--figma-color-text-tertiary)',
      textDisabled: 'var(--figma-color-text-disabled)',
      fgSubtle: 'var(--figma-color-text-secondary)',
      fgAccent: 'var(--figma-color-text-brand)',
      bgSubtle: 'var(--figma-color-bg-secondary)',
      bgAccent: 'var(--figma-color-bg-selected)',
      bgAccentHover: 'var(--figma-color-bg-selected-hover)',
      interaction: 'var(--figma-color-bg-brand)',
      interactionSubtle: 'var(--figma-color-bg-brand-secondary)',
      onInteraction: 'var(--figma-color-text-onbrand)',
      interactionDisabled: 'var(--figma-color-text-menu-disabled)',
      dangerFg: 'var(--figma-color-text-danger)',
      dangerBg: 'var(--figma-color-bg-danger)',
      dangerBgHover: 'var(--figma-color-bg-danger-hover)',
      onDanger: 'var(--figma-color-text-ondanger)',
      border: 'var(--figma-color-border)',
      borderMuted: 'var(--figma-color-border)',
      borderAccent: 'var(--figma-color-border-brand)',
      focus: 'var(--figma-color-bg-brand-tertiary)',
      borderSwitch: 'var(--figma-color-border)',
      bgSwitchChecked: 'var(--figma-color-bg-brand)',
      borderBtnDisabled: 'var(--figma-color-border-disabled)',
      bgBtnPrimary: 'var(--figma-color-bg-brand)',
      fgBtnPrimary: 'var(--figma-color-text-onbrand)',
      bgBtnSecondary: 'var(--figma-color-bg)',
      fgBtnSecondary: 'var(--figma-color-text)',
      fgBtnGhost: 'var(--figma-color-text)',
      bgBtnGhost: 'transparent',
      bgHoverBtnGhost: 'var(--figma-color-bg-secondary)',
      bgToolTip: 'var(--figma-color-bg-tooltip)',
      fgToolTip: 'var(--figma-color-text-tooltip)',
      fgToolTipMuted: 'var(--figma-color-text-tooltip-secondary)',
      bgOnDarkSubtle: '#2B2A2A',
      bgOnDarkAccentSubtle: '#1F3D68',
      fgOnDarkAccent: '#A0C0EF',
      bgOnDarkDangerSubtle: '#422B2B',
      fgOnDarkDanger: '#E05534',
      fgSuccess: 'var(--figma-color-text-success)',
      bgSuccess: 'var(--figma-color-bg-success-tertiary)',
      fgDanger: 'var(--figma-color-text-danger)',
      bgDanger: 'var(--figma-color-bg-danger-tertiary)',
      fgPro: 'var(--figma-color-text-component)',
      bgProSubtle: 'var(--figma-color-bg-component-tertiary)',
      borderPro: 'var(--figma-color-bg-component)',
      spinnerInverse: '#ffffff',
    },
    space: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '24px',
      7: '32px',
      8: '48px',
      9: '64px',
    },
    sizes: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '24px',
      7: '32px',
      8: '48px',
      10: '28px',
      dropdownMaxHeight: '170px',
    },
    radii: {
      default: globalTokens.radii.sm,
      button: globalTokens.radii.sm,
      input: globalTokens.radii.sm,
      contextMenu: globalTokens.radii.lg,
      contextMenuItem: globalTokens.radii.sm,
      card: globalTokens.radii.lg,
      badge: globalTokens.radii.lg,
      full: globalTokens.radii.full,
      tokenButton: globalTokens.radii.lg,
      tree: globalTokens.radii.lg,
    },
    shadows: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      contextMenu: 'var(--shadow-context-menu, 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2))',
      focus: `0 0 0 2px ${globalTokens.colors.primary500}`,
      'focus-subtle': `0 0 0 2px ${globalTokens.colors.primary300}`,
      focusMuted: `0 0 0 2px ${globalTokens.colors.primary400}`,
      tokenFocus: '0 0 0 2px $colors$borderMuted',
    },
  },
});

const {
  styled, css, keyframes, theme, globalCss,
} = stitchesInstance;

export {
  styled, css, keyframes, theme, globalCss,
};
