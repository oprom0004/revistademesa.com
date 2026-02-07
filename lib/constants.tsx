import { VoltagePageConfig, NavLink } from './types';
import { Zap, Activity, Battery, Server, Cpu, Box } from 'lucide-react';
import React from 'react';

export const APP_NAME = "Revista De Mesa";

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Browse Categories', path: '/variable-power-supplies' },
];

// Helper to generate consistent metadata
const createVoltageConfig = (voltage: number, mainSiteUrl: string, description: string): VoltagePageConfig => ({
    slug: `/variable-dc-power-supply-${voltage}v`,
    voltage,
    mainSiteUrl,
    title: `${voltage}V Variable DC Power Supply`,
    subtitle: `Professional 0-${voltage}V Adjustable Precision Source`,
    metaTitle: `${voltage}V Variable DC Power Supply: High Precision 0-${voltage}V Lab Rectifiers`,
    description,
    complianceStandards: ['IEC 61010-1', 'CE Certified', 'RoHS'],
    applications: [
        `General Purpose Lab Testing (0-${voltage}V)`,
        'Electronic Component Burn-in',
        'DC Motor Characterization',
        'R&D Engineering'
    ],
    technicalSpecs: {
        ripple: '< 3mVrms',
        efficiency: '> 85%',
        cooling: 'Temperature Controlled Fan',
        display: '4-Digit LED/LCD Precision Display',
        outputVoltage: `0-${voltage}V DC Continuous`
    },
    whyChoose: [
        `Exact ${voltage}V maximum rating for specialized applications`,
        'High power density compact design',
        'Over-voltage and over-current protection'
    ],
    faqs: [
        {
            question: `What are the key applications for a ${voltage}V supply?`,
            answer: `A ${voltage}V variable power supply is optimized for testing electronic circuits, motors, and systems that require voltage flexibility up to ${voltage}V. It provides precise control for compliance testing and component verification.`
        },
        {
            question: "Is the simulation output isolated?",
            answer: "Yes, the DC output is electrically isolated from the mains input, ensuring safety for sensitive test equipment and personnel."
        }
    ]
});

export const VOLTAGE_PAGES: VoltagePageConfig[] = [
    // 800V
    {
        ...createVoltageConfig(800, 'https://variabledcpowersupply.com/800v-dc-power-supplies/',
            "Leading-edge 800V testing solutions for next-generation EV platforms (Porsche/Audi/Hyundai architectures) and high-power industrial grids."),
        title: "800V Variable DC Power Supply | EV Architecture",
        whyChoose: [
            "Matches 800V EV battery architecture standards",
            "High insulation resistance for safety",
            "Precise control for HV breakdown testing"
        ]
    },

    createVoltageConfig(600, 'https://variabledcpowersupply.com/600v-dc-power-supplies/',
        "600V variable DC power supplies. Designed for solar string inverter testing and industrial drive variable frequency drive (VFD) DC bus simulation."),
    createVoltageConfig(500, 'https://variabledcpowersupply.com/500v-dc-power-supplies/',
        "500V industrial DC power supplies. High voltage testing solution for railways, renewable energy, and scientific research."),
    createVoltageConfig(400, 'https://variabledcpowersupply.com/400v-dc-power-supplies/',
        "400V DC power sources for EV ecosystem testing. Simulates 400V native electric vehicle battery architectures and charging components."),

    // 300V
    createVoltageConfig(300, 'https://variabledcpowersupply.com/dc-power-supply-300v-list/',
        "High voltage 300V variable DC power supplies. Critical for testing energy storage systems and photovoltaic inverters."),

    createVoltageConfig(250, 'https://variabledcpowersupply.com/250v-dc-power-supplies/',
        "250V laboratory power supplies. Provides headroom over 220V/230V commercial standards for stress testing and validation."),

    // 220V
    {
        ...createVoltageConfig(220, 'https://variabledcpowersupply.com/220v-dc-power-supplies/',
            "The 220V rating is the global standard for high-voltage DC simulation. Essential for testing equipment designed for European and Asian markets."),
        subtitle: "Global Mains Simulation & Calibration"
    },

    createVoltageConfig(200, 'https://variabledcpowersupply.com/200v-dc-power-supplies/',
        "200V adjustable power supplies. Suitable for testing 100V-200V rated capacitors, fuses, and global voltage components."),
    createVoltageConfig(150, 'https://variabledcpowersupply.com/150v-dc-power-supplies/',
        "150V variable DC sources for aerospace and specialized industrial driver testing. Delivers stable 0-150V DC power."),

    // 120V - Custom inherited content preserved in simplified format
    {
        ...createVoltageConfig(120, 'https://variabledcpowersupply.com/variable-dc-power-supply-120v/',
            "In the context of North American electrical engineering, the 120V variable DC power supply is a critical compliance instrument. Designed to encompass the full saturation range of the US mains standard (nominally 110V-120V)."),
        subtitle: "US Standard Testing & NEMA Simulation",
        applications: [
            "Universal Motor Characterization (Torque/Speed)",
            "96V Battery Bank Equalization & Cycle Testing",
            "DC Contactor and Relay Life-Cycle Verification",
            "Input Stage Validation for US-Market SMPS"
        ]
    },

    createVoltageConfig(100, 'https://variabledcpowersupply.com/100v-dc-power-supplies/',
        "100V high-precision DC power supplies. Essential for testing 72V-96V battery systems and high-voltage DC components."),
    createVoltageConfig(80, 'https://variabledcpowersupply.com/80v-dc-power-supplies/',
        "80V variable DC power supplies for industrial testing. Robust 0-80V output for higher voltage DC motors and automation equipment."),

    // 60V - Special Layout (kept slightly more detailed if needed, but standardizing for now to ensure consistency)
    createVoltageConfig(60, 'https://variabledcpowersupply.com/variable-dc-power-supply-60v/',
        "Professional 60V variable DC power supplies. Feature-rich 0-60V adjustable units with fine & coarse current regulation for 48V system testing."),

    createVoltageConfig(50, 'https://variabledcpowersupply.com/50v-dc-power-supplies/',
        "50V DC adjustable power sources for telecom (48V) and network equipment testing. Provides clean, stable 0-50V output."),
    createVoltageConfig(30, 'https://variabledcpowersupply.com/variable-dc-power-supply-30v/',
        "Standard 30V lab bench power supplies. The industry workhorse for general electronics lab, education, and maintenance repair."),
    createVoltageConfig(20, 'https://variabledcpowersupply.com/20v-dc-power-supplies/',
        "Versatile 20V variable DC power supplies. Perfect for automotive component testing (12V nominal) and portable electronics development."),
    createVoltageConfig(15, 'https://variabledcpowersupply.com/15v-dc-power-supplies/',
        "Precision 15V DC power supplies for low-voltage logic circuits and semiconductor testing. Ideal for 0-15V adjustable requirements.")
];

// Reverted to neutral gray icons for professional consistency
export const getIconForVoltage = (voltage: number | string) => {
    // Simplified icon mapping
    if (typeof voltage === 'string') return <Zap className="w-6 h-6 text-slate-500" />;
    if (voltage <= 50) return <Battery className="w-6 h-6 text-slate-600" />;
    if (voltage <= 150) return <Activity className="w-6 h-6 text-slate-600" />;
    if (voltage <= 300) return <Server className="w-6 h-6 text-slate-600" />;
    if (voltage <= 500) return <Box className="w-6 h-6 text-slate-600" />;
    return <Zap className="w-6 h-6 text-slate-600" />;
};

// Returns a matching color hex only for charts/accents where needed
export const getColorForVoltage = (voltage: number | string) => {
    if (typeof voltage === 'string') return '#64748b'; // slate-500
    if (voltage <= 50) return '#f59e0b'; // amber-500
    if (voltage <= 150) return '#3b82f6'; // blue-500
    if (voltage <= 300) return '#4f46e5'; // indigo-600
    if (voltage <= 500) return '#ea580c'; // orange-600
    return '#dc2626'; // red-600
};
