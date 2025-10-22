export const colors = {
  primary: '#13C2C2',
  primaryLight: '#36CFC9',
  primaryLighter: '#E6FFFB',

  primaryDark: '#08979C',
  primaryDarker: '#006D75',

  secondary: '#FAAD14',
  secondaryLight: '#FFC85B',
  secondaryLighter: '#FFDFA1',

  textPrimary: '#262626',
  textSecondary: '#595959',
  textLight: '#8C8C8C',

  backgroundMain: '#FAFAFA',
  backgroundSecondary: '#E6FFFB',

  success: '#52C41A',
  warning: '#FAAD14',
  error: '#F5222D',
  info: '#1890FF',

  backgroundFooter: '#001529',

  borderAndDivider: '#D9D9D9',
} as const;

export type AppColors = typeof colors;
