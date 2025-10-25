import { Container } from "../components/Container"

import { AutoComplete, Divider, Flex, Input, Typography } from 'antd';
import { font } from "../theme/font";
import { CardServico } from "../components/CardServico";
import { BulbOutlined, CrownOutlined, HighlightOutlined } from "@ant-design/icons";
import { colors } from "../theme/colors";

const { Title } = Typography;

export const Inicio = () => {
  return (
    <>
      <Container
        justifyContent="center"
        paddingVertical={5}
        flexDirection="column"
        alignItems="center"
      >
        <Title level={2}>Transforme sua sala de aula com encanto</Title>
        <AutoComplete
          popupMatchSelectWidth={252}
          style={{ width: 350 }}
        // options={options}
        // onSelect={onSelect}
        // onSearch={handleSearch}
        >
          <Input.Search size="large" placeholder="O que você quer encontrar hoje?" enterButton />
        </AutoComplete>
      </Container>

      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={15}
      >
        <Divider 
          size="large"
          style={{
            fontSize: font.h3
          }}
        >Serviços</Divider>

        <Flex gap={"large"}>
          <CardServico
            icone={<CrownOutlined color={colors.secondary}/>}
            titulo="Enfeites Exclusivos"
            descricao="Que tal um enfeite único feito especialmente para você? Preencha o formulário e criaremos algo exclusivo e encantador."
          />

          <CardServico
            icone={<BulbOutlined color={colors.secondary}/>}
            titulo="Decorações Personalizadas"
            descricao="Produzimos decorações sob medida, com o seu toque especial em cada detalhe, do jeitinho que você sonhar para sua sala de aula!"
          />

          <CardServico
            icone={<HighlightOutlined color={colors.secondary}/>}
            titulo="Personalização com Carinho"
            descricao="Criamos cada peça com materiais como EVA, papel crepom e TNT, dando vida a decorações únicas e cheias de amor. Você imagina, nós criamos!"
          />
        </Flex>

      </Container>
    </>
  )
}