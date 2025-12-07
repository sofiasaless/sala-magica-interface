import { Button, Grid, Layout, Space } from "antd";
import { categories } from "../data/mockData";

const { Footer } = Layout;
const { useBreakpoint } = Grid;

export const FooterComp = () => {
   const screens = useBreakpoint();
  
  return (
    <Footer
      style={{
        background: '#001529',
        color: 'white',
        padding: screens.md ? '48px' : '32px 16px',
        marginTop: 48
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: screens.md ? 'repeat(4, 1fr)' : '1fr',
          gap: 32
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                background: '#FAAD14',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28
              }}
            >
              🎨
            </div>
            <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 24 }}>Sala Mágica</div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.8 }}>
            Transformando salas de aula em ambientes mágicos e acolhedores com decorações artesanais feitas com amor.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#13C2C2', marginBottom: 16, fontWeight: 600 }}>Links Rápidos</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Início', 'Catálogo', 'Encomendas', 'Sobre Nós'].map(link => (
              <li key={link} style={{ marginBottom: 8 }}>
                <a style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#13C2C2', marginBottom: 16, fontWeight: 600 }}>Categorias</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {categories.slice(1, 5).map(cat => (
              <li key={cat} style={{ marginBottom: 8 }}>
                <a style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: '#13C2C2', marginBottom: 16, fontWeight: 600 }}>Contato</h4>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 8 }}>
            📱 (11) 99999-9999
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 8 }}>
            📧 contato@salamagica.com.br
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>
            📍 São Paulo, SP
          </p>
          <Space style={{ marginTop: 16 }}>
            <Button shape="circle" style={{ background: '#25D366', border: 'none', color: 'white' }}>
              W
            </Button>
            <Button shape="circle" style={{ background: '#E1306C', border: 'none', color: 'white' }}>
              I
            </Button>
            <Button shape="circle" style={{ background: '#1877F2', border: 'none', color: 'white' }}>
              F
            </Button>
          </Space>
        </div>
      </div>

      <div
        style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.45)',
          fontSize: 13
        }}
      >
        © 2024 Sala Mágica - Todos os direitos reservados. Feito com 💜 para educadores.
      </div>
    </Footer>
  )
}