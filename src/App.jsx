const companies = [
  {
    name: 'CV. Focus Trading Contractor',
    description: 'Perusahaan jasa yang bergerak di bidang Design and Build, Acoustic Installation, Finishing & Infrastructure.',
    url: 'https://www.focustradingcontractor.com/',
    logo: '/FTC.png',
  },
    {
    name: 'PT. Mitra Cemerlang Bersama',
    description: 'Perusahaan yang berfokus pada aktivitas Perdagangan Export Import untuk membantu perusahaan memenuhi kebutuhan Supply, Distribusi, dan Pengembangan Pasar secara lebih efektif.',
    url: 'https://www.mitracemerlangbersama.com/',
    logo: '/MCB.png',
  },
    {
    name: 'CV. Morrus Digital Connecting',
    description: 'Perusahaan IT yang bergerak di bidang Pengembangan Website, Aplikasi Web dan Mobile, Solusi Digital Bisnis, serta Pelatihan dan Pengembangan Keterampilan Teknologi melalui Digital Academy.',
    url: 'https://www.morrusdigitalconnecting.com/',
    logo: '/MDC.png',
  },
  {
    name: 'CV. Deferd Concept',
    description: 'Perusahaan jasa yang bergerak di bidang Konsultan Engineering dan Manajemen Konstruksi, meliputi Perencanaan, Pengawasan, serta Pengelolaan Proyek Pembangunan.',
    url: 'https://www.defertconcept.com/',
    logo: '/DFC.png',
    logoScale: 1.5,
  },
];


function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__content">
          <img
            className="hero__logo"
            id="page-title"
            src="/FGC.png"
            alt="Focus Group"
          />
          <p className="hero__intro">
            Perusahaan holding yang menaungi beberapa perusahaan
          </p>
          <span className="hero__divider" aria-hidden="true" />

          <div className="company-list" aria-label="Daftar anak perusahaan Focus Group">
            {companies.map((company) => (
              <a
                className="company-card"
                href={company.url}
                key={company.name}
                target="_blank"
                rel="noreferrer"
              >
                <span className="company-card__logo-frame">
                  <img
                    className="company-card__logo"
                    src={company.logo}
                    alt=""
                    style={company.logoScale ? { transform: `scale(${company.logoScale})` } : undefined}
                  />
                </span>
                <span className="company-card__body">
                  <span className="company-card__title">{company.name}</span>
                  <span className="company-card__description">{company.description}</span>
                </span>
                <span className="company-card__cta">
                  Kunjungi website
                  <span className="company-card__arrow" aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
