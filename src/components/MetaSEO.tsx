import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectSchema {
  name: string;
  description: string;
  category?: string;
  technologies?: string[];
  image?: string;
  url?: string;
  dateCreated?: string;
}

interface MetaSEOProps {
  title?: string;
  description?: string;
  image?: string;
  urlPath?: string;
  type?: 'website' | 'article';
  projectSchema?: ProjectSchema;
  customSchemaGraph?: Record<string, unknown>[];
}

export const MetaSEO: React.FC<MetaSEOProps> = ({
  title = `${PERSONAL_INFO.name} (${PERSONAL_INFO.handle}) — ${PERSONAL_INFO.role}`,
  description = PERSONAL_INFO.bio,
  image = PERSONAL_INFO.portraitUrl,
  urlPath = '',
  type = 'website',
  projectSchema,
  customSchemaGraph,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const currentOrigin = window.location.origin;
    const fullUrl = `${currentOrigin}${urlPath}`;
    const fullImageUrl = image.startsWith('http') ? image : `${currentOrigin}${image}`;

    // Standard SEO
    setMetaTag('name', 'description', description);

    // OpenGraph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:site_name', `${PERSONAL_INFO.name} Portfolio`);

    // Twitter / X
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // 3. Inject Comprehensive Schema.org JSON-LD (Person + WebSite + Project)
    const personGraphNode = {
      '@type': 'Person',
      '@id': `${currentOrigin}/#person`,
      name: PERSONAL_INFO.name,
      alternateName: PERSONAL_INFO.handle,
      jobTitle: PERSONAL_INFO.role,
      email: PERSONAL_INFO.email,
      url: currentOrigin,
      image: `${currentOrigin}${PERSONAL_INFO.portraitUrl}`,
      sameAs: PERSONAL_INFO.socials.map((s) => s.url).filter((u) => !u.startsWith('mailto:')),
      description: PERSONAL_INFO.bio,
      knowsAbout: [
        'Product Design',
        'UI/UX Architecture',
        'TypeScript',
        'React',
        'React Native',
        'Expo',
        'Supabase',
        'Tailwind CSS',
        'Full-Stack Engineering',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'icrmahin',
      },
    };

    const websiteGraphNode = {
      '@type': 'WebSite',
      '@id': `${currentOrigin}/#website`,
      url: currentOrigin,
      name: `${PERSONAL_INFO.name} — Portfolio`,
      description: PERSONAL_INFO.bio,
      publisher: { '@id': `${currentOrigin}/#person` },
      inLanguage: 'en-US',
    };

    const graph: Record<string, unknown>[] = [personGraphNode, websiteGraphNode];

    // If Project schema is provided, add structured CreativeWork / SoftwareApplication
    if (projectSchema) {
      const projectGraphNode = {
        '@type': 'SoftwareApplication',
        '@id': `${fullUrl}#project`,
        name: projectSchema.name,
        description: projectSchema.description,
        applicationCategory: projectSchema.category || 'BusinessApplication',
        operatingSystem: (projectSchema.technologies || []).join(', ') || 'Web, Android, iOS',
        creator: { '@id': `${currentOrigin}/#person` },
        author: { '@id': `${currentOrigin}/#person` },
        url: fullUrl,
        image: projectSchema.image ? (projectSchema.image.startsWith('http') ? projectSchema.image : `${currentOrigin}${projectSchema.image}`) : fullImageUrl,
        dateCreated: projectSchema.dateCreated || '2024',
        keywords: (projectSchema.technologies || []).join(', '),
      };
      graph.push(projectGraphNode);
    }

    if (customSchemaGraph && customSchemaGraph.length > 0) {
      graph.push(...customSchemaGraph);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    let scriptTag = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-json-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData, null, 2);
  }, [title, description, image, urlPath, type, projectSchema, customSchemaGraph]);

  return null;
};
