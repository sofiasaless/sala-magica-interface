import { Card, Typography } from "antd";
import type React from "react";
import type { ReactNode } from "react";
import { colors } from "../theme/colors";
import { font } from "../theme/font";

const { Title, Paragraph } = Typography;

export interface ServicoType {
  titulo: string,
  icone: ReactNode,
  descricao: string
}

export const CardServico: React.FC<{
  servico: ServicoType
}> = ({ servico }) => {
  return (
    <Card
      title={servico.icone}
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
      <Title level={4} style={{ textAlign: 'center', color: colors.secondary }}>{servico.titulo}</Title>
      <Paragraph style={{ textAlign: 'center', fontSize: font.h5 }}>{servico.descricao}</Paragraph>
    </Card>
  )
}