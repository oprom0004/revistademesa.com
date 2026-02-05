import Script from 'next/script';

export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://variabledcpowersupply.com/#website",
                "url": "https://variabledcpowersupply.com/",
                "name": "Variable DC Power Supply Guide",
                "description": "Precision Source for NEMA Standard Equipment & 96V Battery Architectures",
                "publisher": {
                    "@id": "https://variabledcpowersupply.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://variabledcpowersupply.com/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://variabledcpowersupply.com/#organization",
                "name": "Revista De Mesa",
                "url": "https://variabledcpowersupply.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://variabledcpowersupply.com/favicon.ico"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@variabledcpowersupply.com",
                    "contactType": "Technical Support"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://variabledcpowersupply.com/#webpage",
                "url": "https://variabledcpowersupply.com/",
                "name": `Variable DC Power Supply Guide (${new Date().getFullYear()}): 120V - 800V Selection`,
                "isPartOf": {
                    "@id": "https://variabledcpowersupply.com/#website"
                },
                "about": {
                    "@id": "https://variabledcpowersupply.com/#organization"
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
