export const mainSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Özdebir İnşaat & Çilingir",
  url: "http://www.example.com/",
  description: `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`,
  sameAs: ["https://www.instagram.com/ozdebirinsaat"],
  location: {
    "@type": "Place",
    name: "istanbul",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İstanbul Özdebir İnşaat & Çilingir",
      addressLocality: "istanbul pendik",
      postalCode: "34890",
      addressCountry: "Türkiye",
    },
  },
  logo: "http://www.example.com/logo.png",
  foundingDate: "2023",
  event: [
    {
      "@type": "Event",
      name: "İstanbul Özdebir İnşaat & Çilingir",
      startDate: "2023-06-18T13:00",
      endDate: "2023-06-18T18:00",
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "İstanbul Özdebir İnşaat & Çilingir",
        address: {
          "@type": "PostalAddress",
          streetAddress: "İstanbul Özdebir İnşaat & Çilingir",
          addressLocality: "istanbul pendik",
          postalCode: "34890",
          addressCountry: "Türkiye",
        },
      },
      description: `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`,
    },
  ],
};

export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://example.com/blog/1",
  },
  headline: "İstanbul Özdebir İnşaat & Çilingir",
  image:
    "http://localhost:3000/_next/image/?url=%2Fimages%2Fbeautiful-roman-figure.webp&w=3840&q=75",
  author: {
    "@type": "Person",
    name: "İstanbul Özdebir İnşaat & Çilingir",
    url: "https://example.com",
  },
  publisher: {
    "@type": "Organization",
    name: "İstanbul Özdebir İnşaat & Çilingir",
    logo: {
      "@type": "ImageObject",
      url: "",
    },
  },
  datePublished: "2023-02-16",
  dateModified: "2023-02-16",
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "İstanbul Özdebir İnşaat & Çilingir",
  description: `İstanbul Özdebir İnşaat & Çilingir hizmetlerimizle, kapılarınızı açıyor, kilitlerinizi değiştiriyor ve güvenliğinizi sağlıyoruz. İstanbul’un her yerine hızlı bir şekilde ulaşıyor ve sorunlarınızı çözüyoruz. Çilingir hizmetlerimizden yararlanmak için bizi arayabilirsiniz.`,
  image: "https://example.com/image/1",
  startDate: "2023-06-18T08:00",
  endDate: "2023-06-19T08:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "İstanbul Özdebir İnşaat & Çilingir",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İstanbul Pendik Özdebir İnşaat & Çilingir",
      addressLocality: "İstanbul Pendik",
      postalCode: "34890",
      addressCountry: "TR",
    },
  },
  performer: {
    "@type": "PerformingGroup",
    name: "İstanbul Özdebir İnşaat & Çilingir",
  },
};
