import { Divider, Flex, Layout, Space, Typography } from "antd";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { colors } from "../theme/colors";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export const SiteFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: colors.backgroundFooter,
        color: "#ffffff",
        width: '100%'
      }}
    >
      <Flex
        justify="center"
        align="flex-start"
        // wrap="wrap"
        gap={80}
      >
        {/* Coluna da descrição */}
        <Flex vertical style={{ width: 500 }}>
          <Divider
            orientation="left"
            style={{ borderColor: "#ffffff99", marginBottom: 20 }}
          >
            <Title level={5} style={{ color: "#ffffff", margin: 0 }}>
              SALA MÁGICA
            </Title>
          </Divider>

          <Text style={{ color: "#ffffffcc", lineHeight: 1.8 }}>
            A “Sala Mágica” é um website desenvolvido com fins de divulgação de
            enfeites e decorações artesanais para salas de aula de maternais e
            jardins de infância, feitos com materiais como EVA, papel crepom e
            TNT. Nosso objetivo é oferecer inspirações criativas e
            personalizadas para tornar o ambiente escolar mais acolhedor, lúdico
            e encantador. Não realizamos vendas diretas pelo site, mas conectamos
            você ao fornecedor para encomendas e personalizações.
          </Text>

          <Divider
            orientation="left"
            style={{ borderColor: "#ffffff99", marginBottom: 20 }}
          />

          <Space size="large">
            <InstagramOutlined style={{ fontSize: 24, color: "#ffffff" }} />
            <WhatsAppOutlined style={{ fontSize: 24, color: "#ffffff" }} />
          </Space>
        </Flex>

        {/* Coluna de links */}
        <Flex vertical style={{ width: 500 }}>
          <Divider
            orientation="left"
            style={{ borderColor: "#ffffff99", marginBottom: 20 }}
          >
            <Title level={5} style={{ color: "#ffffff", margin: 0 }}>
              SAIBA MAIS
            </Title>
          </Divider>

          <Space direction="vertical" size="middle">
            <Link style={{ color: "#ffffffcc", lineHeight: 1.8 }}>Política e Privacidade</Link>
            <Link style={{ color: "#ffffffcc", lineHeight: 1.8 }}>Autores</Link>
            <Link style={{ color: "#ffffffcc", lineHeight: 1.8 }}>Quem somos</Link>
          </Space>

          <Divider
            orientation="left"
            style={{ borderColor: "#ffffff99", marginBottom: 20 }}
          />
        </Flex>
      </Flex>
    </Footer>
  );
};
