import { AppstoreFilled, BellOutlined, HeartFilled, HomeFilled, ShoppingCartOutlined, SmileFilled } from "@ant-design/icons";
import { Badge, Flex, Image, Tabs, type TabsProps } from "antd";
import logo from '../assets/icone reverso.png';
import { colors } from "../theme/colors";
import { Container } from "./Container";

const items: TabsProps['items'] = [
  {
    key: 'inicio',
    label: 'Início',
    icon: <HomeFilled />,
  },
  {
    label: 'Produtos',
    key: 'produtos',
    icon: <AppstoreFilled />,
  },
  {
    label: 'Favoritos',
    key: 'favoritos',
    icon: <HeartFilled />,
  },
  {
    label: 'Perfil',
    key: 'perfil',
    icon: <SmileFilled />,
  },
];

export const Navbar = () => {
  // const [current, setCurrent] = useState('inicio');

  return (
    <Container
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal={15}
      paddingVertical={0.5}
    >

      <Image
        preview={false}
        width={120}
        src={logo}
      />

      <Tabs
        // onClick={onClick}
        size="middle"
        defaultActiveKey={'inicio'}
        destroyOnHidden
        items={items}
      />

      <Flex
        gap="large"
        style={{
          paddingRight: 15
        }}
      >
        <Badge count={2} color="#ff4d4f">
          <ShoppingCartOutlined
            style={{ fontSize: 22, color: colors.primary, cursor: "pointer" }}
          />
        </Badge>

        <Badge count={9} color="#ff4d4f">
          <BellOutlined
            style={{ fontSize: 22, color: colors.primary, cursor: "pointer" }}
          />
        </Badge>
      </Flex>
    </Container>
  )

}