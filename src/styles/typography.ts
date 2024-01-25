import styled from '@emotion/styled';
import SemanticColor from './SemanticColor';

export const TypographyStyles = {
  Headline1: {
    fontSize: '44px',
    fontWeight: 700,
    lineHeight: '62px',
    color: SemanticColor.Text.Primary,
    display: 'block',
  },
  Headline2: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '52px',
    color: SemanticColor.Text.Primary,
    display: 'block',
  },
  Headline3: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '36px',
    color: SemanticColor.Text.Primary,
    display: 'block',
  },
  Headline4: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '34px',
    color: SemanticColor.Text.Primary,
    display: 'block',
  },
  Headline5: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '30px',
    color: SemanticColor.Text.Primary,
    display: 'block',
  },
  Subtitle1: {
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: '28px',
  },
  Subtitle2: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px',
  },
  Body1: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  Body2: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '22px',
  },
  Body3: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
  },
  Caption1: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
  },
  Caption2: {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '18px',
  },
  Caption3: {
    fontSize: '10px',
    fontWeight: 400,
    lineHeight: '16px',
  },
};

export const Headline1 = styled.span(TypographyStyles.Headline1);

export const Headline2 = styled.span(TypographyStyles.Headline2);

export const Headline3 = styled.span(TypographyStyles.Headline3);

export const Headline4 = styled.span(TypographyStyles.Headline4);

export const Headline5 = styled.span(TypographyStyles.Headline5);

export const Subtitle1 = styled.span(TypographyStyles.Subtitle1);

export const Subtitle2 = styled.span(TypographyStyles.Subtitle2);

export const Body1 = styled.span(TypographyStyles.Body1);

export const Body2 = styled.span(TypographyStyles.Body2);

export const Body3 = styled.span(TypographyStyles.Body3);

export const Caption1 = styled.span(TypographyStyles.Caption1);

export const Caption2 = styled.span(TypographyStyles.Caption2);

export const Caption3 = styled.span(TypographyStyles.Caption3);
