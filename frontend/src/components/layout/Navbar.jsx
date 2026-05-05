import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLivePrices } from '../../context/LivePricesContext';
import { useAuth } from '../../context/AuthContext';
import navigationUpsell from '../../assets/navigation-upsell.png';
import onchainPaymentProtocol from '../../assets/onchain_payment_protocol.png';
import institutionsUpsell from '../../assets/institutions_upsell.png';
import developersUpsell from '../../assets/developers_upsell_cdxv2_2.jpg';
import companyUpsell from '../../assets/company_upsell.png';

// ── Gray circle icon wrapper ──────────────────────────────────
function Ico({ children }) {
  return (
    <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#F2F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {children}
    </div>
  );
}
function SVG({ children, ...rest }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
}
// ── Named icons ───────────────────────────────────────────────
const IcoClock   = () => <Ico><SVG><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></SVG></Ico>;
const IcoShield  = () => <Ico><SVG><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></SVG></Ico>;
const IcoPercent = () => <Ico><SVG><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></SVG></Ico>;
const IcoGrid    = () => <Ico><SVG><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></SVG></Ico>;
const IcoSwap    = () => <Ico><SVG><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></SVG></Ico>;
const IcoGlobe   = () => <Ico><SVG><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></SVG></Ico>;
const IcoLayers  = () => <Ico><SVG><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></SVG></Ico>;
const IcoVerify  = () => <Ico><SVG><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></SVG></Ico>;
const IcoDollar  = () => <Ico><SVG><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></SVG></Ico>;
const IcoPhone   = () => <Ico><SVG><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/></SVG></Ico>;
const IcoStar    = () => <Ico><SVG><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></SVG></Ico>;
const IcoUser    = () => <Ico><SVG><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></SVG></Ico>;
const IcoCard    = () => <Ico><SVG><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></SVG></Ico>;
const IcoBrief   = () => <Ico><SVG><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></SVG></Ico>;
const IcoBuild   = () => <Ico><SVG><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></SVG></Ico>;
const IcoCloud   = () => <Ico><SVG><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></SVG></Ico>;
const IcoTrend   = () => <Ico><SVG><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></SVG></Ico>;
const IcoInfo    = () => <Ico><SVG><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></SVG></Ico>;
const IcoFile    = () => <Ico><SVG><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></SVG></Ico>;
const IcoPrice   = () => <Ico><SVG><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></SVG></Ico>;
const IcoHex     = () => <Ico><SVG><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></SVG></Ico>;

// ── World-map dot illustration (used in Institutions promo) ────
function WorldMap() {
  const dots = [
    [2,1],[3,1],[4,1],[5,1],[3,2],[4,2],[5,2],[2,3],[3,3],[4,3],[5,3],[3,4],[4,4],
    [3,5],[4,5],[4,6],[5,6],[4,7],
    [7,0],[8,0],[7,1],[8,1],[9,1],[7,2],[8,2],[9,2],[7,3],[8,3],
    [7,4],[8,4],[9,4],[10,4],[7,5],[8,5],[9,5],[8,6],[8,7],[8,8],
    [9,0],[10,0],[11,0],[12,0],[10,1],[11,1],[12,1],[13,1],
    [9,2],[10,2],[11,2],[12,2],[13,2],[10,3],[11,3],[12,3],
    [11,4],[12,4],[13,4],[11,5],[12,5],[13,5],[12,6],[13,6],[12,7],[13,7],
  ];
  return (
    <svg width="144" height="90" viewBox="0 0 144 90">
      {dots.map(([c, r], i) => (
        <circle key={i} cx={c * 10 + 4} cy={r * 10 + 4} r="3.2" fill="rgba(255,255,255,0.72)" />
      ))}
    </svg>
  );
}
// ── Dropdown data ─────────────────────────────────────────────
const DROPDOWNS = {
  cryptocurrencies: {
    cols: [
      {
        items: [
          { icon: <IcoPrice />, label: 'Prices', desc: 'All crypto prices & charts', to: '/explore' },
          { icon: <IcoDollar />, label: 'Bitcoin (BTC)', desc: 'The original cryptocurrency', to: '/asset/bitcoin' },
          { icon: <IcoTrend />, label: 'Ethereum (ETH)', desc: 'Smart contracts & DeFi', to: '/asset/ethereum' },
        ],
      },
      {
        items: [
          { icon: <IcoTrend />, label: 'Solana (SOL)', desc: 'High-speed blockchain', to: '/asset/solana' },
          { icon: <IcoGlobe />, label: 'XRP', desc: 'Global payments network', to: '/asset/xrp' },
          { icon: <IcoDollar />, label: 'USDC', desc: 'Dollar-backed stablecoin', to: '/asset/usd-coin' },
        ],
      },
    ],
    promo: {
      bg: '#EFF6FF',
      illus: (
        <div style={{ width: '100%', height: 120, borderRadius: 12, background: '#1652F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
      ),
      title: 'Start trading crypto',
      body: 'Over 200 assets available on Coinbase.',
      cta: 'View all assets',
      to: '/explore',
    },
  },
  individuals: {
    cols: [
      {
        items: [
          { icon: <IcoDollar />, label: 'Buy and sell', desc: 'Buy, sell, and use crypto', to: '/explore' },
          { icon: <IcoPhone />, label: 'Base App', desc: 'Post, earn, trade, and chat, all in one place', to: '/explore' },
          { icon: <IcoVerify />, label: 'Coinbase One', desc: 'Get zero trading fees and more', to: '/signup' },
          { icon: <IcoShield />, label: 'Private Client', desc: 'For trusts, family offices, UHNWIs', to: '/signup' },
          { icon: <IcoHex />, label: 'Onchain', desc: 'Dive into the world of onchain apps', to: '/explore' },
        ],
      },
      {
        items: [
          { icon: <IcoTrend />, label: 'Advanced', desc: 'Professional-grade trading tools', to: '/explore' },
          { icon: <IcoPercent />, label: 'Earn', desc: 'Stake your crypto and earn rewards', to: '/explore' },
          { icon: <IcoGlobe />, label: 'Coinbase Wealth', desc: 'Institutional-grade services for UHNW', to: '/signup' },
          { icon: <IcoCard />, label: 'Credit Card', desc: 'Earn up to 4% bitcoin back', to: '/signup' },
          { icon: <IcoCard />, label: 'Debit Card', desc: 'Spend crypto, get crypto back', to: '/signup' },
        ],
      },
    ],
    promo: {
      bg: '#fff',
      illus: (
        <img src={navigationUpsell} alt="System Update 2025" style={{ width: '100%', height: 'auto', borderRadius: 12, objectFit: 'cover' }} />
      ),
      title: 'System Update 2025',
      body: 'The next chapter of Coinbase. Live on X 12/17.',
      cta: 'Learn more',
      to: '/learn',
    },
  },
  businesses: {
    cols: [
      {
        items: [
          { icon: <IcoBrief />, label: 'Business', desc: 'Crypto trading and payments for startups and SMBs', to: '/explore' },
          { icon: <IcoGrid />, label: 'Asset Listings', desc: 'List your asset on Coinbase', to: '/explore' },
        ],
      },
      {
        items: [
          { icon: <IcoCard />, label: 'Payments', desc: 'The stablecoin payments stack for commerce platforms', to: '/explore' },
          { icon: <IcoSwap />, label: 'Token Manager', desc: 'The platform for token distributions, vesting, and lockups', to: '/explore' },
        ],
      },
    ],
    promo: {
      bg: '#fff',
      illus: (
        <img src={onchainPaymentProtocol} alt="Commerce Payments Protocol" style={{ width: '100%', height: 'auto', borderRadius: 12, objectFit: 'cover' }} />
      ),
      title: 'Commerce Payments Protocol',
      body: 'A new standard for onchain payments.',
      cta: 'Go to Payments',
      to: '/explore',
    },
  },
  institutions: {
    cols: [
      {
        header: { label: 'Prime', hasLink: true, to: '/explore' },
        items: [
          { icon: <IcoClock />,   label: 'Trading and Financing', desc: 'Professional prime brokerage services', to: '/explore' },
          { icon: <IcoShield />,  label: 'Custody',               desc: 'Securely store all your digital assets', to: '/explore' },
          { icon: <IcoPercent />, label: 'Staking',               desc: 'Explore staking across our products',   to: '/explore' },
          { icon: <IcoGrid />,    label: 'Onchain Wallet',        desc: 'Institutional-grade wallet to get onchain', to: '/explore' },
        ],
      },
      {
        header: { label: 'Markets', hasLink: false },
        items: [
          { icon: <IcoSwap />,   label: 'Exchange',               desc: 'Spot markets for high-frequency trading',  to: '/explore' },
          { icon: <IcoGlobe />,  label: 'International Exchange', desc: 'Access perpetual futures markets',         to: '/explore' },
          { icon: <IcoLayers />, label: 'Derivatives Exchange',   desc: 'Trade an accessible futures market',       to: '/explore' },
          { icon: <IcoVerify />, label: 'Verified Pools',         desc: 'Transparent, verified liquidity pools',    to: '/explore' },
        ],
      },
    ],
    promo: {
      bg: '#fff',
      illus: (
        <img src={institutionsUpsell} alt="Our clients" style={{ width: '100%', height: 'auto', borderRadius: 12, objectFit: 'cover' }} />
      ),
      title: 'Our clients',
      body: 'Trusted by institutions and government.',
      cta: 'Learn more',
      to: '/explore',
    },
  },
  developers: {
    cols: [
      {
        header: { label: 'Coinbase Developer Platform', hasLink: true, to: '/explore' },
        items: [
          { icon: <IcoDollar />, label: 'Payments', desc: 'Fast and global stablecoin payments with a single integration', to: '/explore' },
          { icon: <IcoTrend />, label: 'Trading', desc: 'Launch crypto trading and custody for your users', to: '/explore' },
          { icon: <IcoBrief />, label: 'Wallets', desc: 'Deploy customizable and scalable wallets for your business', to: '/explore' },
          { icon: <IcoGlobe />, label: 'Stablecoins', desc: 'Access USDC and Coinbase Custom Stablecoins', to: '/explore' },
        ],
      },
      {
        header: { label: 'Solutions for any company', hasLink: false },
        items: [
          { icon: <IcoLayers />, label: 'Banks & Brokerages', desc: 'Secure, regulated offerings for retail, private banking, & institutional clients', to: '/explore' },
          { icon: <IcoCard />, label: 'Payment Firms', desc: 'Near-instant, low-cost, global payment rails for modern providers', to: '/explore' },
          { icon: <IcoHex />, label: 'Startups', desc: 'Launch your business with the world\'s leader in crypto', to: '/explore' },
        ],
      },
    ],
    promo: {
      bg: '#fff',
      illus: (
        <img src={developersUpsell} alt="World class crypto infrastructure" style={{ width: '100%', height: 'auto', borderRadius: 12, objectFit: 'cover' }} />
      ),
      title: 'World class crypto infrastructure.',
      body: 'Discover Coinbase\'s complete crypto-as-a-service platform.',
      cta: 'Learn more',
      to: '/explore',
    },
  },
  company: {
    cols: [
      {
        items: [
          { icon: <IcoInfo />, label: 'About', desc: 'Powering the crypto economy', to: '/learn' },
          { icon: <IcoUser />, label: 'Affiliates', desc: 'Help introduce the world to crypto', to: '/learn' },
          { icon: <IcoFile />, label: 'Blog', desc: 'Read the latest from Coinbase', to: '/learn' },
        ],
      },
      {
        items: [
          { icon: <IcoBrief />, label: 'Careers', desc: 'Work with us', to: '/signup' },
          { icon: <IcoGrid />, label: 'Support', desc: 'Find answers to your questions', to: '/learn' },
          { icon: <IcoShield />, label: 'Security', desc: 'The most trusted & secure', to: '/learn' },
        ],
      },
    ],
    promo: {
      bg: '#fff',
      illus: (
        <img src={companyUpsell} alt="Learn all about Coinbase" style={{ width: '100%', height: 'auto', borderRadius: 12, objectFit: 'cover' }} />
      ),
      title: 'Learn all about Coinbase:',
      body: "We're building the open financial system.",
      cta: 'Create your account',
      to: '/signup',
    },
  },
};

// ── Dropdown panel ────────────────────────────────────────────
function DropdownPanel({ data, onClose }) {
  if (!data) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: '64px',
        left: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(229, 231, 235, 0.5)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        padding: '32px 0 28px',
        zIndex: 200,
      }}
      onMouseLeave={onClose}
    >
      {/* Centered inner container */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '36px' }}>
        {/* Item columns */}
        <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
          {data.cols.map((col, ci) => (
            <div key={ci} style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 210 }}>
              {/* Section header */}
              {col.header && (
                col.header.hasLink ? (
                  <Link
                    to={col.header.to}
                    onClick={onClose}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.8125rem', fontWeight: '700', color: '#111827', textDecoration: 'none', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid #F3F4F6' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#1652F0'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#111827'; }}
                  >
                    {col.header.label}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
                  </Link>
                ) : (
                  <p style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#111827', margin: '0 0 10px', paddingBottom: '8px', borderBottom: '1px solid #F3F4F6' }}>
                    {col.header.label}
                  </p>
                )
              )}
              {/* Items */}
              {col.items.map(({ icon, label, desc, to }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={onClose}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px', borderRadius: '10px', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F8FAFC'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  {icon}
                  <div>
                    <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '700', color: '#111827', lineHeight: '1.3' }}>{label}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '0.775rem', color: '#1652F0', lineHeight: '1.4' }}>{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Promo panel */}
        <div style={{ width: 200, flexShrink: 0, background: data.promo.bg, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', border: '1px solid #F3F4F6' }}>
          {data.promo.illus}
          <div>
            <p style={{ margin: '0 0 4px', fontSize: '0.9375rem', fontWeight: '800', color: '#111827', lineHeight: '1.3' }}>{data.promo.title}</p>
            <p style={{ margin: '0 0 10px', fontSize: '0.8125rem', color: '#6B7280', lineHeight: '1.5' }}>{data.promo.body}</p>
            <Link
              to={data.promo.to}
              onClick={onClose}
              style={{ display: 'inline-block', fontSize: '0.8125rem', fontWeight: '600', color: '#111827', textDecoration: 'underline' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1652F0'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#111827'; }}
            >
              {data.promo.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const NAV_ITEMS = [
    { key: 'cryptocurrencies', label: 'Cryptocurrencies', path: '/explore', direct: true },
    { key: 'individuals',      label: 'Individuals' },
    { key: 'businesses',       label: 'Businesses' },
    { key: 'institutions',     label: 'Institutions' },
    { key: 'developers',       label: 'Developers' },
    { key: 'company',          label: 'Company' },
  ];

  return (
    <nav style={{ background: '#fff', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 0 #E5E7EB' }}>
      <style>{`
        /* Base styles for the link */
        .nav-link {
          display: flex;
          align-items: center;
          padding: 0 14px;
          height: 100%;
          font-size: 14px;
          font-weight: 500;
          color: #0a0b0d; 
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: color 200ms ease; 
          position: relative; 
          border: none;
          background: none;
        }

        /* The hidden underline (bottom blue bar) */
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 14px; 
          right: 14px; 
          height: 2px; 
          background-color: #0052FF; 
          transform: scaleX(0); 
          transition: transform 250ms ease; 
        }

        /* Change text color on hover */
        .nav-item:hover .nav-link,
        .nav-link:hover,
        .nav-link.active {
          color: #0052FF;
        }

        /* Animate the underline to full width on hover */
        .nav-item:hover .nav-link::after,
        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }
      `}</style>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', height: '64px', gap: '8px' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginRight: '8px' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1652F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <path d="M 20.36 20.36 A 9 9 0 1 1 20.36 7.64" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
            </svg>
          </div>
        </Link>

        {/* Desktop nav items */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, height: '100%' }} className="hidden-mobile">
          {NAV_ITEMS.map(({ key, label, path, direct }) => (
            <div
              key={key}
              className="nav-item"
              style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center', height: '100%' }}
              onMouseEnter={() => !direct && setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {direct ? (
                <Link
                  to={path}
                  className={`nav-link ${isActive(path) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ) : (
                <button
                  className={`nav-link ${activeDropdown === key ? 'active' : ''}`}
                >
                  {label}
                </button>
              )}
              {activeDropdown === key && (
                <DropdownPanel data={DROPDOWNS[key]} onClose={() => setActiveDropdown(null)} />
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }} className="hidden-mobile">
          <button style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', borderRadius: '8px' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#6B7280'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', borderRadius: '8px' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; e.currentTarget.style.color = '#111827'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#6B7280'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </button>
          {user ? (
            <>
              <Link
                to="/dashboard"
                style={{ padding: '8px 14px', fontSize: '0.875rem', fontWeight: '600', color: isActive('/dashboard') ? '#1652F0' : '#374151', textDecoration: 'none', borderRadius: '8px', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                style={{ padding: '9px 18px', fontSize: '0.875rem', fontWeight: '700', color: '#DC2626', background: '#FEE2E2', borderRadius: '99px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FECACA'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FEE2E2'; }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" style={{ padding: '8px 14px', fontSize: '0.875rem', fontWeight: '600', color: '#374151', textDecoration: 'none', borderRadius: '8px', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#F3F4F6'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; }}
              >
                Sign in
              </Link>
              <Link to="/signup" style={{ padding: '9px 18px', fontSize: '0.875rem', fontWeight: '700', color: '#fff', background: '#1652F0', borderRadius: '99px', textDecoration: 'none', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1340CC'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1652F0'; }}
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'none', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#374151', marginLeft: 'auto' }}
          className="show-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12"/> : <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #F3F4F6', padding: '12px 16px 20px' }}>
          {NAV_ITEMS.map(({ key, label, path, direct }) => (
            <div key={key}>
              {direct ? (
                <Link
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', padding: '12px 8px', fontSize: '0.9375rem', fontWeight: '600', color: '#111827', textDecoration: 'none', borderBottom: '1px solid #F3F4F6' }}
                >
                  {label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '12px 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', fontWeight: '600', color: '#111827', borderBottom: '1px solid #F3F4F6' }}
                  >
                    {label}
                  </button>
                  {mobileExpanded === key && (
                    <div style={{ padding: '8px 0 4px 8px' }}>
                      {DROPDOWNS[key].cols.flatMap(col => col.items).map(({ icon, label: itemLabel, desc, to }) => (
                        <Link key={itemLabel} to={to} onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', textDecoration: 'none', borderRadius: '8px' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                        >
                          {icon}
                          <div>
                            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>{itemLabel}</p>
                            <p style={{ margin: 0, fontSize: '0.75rem', color: '#1652F0' }}>{desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', padding: '0 8px' }}>
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} style={{ flex: 1, padding: '11px', textAlign: 'center', fontSize: '0.9375rem', fontWeight: '700', color: '#1652F0', background: '#EFF4FF', borderRadius: '10px', textDecoration: 'none' }}>Dashboard</Link>
                <button onClick={handleLogout} style={{ flex: 1, padding: '11px', textAlign: 'center', fontSize: '0.9375rem', fontWeight: '700', color: '#DC2626', background: '#FEE2E2', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Sign out</button>
              </>
            ) : (
              <>
                <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} style={{ flex: 1, padding: '11px', textAlign: 'center', fontSize: '0.9375rem', fontWeight: '700', color: '#374151', background: '#F3F4F6', borderRadius: '10px', textDecoration: 'none' }}>Sign in</Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} style={{ flex: 1, padding: '11px', textAlign: 'center', fontSize: '0.9375rem', fontWeight: '700', color: '#fff', background: '#1652F0', borderRadius: '10px', textDecoration: 'none' }}>Sign up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
