import { Card, Typography } from "antd";
import type React from "react";
import type { ReactNode } from "react";
import { colors } from "../theme/colors";
import { font } from "../theme/font";

const { Title, Paragraph } = Typography;

interface CardServicoProps {
  titulo: string,
  icone: ReactNode,
  descricao: string
}

export const CardServico: React.FC<CardServicoProps> = ({ titulo, icone, descricao }) => {
  return (
    <Card
      title={icone}
      variant="borderless"
      style={{
        width: 300,
        backgroundColor: colors.secondaryLighter,
        borderColor: colors.secondary
      }}
      styles={{
        title: {
          color: colors.secondary,
          fontSize: font.h1,
          textAlign: 'center',
          paddingBlock: 10
        },
        body: {
          paddingBlock: 30,
        }
      }}
    >
      <Title level={4} style={{ textAlign: 'center', color: colors.secondary }}>{titulo}</Title>
      <Paragraph style={{ textAlign: 'center', fontSize: font.h5 }}>{descricao}</Paragraph>
    </Card>
  )
}