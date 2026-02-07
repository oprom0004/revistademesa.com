import Script from 'next/script';

export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://revistademesa.com/#website",
                "url": "https://revistademesa.com/",
                "name": "Variable DC Power Supply",
                "description": "Precision Source for NEMA Standard Equipment & 96V Battery Architectures",
                "publisher": {
                    "@id": "https://revistademesa.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://revistademesa.com/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://revistademesa.com/#organization",
                "name": "Revista De Mesa",
                "url": "https://revistademesa.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://revistademesa.com/favicon.ico"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@variabledcpowersupply.com",
                    "contactType": "Technical Support"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://revistademesa.com/#webpage",
                "url": "https://revistademesa.com/",
                "name": `Variable DC Power Supply (${new Date().getFullYear()}): 120V - 800V Selection`,
                "isPartOf": {
                    "@id": "https://revistademesa.com/#website"
                },
                "about": {
                    "@id": "https://revistademesa.com/#organization"
                },
                "description": "Precision Source for NEMA Standard Equipment & 96V Battery Architectures"
            }
        ]
    };

    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
