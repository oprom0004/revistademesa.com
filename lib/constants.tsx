import { VoltagePageConfig, NavLink } from './types';
import { Zap, Activity, Battery, Server, Cpu, Box } from 'lucide-react';
import React from 'react';

export const APP_NAME = "Revista De Mesa";

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Browse Categories', path: '/variable-power-supplies' },
];

export const VOLTAGE_PAGES: VoltagePageConfig[] = [
    {
        slug: '/variable-dc-power-supply-120v',
        voltage: 120,
        mainSiteUrl: 'https://variabledcpowersupply.com/variable-dc-power-supply-120v/',
        title: "120V DC Power Supply",
        subtitle: "US Standard Testing & NEMA Simulation",
        metaTitle: "120V Variable DC Power Supply for NEMA & US Standard Testing",
        description: "In the context of North American electrical engineering, the 120V variable DC power supply is a critical compliance instrument. Designed to encompass the full saturation range of the US mains standard (nominally 110V-120V), this class of power supply allows for the precise DC simulation of rectified mains voltage, essential for validating Universal Motors and older DC infrastructure.\n\nFurthermore, 120V serves as the definitive saturation point for 96V nominal battery systems. Engineers utilizing 120V supplies can safely perform equalization charging and capacity testing on these banks without the risk of over-voltage breakdown. The unit provides rigid voltage clamping to simulate grid swells (up to 127V) while maintaining a low noise floor for testing sensitive switch-mode power supply (SMPS) input stages.",
        complianceStandards: "NEMA 5-15 (US Mains Simulation), UL 1012 (Power Units), IEEE 446 (Emergency Power Systems)",
        applications: [
            "Universal Motor Characterization (Torque/Speed)",
            "96V Battery Bank Equalization & Cycle Testing",
            "DC Contactor and Relay Life-Cycle Verification",
            "Input Stage Validation for US-Market SMPS"
        ],
        technicalSpecs: {
            ripple: "< 2mVrms (Linear Topology)",
            efficiency: "> 88%",
            cooling: "Thermostatic Forced Air"
        },
        whyChoose: "The 120V rating provides exactly the required headroom for US standard equipment without the safety hazards and cost penalties of 300V+ systems. It ensures precise regulation at the specific operating points of NEMA connected devices.",
        faqs: [
            {
                question: "Can I use this 120V DC supply to test 110V rated equipment?",
                answer: "Yes. 110V equipment is typically designed to handle a tolerance range (often ±10%). A 120V variable supply allows you to test the device at nominal voltage (110V) and stress-test it at the upper limit (120V) to ensure reliability under grid swell conditions."
            },
            {
                question: "Is this power supply suitable for charging 96V battery banks?",
                answer: "Absolutely. A 96V lead-acid or LiFePO4 bank requires a charging voltage higher than its nominal rating to reach full capacity. A 120V supply covers the equalization voltage typically required (approx. 2.45V - 2.5V per cell for lead-acid), making it ideal for controlled charging cycles."
            },
            {
                question: "Does this unit simulate AC ripple?",
                answer: "No, this is a pure DC power supply designed to minimize ripple (<2mVrms). However, it can be used to simulate the 'rectified DC' stage of a power supply chain to test downstream DC-DC converters."
            }
        ]
    },
    {
        slug: '/variable-dc-power-supply-150v',
        voltage: 150,
        mainSiteUrl: 'https://variabledcpowersupply.com/150v-dc-power-supplies/',
        title: "150V DC Power Supply",
        subtitle: "Aerospace Compliance & Lab Bench Standard",
        metaTitle: "150V Variable DC Power Supply: Aerospace & Lab Bench Standard",
        description: "The 150V DC power supply is the 'Golden Mean' for general-purpose electronics laboratories. While 120V covers domestic appliances, 150V is the requisite standard for aerospace and defense applications involving 115V DC buses and 28V systems requiring high-margin stress testing. This voltage class is specifically engineered to provide a safety buffer for testing components rated at 100V-125V to their absolute breakdown limits.\n\nIn semiconductor R&D, a 150V variable supply is essential for characterizing power MOSFETs and IGBTs. It allows engineers to sweep voltage rails well beyond nominal operation to identify thermal runaway points and verify Over-Voltage Protection (OVP) circuits. This unit offers the versatility to power high-impedance loads, piezoelectric actuators, and LED arrays.",
        complianceStandards: "MIL-STD-704F (Aircraft Electric Power), DO-160G (Environmental Conditions), IPC-9592B",
        applications: [
            "Aerospace 115V Bus Simulation",
            "Piezoelectric Actuator Driving",
            "Power MOSFET Breakdown Verification",
            "High-String LED Driver Development"
        ],
        technicalSpecs: {
            ripple: "< 1mVrms",
            efficiency: "> 89%",
            cooling: "Passive / Low-RPM Hybrid"
        },
        whyChoose: "Select 150V when your DUT (Device Under Test) operates in the 48V to 120V range but requires overhead for transient simulation. It bridges the gap between logic-level power and industrial power transmission.",
        faqs: [
            {
                question: "Why choose 150V over a standard 120V supply?",
                answer: "The extra 30V headroom is critical for 'destructive testing' and R&D. It allows engineers to validate the breakdown voltage of components rated for 100V-120V, ensuring they fail safely or trigger protection circuits correctly."
            },
            {
                question: "Is this suitable for aerospace 115V DC bus simulation?",
                answer: "Yes. Aerospace standards (like MIL-STD-704) often require testing normal operation at 115V and abnormal surges up to 150V. This unit provides the necessary range to execute these compliance tests accurately."
            }
        ]
    },
    {
        slug: '/variable-dc-power-supply-220v',
        voltage: 220,
        mainSiteUrl: 'https://variabledcpowersupply.com/220v-dc-power-supplies/',
        title: "220V DC Power Supply",
        subtitle: "Industrial Automation & Global Grid Emulation",
        metaTitle: "220V Variable DC Power Supply: Industrial Automation & Grid Test",
        description: "The 220V variable DC power supply is the workhorse of industrial automation and international product compliance. In power generation and substation environments, 220V DC is the standard control voltage for switchgear tripping coils and auxiliary backup systems. Utility engineers require robust, high-current 220V supplies to test the actuation force and timing of massive DC circuit breakers.\n\nFrom a global manufacturing perspective, 220V DC simulates the rectified output of the 230V AC mains found in Europe and Asia. This allows test engineers to validate the 'Universal Input' capabilities of power supplies and industrial drives destined for export. These units are built with ruggedized topology to handle high inductive kickback from large DC motors.",
        complianceStandards: "IEC 60364 (Low Voltage Installations), IEC 60038 (Standard Voltages), EN 50160 (Voltage Characteristics)",
        applications: [
            "Substation Switchgear Coil Testing",
            "Export Market Appliance Validation (230V Rectified)",
            "Industrial DC Motor Drives (200V Class)",
            "Magnetic Levitation & Bearing Research"
        ],
        technicalSpecs: {
            ripple: "< 5mVrms",
            efficiency: "> 92%",
            cooling: "Industrial High-Static Fan"
        },
        whyChoose: "Mandatory for heavy industry. A 220V supply allows for the simulation of the 200V-250V DC link found in industrial Variable Frequency Drives (VFDs) and ensures compliance with IEC standards for global equipment export.",
        faqs: [
            {
                question: "Can I use this for testing motors designed for 230V AC?",
                answer: "Only if the motor is a 'Universal Motor' (brushed) or if you are testing the DC Link stage of a VFD. You cannot run a standard induction AC motor directly from a DC supply. However, this unit is perfect for simulating the rectified DC bus voltage that powers the VFD inverter."
            },
            {
                question: "Does this unit handle inductive kickback from large solenoids?",
                answer: "Yes, our 220V industrial series typically includes output protection diodes and capacitors to absorb reverse EMF generated when testing large inductive loads like switchgear coils or DC motors."
            }
        ]
    },
    {
        slug: '/variable-dc-power-supply-500v',
        voltage: 500,
        mainSiteUrl: 'https://variabledcpowersupply.com/500v-dc-power-supplies/',
        title: "500V DC Power Supply",
        subtitle: "Component Aging & Datacenter Architecture",
        metaTitle: "500V Variable DC Power Supply for Capacitor Aging & Burn-In",
        description: "500V represents the threshold of 'High Voltage' in commercial contexts, serving as the critical testing ground for capacitor reforming, insulation resistance, and datacenter power distribution. Modern hyperscale datacenters are moving toward 380V-400V DC distribution systems; a 500V variable supply provides the necessary overhead to stress-test server rack power units (PSUs) and ensure reliability under surge conditions.\n\nIn component manufacturing, 500V supplies are utilized for 'burn-in' and aging of electrolytic capacitors. The ability to ramp voltage slowly prevents inrush current damage while effectively healing dielectric imperfections. This voltage level is also pivotal for testing Photovoltaic (PV) string inverters at the lower end of their MPPT range.",
        complianceStandards: "EIA-469 (Capacitor Reliability), IEC 61800-5 (Adjustable Speed Drives), UL 60950-1 (Information Technology)",
        applications: [
            "Electrolytic Capacitor Reforming & Aging",
            "HVDC Datacenter Power Distribution (380V/400V)",
            "Insulation Resistance (IR) Testing",
            "PV String Inverter Low-End MPPT Verification"
        ],
        technicalSpecs: {
            ripple: "< 10mVrms",
            efficiency: "> 90%",
            cooling: "Active Thermal Management Tunnel"
        },
        whyChoose: "Essential for reliability engineering. The 500V capability allows for the precise determination of breakdown voltages in passive components and the validation of next-generation DC datacenter equipment.",
        faqs: [
            {
                question: "What is the primary safety concern with 500V DC?",
                answer: "At 500V, DC arcing becomes a significant hazard. Unlike AC, DC arcs do not self-extinguish at the zero-crossing. Ensure your test setup uses DC-rated switches and fuses. This power supply includes electronic output enabling to minimize arc risks during connection."
            },
            {
                question: "Can this act as a 380V HVDC source for datacenters?",
                answer: "Yes. 380V DC is the emerging standard for energy-efficient datacenters. This 500V supply allows you to test regulation and efficiency at nominal 380V, as well as test over-voltage protection limits up to 450V+."
            }
        ]
    },
    {
        slug: '/variable-dc-power-supply-600v',
        voltage: 600,
        mainSiteUrl: 'https://variabledcpowersupply.com/600v-dc-power-supplies/',
        title: "600V DC Power Supply",
        subtitle: "Inverter Testing & Renewable Energy Systems",
        metaTitle: "600V Variable DC Power Supply: Solar Inverter & VFD Testing",
        description: "The 600V variable DC power supply is the standard for heavy industrial traction and renewable energy conversion. In 480V AC industrial environments, the rectified DC bus voltage sits around 680V, but 600V remains the nominal rating for many traction motors and inverters. This power supply enables engineers to simulate the DC Link of Variable Frequency Drives (VFDs) without a live AC mains connection.\n\nFor solar energy applications, 600V is a standard string voltage for residential inverters. Testing Maximum Power Point Tracking (MPPT) algorithms requires a power supply with high output impedance modes. These units are built to withstand significant regenerative energy, often featuring integrated bleed resistors to absorb energy from braking motors.",
        complianceStandards: "IEEE 1547 (Interconnection of Distributed Resources), UL 1741 (Inverters/Converters), IEC 61400 (Wind Turbines)",
        applications: [
            "Solar Inverter MPPT Algorithm Validation",
            "Industrial VFD DC Link Simulation",
            "Electric Traction Motor Dyno Testing",
            "High-Power Switchgear Isolation Testing"
        ],
        technicalSpecs: {
            ripple: "< 15mVrms",
            efficiency: "> 94%",
            cooling: "Liquid Cooled / Heavy Duty Fan"
        },
        whyChoose: "The industry standard for 3-phase motor drive development. 600V supplies offer the energy density required to spin large industrial motors on the dynamometer and validate the conversion efficiency of solar inverters.",
        faqs: [
            {
                question: "How does this supply assist with MPPT testing?",
                answer: "Some advanced models in this 600V range feature 'Solar Array Simulation' (SAS) modes, where the I-V curve can be programmed to mimic a solar panel's output behavior under varying irradiance, allowing for static MPPT validation."
            },
            {
                question: "Is 600V sufficient for all VFD testing?",
                answer: "It is sufficient for VFDs rated for 200V-400V AC inputs (which have DC links below 600V). For 480V or 600V AC drives, you would typically need a higher voltage supply (800V+) to fully simulate the DC bus."
            }
        ]
    },
    {
        slug: '/variable-dc-power-supply-800v',
        voltage: 800,
        mainSiteUrl: 'https://variabledcpowersupply.com/800v-dc-power-supplies/',
        title: "800V DC Power Supply",
        subtitle: "EV High Voltage Architecture & SiC Development",
        metaTitle: "800V High Voltage DC Power Supply: EV Architecture & SiC Test",
        description: "The shift to 800V architectures marks a paradigm shift in electric vehicle efficiency. The 800V variable DC power supply is the primary enabling tool for this transition, designed to test wide-bandgap Silicon Carbide (SiC) inverters which operate at higher switching frequencies and voltages. It enables validation of efficiency gains in the drivetrain that 400V systems cannot achieve.\n\nBeyond the drivetrain, this voltage class is mandatory for validating DC Fast Charging (HPC) stations. An 800V programmable supply can emulate a high-voltage battery pack, sinking current from the charger to verify communication protocols (CCS/NACS) and thermal management under 350kW+ loads. Safety features include interlock loops and arc detection.",
        complianceStandards: "ISO 6469-3 (Electric Road Vehicles), IEC 61851-23 (DC Charging), UN ECE R100 (Battery Safety)",
        applications: [
            "800V Battery Emulation for EV Drivetrains",
            "Silicon Carbide (SiC) Inverter Efficiency Mapping",
            "DC Fast Charger (HPC) Protocol Validation",
            "Aviation & Marine High-Voltage Propulsion"
        ],
        technicalSpecs: {
            ripple: "< 20mVrms",
            efficiency: "> 96% (SiC Topology)",
            cooling: "Liquid Cooled / High-Static Pressure"
        },
        whyChoose: "Future-proof your lab for the EV revolution. As OEMs standardize on 800V for performance vehicles, this power supply capability is the only way to validate SiC-based power electronics and high-speed charging infrastructure.",
        faqs: [
            {
                question: "Can this supply both source and sink current (Bi-directional)?",
                answer: "Many high-end 800V supplies designed for EV testing are indeed bi-directional. This allows them to simulate a battery absorbing energy from regenerative braking or a fast charger, and then recycle that energy back to the grid to save costs."
            },
            {
                question: "Why do I need 800V for EVs when most are 400V?",
                answer: "While legacy EVs are 400V, the industry (Porsche, Hyundai, Kia, Audi) is moving to 800V architectures to enable faster charging and thinner cabling. An 800V supply is a future-proof investment that covers both legacy 400V and next-gen 800V platforms."
            }
        ]
    {
        slug: 'variable-power-supply-60v',
        voltage: '60V',
        mainSiteUrl: 'https://variabledcpowersupply.com/60v-power-supply',
        title: '60V Variable DC Power Supply | Precision Benchtop Source',
        subtitle: 'Professional 0-60V Adjustable Power Systems',
        metaTitle: '60V Variable DC Power Supply: High Precision 0-60V Benchtop Lab Units',
        description: 'Shop professional 60V variable DC power supplies. Feature-rich 0-60V adjustable units with fine & coarse current regulation for lab testing.',
        complianceStandards: ['IEC 61010-1', 'CE Certified', 'RoHS'],
        applications: ['Automotive Electronics (48V systems)', 'Telecom Testing', 'LED Lighting Arrays'],
        technicalSpecs: {
            inputVoltage: '110V/220V AC ±10%',
            outputVoltage: '0-60V DC Adjustable',
            ripple: '< 3mVrms',
            display: '4-Digit LED Precision Display'
        },
        whyChoose: [
            'Ideal for 48V battery system testing',
            'High reliability with over-voltage protection',
            'Compact benchtop footprint'
        ],
        faqs: [
            {
                question: 'Is this suitable for 48V battery banks?',
                answer: 'Yes, 60V supplies are perfect for charging and testing 48V battery architectures as they provide sufficient overhead voltage (typically 54V-58V needed).'
            }
        ]
    },
    {
        slug: 'variable-power-supply-80v',
        voltage: '80V',
        mainSiteUrl: 'https://variabledcpowersupply.com/80v-power-supply',
        title: '80V Variable DC Power Supply | Industrial Test Source',
        subtitle: 'Heavy-Duty 0-80V DC Power Solutions',
        metaTitle: '80V Variable DC Power Supply: 0-80V Adjustable Industrial Lab Rectifiers',
        description: 'Industrial-grade 80V variable DC power supplies. Robust 0-80V output for telecom, electroplating, and high-power motor testing applications.',
        complianceStandards: ['UL 61010', 'FCC Part 15', 'ISO 9001'],
        applications: ['Electroplating', 'DC Motor Testing', 'Industrial Automation'],
        technicalSpecs: {
            inputVoltage: '220V AC / 110V AC',
            outputVoltage: '0-80V DC Continuously Adjustable',
            cooling: 'Temperature Controlled Fan',
            efficiency: '> 85%'
        },
        whyChoose: [
            'Extended voltage range for specialized industrial needs',
            'Robust thermal management for continuous operation',
            'High efficiency power conversion'
        ],
        faqs: [
            {
                question: 'Can I use this for electroplating?',
                answer: 'Absolutely. These 80V units provide stable voltage and current control essential for consistent electroplating results.'
            }
        ]
    },
    {
        slug: 'variable-power-supply-300v',
        voltage: '300V',
        mainSiteUrl: 'https://variabledcpowersupply.com/high-voltage-power-supply',
        title: '300V Variable DC Power Supply | High Voltage Lab',
        subtitle: 'Precision 0-300V HV Testing Units',
        metaTitle: '300V Variable DC Power Supply: High Voltage 0-300V AC-DC Lab Bench Source',
        description: 'High voltage 300V variable DC power supplies. Safe, regulated 0-300V output for capacitor testing, insulation testing, and physics research.',
        complianceStandards: ['IEC 61010-1:2010', 'Low Voltage Directive', 'CAT II'],
        applications: ['Capacitor Reforming', 'Insulation Resistance Testing', 'Physics Lab Experiments'],
        technicalSpecs: {
            inputVoltage: '110V/220V Switchable',
            outputVoltage: '0-300V Adjustable',
            safetyFeatures: 'OVP, OCP, OTP Protection',
            resolution: '100mV / 10mA'
        },
        whyChoose: [
            'Essential for high-voltage component characterization',
            'Advanced safety protection circuitry',
            'High stability for sensitive measurements'
        ],
        faqs: [
            {
                question: 'What safety precautions are included?',
                answer: 'Our 300V units feature isolated outputs, emergency stop functionality, and automatic discharge for output capacitors.'
            }
        ]
    },
    {
        slug: 'variable-power-supply-400v',
        voltage: '400V',
        mainSiteUrl: 'https://variabledcpowersupply.com/high-voltage-power-supply',
        title: '400V Variable DC Power Supply | EV Component Test',
        subtitle: '0-400V Solutions, 800V Stack Ready',
        metaTitle: '400V Variable DC Power Supply: 0-400V Adjustable Source for EV & Solar',
        description: 'Specialized 400V variable DC power supplies. Critical for 400V EV bus architecture testing and solar inverter component validation.',
        complianceStandards: ['IEC 61851', 'Automotive EMC', 'CE LVD'],
        applications: ['EV Battery Simulation', 'Solar String Inverter Testing', 'High Voltage Semiconductor Test'],
        technicalSpecs: {
            inputVoltage: '220V AC Single Phase',
            outputVoltage: '0-400V DC',
            loadRegulation: '< 0.1%',
            interface: 'RS232/RS485 Remote Control'
        },
        whyChoose: [
            'Matches standard EV battery voltage class',
            'High power density for workbench use',
            'Remote programming capabilities'
        ],
        faqs: [
            {
                question: 'Can two units be connected in series for 800V?',
                answer: 'Yes, most of our isolated 400V models can be connected in series to achieve 800V for next-gen EV testing. Check specific model datasheets.'
            }
        ]
    },
    {
        slug: '10-amp-variable-dc-power-supply',
        voltage: '10A',
        mainSiteUrl: 'https://variabledcpowersupply.com',
        title: '10 Amp Variable DC Power Supply | High Current',
        subtitle: 'Adjustable Voltage with 0-10A Current Limiting',
        metaTitle: '10 Amp Variable DC Power Supply: 0-30V/60V 10A High Current Lab Source',
        description: 'High current 10 Amp variable DC power supplies. Versatile benchtop units providing up to 10A continuous current for power-hungry electronics.',
        complianceStandards: ['UL Listed Components', 'CE', 'FCC'],
        applications: ['Battery Charging', 'Power Inverter Testing', 'Electrolysis'],
        technicalSpecs: {
            inputVoltage: '110V AC',
            outputVoltage: '0-30V or 0-60V (Model Dependent)',
            outputCurrent: '0-10A Continuously Adjustable',
            cooling: 'Intelligent Fan Control'
        },
        whyChoose: [
            'Delivers 2x-3x current of standard lab supplies',
            'Robust transformer design for sustained loads',
            'Cost-effective high power solution'
        ],
        faqs: [
            {
                question: 'Is the 10A output continuous?',
                answer: 'Yes, our 10A models are rated for continuous 10 Amp output at full voltage, supported by active cooling systems.'
            }
        ]
    }
];

// Reverted to neutral gray icons for professional consistency
export const getIconForVoltage = (voltage: number) => {
    switch (voltage) {
        case 120: return <Battery className="w-6 h-6 text-slate-600" />;
        case 150: return <Activity className="w-6 h-6 text-slate-600" />;
        case 220: return <Server className="w-6 h-6 text-slate-600" />;
        case 500: return <Box className="w-6 h-6 text-slate-600" />;
        case 600: return <Zap className="w-6 h-6 text-slate-600" />;
        case 800: return <Zap className="w-6 h-6 text-slate-600" />;
        default: return <Zap className="w-6 h-6 text-slate-500" />;
    }
};

// Returns a matching color hex only for charts/accents where needed
export const getColorForVoltage = (voltage: number) => {
    switch (voltage) {
        case 120: return '#f59e0b'; // amber-500
        case 150: return '#3b82f6'; // blue-500
        case 220: return '#4f46e5'; // indigo-600
        case 500: return '#ea580c'; // orange-600
        case 600: return '#10b981'; // emerald-500
        case 800: return '#dc2626'; // red-600
        default: return '#64748b'; // slate-500
    }
};
